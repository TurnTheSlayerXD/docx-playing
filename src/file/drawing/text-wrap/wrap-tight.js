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
exports.WrapTight = void 0;
// http://officeopenxml.com/drwPicFloating-textWrap.php
var xml_components_1 = require("@file/xml-components");
var WrapTightAttributes = /** @class */ (function (_super) {
    __extends(WrapTightAttributes, _super);
    function WrapTightAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            distT: "distT",
            distB: "distB",
        };
        return _this;
    }
    return WrapTightAttributes;
}(xml_components_1.XmlAttributeComponent));
var WrapTight = /** @class */ (function (_super) {
    __extends(WrapTight, _super);
    function WrapTight(margins) {
        if (margins === void 0) { margins = {
            top: 0,
            bottom: 0,
        }; }
        var _this = _super.call(this, "wp:wrapTight") || this;
        _this.root.push(new WrapTightAttributes({
            distT: margins.top,
            distB: margins.bottom,
        }));
        return _this;
    }
    return WrapTight;
}(xml_components_1.XmlComponent));
exports.WrapTight = WrapTight;
