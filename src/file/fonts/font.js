"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFont = exports.CharacterSet = void 0;
var xml_components_1 = require("@file/xml-components");
exports.CharacterSet = {
    ANSI: "00",
    DEFAULT: "01",
    SYMBOL: "02",
    MAC: "4D",
    JIS: "80",
    HANGUL: "81",
    JOHAB: "82",
    GB_2312: "86",
    CHINESEBIG5: "88",
    GREEK: "A1",
    TURKISH: "A2",
    VIETNAMESE: "A3",
    HEBREW: "B1",
    ARABIC: "B2",
    BALTIC: "BA",
    RUSSIAN: "CC",
    THAI: "DE",
    EASTEUROPE: "EE",
    OEM: "FF",
};
var createFontRelationship = function (_a, name) {
    var id = _a.id, fontKey = _a.fontKey, subsetted = _a.subsetted;
    return new xml_components_1.BuilderElement({
        name: name,
        attributes: __assign({ id: { key: "r:id", value: id } }, (fontKey ? { fontKey: { key: "w:fontKey", value: "{".concat(fontKey, "}") } } : {})),
        children: __spreadArray([], (subsetted ? [new xml_components_1.OnOffElement("w:subsetted", subsetted)] : []), true),
    });
};
var createFont = function (_a) {
    var name = _a.name, altName = _a.altName, panose1 = _a.panose1, charset = _a.charset, family = _a.family, notTrueType = _a.notTrueType, pitch = _a.pitch, sig = _a.sig, embedRegular = _a.embedRegular, embedBold = _a.embedBold, embedItalic = _a.embedItalic, embedBoldItalic = _a.embedBoldItalic;
    // http://www.datypic.com/sc/ooxml/e-w_font-1.html
    return new xml_components_1.BuilderElement({
        name: "w:font",
        attributes: {
            name: { key: "w:name", value: name },
        },
        children: __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], (altName ? [(0, xml_components_1.createStringElement)("w:altName", altName)] : []), true), (panose1 ? [(0, xml_components_1.createStringElement)("w:panose1", panose1)] : []), true), (charset ? [(0, xml_components_1.createStringElement)("w:charset", charset)] : []), true), (family ? [(0, xml_components_1.createStringElement)("w:family", family)] : []), true), (notTrueType ? [new xml_components_1.OnOffElement("w:notTrueType", notTrueType)] : []), true), (pitch ? [(0, xml_components_1.createStringElement)("w:pitch", pitch)] : []), true), (sig
            ? [
                new xml_components_1.BuilderElement({
                    name: "w:sig",
                    attributes: {
                        usb0: { key: "w:usb0", value: sig.usb0 },
                        usb1: { key: "w:usb1", value: sig.usb1 },
                        usb2: { key: "w:usb2", value: sig.usb2 },
                        usb3: { key: "w:usb3", value: sig.usb3 },
                        csb0: { key: "w:csb0", value: sig.csb0 },
                        csb1: { key: "w:csb1", value: sig.csb1 },
                    },
                }),
            ]
            : []), true), (embedRegular ? [createFontRelationship(embedRegular, "w:embedRegular")] : []), true), (embedBold ? [createFontRelationship(embedBold, "w:embedBold")] : []), true), (embedItalic ? [createFontRelationship(embedItalic, "w:embedItalic")] : []), true), (embedBoldItalic ? [createFontRelationship(embedBoldItalic, "w:embedBoldItalic")] : []), true),
    });
};
exports.createFont = createFont;
