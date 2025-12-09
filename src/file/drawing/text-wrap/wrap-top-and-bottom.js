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
exports.WrapTopAndBottom = void 0;
// http://officeopenxml.com/drwPicFloating-textWrap.php
var xml_components_1 = require("@file/xml-components");
var WrapTopAndBottomAttributes = /** @class */ (function (_super) {
    __extends(WrapTopAndBottomAttributes, _super);
    function WrapTopAndBottomAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            distT: "distT",
            distB: "distB",
        };
        return _this;
    }
    return WrapTopAndBottomAttributes;
}(xml_components_1.XmlAttributeComponent));
var WrapTopAndBottom = /** @class */ (function (_super) {
    __extends(WrapTopAndBottom, _super);
    function WrapTopAndBottom(margins) {
        if (margins === void 0) { margins = {
            top: 0,
            bottom: 0,
        }; }
        var _this = _super.call(this, "wp:wrapTopAndBottom") || this;
        _this.root.push(new WrapTopAndBottomAttributes({
            distT: margins.top,
            distB: margins.bottom,
        }));
        return _this;
    }
    return WrapTopAndBottom;
}(xml_components_1.XmlComponent));
exports.WrapTopAndBottom = WrapTopAndBottom;
