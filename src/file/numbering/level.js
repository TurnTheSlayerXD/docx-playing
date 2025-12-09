"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelForOverride = exports.Level = exports.LevelBase = exports.LevelSuffix = exports.LevelFormat = void 0;
// http://officeopenxml.com/WPnumbering-numFmt.php
// http://www.datypic.com/sc/ooxml/a-w_val-57.html
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var formatting_1 = require("../paragraph/formatting");
var properties_1 = require("../paragraph/properties");
var properties_2 = require("../paragraph/run/properties");
// TODO: Breaking change - consolidate with number-format
// <xsd:simpleType name="ST_NumberFormat">
//     <xsd:restriction base="xsd:string">
//         <xsd:enumeration value="decimal"/>
//         <xsd:enumeration value="upperRoman"/>
//         <xsd:enumeration value="lowerRoman"/>
//         <xsd:enumeration value="upperLetter"/>
//         <xsd:enumeration value="lowerLetter"/>
//         <xsd:enumeration value="ordinal"/>
//         <xsd:enumeration value="cardinalText"/>
//         <xsd:enumeration value="ordinalText"/>
//         <xsd:enumeration value="hex"/>
//         <xsd:enumeration value="chicago"/>
//         <xsd:enumeration value="ideographDigital"/>
//         <xsd:enumeration value="japaneseCounting"/>
//         <xsd:enumeration value="aiueo"/>
//         <xsd:enumeration value="iroha"/>
//         <xsd:enumeration value="decimalFullWidth"/>
//         <xsd:enumeration value="decimalHalfWidth"/>
//         <xsd:enumeration value="japaneseLegal"/>
//         <xsd:enumeration value="japaneseDigitalTenThousand"/>
//         <xsd:enumeration value="decimalEnclosedCircle"/>
//         <xsd:enumeration value="decimalFullWidth2"/>
//         <xsd:enumeration value="aiueoFullWidth"/>
//         <xsd:enumeration value="irohaFullWidth"/>
//         <xsd:enumeration value="decimalZero"/>
//         <xsd:enumeration value="bullet"/>
//         <xsd:enumeration value="ganada"/>
//         <xsd:enumeration value="chosung"/>
//         <xsd:enumeration value="decimalEnclosedFullstop"/>
//         <xsd:enumeration value="decimalEnclosedParen"/>
//         <xsd:enumeration value="decimalEnclosedCircleChinese"/>
//         <xsd:enumeration value="ideographEnclosedCircle"/>
//         <xsd:enumeration value="ideographTraditional"/>
//         <xsd:enumeration value="ideographZodiac"/>
//         <xsd:enumeration value="ideographZodiacTraditional"/>
//         <xsd:enumeration value="taiwaneseCounting"/>
//         <xsd:enumeration value="ideographLegalTraditional"/>
//         <xsd:enumeration value="taiwaneseCountingThousand"/>
//         <xsd:enumeration value="taiwaneseDigital"/>
//         <xsd:enumeration value="chineseCounting"/>
//         <xsd:enumeration value="chineseLegalSimplified"/>
//         <xsd:enumeration value="chineseCountingThousand"/>
//         <xsd:enumeration value="koreanDigital"/>
//         <xsd:enumeration value="koreanCounting"/>
//         <xsd:enumeration value="koreanLegal"/>
//         <xsd:enumeration value="koreanDigital2"/>
//         <xsd:enumeration value="vietnameseCounting"/>
//         <xsd:enumeration value="russianLower"/>
//         <xsd:enumeration value="russianUpper"/>
//         <xsd:enumeration value="none"/>
//         <xsd:enumeration value="numberInDash"/>
//         <xsd:enumeration value="hebrew1"/>
//         <xsd:enumeration value="hebrew2"/>
//         <xsd:enumeration value="arabicAlpha"/>
//         <xsd:enumeration value="arabicAbjad"/>
//         <xsd:enumeration value="hindiVowels"/>
//         <xsd:enumeration value="hindiConsonants"/>
//         <xsd:enumeration value="hindiNumbers"/>
//         <xsd:enumeration value="hindiCounting"/>
//         <xsd:enumeration value="thaiLetters"/>
//         <xsd:enumeration value="thaiNumbers"/>
//         <xsd:enumeration value="thaiCounting"/>
//         <xsd:enumeration value="bahtText"/>
//         <xsd:enumeration value="dollarText"/>
//         <xsd:enumeration value="custom"/>
//     </xsd:restriction>
// </xsd:simpleType>
/* eslint-disable @typescript-eslint/naming-convention */
exports.LevelFormat = {
    DECIMAL: "decimal",
    UPPER_ROMAN: "upperRoman",
    LOWER_ROMAN: "lowerRoman",
    UPPER_LETTER: "upperLetter",
    LOWER_LETTER: "lowerLetter",
    ORDINAL: "ordinal",
    CARDINAL_TEXT: "cardinalText",
    ORDINAL_TEXT: "ordinalText",
    HEX: "hex",
    CHICAGO: "chicago",
    IDEOGRAPH__DIGITAL: "ideographDigital",
    JAPANESE_COUNTING: "japaneseCounting",
    AIUEO: "aiueo",
    IROHA: "iroha",
    DECIMAL_FULL_WIDTH: "decimalFullWidth",
    DECIMAL_HALF_WIDTH: "decimalHalfWidth",
    JAPANESE_LEGAL: "japaneseLegal",
    JAPANESE_DIGITAL_TEN_THOUSAND: "japaneseDigitalTenThousand",
    DECIMAL_ENCLOSED_CIRCLE: "decimalEnclosedCircle",
    DECIMAL_FULL_WIDTH2: "decimalFullWidth2",
    AIUEO_FULL_WIDTH: "aiueoFullWidth",
    IROHA_FULL_WIDTH: "irohaFullWidth",
    DECIMAL_ZERO: "decimalZero",
    BULLET: "bullet",
    GANADA: "ganada",
    CHOSUNG: "chosung",
    DECIMAL_ENCLOSED_FULLSTOP: "decimalEnclosedFullstop",
    DECIMAL_ENCLOSED_PARENTHESES: "decimalEnclosedParen",
    DECIMAL_ENCLOSED_CIRCLE_CHINESE: "decimalEnclosedCircleChinese",
    IDEOGRAPH_ENCLOSED_CIRCLE: "ideographEnclosedCircle",
    IDEOGRAPH_TRADITIONAL: "ideographTraditional",
    IDEOGRAPH_ZODIAC: "ideographZodiac",
    IDEOGRAPH_ZODIAC_TRADITIONAL: "ideographZodiacTraditional",
    TAIWANESE_COUNTING: "taiwaneseCounting",
    IDEOGRAPH_LEGAL_TRADITIONAL: "ideographLegalTraditional",
    TAIWANESE_COUNTING_THOUSAND: "taiwaneseCountingThousand",
    TAIWANESE_DIGITAL: "taiwaneseDigital",
    CHINESE_COUNTING: "chineseCounting",
    CHINESE_LEGAL_SIMPLIFIED: "chineseLegalSimplified",
    CHINESE_COUNTING_THOUSAND: "chineseCountingThousand",
    KOREAN_DIGITAL: "koreanDigital",
    KOREAN_COUNTING: "koreanCounting",
    KOREAN_LEGAL: "koreanLegal",
    KOREAN_DIGITAL2: "koreanDigital2",
    VIETNAMESE_COUNTING: "vietnameseCounting",
    RUSSIAN_LOWER: "russianLower",
    RUSSIAN_UPPER: "russianUpper",
    NONE: "none",
    NUMBER_IN_DASH: "numberInDash",
    HEBREW1: "hebrew1",
    HEBREW2: "hebrew2",
    ARABIC_ALPHA: "arabicAlpha",
    ARABIC_ABJAD: "arabicAbjad",
    HINDI_VOWELS: "hindiVowels",
    HINDI_CONSONANTS: "hindiConsonants",
    HINDI_NUMBERS: "hindiNumbers",
    HINDI_COUNTING: "hindiCounting",
    THAI_LETTERS: "thaiLetters",
    THAI_NUMBERS: "thaiNumbers",
    THAI_COUNTING: "thaiCounting",
    BAHT_TEXT: "bahtText",
    DOLLAR_TEXT: "dollarText",
    CUSTOM: "custom",
};
/* eslint-enable */
var LevelAttributes = /** @class */ (function (_super) {
    __extends(LevelAttributes, _super);
    function LevelAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            ilvl: "w:ilvl",
            tentative: "w15:tentative",
        };
        return _this;
    }
    return LevelAttributes;
}(xml_components_1.XmlAttributeComponent));
// <xsd:complexType name="CT_NumFmt">
//     <xsd:attribute name="val" type="ST_NumberFormat" use="required"/>
//     <xsd:attribute name="format" type="s:ST_String" use="optional"/>
// </xsd:complexType>
var NumberFormat = /** @class */ (function (_super) {
    __extends(NumberFormat, _super);
    function NumberFormat(value) {
        var _this = _super.call(this, "w:numFmt") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
        return _this;
    }
    return NumberFormat;
}(xml_components_1.XmlComponent));
// <xsd:complexType name="CT_LevelText">
//     <xsd:attribute name="val" type="s:ST_String" use="optional"/>
//     <xsd:attribute name="null" type="s:ST_OnOff" use="optional"/>
// </xsd:complexType>
var LevelText = /** @class */ (function (_super) {
    __extends(LevelText, _super);
    function LevelText(value) {
        var _this = _super.call(this, "w:lvlText") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
        return _this;
    }
    return LevelText;
}(xml_components_1.XmlComponent));
var LevelJc = /** @class */ (function (_super) {
    __extends(LevelJc, _super);
    function LevelJc(value) {
        var _this = _super.call(this, "w:lvlJc") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
        return _this;
    }
    return LevelJc;
}(xml_components_1.XmlComponent));
exports.LevelSuffix = {
    NOTHING: "nothing",
    SPACE: "space",
    TAB: "tab",
};
// <xsd:complexType name="CT_LevelSuffix">
//     <xsd:attribute name="val" type="ST_LevelSuffix" use="required"/>
// </xsd:complexType>
//     <xsd:simpleType name="ST_LevelSuffix">
//         <xsd:restriction base="xsd:string">
//             <xsd:enumeration value="tab"/>
//             <xsd:enumeration value="space"/>
//             <xsd:enumeration value="nothing"/>
//         </xsd:restriction>
//     </xsd:simpleType>
var Suffix = /** @class */ (function (_super) {
    __extends(Suffix, _super);
    function Suffix(value) {
        var _this = _super.call(this, "w:suff") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
        return _this;
    }
    return Suffix;
}(xml_components_1.XmlComponent));
// http://officeopenxml.com/WPnumbering-isLgl.php
// https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.wordprocessing.islegalnumberingstyle?view=openxml-2.8.1
var IsLegalNumberingStyle = /** @class */ (function (_super) {
    __extends(IsLegalNumberingStyle, _super);
    function IsLegalNumberingStyle() {
        return _super.call(this, "w:isLgl") || this;
    }
    return IsLegalNumberingStyle;
}(xml_components_1.XmlComponent));
// <xsd:complexType name="CT_Lvl">
//     <xsd:sequence>
//         <xsd:element name="start" type="CT_DecimalNumber" minOccurs="0"/>
//         <xsd:element name="numFmt" type="CT_NumFmt" minOccurs="0"/>
//         <xsd:element name="lvlRestart" type="CT_DecimalNumber" minOccurs="0"/>
//         <xsd:element name="pStyle" type="CT_String" minOccurs="0"/>
//         <xsd:element name="isLgl" type="CT_OnOff" minOccurs="0"/>
//         <xsd:element name="suff" type="CT_LevelSuffix" minOccurs="0"/>
//         <xsd:element name="lvlText" type="CT_LevelText" minOccurs="0"/>
//         <xsd:element name="lvlPicBulletId" type="CT_DecimalNumber" minOccurs="0"/>
//         <xsd:element name="legacy" type="CT_LvlLegacy" minOccurs="0"/>
//         <xsd:element name="lvlJc" type="CT_Jc" minOccurs="0"/>
//         <xsd:element name="pPr" type="CT_PPrGeneral" minOccurs="0"/>
//         <xsd:element name="rPr" type="CT_RPr" minOccurs="0"/>
//     </xsd:sequence>
//     <xsd:attribute name="ilvl" type="ST_DecimalNumber" use="required"/>
//     <xsd:attribute name="tplc" type="ST_LongHexNumber" use="optional"/>
//     <xsd:attribute name="tentative" type="s:ST_OnOff" use="optional"/>
// </xsd:complexType>
var LevelBase = /** @class */ (function (_super) {
    __extends(LevelBase, _super);
    function LevelBase(_a) {
        var level = _a.level, format = _a.format, text = _a.text, _b = _a.alignment, alignment = _b === void 0 ? formatting_1.AlignmentType.START : _b, _c = _a.start, start = _c === void 0 ? 1 : _c, style = _a.style, suffix = _a.suffix, isLegalNumberingStyle = _a.isLegalNumberingStyle;
        var _this = _super.call(this, "w:lvl") || this;
        _this.root.push(new xml_components_1.NumberValueElement("w:start", (0, values_1.decimalNumber)(start)));
        if (format) {
            _this.root.push(new NumberFormat(format));
        }
        if (suffix) {
            _this.root.push(new Suffix(suffix));
        }
        if (isLegalNumberingStyle) {
            _this.root.push(new IsLegalNumberingStyle());
        }
        if (text) {
            _this.root.push(new LevelText(text));
        }
        _this.root.push(new LevelJc(alignment));
        _this.paragraphProperties = new properties_1.ParagraphProperties(style && style.paragraph);
        _this.runProperties = new properties_2.RunProperties(style && style.run);
        _this.root.push(_this.paragraphProperties);
        _this.root.push(_this.runProperties);
        if (level > 9) {
            throw new Error("Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7");
        }
        _this.root.push(new LevelAttributes({
            ilvl: (0, values_1.decimalNumber)(level),
            tentative: 1,
        }));
        return _this;
    }
    return LevelBase;
}(xml_components_1.XmlComponent));
exports.LevelBase = LevelBase;
var Level = /** @class */ (function (_super) {
    __extends(Level, _super);
    function Level() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Level;
}(LevelBase));
exports.Level = Level;
var LevelForOverride = /** @class */ (function (_super) {
    __extends(LevelForOverride, _super);
    function LevelForOverride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LevelForOverride;
}(LevelBase));
exports.LevelForOverride = LevelForOverride;
