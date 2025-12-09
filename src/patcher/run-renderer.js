"use strict";
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
exports.renderParagraphNode = void 0;
var renderParagraphNode = function (node) {
    if (node.element.name !== "w:p") {
        throw new Error("Invalid node type: ".concat(node.element.name));
    }
    if (!node.element.elements) {
        return {
            text: "",
            runs: [],
            index: -1,
            pathToParagraph: [],
        };
    }
    var currentRunStringLength = 0;
    var runs = node.element.elements
        .map(function (element, i) { return ({ element: element, i: i }); })
        .filter(function (_a) {
        var element = _a.element;
        return element.name === "w:r";
    })
        .map(function (_a) {
        var element = _a.element, i = _a.i;
        var renderedRunNode = renderRunNode(element, i, currentRunStringLength);
        currentRunStringLength += renderedRunNode.text.length;
        return renderedRunNode;
    })
        .filter(function (e) { return !!e; });
    var text = runs.reduce(function (acc, curr) { return acc + curr.text; }, "");
    return {
        text: text,
        runs: runs,
        index: node.index,
        pathToParagraph: buildNodePath(node),
    };
};
exports.renderParagraphNode = renderParagraphNode;
var renderRunNode = function (node, index, currentRunStringIndex) {
    if (!node.elements) {
        return {
            text: "",
            parts: [],
            index: -1,
            start: currentRunStringIndex,
            end: currentRunStringIndex,
        };
    }
    var currentTextStringIndex = currentRunStringIndex;
    var parts = node.elements
        .map(function (element, i) {
        var _a, _b;
        return element.name === "w:t" && element.elements && element.elements.length > 0
            ? {
                text: (_b = (_a = element.elements[0].text) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "",
                index: i,
                start: currentTextStringIndex,
                end: (function () {
                    var _a, _b;
                    // Side effect
                    currentTextStringIndex += ((_b = (_a = element.elements[0].text) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "").length - 1;
                    return currentTextStringIndex;
                })(),
            }
            : undefined;
    })
        .filter(function (e) { return !!e; })
        .map(function (e) { return e; });
    var text = parts.reduce(function (acc, curr) { return acc + curr.text; }, "");
    return {
        text: text,
        parts: parts,
        index: index,
        start: currentRunStringIndex,
        end: currentTextStringIndex,
    };
};
var buildNodePath = function (node) {
    return node.parent ? __spreadArray(__spreadArray([], buildNodePath(node.parent), true), [node.index], false) : [node.index];
};
