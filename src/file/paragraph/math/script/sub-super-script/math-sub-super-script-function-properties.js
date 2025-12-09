"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathSubSuperScriptProperties = void 0;
// http://www.datypic.com/sc/ooxml/e-m_sSubSupPr-1.html
var xml_components_1 = require("@file/xml-components");
var createMathSubSuperScriptProperties = function () {
    return new xml_components_1.BuilderElement({
        name: "m:sSubSupPr",
    });
};
exports.createMathSubSuperScriptProperties = createMathSubSuperScriptProperties;
