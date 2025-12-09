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
exports.Stretch = void 0;
var xml_components_1 = require("@file/xml-components");
var FillRectangle = /** @class */ (function (_super) {
    __extends(FillRectangle, _super);
    function FillRectangle() {
        return _super.call(this, "a:fillRect") || this;
    }
    return FillRectangle;
}(xml_components_1.XmlComponent));
var Stretch = /** @class */ (function (_super) {
    __extends(Stretch, _super);
    function Stretch() {
        var _this = _super.call(this, "a:stretch") || this;
        _this.root.push(new FillRectangle());
        return _this;
    }
    return Stretch;
}(xml_components_1.XmlComponent));
exports.Stretch = Stretch;
