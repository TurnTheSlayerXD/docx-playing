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
exports.CustomPropertyValue = exports.CustomProperty = void 0;
var xml_components_1 = require("@file/xml-components");
var custom_property_attributes_1 = require("./custom-property-attributes");
var CustomProperty = /** @class */ (function (_super) {
    __extends(CustomProperty, _super);
    function CustomProperty(id, properties) {
        var _this = _super.call(this, "property") || this;
        _this.root.push(new custom_property_attributes_1.CustomPropertyAttributes({
            fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
            pid: id.toString(),
            name: properties.name,
        }));
        _this.root.push(new CustomPropertyValue(properties.value));
        return _this;
    }
    return CustomProperty;
}(xml_components_1.XmlComponent));
exports.CustomProperty = CustomProperty;
var CustomPropertyValue = /** @class */ (function (_super) {
    __extends(CustomPropertyValue, _super);
    function CustomPropertyValue(value) {
        var _this = _super.call(this, "vt:lpwstr") || this;
        _this.root.push(value);
        return _this;
    }
    return CustomPropertyValue;
}(xml_components_1.XmlComponent));
exports.CustomPropertyValue = CustomPropertyValue;
