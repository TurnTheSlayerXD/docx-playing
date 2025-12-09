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
exports.WrapSquare = void 0;
// http://officeopenxml.com/drwPicFloating-textWrap.php
var xml_components_1 = require("@file/xml-components");
var text_wrapping_1 = require("./text-wrapping");
var WrapSquareAttributes = /** @class */ (function (_super) {
    __extends(WrapSquareAttributes, _super);
    function WrapSquareAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            distT: "distT",
            distB: "distB",
            distL: "distL",
            distR: "distR",
            wrapText: "wrapText",
        };
        return _this;
    }
    return WrapSquareAttributes;
}(xml_components_1.XmlAttributeComponent));
var WrapSquare = /** @class */ (function (_super) {
    __extends(WrapSquare, _super);
    function WrapSquare(textWrapping, margins) {
        if (margins === void 0) { margins = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }; }
        var _this = _super.call(this, "wp:wrapSquare") || this;
        _this.root.push(new WrapSquareAttributes({
            wrapText: textWrapping.side || text_wrapping_1.TextWrappingSide.BOTH_SIDES,
            distT: margins.top,
            distB: margins.bottom,
            distL: margins.left,
            distR: margins.right,
        }));
        return _this;
    }
    return WrapSquare;
}(xml_components_1.XmlComponent));
exports.WrapSquare = WrapSquare;
