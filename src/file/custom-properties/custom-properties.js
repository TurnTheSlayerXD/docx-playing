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
exports.CustomProperties = void 0;
var xml_components_1 = require("@file/xml-components");
var custom_properties_attributes_1 = require("./custom-properties-attributes");
var custom_property_1 = require("./custom-property");
var CustomProperties = /** @class */ (function (_super) {
    __extends(CustomProperties, _super);
    function CustomProperties(properties) {
        var _this = _super.call(this, "Properties") || this;
        // eslint-disable-next-line functional/prefer-readonly-type
        _this.properties = [];
        _this.root.push(new custom_properties_attributes_1.CustomPropertiesAttributes({
            xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
            vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
        }));
        // I'm not sure why, but every example I have seen starts with 2
        // https://docs.microsoft.com/en-us/office/open-xml/how-to-set-a-custom-property-in-a-word-processing-document
        _this.nextId = 2;
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            _this.addCustomProperty(property);
        }
        return _this;
    }
    CustomProperties.prototype.prepForXml = function (context) {
        var _this = this;
        this.properties.forEach(function (x) { return _this.root.push(x); });
        return _super.prototype.prepForXml.call(this, context);
    };
    CustomProperties.prototype.addCustomProperty = function (property) {
        // eslint-disable-next-line functional/immutable-data
        this.properties.push(new custom_property_1.CustomProperty(this.nextId++, property));
    };
    return CustomProperties;
}(xml_components_1.XmlComponent));
exports.CustomProperties = CustomProperties;
