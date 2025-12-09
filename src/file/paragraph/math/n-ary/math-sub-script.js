"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathSubScriptElement = void 0;
// http://www.datypic.com/sc/ooxml/e-m_sub-3.html
var xml_components_1 = require("@file/xml-components");
var createMathSubScriptElement = function (_a) {
    var children = _a.children;
    return new xml_components_1.BuilderElement({
        name: "m:sub",
        children: children,
    });
};
exports.createMathSubScriptElement = createMathSubScriptElement;
