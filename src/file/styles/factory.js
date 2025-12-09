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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultStylesFactory = void 0;
var defaults_1 = require("./defaults");
var style_1 = require("./style");
var document_attributes_1 = require("../document/document-attributes");
var DefaultStylesFactory = /** @class */ (function () {
    function DefaultStylesFactory() {
    }
    DefaultStylesFactory.prototype.newInstance = function (options) {
        var _a;
        if (options === void 0) { options = {}; }
        var documentAttributes = new document_attributes_1.DocumentAttributes(["mc", "r", "w", "w14", "w15"], "w14 w15");
        return {
            initialStyles: documentAttributes,
            importedStyles: [
                new defaults_1.DocumentDefaults((_a = options.document) !== null && _a !== void 0 ? _a : {}),
                new style_1.TitleStyle(__assign({ run: {
                        size: 56,
                    } }, options.title)),
                new style_1.Heading1Style(__assign({ run: {
                        color: "2E74B5",
                        size: 32,
                    } }, options.heading1)),
                new style_1.Heading2Style(__assign({ run: {
                        color: "2E74B5",
                        size: 26,
                    } }, options.heading2)),
                new style_1.Heading3Style(__assign({ run: {
                        color: "1F4D78",
                        size: 24,
                    } }, options.heading3)),
                new style_1.Heading4Style(__assign({ run: {
                        color: "2E74B5",
                        italics: true,
                    } }, options.heading4)),
                new style_1.Heading5Style(__assign({ run: {
                        color: "2E74B5",
                    } }, options.heading5)),
                new style_1.Heading6Style(__assign({ run: {
                        color: "1F4D78",
                    } }, options.heading6)),
                new style_1.StrongStyle(__assign({ run: {
                        bold: true,
                    } }, options.strong)),
                new style_1.ListParagraph(options.listParagraph || {}),
                new style_1.HyperlinkStyle(options.hyperlink || {}),
                new style_1.FootnoteReferenceStyle(options.footnoteReference || {}),
                new style_1.FootnoteText(options.footnoteText || {}),
                new style_1.FootnoteTextChar(options.footnoteTextChar || {}),
            ],
        };
    };
    return DefaultStylesFactory;
}());
exports.DefaultStylesFactory = DefaultStylesFactory;
