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
exports.ThematicBreak = exports.Border = void 0;
// http://officeopenxml.com/WPborders.php
var border_1 = require("@file/border");
var xml_components_1 = require("@file/xml-components");
var Border = /** @class */ (function (_super) {
    __extends(Border, _super);
    function Border(options) {
        var _this = _super.call(this, "w:pBdr") || this;
        if (options.top) {
            _this.root.push(new border_1.BorderElement("w:top", options.top));
        }
        if (options.bottom) {
            _this.root.push(new border_1.BorderElement("w:bottom", options.bottom));
        }
        if (options.left) {
            _this.root.push(new border_1.BorderElement("w:left", options.left));
        }
        if (options.right) {
            _this.root.push(new border_1.BorderElement("w:right", options.right));
        }
        if (options.between) {
            _this.root.push(new border_1.BorderElement("w:between", options.between));
        }
        return _this;
    }
    return Border;
}(xml_components_1.IgnoreIfEmptyXmlComponent));
exports.Border = Border;
var ThematicBreak = /** @class */ (function (_super) {
    __extends(ThematicBreak, _super);
    function ThematicBreak() {
        var _this = _super.call(this, "w:pBdr") || this;
        var bottom = new border_1.BorderElement("w:bottom", {
            color: "auto",
            space: 1,
            style: border_1.BorderStyle.SINGLE,
            size: 6,
        });
        _this.root.push(bottom);
        return _this;
    }
    return ThematicBreak;
}(xml_components_1.XmlComponent));
exports.ThematicBreak = ThematicBreak;
