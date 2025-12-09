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
exports.CheckBox = void 0;
var symbol_run_1 = require("@file/paragraph/run/symbol-run");
var sdt_content_1 = require("@file/table-of-contents/sdt-content");
var sdt_properties_1 = require("@file/table-of-contents/sdt-properties");
var xml_components_1 = require("@file/xml-components");
var checkbox_util_1 = require("./checkbox-util");
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox(options) {
        var _a, _b, _c, _d;
        var _this = _super.call(this, "w:sdt") || this;
        // default values per Microsoft
        _this.DEFAULT_UNCHECKED_SYMBOL = "2610";
        _this.DEFAULT_CHECKED_SYMBOL = "2612";
        _this.DEFAULT_FONT = "MS Gothic";
        var properties = new sdt_properties_1.StructuredDocumentTagProperties(options === null || options === void 0 ? void 0 : options.alias);
        properties.addChildElement(new checkbox_util_1.CheckBoxUtil(options));
        _this.root.push(properties);
        var content = new sdt_content_1.StructuredDocumentTagContent();
        var checkedFont = (_a = options === null || options === void 0 ? void 0 : options.checkedState) === null || _a === void 0 ? void 0 : _a.font;
        var checkedText = (_b = options === null || options === void 0 ? void 0 : options.checkedState) === null || _b === void 0 ? void 0 : _b.value;
        var uncheckedFont = (_c = options === null || options === void 0 ? void 0 : options.uncheckedState) === null || _c === void 0 ? void 0 : _c.font;
        var uncheckedText = (_d = options === null || options === void 0 ? void 0 : options.uncheckedState) === null || _d === void 0 ? void 0 : _d.value;
        var symbolFont;
        var char;
        if (options === null || options === void 0 ? void 0 : options.checked) {
            symbolFont = checkedFont ? checkedFont : _this.DEFAULT_FONT;
            char = checkedText ? checkedText : _this.DEFAULT_CHECKED_SYMBOL;
        }
        else {
            symbolFont = uncheckedFont ? uncheckedFont : _this.DEFAULT_FONT;
            char = uncheckedText ? uncheckedText : _this.DEFAULT_UNCHECKED_SYMBOL;
        }
        var initialRenderedChar = new symbol_run_1.SymbolRun({
            char: char,
            symbolfont: symbolFont,
        });
        content.addChildElement(initialRenderedChar);
        _this.root.push(content);
        return _this;
    }
    return CheckBox;
}(xml_components_1.XmlComponent));
exports.CheckBox = CheckBox;
