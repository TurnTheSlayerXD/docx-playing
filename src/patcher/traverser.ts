import { Element } from "xml-js";

import { IRenderedParagraphNode, renderParagraphNode } from "./run-renderer";
import { writeFileSync } from "fs";

export type ElementWrapper = {
    readonly element: Element;
    readonly index: number;
    readonly parent: ElementWrapper | undefined;
};

const elementsToWrapper = (wrapper: ElementWrapper): readonly ElementWrapper[] =>
    wrapper.element.elements?.map((e, i) => ({
        element: e,
        index: i,
        parent: wrapper,
        name: e.name as string,
    })) ?? [];

export const traverse = (node: Element): readonly IRenderedParagraphNode[] => {
    let renderedParagraphs: readonly IRenderedParagraphNode[] = [];

    // eslint-disable-next-line functional/prefer-readonly-type
    const queue: ElementWrapper[] = [
        ...elementsToWrapper({
            element: node,
            index: 0,
            parent: undefined,
        }),
    ];

    let currentNode: ElementWrapper | undefined;
    while (queue.length > 0) {
        // eslint-disable-next-line functional/immutable-data
        currentNode = queue.shift()!; // This is safe because we check the length of the queue

        if (currentNode.element.name === "w:p") {
            renderedParagraphs = [...renderedParagraphs, renderParagraphNode(currentNode)];
        }
        // eslint-disable-next-line functional/immutable-data
        queue.push(...elementsToWrapper(currentNode));
    }

    return renderedParagraphs;
};

let previous: string = '';
let index = 0;

export const findLocationOfText = (node: Element, text: string): readonly IRenderedParagraphNode[] => {
    const filterCbk = (p: IRenderedParagraphNode) => p.text.includes(text);
    const res = traverse(node).filter(filterCbk);

    const json = JSON.stringify(node, null, "\t");
    if (json !== previous && res.length > 0) {
        ++index;
        previous = json;
    }
    return res;
}

export const findLocationOfRegex = (node: Element, regex: RegExp): readonly IRenderedParagraphNode[] => {
    const filterCbk = (p: IRenderedParagraphNode) => regex.test(p.text);
    const res = traverse(node).filter(filterCbk);

    const json = JSON.stringify(node, null, "\t");
    if (json.includes('Наименование')) {
        writeFileSync('./out.json', json);
    }
    return res;
};
