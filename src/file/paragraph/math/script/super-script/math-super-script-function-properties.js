"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathSuperScriptProperties = void 0;
// http://www.datypic.com/sc/ooxml/e-m_sSupPr-1.html
var xml_components_1 = require("@file/xml-components");
var createMathSuperScriptProperties = function () {
    return new xml_components_1.BuilderElement({
        name: "m:sSupPr",
    });
};
exports.createMathSuperScriptProperties = createMathSuperScriptProperties;
