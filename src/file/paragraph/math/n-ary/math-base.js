"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathBase = void 0;
// http://www.datypic.com/sc/ooxml/e-m_e-1.html
var xml_components_1 = require("@file/xml-components");
var createMathBase = function (_a) {
    var children = _a.children;
    return new xml_components_1.BuilderElement({
        name: "m:e",
        children: children,
    });
};
exports.createMathBase = createMathBase;
