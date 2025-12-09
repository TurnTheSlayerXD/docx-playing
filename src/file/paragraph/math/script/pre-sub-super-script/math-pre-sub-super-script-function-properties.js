"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathPreSubSuperScriptProperties = void 0;
// http://www.datypic.com/sc/ooxml/e-m_sPrePr-1.html
var xml_components_1 = require("@file/xml-components");
var createMathPreSubSuperScriptProperties = function () {
    return new xml_components_1.BuilderElement({
        name: "m:sPrePr",
    });
};
exports.createMathPreSubSuperScriptProperties = createMathPreSubSuperScriptProperties;
