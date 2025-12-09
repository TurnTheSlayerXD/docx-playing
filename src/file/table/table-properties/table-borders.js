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
exports.TableBorders = void 0;
// http://officeopenxml.com/WPtableBorders.php
var border_1 = require("@file/border");
var xml_components_1 = require("@file/xml-components");
var NONE_BORDER = {
    style: border_1.BorderStyle.NONE,
    size: 0,
    color: "auto",
};
var DEFAULT_BORDER = {
    style: border_1.BorderStyle.SINGLE,
    size: 4,
    color: "auto",
};
var TableBorders = /** @class */ (function (_super) {
    __extends(TableBorders, _super);
    function TableBorders(options) {
        var _this = _super.call(this, "w:tblBorders") || this;
        if (options.top) {
            _this.root.push(new border_1.BorderElement("w:top", options.top));
        }
        else {
            _this.root.push(new border_1.BorderElement("w:top", DEFAULT_BORDER));
        }
        if (options.left) {
            _this.root.push(new border_1.BorderElement("w:left", options.left));
        }
        else {
            _this.root.push(new border_1.BorderElement("w:left", DEFAULT_BORDER));
        }
        if (options.bottom) {
            _this.root.push(new border_1.BorderElement("w:bottom", options.bottom));
        }
        else {
            _this.root.push(new border_1.BorderElement("w:bottom", DEFAULT_BORDER));
        }
        if (options.right) {
            _this.root.push(new border_1.BorderElement("w:right", options.right));
        }
        else {
            _this.root.push(new border_1.BorderElement("w:right", DEFAULT_BORDER));
        }
        if (options.insideHorizontal) {
            _this.root.push(new border_1.BorderElement("w:insideH", options.insideHorizontal));
        }
        else {
            _this.root.push(new border_1.BorderElement("w:insideH", DEFAULT_BORDER));
        }
        if (options.insideVertical) {
            _this.root.push(new border_1.BorderElement("w:insideV", options.insideVertical));
        }
        else {
            _this.root.push(new border_1.BorderElement("w:insideV", DEFAULT_BORDER));
        }
        return _this;
    }
    TableBorders.NONE = {
        top: NONE_BORDER,
        bottom: NONE_BORDER,
        left: NONE_BORDER,
        right: NONE_BORDER,
        insideHorizontal: NONE_BORDER,
        insideVertical: NONE_BORDER,
    };
    return TableBorders;
}(xml_components_1.XmlComponent));
exports.TableBorders = TableBorders;
