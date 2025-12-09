"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathSuperScriptHide = void 0;
// http://www.datypic.com/sc/ooxml/e-m_subHide-1.html
var xml_components_1 = require("@file/xml-components");
var createMathSuperScriptHide = function () {
    return new xml_components_1.BuilderElement({
        name: "m:supHide",
        attributes: {
            hide: { key: "m:val", value: 1 },
        },
    });
};
exports.createMathSuperScriptHide = createMathSuperScriptHide;
