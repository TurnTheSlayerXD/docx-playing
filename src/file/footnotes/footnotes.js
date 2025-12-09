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
exports.FootNotes = void 0;
var xml_components_1 = require("@file/xml-components");
var paragraph_1 = require("../paragraph");
var footnote_1 = require("./footnote/footnote");
var continuation_seperator_run_1 = require("./footnote/run/continuation-seperator-run");
var seperator_run_1 = require("./footnote/run/seperator-run");
var footnotes_attributes_1 = require("./footnotes-attributes");
var FootNotes = /** @class */ (function (_super) {
    __extends(FootNotes, _super);
    function FootNotes() {
        var _this = _super.call(this, "w:footnotes") || this;
        _this.root.push(new footnotes_attributes_1.FootnotesAttributes({
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
        var begin = new footnote_1.Footnote({
            id: -1,
            type: footnote_1.FootnoteType.SEPERATOR,
            children: [
                new paragraph_1.Paragraph({
                    spacing: {
                        after: 0,
                        line: 240,
                        lineRule: paragraph_1.LineRuleType.AUTO,
                    },
                    children: [new seperator_run_1.SeperatorRun()],
                }),
            ],
        });
        _this.root.push(begin);
        var spacing = new footnote_1.Footnote({
            id: 0,
            type: footnote_1.FootnoteType.CONTINUATION_SEPERATOR,
            children: [
                new paragraph_1.Paragraph({
                    spacing: {
                        after: 0,
                        line: 240,
                        lineRule: paragraph_1.LineRuleType.AUTO,
                    },
                    children: [new continuation_seperator_run_1.ContinuationSeperatorRun()],
                }),
            ],
        });
        _this.root.push(spacing);
        return _this;
    }
    FootNotes.prototype.createFootNote = function (id, paragraph) {
        var footnote = new footnote_1.Footnote({
            id: id,
            children: paragraph,
        });
        this.root.push(footnote);
    };
    return FootNotes;
}(xml_components_1.XmlComponent));
exports.FootNotes = FootNotes;
