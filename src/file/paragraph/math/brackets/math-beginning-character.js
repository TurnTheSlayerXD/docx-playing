"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathBeginningCharacter = void 0;
// http://www.datypic.com/sc/ooxml/e-m_begChr-1.html
var xml_components_1 = require("@file/xml-components");
var createMathBeginningCharacter = function (_a) {
    var character = _a.character;
    return new xml_components_1.BuilderElement({
        name: "m:begChr",
        attributes: {
            character: { key: "m:val", value: character },
        },
    });
};
exports.createMathBeginningCharacter = createMathBeginningCharacter;
