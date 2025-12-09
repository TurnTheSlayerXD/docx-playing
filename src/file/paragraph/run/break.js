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
exports.Break = void 0;
// http://officeopenxml.com/WPtextSpecialContent-break.php
var xml_components_1 = require("@file/xml-components");
// <xsd:group name="EG_RunInnerContent">
//   ...
//   <xsd:element name="br" type="CT_Br"/>
// <xsd:complexType name="CT_Br">
//     <xsd:attribute name="type" type="ST_BrType" use="optional"/>
//     <xsd:attribute name="clear" type="ST_BrClear" use="optional"/>
// </xsd:complexType>
// <xsd:simpleType name="ST_BrType">
// <xsd:restriction base="xsd:string">
//   <xsd:enumeration value="page"/>
//   <xsd:enumeration value="column"/>
//   <xsd:enumeration value="textWrapping"/>
// </xsd:restriction>
// </xsd:simpleType>
// <xsd:simpleType name="ST_BrClear">
// <xsd:restriction base="xsd:string">
//   <xsd:enumeration value="none"/>
//   <xsd:enumeration value="left"/>
//   <xsd:enumeration value="right"/>
//   <xsd:enumeration value="all"/>
// </xsd:restriction>
// </xsd:simpleType>
var Break = /** @class */ (function (_super) {
    __extends(Break, _super);
    function Break() {
        return _super.call(this, "w:br") || this;
    }
    return Break;
}(xml_components_1.XmlComponent));
exports.Break = Break;
