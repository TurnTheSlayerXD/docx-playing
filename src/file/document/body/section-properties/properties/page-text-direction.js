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
exports.PageTextDirection = exports.PageTextDirectionType = void 0;
var xml_components_1 = require("@file/xml-components");
exports.PageTextDirectionType = {
    LEFT_TO_RIGHT_TOP_TO_BOTTOM: "lrTb",
    TOP_TO_BOTTOM_RIGHT_TO_LEFT: "tbRl",
};
var PageTextDirectionAttributes = /** @class */ (function (_super) {
    __extends(PageTextDirectionAttributes, _super);
    function PageTextDirectionAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { val: "w:val" };
        return _this;
    }
    return PageTextDirectionAttributes;
}(xml_components_1.XmlAttributeComponent));
var PageTextDirection = /** @class */ (function (_super) {
    __extends(PageTextDirection, _super);
    function PageTextDirection(value) {
        var _this = _super.call(this, "w:textDirection") || this;
        _this.root.push(new PageTextDirectionAttributes({
            val: value,
        }));
        return _this;
    }
    return PageTextDirection;
}(xml_components_1.XmlComponent));
exports.PageTextDirection = PageTextDirection;
