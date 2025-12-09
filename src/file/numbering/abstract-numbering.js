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
exports.AbstractNumbering = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var level_1 = require("./level");
var multi_level_type_1 = require("./multi-level-type");
// <xsd:complexType name="CT_AbstractNum">
// <xsd:sequence>
//   <xsd:element name="nsid" type="CT_LongHexNumber" minOccurs="0"/>
//   <xsd:element name="multiLevelType" type="CT_MultiLevelType" minOccurs="0"/>
//   <xsd:element name="tmpl" type="CT_LongHexNumber" minOccurs="0"/>
//   <xsd:element name="name" type="CT_String" minOccurs="0"/>
//   <xsd:element name="styleLink" type="CT_String" minOccurs="0"/>
//   <xsd:element name="numStyleLink" type="CT_String" minOccurs="0"/>
//   <xsd:element name="lvl" type="CT_Lvl" minOccurs="0" maxOccurs="9"/>
// </xsd:sequence>
// <xsd:attribute name="abstractNumId" type="ST_DecimalNumber" use="required"/>
// </xsd:complexType>
// <xsd:attribute name="restartNumberingAfterBreak" type="w12:ST_OnOff"/>
// https://docs.microsoft.com/en-us/openspecs/office_standards/ms-docx/cbddeff8-01aa-4486-a48e-6a83dede4f13
var AbstractNumberingAttributes = /** @class */ (function (_super) {
    __extends(AbstractNumberingAttributes, _super);
    function AbstractNumberingAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            abstractNumId: "w:abstractNumId",
            restartNumberingAfterBreak: "w15:restartNumberingAfterBreak",
        };
        return _this;
    }
    return AbstractNumberingAttributes;
}(xml_components_1.XmlAttributeComponent));
var AbstractNumbering = /** @class */ (function (_super) {
    __extends(AbstractNumbering, _super);
    function AbstractNumbering(id, levelOptions) {
        var _this = _super.call(this, "w:abstractNum") || this;
        _this.root.push(new AbstractNumberingAttributes({
            abstractNumId: (0, values_1.decimalNumber)(id),
            restartNumberingAfterBreak: 0,
        }));
        _this.root.push(new multi_level_type_1.MultiLevelType("hybridMultilevel"));
        _this.id = id;
        for (var _i = 0, levelOptions_1 = levelOptions; _i < levelOptions_1.length; _i++) {
            var option = levelOptions_1[_i];
            _this.root.push(new level_1.Level(option));
        }
        return _this;
    }
    return AbstractNumbering;
}(xml_components_1.XmlComponent));
exports.AbstractNumbering = AbstractNumbering;
