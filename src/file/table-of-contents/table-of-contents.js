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
exports.TableOfContents = void 0;
// http://officeopenxml.com/WPtableOfContents.php
// http://www.datypic.com/sc/ooxml/e-w_sdt-1.html
var file_child_1 = require("@file/file-child");
var paragraph_1 = require("@file/paragraph");
var run_1 = require("@file/paragraph/run");
var field_1 = require("@file/paragraph/run/field");
var field_instruction_1 = require("./field-instruction");
var sdt_content_1 = require("./sdt-content");
var sdt_properties_1 = require("./sdt-properties");
var TableOfContents = /** @class */ (function (_super) {
    __extends(TableOfContents, _super);
    function TableOfContents(alias, properties) {
        if (alias === void 0) { alias = "Table of Contents"; }
        var _this = _super.call(this, "w:sdt") || this;
        _this.root.push(new sdt_properties_1.StructuredDocumentTagProperties(alias));
        var content = new sdt_content_1.StructuredDocumentTagContent();
        var beginParagraph = new paragraph_1.Paragraph({
            children: [
                new run_1.Run({
                    children: [new field_1.Begin(true), new field_instruction_1.FieldInstruction(properties), new field_1.Separate()],
                }),
            ],
        });
        content.addChildElement(beginParagraph);
        var endParagraph = new paragraph_1.Paragraph({
            children: [
                new run_1.Run({
                    children: [new field_1.End()],
                }),
            ],
        });
        content.addChildElement(endParagraph);
        _this.root.push(content);
        return _this;
    }
    return TableOfContents;
}(file_child_1.FileChild));
exports.TableOfContents = TableOfContents;
