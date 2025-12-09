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
exports.CompatibilitySetting = exports.CompatibilitySettingAttributes = void 0;
var xml_components_1 = require("@file/xml-components");
// Currently, this is hard-coded for Microsoft word compatSettings.
// Theoretically, we could add compatSettings for other programs, but
// currently there isn't a need.
// <xsd:complexType name="CT_CompatSetting">
//     <xsd:attribute name="name" type="s:ST_String"/>
//     <xsd:attribute name="uri" type="s:ST_String"/>
//     <xsd:attribute name="val" type="s:ST_String"/>
// </xsd:complexType>
var CompatibilitySettingAttributes = /** @class */ (function (_super) {
    __extends(CompatibilitySettingAttributes, _super);
    function CompatibilitySettingAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            version: "w:val",
            name: "w:name",
            uri: "w:uri",
        };
        return _this;
    }
    return CompatibilitySettingAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.CompatibilitySettingAttributes = CompatibilitySettingAttributes;
// https://docs.microsoft.com/en-us/openspecs/office_standards/ms-docx/90138c4d-eb18-4edc-aa6c-dfb799cb1d0d
var CompatibilitySetting = /** @class */ (function (_super) {
    __extends(CompatibilitySetting, _super);
    function CompatibilitySetting(version) {
        var _this = _super.call(this, "w:compatSetting") || this;
        _this.root.push(new CompatibilitySettingAttributes({
            version: version,
            uri: "http://schemas.microsoft.com/office/word",
            name: "compatibilityMode",
        }));
        return _this;
    }
    return CompatibilitySetting;
}(xml_components_1.XmlComponent));
exports.CompatibilitySetting = CompatibilitySetting;
