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
exports.PageBorders = exports.PageBorderZOrder = exports.PageBorderOffsetFrom = exports.PageBorderDisplay = void 0;
// http://officeopenxml.com/WPsectionBorders.php
var border_1 = require("@file/border");
var xml_components_1 = require("@file/xml-components");
// <xsd:simpleType name="ST_PageBorderDisplay">
// <xsd:restriction base="xsd:string">
//   <xsd:enumeration value="allPages"/>
//   <xsd:enumeration value="firstPage"/>
//   <xsd:enumeration value="notFirstPage"/>
// </xsd:restriction>
// </xsd:simpleType>
exports.PageBorderDisplay = {
    ALL_PAGES: "allPages",
    FIRST_PAGE: "firstPage",
    NOT_FIRST_PAGE: "notFirstPage",
};
// <xsd:simpleType name="ST_PageBorderOffset">
// <xsd:restriction base="xsd:string">
//   <xsd:enumeration value="page"/>
//   <xsd:enumeration value="text"/>
// </xsd:restriction>
// </xsd:simpleType>
exports.PageBorderOffsetFrom = {
    PAGE: "page",
    TEXT: "text",
};
// <xsd:simpleType name="ST_PageBorderZOrder">
// <xsd:restriction base="xsd:string">
//   <xsd:enumeration value="front"/>
//   <xsd:enumeration value="back"/>
// </xsd:restriction>
// </xsd:simpleType>
exports.PageBorderZOrder = {
    BACK: "back",
    FRONT: "front",
};
var PageBordersAttributes = /** @class */ (function (_super) {
    __extends(PageBordersAttributes, _super);
    function PageBordersAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            display: "w:display",
            offsetFrom: "w:offsetFrom",
            zOrder: "w:zOrder",
        };
        return _this;
    }
    return PageBordersAttributes;
}(xml_components_1.XmlAttributeComponent));
// <xsd:complexType name="CT_PageBorders">
// <xsd:sequence>
//   <xsd:element name="top" type="CT_TopPageBorder" minOccurs="0"/>
//   <xsd:element name="left" type="CT_PageBorder" minOccurs="0"/>
//   <xsd:element name="bottom" type="CT_BottomPageBorder" minOccurs="0"/>
//   <xsd:element name="right" type="CT_PageBorder" minOccurs="0"/>
// </xsd:sequence>
// <xsd:attribute name="zOrder" type="ST_PageBorderZOrder" use="optional" default="front"/>
// <xsd:attribute name="display" type="ST_PageBorderDisplay" use="optional"/>
// <xsd:attribute name="offsetFrom" type="ST_PageBorderOffset" use="optional" default="text"/>
// </xsd:complexType>
var PageBorders = /** @class */ (function (_super) {
    __extends(PageBorders, _super);
    function PageBorders(options) {
        var _this = _super.call(this, "w:pgBorders") || this;
        if (!options) {
            return _this;
        }
        if (options.pageBorders) {
            _this.root.push(new PageBordersAttributes({
                display: options.pageBorders.display,
                offsetFrom: options.pageBorders.offsetFrom,
                zOrder: options.pageBorders.zOrder,
            }));
        }
        else {
            _this.root.push(new PageBordersAttributes({}));
        }
        if (options.pageBorderTop) {
            _this.root.push(new border_1.BorderElement("w:top", options.pageBorderTop));
        }
        if (options.pageBorderLeft) {
            _this.root.push(new border_1.BorderElement("w:left", options.pageBorderLeft));
        }
        if (options.pageBorderBottom) {
            _this.root.push(new border_1.BorderElement("w:bottom", options.pageBorderBottom));
        }
        if (options.pageBorderRight) {
            _this.root.push(new border_1.BorderElement("w:right", options.pageBorderRight));
        }
        return _this;
    }
    return PageBorders;
}(xml_components_1.IgnoreIfEmptyXmlComponent));
exports.PageBorders = PageBorders;
