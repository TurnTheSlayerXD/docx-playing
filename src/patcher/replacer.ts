import xml from "xml";
import { Element } from "xml-js";

import { Formatter } from "@export/formatter";
import { IContext, XmlComponent } from "@file/xml-components";

import { IPatch, PatchType } from "./from-docx";
import { findRunElementIndexWithToken, splitRunElement } from "./paragraph-split-inject";
import { replaceTokenInParagraphElement } from "./paragraph-token-replacer";
import { findLocationOfRegex, findLocationOfText } from "./traverser";
import { toJson } from "./util";
import { IRenderedParagraphNode } from "./run-renderer";
import { writeFileSync } from "fs";

const formatter = new Formatter();

const SPLIT_TOKEN = "ɵ";

type IReplacerResult = {
    readonly element: Element;
    readonly didFindOccurrence: boolean;
};

let iter = 0;

function baseProcessParagraph(p: IPatch,
    renderedParagraph: IRenderedParagraphNode,
    originalText: string,
    context: IContext,
    json: Element,
    keepOriginalStyles?: boolean,
) {
    const textJson = p.children.map((c) => toJson(xml(formatter.format(c as XmlComponent, context)))).map((c) => c.elements![0]);

    switch (p.type) {
        case PatchType.DOCUMENT: {
            const parentElement = goToParentElementFromPath(json, renderedParagraph.pathToParagraph);
            const elementIndex = getLastElementIndexFromPath(renderedParagraph.pathToParagraph);
            // eslint-disable-next-line functional/immutable-data
            parentElement.elements!.splice(elementIndex, 1, ...textJson);
            break;
        }
        case PatchType.PARAGRAPH:
        default: {
            const paragraphElement = goToElementFromPath(json, renderedParagraph.pathToParagraph);
            replaceTokenInParagraphElement({
                paragraphElement,
                renderedParagraph,
                originalText: originalText,
                replacementText: SPLIT_TOKEN,
            });

            const index = findRunElementIndexWithToken(paragraphElement, SPLIT_TOKEN);

            const runElementToBeReplaced = paragraphElement.elements![index];
            const { left, right } = splitRunElement(runElementToBeReplaced, SPLIT_TOKEN);

            let newRunElements = textJson;
            let patchedRightElement = right;

            if (keepOriginalStyles) {
                const runElementNonTextualElements = runElementToBeReplaced.elements!.filter(
                    (e) => e.type === "element" && e.name === "w:rPr",
                );

                newRunElements = textJson.map((e) => ({
                    ...e,
                    elements: [...runElementNonTextualElements, ...(e.elements ?? [])],
                }));

                patchedRightElement = {
                    ...right,
                    elements: [...runElementNonTextualElements, ...right.elements!],
                };
            }

            // eslint-disable-next-line functional/immutable-data
            paragraphElement.elements!.splice(index, 1, left, ...newRunElements, patchedRightElement);
            break;
        }
    }
}


let globalPatchIter = 0;
export const replacer = ({
    json,
    patch,
    patchText,
    context,
    keepOriginalStyles = true,
}: {
    readonly json: Element;
    readonly patch: IPatch | IPatch[];
    readonly patchText: string | RegExp;
    readonly context: IContext;
    readonly keepOriginalStyles?: boolean;
}): IReplacerResult => {


    let processParagraph;
    if (patch instanceof Array) {
        processParagraph = (renderedParagraph: IRenderedParagraphNode, originalText: string) => {
            let p = patch[globalPatchIter++ % patch.length] as any;
            baseProcessParagraph(p, renderedParagraph, originalText, context, json, keepOriginalStyles);
        };
    }
    else {
        processParagraph = (renderedParagraph: IRenderedParagraphNode, originalText: string) => {
            baseProcessParagraph(patch, renderedParagraph, originalText, context, json, keepOriginalStyles);
        };
    }

    let renderedParagraphs;
    if (typeof patchText === 'string') {
        renderedParagraphs = findLocationOfText(json, patchText);
        if (renderedParagraphs.length === 0) {
            return { element: json, didFindOccurrence: false };
        }

        for (const paragraph of renderedParagraphs) {
            processParagraph(paragraph, patchText);
        }
    }
    else {
        renderedParagraphs = findLocationOfRegex(json, patchText);

        if (renderedParagraphs.length === 0) {
            return { element: json, didFindOccurrence: false };
        }

        for (const paragraph of renderedParagraphs) {
            const matches = [...paragraph.text.matchAll(patchText)].map(t => t[0]);
            // console.log('paragraph before');
            // console.log({ text: paragraph.runs, matches });
            if (matches.length > 0) {
                processParagraph(paragraph, matches[0]);
            }
            // console.log('paragraph after');
            // console.log({ text: paragraph.runs, matches });
        }
    }



    return { element: json, didFindOccurrence: true };
};

const goToElementFromPath = (json: Element, path: readonly number[]): Element => {
    let element = json;

    // We start from 1 because the first element is the root element
    // Which we do not want to double count
    for (let i = 1; i < path.length; i++) {
        const index = path[i];
        const nextElements = element.elements!;

        element = nextElements[index];
    }

    return element;
};

const goToParentElementFromPath = (json: Element, path: readonly number[]): Element =>
    goToElementFromPath(json, path.slice(0, path.length - 1));

const getLastElementIndexFromPath = (path: readonly number[]): number => path[path.length - 1];
