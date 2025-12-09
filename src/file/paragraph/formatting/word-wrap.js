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
exports.WordWrap = exports.WordWrapAttributes = void 0;
// http://officeopenxml.com/WPalignment.php
// http://officeopenxml.com/WPtableAlignment.php
var xml_components_1 = require("@file/xml-components");
var WordWrapAttributes = /** @class */ (function (_super) {
    __extends(WordWrapAttributes, _super);
    function WordWrapAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { val: "w:val" };
        return _this;
    }
    return WordWrapAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.WordWrapAttributes = WordWrapAttributes;
var WordWrap = /** @class */ (function (_super) {
    __extends(WordWrap, _super);
    function WordWrap() {
        var _this = _super.call(this, "w:wordWrap") || this;
        _this.root.push(new WordWrapAttributes({ val: 0 }));
        return _this;
    }
    return WordWrap;
}(xml_components_1.XmlComponent));
exports.WordWrap = WordWrap;
