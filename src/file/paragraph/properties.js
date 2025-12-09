"use strict";
// http://officeopenxml.com/WPparagraphProperties.php
// https://c-rex.net/projects/samples/ooxml/e1/Part4/OOXML_P4_DOCX_suppressLineNumbers_topic_ID0ECJAO.html
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
exports.ParagraphProperties = void 0;
var xml_components_1 = require("@file/xml-components");
var _1 = require(".");
var document_wrapper_1 = require("../document-wrapper");
var shading_1 = require("../shading");
var alignment_1 = require("./formatting/alignment");
var border_1 = require("./formatting/border");
var break_1 = require("./formatting/break");
var indent_1 = require("./formatting/indent");
var spacing_1 = require("./formatting/spacing");
var style_1 = require("./formatting/style");
var tab_stop_1 = require("./formatting/tab-stop");
var unordered_list_1 = require("./formatting/unordered-list");
var word_wrap_1 = require("./formatting/word-wrap");
var frame_properties_1 = require("./frame/frame-properties");
var links_1 = require("./links");
var ParagraphProperties = /** @class */ (function (_super) {
    __extends(ParagraphProperties, _super);
    function ParagraphProperties(options) {
        var _a, _b;
        var _this = _super.call(this, "w:pPr") || this;
        // eslint-disable-next-line functional/prefer-readonly-type
        _this.numberingReferences = [];
        if (!options) {
            return _this;
        }
        if (options.heading) {
            _this.push(new style_1.Style(options.heading));
        }
        if (options.bullet) {
            _this.push(new style_1.Style("ListParagraph"));
        }
        if (options.numbering) {
            if (!options.style && !options.heading) {
                if (!options.numbering.custom) {
                    _this.push(new style_1.Style("ListParagraph"));
                }
            }
        }
        if (options.style) {
            _this.push(new style_1.Style(options.style));
        }
        if (options.keepNext !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:keepNext", options.keepNext));
        }
        if (options.keepLines !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:keepLines", options.keepLines));
        }
        if (options.pageBreakBefore) {
            _this.push(new break_1.PageBreakBefore());
        }
        if (options.frame) {
            _this.push((0, frame_properties_1.createFrameProperties)(options.frame));
        }
        if (options.widowControl !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:widowControl", options.widowControl));
        }
        if (options.bullet) {
            _this.push(new unordered_list_1.NumberProperties(1, options.bullet.level));
        }
        if (options.numbering) {
            _this.numberingReferences.push({
                reference: options.numbering.reference,
                instance: (_a = options.numbering.instance) !== null && _a !== void 0 ? _a : 0,
            });
            _this.push(new unordered_list_1.NumberProperties("".concat(options.numbering.reference, "-").concat((_b = options.numbering.instance) !== null && _b !== void 0 ? _b : 0), options.numbering.level));
        }
        else if (options.numbering === false) {
            _this.push(new unordered_list_1.NumberProperties(0, 0));
        }
        if (options.border) {
            _this.push(new border_1.Border(options.border));
        }
        if (options.thematicBreak) {
            _this.push(new border_1.ThematicBreak());
        }
        if (options.shading) {
            _this.push(new shading_1.Shading(options.shading));
        }
        if (options.wordWrap) {
            _this.push(new word_wrap_1.WordWrap());
        }
        if (options.overflowPunctuation) {
            _this.push(new xml_components_1.OnOffElement("w:overflowPunct", options.overflowPunctuation));
        }
        /**
         * FIX: Multitab support for Libre Writer
         * Ensure there is only one w:tabs tag with multiple w:tab
         */
        var tabDefinitions = __spreadArray(__spreadArray(__spreadArray([], (options.rightTabStop !== undefined ? [{ type: tab_stop_1.TabStopType.RIGHT, position: options.rightTabStop }] : []), true), (options.tabStops ? options.tabStops : []), true), (options.leftTabStop !== undefined ? [{ type: tab_stop_1.TabStopType.LEFT, position: options.leftTabStop }] : []), true);
        if (tabDefinitions.length > 0) {
            _this.push(new tab_stop_1.TabStop(tabDefinitions));
        }
        /**
         *  FIX - END
         */
        if (options.bidirectional !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:bidi", options.bidirectional));
        }
        if (options.spacing) {
            _this.push(new spacing_1.Spacing(options.spacing));
        }
        if (options.indent) {
            _this.push(new indent_1.Indent(options.indent));
        }
        if (options.contextualSpacing !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:contextualSpacing", options.contextualSpacing));
        }
        if (options.alignment) {
            _this.push(new alignment_1.Alignment(options.alignment));
        }
        if (options.outlineLevel !== undefined) {
            _this.push(new links_1.OutlineLevel(options.outlineLevel));
        }
        if (options.suppressLineNumbers !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:suppressLineNumbers", options.suppressLineNumbers));
        }
        if (options.autoSpaceEastAsianText !== undefined) {
            _this.push(new xml_components_1.OnOffElement("w:autoSpaceDN", options.autoSpaceEastAsianText));
        }
        if (options.run) {
            _this.push(new _1.RunProperties(options.run));
        }
        return _this;
    }
    ParagraphProperties.prototype.push = function (item) {
        this.root.push(item);
    };
    ParagraphProperties.prototype.prepForXml = function (context) {
        if (context.viewWrapper instanceof document_wrapper_1.DocumentWrapper) {
            for (var _i = 0, _a = this.numberingReferences; _i < _a.length; _i++) {
                var reference = _a[_i];
                context.file.Numbering.createConcreteNumberingInstance(reference.reference, reference.instance);
            }
        }
        return _super.prototype.prepForXml.call(this, context);
    };
    return ParagraphProperties;
}(xml_components_1.IgnoreIfEmptyXmlComponent));
exports.ParagraphProperties = ParagraphProperties;
