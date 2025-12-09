"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathEndingCharacter = void 0;
// http://www.datypic.com/sc/ooxml/e-m_endChr-1.html
var xml_components_1 = require("@file/xml-components");
var createMathEndingCharacter = function (_a) {
    var character = _a.character;
    return new xml_components_1.BuilderElement({
        name: "m:endChr",
        attributes: {
            character: { key: "m:val", value: character },
        },
    });
};
exports.createMathEndingCharacter = createMathEndingCharacter;
