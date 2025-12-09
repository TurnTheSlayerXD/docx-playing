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
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitRunElement = exports.findRunElementIndexWithToken = void 0;
var util_1 = require("./util");
var findRunElementIndexWithToken = function (paragraphElement, token) {
    var _a, _b, _c, _d;
    for (var i = 0; i < ((_a = paragraphElement.elements) !== null && _a !== void 0 ? _a : []).length; i++) {
        var element = paragraphElement.elements[i];
        if (element.type === "element" && element.name === "w:r") {
            var textElement = ((_b = element.elements) !== null && _b !== void 0 ? _b : []).filter(function (e) { return e.type === "element" && e.name === "w:t"; });
            for (var _i = 0, textElement_1 = textElement; _i < textElement_1.length; _i++) {
                var text = textElement_1[_i];
                if (!((_c = text.elements) === null || _c === void 0 ? void 0 : _c[0])) {
                    continue;
                }
                if ((_d = text.elements[0].text) === null || _d === void 0 ? void 0 : _d.includes(token)) {
                    return i;
                }
            }
        }
    }
    throw new Error("Token not found");
};
exports.findRunElementIndexWithToken = findRunElementIndexWithToken;
var splitRunElement = function (runElement, token) {
    var _a, _b;
    var splitIndex = 0;
    var splitElements = (_b = (_a = runElement.elements) === null || _a === void 0 ? void 0 : _a.map(function (e, i) {
        var _a, _b, _c;
        if (e.type === "element" && e.name === "w:t") {
            var text = (_c = (_b = (_a = e.elements) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.text) !== null && _c !== void 0 ? _c : "";
            var splitText = text.split(token);
            var newElements = splitText.map(function (t) { return (__assign(__assign(__assign({}, e), (0, util_1.patchSpaceAttribute)(e)), { elements: (0, util_1.createTextElementContents)(t) })); });
            splitIndex = i;
            return newElements;
        }
        else {
            return e;
        }
    }).flat()) !== null && _b !== void 0 ? _b : [];
    var leftRunElement = __assign(__assign({}, JSON.parse(JSON.stringify(runElement))), { elements: splitElements.slice(0, splitIndex + 1) });
    var rightRunElement = __assign(__assign({}, JSON.parse(JSON.stringify(runElement))), { elements: splitElements.slice(splitIndex + 1) });
    return { left: leftRunElement, right: rightRunElement };
};
exports.splitRunElement = splitRunElement;
