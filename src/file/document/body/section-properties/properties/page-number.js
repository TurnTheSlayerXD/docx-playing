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
exports.PageNumberType = exports.PageNumberTypeAttributes = exports.PageNumberSeparator = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
// <xsd:simpleType name="ST_ChapterSep">
// <xsd:restriction base="xsd:string">
//   <xsd:enumeration value="hyphen"/>
//   <xsd:enumeration value="period"/>
//   <xsd:enumeration value="colon"/>
//   <xsd:enumeration value="emDash"/>
//   <xsd:enumeration value="enDash"/>
// </xsd:restriction>
// </xsd:simpleType>
exports.PageNumberSeparator = {
    HYPHEN: "hyphen",
    PERIOD: "period",
    COLON: "colon",
    EM_DASH: "emDash",
    EN_DASH: "endash",
};
// <xsd:complexType name="CT_PageNumber">
//     <xsd:attribute name="fmt" type="ST_NumberFormat" use="optional" default="decimal"/>
//     <xsd:attribute name="start" type="ST_DecimalNumber" use="optional"/>
//     <xsd:attribute name="chapStyle" type="ST_DecimalNumber" use="optional"/>
//     <xsd:attribute name="chapSep" type="ST_ChapterSep" use="optional" default="hyphen"/>
// </xsd:complexType>
var PageNumberTypeAttributes = /** @class */ (function (_super) {
    __extends(PageNumberTypeAttributes, _super);
    function PageNumberTypeAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            start: "w:start",
            formatType: "w:fmt",
            separator: "w:chapSep",
        };
        return _this;
    }
    return PageNumberTypeAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.PageNumberTypeAttributes = PageNumberTypeAttributes;
var PageNumberType = /** @class */ (function (_super) {
    __extends(PageNumberType, _super);
    function PageNumberType(_a) {
        var start = _a.start, formatType = _a.formatType, separator = _a.separator;
        var _this = _super.call(this, "w:pgNumType") || this;
        _this.root.push(new PageNumberTypeAttributes({
            start: start === undefined ? undefined : (0, values_1.decimalNumber)(start),
            formatType: formatType,
            separator: separator,
        }));
        return _this;
    }
    return PageNumberType;
}(xml_components_1.XmlComponent));
exports.PageNumberType = PageNumberType;
