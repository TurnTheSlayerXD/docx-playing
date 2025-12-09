"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathSubScriptProperties = void 0;
// http://www.datypic.com/sc/ooxml/e-m_sSubPr-1.html
var xml_components_1 = require("@file/xml-components");
var createMathSubScriptProperties = function () {
    return new xml_components_1.BuilderElement({
        name: "m:sSubPr",
    });
};
exports.createMathSubScriptProperties = createMathSubScriptProperties;
