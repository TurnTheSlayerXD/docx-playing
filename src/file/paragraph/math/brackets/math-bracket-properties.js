"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathBracketProperties = void 0;
// http://www.datypic.com/sc/ooxml/e-m_dPr-1.html
var xml_components_1 = require("@file/xml-components");
var math_beginning_character_1 = require("./math-beginning-character");
var math_ending_char_1 = require("./math-ending-char");
var createMathBracketProperties = function (_a) {
    var characters = _a.characters;
    return new xml_components_1.BuilderElement({
        name: "m:dPr",
        children: !!characters
            ? [
                (0, math_beginning_character_1.createMathBeginningCharacter)({ character: characters.beginningCharacter }),
                (0, math_ending_char_1.createMathEndingCharacter)({ character: characters.endingCharacter }),
            ]
            : [],
    });
};
exports.createMathBracketProperties = createMathBracketProperties;
