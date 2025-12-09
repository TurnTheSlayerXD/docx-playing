"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathSuperScriptElement = void 0;
// http://www.datypic.com/sc/ooxml/e-m_sup-3.html
var xml_components_1 = require("@file/xml-components");
var createMathSuperScriptElement = function (_a) {
    var children = _a.children;
    return new xml_components_1.BuilderElement({
        name: "m:sup",
        children: children,
    });
};
exports.createMathSuperScriptElement = createMathSuperScriptElement;
