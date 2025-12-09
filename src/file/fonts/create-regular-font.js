"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRegularFont = void 0;
var font_1 = require("./font");
var createRegularFont = function (_a) {
    var name = _a.name, index = _a.index, fontKey = _a.fontKey, characterSet = _a.characterSet;
    return (0, font_1.createFont)({
        name: name,
        sig: {
            usb0: "E0002AFF",
            usb1: "C000247B",
            usb2: "00000009",
            usb3: "00000000",
            csb0: "000001FF",
            csb1: "00000000",
        },
        charset: characterSet,
        family: "auto",
        pitch: "variable",
        embedRegular: {
            fontKey: fontKey,
            id: "rId".concat(index),
        },
    });
};
exports.createRegularFont = createRegularFont;
