"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathAccentCharacter = void 0;
// http://www.datypic.com/sc/ooxml/e-m_chr-1.html
var xml_components_1 = require("@file/xml-components");
var createMathAccentCharacter = function (_a) {
    var accent = _a.accent;
    return new xml_components_1.BuilderElement({
        name: "m:chr",
        attributes: {
            accent: { key: "m:val", value: accent },
        },
    });
};
exports.createMathAccentCharacter = createMathAccentCharacter;
