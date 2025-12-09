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
exports.FieldInstruction = void 0;
// http://officeopenxml.com/WPfieldInstructions.php
var text_attributes_1 = require("@file/paragraph/run/text-attributes");
var shared_1 = require("@file/shared");
var xml_components_1 = require("@file/xml-components");
var FieldInstruction = /** @class */ (function (_super) {
    __extends(FieldInstruction, _super);
    function FieldInstruction(properties) {
        if (properties === void 0) { properties = {}; }
        var _this = _super.call(this, "w:instrText") || this;
        _this.properties = properties;
        _this.root.push(new text_attributes_1.TextAttributes({ space: shared_1.SpaceType.PRESERVE }));
        var instruction = "TOC";
        if (_this.properties.captionLabel) {
            instruction = "".concat(instruction, " \\a \"").concat(_this.properties.captionLabel, "\"");
        }
        if (_this.properties.entriesFromBookmark) {
            instruction = "".concat(instruction, " \\b \"").concat(_this.properties.entriesFromBookmark, "\"");
        }
        if (_this.properties.captionLabelIncludingNumbers) {
            instruction = "".concat(instruction, " \\c \"").concat(_this.properties.captionLabelIncludingNumbers, "\"");
        }
        if (_this.properties.sequenceAndPageNumbersSeparator) {
            instruction = "".concat(instruction, " \\d \"").concat(_this.properties.sequenceAndPageNumbersSeparator, "\"");
        }
        if (_this.properties.tcFieldIdentifier) {
            instruction = "".concat(instruction, " \\f \"").concat(_this.properties.tcFieldIdentifier, "\"");
        }
        if (_this.properties.hyperlink) {
            instruction = "".concat(instruction, " \\h");
        }
        if (_this.properties.tcFieldLevelRange) {
            instruction = "".concat(instruction, " \\l \"").concat(_this.properties.tcFieldLevelRange, "\"");
        }
        if (_this.properties.pageNumbersEntryLevelsRange) {
            instruction = "".concat(instruction, " \\n \"").concat(_this.properties.pageNumbersEntryLevelsRange, "\"");
        }
        if (_this.properties.headingStyleRange) {
            instruction = "".concat(instruction, " \\o \"").concat(_this.properties.headingStyleRange, "\"");
        }
        if (_this.properties.entryAndPageNumberSeparator) {
            instruction = "".concat(instruction, " \\p \"").concat(_this.properties.entryAndPageNumberSeparator, "\"");
        }
        if (_this.properties.seqFieldIdentifierForPrefix) {
            instruction = "".concat(instruction, " \\s \"").concat(_this.properties.seqFieldIdentifierForPrefix, "\"");
        }
        if (_this.properties.stylesWithLevels && _this.properties.stylesWithLevels.length) {
            var styles = _this.properties.stylesWithLevels.map(function (sl) { return "".concat(sl.styleName, ",").concat(sl.level); }).join(",");
            instruction = "".concat(instruction, " \\t \"").concat(styles, "\"");
        }
        if (_this.properties.useAppliedParagraphOutlineLevel) {
            instruction = "".concat(instruction, " \\u");
        }
        if (_this.properties.preserveTabInEntries) {
            instruction = "".concat(instruction, " \\w");
        }
        if (_this.properties.preserveNewLineInEntries) {
            instruction = "".concat(instruction, " \\x");
        }
        if (_this.properties.hideTabAndPageNumbersInWebView) {
            instruction = "".concat(instruction, " \\z");
        }
        _this.root.push(instruction);
        return _this;
    }
    return FieldInstruction;
}(xml_components_1.XmlComponent));
exports.FieldInstruction = FieldInstruction;
