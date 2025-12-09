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
exports.Type = exports.SectionTypeAttributes = exports.SectionType = void 0;
// http://officeopenxml.com/WPsection.php
var xml_components_1 = require("@file/xml-components");
// <xsd:simpleType name="ST_SectionMark">
// <xsd:restriction base="xsd:string">
//   <xsd:enumeration value="nextPage"/>
//   <xsd:enumeration value="nextColumn"/>
//   <xsd:enumeration value="continuous"/>
//   <xsd:enumeration value="evenPage"/>
//   <xsd:enumeration value="oddPage"/>
// </xsd:restriction>
// </xsd:simpleType>
exports.SectionType = {
    NEXT_PAGE: "nextPage",
    NEXT_COLUMN: "nextColumn",
    CONTINUOUS: "continuous",
    EVEN_PAGE: "evenPage",
    ODD_PAGE: "oddPage",
};
// <xsd:complexType name="CT_SectType">
//     <xsd:attribute name="val" type="ST_SectionMark"/>
// </xsd:complexType>
var SectionTypeAttributes = /** @class */ (function (_super) {
    __extends(SectionTypeAttributes, _super);
    function SectionTypeAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            val: "w:val",
        };
        return _this;
    }
    return SectionTypeAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.SectionTypeAttributes = SectionTypeAttributes;
var Type = /** @class */ (function (_super) {
    __extends(Type, _super);
    function Type(value) {
        var _this = _super.call(this, "w:type") || this;
        _this.root.push(new SectionTypeAttributes({ val: value }));
        return _this;
    }
    return Type;
}(xml_components_1.XmlComponent));
exports.Type = Type;
