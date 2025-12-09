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
exports.DocumentBackground = exports.DocumentBackgroundAttributes = void 0;
// http://officeopenxml.com/WPdocument.php
// http://www.datypic.com/sc/ooxml/e-w_background-1.html
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
// <xsd:simpleType name="ST_ThemeColor">
// <xsd:restriction base="xsd:string">
//   <xsd:enumeration value="dark1"/>
//   <xsd:enumeration value="light1"/>
//   <xsd:enumeration value="dark2"/>
//   <xsd:enumeration value="light2"/>
//   <xsd:enumeration value="accent1"/>
//   <xsd:enumeration value="accent2"/>
//   <xsd:enumeration value="accent3"/>
//   <xsd:enumeration value="accent4"/>
//   <xsd:enumeration value="accent5"/>
//   <xsd:enumeration value="accent6"/>
//   <xsd:enumeration value="hyperlink"/>
//   <xsd:enumeration value="followedHyperlink"/>
//   <xsd:enumeration value="none"/>
//   <xsd:enumeration value="background1"/>
//   <xsd:enumeration value="text1"/>
//   <xsd:enumeration value="background2"/>
//   <xsd:enumeration value="text2"/>
// </xsd:restriction>
// </xsd:simpleType>
var DocumentBackgroundAttributes = /** @class */ (function (_super) {
    __extends(DocumentBackgroundAttributes, _super);
    function DocumentBackgroundAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            color: "w:color",
            themeColor: "w:themeColor",
            themeShade: "w:themeShade",
            themeTint: "w:themeTint",
        };
        return _this;
    }
    return DocumentBackgroundAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.DocumentBackgroundAttributes = DocumentBackgroundAttributes;
// <xsd:complexType name="CT_Background">
//     <xsd:sequence>
//         <xsd:sequence maxOccurs="unbounded">
//             <xsd:any processContents="lax" namespace="urn:schemas-microsoft-com:vml" minOccurs="0"
//             maxOccurs="unbounded"/>
//             <xsd:any processContents="lax" namespace="urn:schemas-microsoft-com:office:office"
//             minOccurs="0" maxOccurs="unbounded"/>
//         </xsd:sequence>
//         <xsd:element name="drawing" type="CT_Drawing" minOccurs="0"/>
//     </xsd:sequence>
//     <xsd:attribute name="color" type="ST_HexColor" use="optional" default="auto"/>
//     <xsd:attribute name="themeColor" type="ST_ThemeColor" use="optional"/>
//     <xsd:attribute name="themeTint" type="ST_UcharHexNumber" use="optional"/>
//     <xsd:attribute name="themeShade" type="ST_UcharHexNumber" use="optional"/>
// </xsd:complexType>
var DocumentBackground = /** @class */ (function (_super) {
    __extends(DocumentBackground, _super);
    function DocumentBackground(options) {
        var _this = _super.call(this, "w:background") || this;
        _this.root.push(new DocumentBackgroundAttributes({
            color: options.color === undefined ? undefined : (0, values_1.hexColorValue)(options.color),
            themeColor: options.themeColor,
            themeShade: options.themeShade === undefined ? undefined : (0, values_1.uCharHexNumber)(options.themeShade),
            themeTint: options.themeTint === undefined ? undefined : (0, values_1.uCharHexNumber)(options.themeTint),
        }));
        return _this;
    }
    return DocumentBackground;
}(xml_components_1.XmlComponent));
exports.DocumentBackground = DocumentBackground;
