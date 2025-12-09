"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacer = void 0;
var xml_1 = require("xml");
var formatter_1 = require("@export/formatter");
var from_docx_1 = require("./from-docx");
var paragraph_split_inject_1 = require("./paragraph-split-inject");
var paragraph_token_replacer_1 = require("./paragraph-token-replacer");
var traverser_1 = require("./traverser");
var util_1 = require("./util");
var formatter = new formatter_1.Formatter();
var SPLIT_TOKEN = "ɵ";
var replacer = function (_a) {
    var json = _a.json, patch = _a.patch, patchText = _a.patchText, context = _a.context, _b = _a.keepOriginalStyles, keepOriginalStyles = _b === void 0 ? true : _b;
    var renderedParagraphs = (0, traverser_1.findLocationOfText)(json, patchText);
    if (renderedParagraphs.length === 0) {
        return { element: json, didFindOccurrence: false };
    }
    var _loop_1 = function (renderedParagraph) {
        var _c, _d;
        var textJson = patch.children.map(function (c) { return (0, util_1.toJson)((0, xml_1.default)(formatter.format(c, context))); }).map(function (c) { return c.elements[0]; });
        switch (patch.type) {
            case from_docx_1.PatchType.DOCUMENT: {
                var parentElement = goToParentElementFromPath(json, renderedParagraph.pathToParagraph);
                var elementIndex = getLastElementIndexFromPath(renderedParagraph.pathToParagraph);
                // eslint-disable-next-line functional/immutable-data
                (_c = parentElement.elements).splice.apply(_c, __spreadArray([elementIndex, 1], textJson, false));
                break;
            }
            case from_docx_1.PatchType.PARAGRAPH:
            default: {
                var paragraphElement = goToElementFromPath(json, renderedParagraph.pathToParagraph);
                (0, paragraph_token_replacer_1.replaceTokenInParagraphElement)({
                    paragraphElement: paragraphElement,
                    renderedParagraph: renderedParagraph,
                    originalText: patchText,
                    replacementText: SPLIT_TOKEN,
                });
                var index = (0, paragraph_split_inject_1.findRunElementIndexWithToken)(paragraphElement, SPLIT_TOKEN);
                var runElementToBeReplaced = paragraphElement.elements[index];
                var _e = (0, paragraph_split_inject_1.splitRunElement)(runElementToBeReplaced, SPLIT_TOKEN), left = _e.left, right = _e.right;
                var newRunElements = textJson;
                var patchedRightElement = right;
                if (keepOriginalStyles) {
                    var runElementNonTextualElements_1 = runElementToBeReplaced.elements.filter(function (e) { return e.type === "element" && e.name === "w:rPr"; });
                    newRunElements = textJson.map(function (e) {
                        var _a;
                        return (__assign(__assign({}, e), { elements: __spreadArray(__spreadArray([], runElementNonTextualElements_1, true), ((_a = e.elements) !== null && _a !== void 0 ? _a : []), true) }));
                    });
                    patchedRightElement = __assign(__assign({}, right), { elements: __spreadArray(__spreadArray([], runElementNonTextualElements_1, true), right.elements, true) });
                }
                // eslint-disable-next-line functional/immutable-data
                (_d = paragraphElement.elements).splice.apply(_d, __spreadArray(__spreadArray([index, 1, left], newRunElements, false), [patchedRightElement], false));
                break;
            }
        }
    };
    for (var _i = 0, renderedParagraphs_1 = renderedParagraphs; _i < renderedParagraphs_1.length; _i++) {
        var renderedParagraph = renderedParagraphs_1[_i];
        _loop_1(renderedParagraph);
    }
    return { element: json, didFindOccurrence: true };
};
exports.replacer = replacer;
var goToElementFromPath = function (json, path) {
    var element = json;
    // We start from 1 because the first element is the root element
    // Which we do not want to double count
    for (var i = 1; i < path.length; i++) {
        var index = path[i];
        var nextElements = element.elements;
        element = nextElements[index];
    }
    return element;
};
var goToParentElementFromPath = function (json, path) {
    return goToElementFromPath(json, path.slice(0, path.length - 1));
};
var getLastElementIndexFromPath = function (path) { return path[path.length - 1]; };
