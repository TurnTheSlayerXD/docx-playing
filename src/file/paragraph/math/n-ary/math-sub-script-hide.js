"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathSubScriptHide = void 0;
// http://www.datypic.com/sc/ooxml/e-m_subHide-1.html
var xml_components_1 = require("@file/xml-components");
var createMathSubScriptHide = function () {
    return new xml_components_1.BuilderElement({
        name: "m:subHide",
        attributes: {
            hide: { key: "m:val", value: 1 },
        },
    });
};
exports.createMathSubScriptHide = createMathSubScriptHide;
