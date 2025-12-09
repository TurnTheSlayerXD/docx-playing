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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = exports.SettingsAttributes = void 0;
var xml_components_1 = require("@file/xml-components");
var compatibility_1 = require("./compatibility");
var SettingsAttributes = /** @class */ (function (_super) {
    __extends(SettingsAttributes, _super);
    function SettingsAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            wpc: "xmlns:wpc",
            mc: "xmlns:mc",
            o: "xmlns:o",
            r: "xmlns:r",
            m: "xmlns:m",
            v: "xmlns:v",
            wp14: "xmlns:wp14",
            wp: "xmlns:wp",
            w10: "xmlns:w10",
            w: "xmlns:w",
            w14: "xmlns:w14",
            w15: "xmlns:w15",
            wpg: "xmlns:wpg",
            wpi: "xmlns:wpi",
            wne: "xmlns:wne",
            wps: "xmlns:wps",
            Ignorable: "mc:Ignorable",
        };
        return _this;
    }
    return SettingsAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.SettingsAttributes = SettingsAttributes;
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var _this = _super.call(this, "w:settings") || this;
        _this.root.push(new SettingsAttributes({
            wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
            mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
            o: "urn:schemas-microsoft-com:office:office",
            r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
            m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
            v: "urn:schemas-microsoft-com:vml",
            wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
            wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
            w10: "urn:schemas-microsoft-com:office:word",
            w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
            w14: "http://schemas.microsoft.com/office/word/2010/wordml",
            w15: "http://schemas.microsoft.com/office/word/2012/wordml",
            wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
            wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
            wne: "http://schemas.microsoft.com/office/word/2006/wordml",
            wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
            Ignorable: "w14 w15 wp14",
        }));
        // http://officeopenxml.com/WPdocument.php
        // https://c-rex.net/projects/samples/ooxml/e1/Part4/OOXML_P4_DOCX_displayBackgroundSha_topic_ID0ET4SX.html
        _this.root.push(new xml_components_1.OnOffElement("w:displayBackgroundShape", true));
        // https://c-rex.net/projects/samples/ooxml/e1/Part4/OOXML_P4_DOCX_trackRevisions_topic_ID0EKXKY.html
        if (options.trackRevisions !== undefined) {
            _this.root.push(new xml_components_1.OnOffElement("w:trackRevisions", options.trackRevisions));
        }
        // http://officeopenxml.com/WPSectionFooterReference.php
        // https://c-rex.net/projects/samples/ooxml/e1/Part4/OOXML_P4_DOCX_evenAndOddHeaders_topic_ID0ET1WU.html
        if (options.evenAndOddHeaders !== undefined) {
            _this.root.push(new xml_components_1.OnOffElement("w:evenAndOddHeaders", options.evenAndOddHeaders));
        }
        if (options.updateFields !== undefined) {
            _this.root.push(new xml_components_1.OnOffElement("w:updateFields", options.updateFields));
        }
        // https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_defaultTabStop_topic_ID0EIXSX.html
        if (options.defaultTabStop !== undefined) {
            _this.root.push(new xml_components_1.NumberValueElement("w:defaultTabStop", options.defaultTabStop));
        }
        // https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_autoHyphenation_topic_ID0EFUMX.html
        if (((_a = options.hyphenation) === null || _a === void 0 ? void 0 : _a.autoHyphenation) !== undefined) {
            _this.root.push(new xml_components_1.OnOffElement("w:autoHyphenation", options.hyphenation.autoHyphenation));
        }
        // https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_hyphenationZone_topic_ID0ERI3X.html
        if (((_b = options.hyphenation) === null || _b === void 0 ? void 0 : _b.hyphenationZone) !== undefined) {
            _this.root.push(new xml_components_1.NumberValueElement("w:hyphenationZone", options.hyphenation.hyphenationZone));
        }
        // https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_consecutiveHyphenLim_topic_ID0EQ6RX.html
        if (((_c = options.hyphenation) === null || _c === void 0 ? void 0 : _c.consecutiveHyphenLimit) !== undefined) {
            _this.root.push(new xml_components_1.NumberValueElement("w:consecutiveHyphenLimit", options.hyphenation.consecutiveHyphenLimit));
        }
        // https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_doNotHyphenateCaps_topic_ID0EW4XX.html
        if (((_d = options.hyphenation) === null || _d === void 0 ? void 0 : _d.doNotHyphenateCaps) !== undefined) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotHyphenateCaps", options.hyphenation.doNotHyphenateCaps));
        }
        _this.root.push(new compatibility_1.Compatibility(__assign(__assign({}, ((_e = options.compatibility) !== null && _e !== void 0 ? _e : {})), { version: (_h = (_g = (_f = options.compatibility) === null || _f === void 0 ? void 0 : _f.version) !== null && _g !== void 0 ? _g : options.compatibilityModeVersion) !== null && _h !== void 0 ? _h : 15 })));
        return _this;
    }
    return Settings;
}(xml_components_1.XmlComponent));
exports.Settings = Settings;
