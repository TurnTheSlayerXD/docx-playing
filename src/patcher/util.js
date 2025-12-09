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
exports.getFirstLevelElements = exports.patchSpaceAttribute = exports.createTextElementContents = exports.toJson = void 0;
var xml_1 = require("xml");
var xml_js_1 = require("xml-js");
var formatter_1 = require("@export/formatter");
var text_1 = require("@file/paragraph/run/run-components/text");
var formatter = new formatter_1.Formatter();
var toJson = function (xmlData) {
    var xmlObj = (0, xml_js_1.xml2js)(xmlData, { compact: false, captureSpacesBetweenElements: true });
    return xmlObj;
};
exports.toJson = toJson;
// eslint-disable-next-line functional/prefer-readonly-type
var createTextElementContents = function (text) {
    var _a;
    var textJson = (0, exports.toJson)((0, xml_1.default)(formatter.format(new text_1.Text({ text: text }))));
    return (_a = textJson.elements[0].elements) !== null && _a !== void 0 ? _a : [];
};
exports.createTextElementContents = createTextElementContents;
var patchSpaceAttribute = function (element) { return (__assign(__assign({}, element), { attributes: {
        "xml:space": "preserve",
    } })); };
exports.patchSpaceAttribute = patchSpaceAttribute;
// eslint-disable-next-line functional/prefer-readonly-type
var getFirstLevelElements = function (relationships, id) { var _a, _b; return (_b = (_a = relationships.elements) === null || _a === void 0 ? void 0 : _a.filter(function (e) { return e.name === id; })[0].elements) !== null && _b !== void 0 ? _b : []; };
exports.getFirstLevelElements = getFirstLevelElements;
