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
exports.findLocationOfText = exports.traverse = void 0;
var run_renderer_1 = require("./run-renderer");
var elementsToWrapper = function (wrapper) {
    var _a, _b;
    return (_b = (_a = wrapper.element.elements) === null || _a === void 0 ? void 0 : _a.map(function (e, i) { return ({
        element: e,
        index: i,
        parent: wrapper,
    }); })) !== null && _b !== void 0 ? _b : [];
};
var traverse = function (node) {
    var renderedParagraphs = [];
    // eslint-disable-next-line functional/prefer-readonly-type
    var queue = __spreadArray([], elementsToWrapper({
        element: node,
        index: 0,
        parent: undefined,
    }), true);
    var currentNode;
    while (queue.length > 0) {
        // eslint-disable-next-line functional/immutable-data
        currentNode = queue.shift(); // This is safe because we check the length of the queue
        if (currentNode.element.name === "w:p") {
            renderedParagraphs = __spreadArray(__spreadArray([], renderedParagraphs, true), [(0, run_renderer_1.renderParagraphNode)(currentNode)], false);
        }
        // eslint-disable-next-line functional/immutable-data
        queue.push.apply(queue, elementsToWrapper(currentNode));
    }
    return renderedParagraphs;
};
exports.traverse = traverse;
var previous = '';
var index = 0;
var fs_1 = require("fs");
var findLocationOfText = function (node, text) {
    var res = (0, exports.traverse)(node).filter(function (p) { return p.text.includes(text); });
    if (text === '<<table_heading_1>>') {
        var json = JSON.stringify(node, null, "\t");
        if (json !== previous && res.length > 0) {
            (0, fs_1.writeFileSync)("./node_".concat(index++, ".json"), json);
            (0, fs_1.writeFileSync)("./render_".concat(index, ".json"), JSON.stringify(res, null, "\t"));
            previous = json;
        }
        console.log('<<table_heading_1>>');
    }
    return res;
};
exports.findLocationOfText = findLocationOfText;
