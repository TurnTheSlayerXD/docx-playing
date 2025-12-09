"use strict";
// https://www.ecma-international.org/wp-content/uploads/ECMA-376-1_5th_edition_december_2016.zip page 297, section 17.3.2.21
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
exports.RunPropertiesChange = exports.RunProperties = exports.HighlightColor = exports.TextEffect = void 0;
var border_1 = require("@file/border");
var shading_1 = require("@file/shading");
var track_revision_1 = require("@file/track-revision/track-revision");
var xml_components_1 = require("@file/xml-components");
var emphasis_mark_1 = require("./emphasis-mark");
var formatting_1 = require("./formatting");
var language_1 = require("./language");
var run_fonts_1 = require("./run-fonts");
var script_1 = require("./script");
var underline_1 = require("./underline");
exports.TextEffect = {
    BLINK_BACKGROUND: "blinkBackground",
    LIGHTS: "lights",
    ANTS_BLACK: "antsBlack",
    ANTS_RED: "antsRed",
    SHIMMER: "shimmer",
    SPARKLE: "sparkle",
    NONE: "none",
};
/*
 * http://officeopenxml.com/WPtextShading.php
 *
 * Limit the list of supported highlight colors
 *
 * */
exports.HighlightColor = {
    BLACK: "black",
    BLUE: "blue",
    CYAN: "cyan",
    DARK_BLUE: "darkBlue",
    DARK_CYAN: "darkCyan",
    DARK_GRAY: "darkGray",
    DARK_GREEN: "darkGreen",
    DARK_MAGENTA: "darkMagenta",
    DARK_RED: "darkRed",
    DARK_YELLOW: "darkYellow",
    GREEN: "green",
    LIGHT_GRAY: "lightGray",
    MAGENTA: "magenta",
    NONE: "none",
    RED: "red",
    WHITE: "white",
    YELLOW: "yellow",
};
// <xsd:group name="EG_RPrBase">
//     <xsd:choice>
//     <xsd:element name="rStyle" type="CT_String"/>
//     <xsd:element name="rFonts" type="CT_Fonts"/>
//     <xsd:element name="b" type="CT_OnOff"/>
//     <xsd:element name="bCs" type="CT_OnOff"/>
//     <xsd:element name="i" type="CT_OnOff"/>
//     <xsd:element name="iCs" type="CT_OnOff"/>
//     <xsd:element name="caps" type="CT_OnOff"/>
//     <xsd:element name="smallCaps" type="CT_OnOff"/>
//     <xsd:element name="strike" type="CT_OnOff"/>
//     <xsd:element name="dstrike" type="CT_OnOff"/>
//     <xsd:element name="outline" type="CT_OnOff"/>
//     <xsd:element name="shadow" type="CT_OnOff"/>
//     <xsd:element name="emboss" type="CT_OnOff"/>
//     <xsd:element name="imprint" type="CT_OnOff"/>
//     <xsd:element name="noProof" type="CT_OnOff"/>
//     <xsd:element name="snapToGrid" type="CT_OnOff"/>
//     <xsd:element name="vanish" type="CT_OnOff"/>
//     <xsd:element name="webHidden" type="CT_OnOff"/>
//     <xsd:element name="color" type="CT_Color"/>
//     <xsd:element name="spacing" type="CT_SignedTwipsMeasure"/>
//     <xsd:element name="w" type="CT_TextScale"/>
//     <xsd:element name="kern" type="CT_HpsMeasure"/>
//     <xsd:element name="position" type="CT_SignedHpsMeasure"/>
//     <xsd:element name="sz" type="CT_HpsMeasure"/>
//     <xsd:element name="szCs" type="CT_HpsMeasure"/>
//     <xsd:element name="highlight" type="CT_Highlight"/>
//     <xsd:element name="u" type="CT_Underline"/>
//     <xsd:element name="effect" type="CT_TextEffect"/>
//     <xsd:element name="bdr" type="CT_Border"/>
//     <xsd:element name="shd" type="CT_Shd"/>
//     <xsd:element name="fitText" type="CT_FitText"/>
//     <xsd:element name="vertAlign" type="CT_VerticalAlignRun"/>
//     <xsd:element name="rtl" type="CT_OnOff"/>
//     <xsd:element name="cs" type="CT_OnOff"/>
//     <xsd:element name="em" type="CT_Em"/>
//     <xsd:element name="lang" type="CT_Language"/>
//     <xsd:element name="eastAsianLayout" type="CT_EastAsianLayout"/>
//     <xsd:element name="specVanish" type="CT_OnOff"/>
//     <xsd:element name="oMath" type="CT_OnOff"/>
//     </xsd:choice>
// </xsd:group>
var RunProperties = /** @class */ (function (_super) {
    __extends(RunProperties, _super);
    function RunProperties(options) {
        var _a, _b;
        var _this = _super.call(this, "w:rPr") || this;
        if (!options) {
            return _this;
        }
        if (options.style) {
            _this.push(new xml_components_1.StringValueElement("w:rStyle", options.style));
        }
        if (options.font) {
            if (typeof options.font === "string") {
                _this.push(new run_fonts_1.RunFonts(options.font));
            }
            else if ("name" in options.font) {
                _this.push(new run_fonts_1.RunFonts(options.font.name, options.font.hint));
            }
            else {
                _this.push(new run_fonts_1.RunFonts(options.font));
            }
        }
        if (options.bold !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:b", options.bold));
        }
        if ((options.boldComplexScript === undefined && options.bold !== undefined) || options.boldComplexScript) {
            _this.push(new xml_components_1.OnOffElement("w:bCs", (_a = options.boldComplexScript) !== null && _a !== void 0 ? _a : options.bold));
        }
        if (options.italics !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:i", options.italics));
        }
        if ((options.italicsComplexScript === undefined && options.italics !== undefined) || options.italicsComplexScript) {
            _this.push(new xml_components_1.OnOffElement("w:iCs", (_b = options.italicsComplexScript) !== null && _b !== void 0 ? _b : options.italics));
        }
        // These two are mutually exclusive
        if (options.smallCaps !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:smallCaps", options.smallCaps));
        }
        else if (options.allCaps !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:caps", options.allCaps));
        }
        if (options.strike !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:strike", options.strike));
        }
        if (options.doubleStrike !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:dstrike", options.doubleStrike));
        }
        if (options.emboss !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:emboss", options.emboss));
        }
        if (options.imprint !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:imprint", options.imprint));
        }
        if (options.noProof !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:noProof", options.noProof));
        }
        if (options.snapToGrid !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:snapToGrid", options.snapToGrid));
        }
        if (options.vanish) {
            // https://c-rex.net/projects/samples/ooxml/e1/Part4/OOXML_P4_DOCX_vanish_topic_ID0E6W3O.html
            // http://www.datypic.com/sc/ooxml/e-w_vanish-1.html
            _this.push(new xml_components_1.OnOffElement("w:vanish", options.vanish));
        }
        if (options.color) {
            _this.push(new formatting_1.Color(options.color));
        }
        if (options.characterSpacing) {
            _this.push(new formatting_1.CharacterSpacing(options.characterSpacing));
        }
        if (options.scale !== undefined) {
            _this.push(new xml_components_1.NumberValueElement("w:w", options.scale));
        }
        if (options.kern) {
            _this.push(new xml_components_1.HpsMeasureElement("w:kern", options.kern));
        }
        if (options.position) {
            _this.push(new xml_components_1.StringValueElement("w:position", options.position));
        }
        if (options.size !== undefined) {
            _this.push(new xml_components_1.HpsMeasureElement("w:sz", options.size));
        }
        var szCs = options.sizeComplexScript === undefined || options.sizeComplexScript === true ? options.size : options.sizeComplexScript;
        if (szCs) {
            _this.push(new xml_components_1.HpsMeasureElement("w:szCs", szCs));
        }
        if (options.highlight) {
            _this.push(new formatting_1.Highlight(options.highlight));
        }
        var highlightCs = options.highlightComplexScript === undefined || options.highlightComplexScript === true
            ? options.highlight
            : options.highlightComplexScript;
        if (highlightCs) {
            _this.push(new formatting_1.HighlightComplexScript(highlightCs));
        }
        if (options.underline) {
            _this.push(new underline_1.Underline(options.underline.type, options.underline.color));
        }
        if (options.effect) {
            _this.push(new xml_components_1.StringValueElement("w:effect", options.effect));
        }
        if (options.border) {
            _this.push(new border_1.BorderElement("w:bdr", options.border));
        }
        if (options.shading) {
            _this.push(new shading_1.Shading(options.shading));
        }
        if (options.subScript) {
            _this.push(new script_1.SubScript());
        }
        if (options.superScript) {
            _this.push(new script_1.SuperScript());
        }
        if (options.rightToLeft !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:rtl", options.rightToLeft));
        }
        if (options.emphasisMark) {
            _this.push(new emphasis_mark_1.EmphasisMark(options.emphasisMark.type));
        }
        if (options.language) {
            _this.push((0, language_1.createLanguageComponent)(options.language));
        }
        if (options.specVanish) {
            // https://c-rex.net/projects/samples/ooxml/e1/Part4/OOXML_P4_DOCX_specVanish_topic_ID0EIE1O.html
            _this.push(new xml_components_1.OnOffElement("w:specVanish", options.vanish));
        }
        if (options.math) {
            _this.push(new xml_components_1.OnOffElement("w:oMath", options.math));
        }
        if (options.revision) {
            _this.push(new RunPropertiesChange(options.revision));
        }
        return _this;
    }
    RunProperties.prototype.push = function (item) {
        this.root.push(item);
    };
    return RunProperties;
}(xml_components_1.IgnoreIfEmptyXmlComponent));
exports.RunProperties = RunProperties;
var RunPropertiesChange = /** @class */ (function (_super) {
    __extends(RunPropertiesChange, _super);
    function RunPropertiesChange(options) {
        var _this = _super.call(this, "w:rPrChange") || this;
        _this.root.push(new track_revision_1.ChangeAttributes({
            id: options.id,
            author: options.author,
            date: options.date,
        }));
        _this.addChildElement(new RunProperties(options));
        return _this;
    }
    return RunPropertiesChange;
}(xml_components_1.XmlComponent));
exports.RunPropertiesChange = RunPropertiesChange;
