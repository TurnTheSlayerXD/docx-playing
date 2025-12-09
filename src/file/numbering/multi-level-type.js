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
exports.MultiLevelType = void 0;
var xml_components_1 = require("@file/xml-components");
// <xsd:complexType name="CT_AbstractNum">
//     ...
//     <xsd:element name="multiLevelType" type="CT_MultiLevelType" minOccurs="0"/>
//         <xsd:complexType name="CT_MultiLevelType">
//             <xsd:attribute name="val" type="ST_MultiLevelType" use="required"/>
//         </xsd:complexType>
//             <xsd:simpleType name="ST_MultiLevelType">
//                 <xsd:restriction base="xsd:string">
//                     <xsd:enumeration value="singleLevel"/>
//                     <xsd:enumeration value="multilevel"/>
//                     <xsd:enumeration value="hybridMultilevel"/>
//                 </xsd:restriction>
//             </xsd:simpleType>
var MultiLevelType = /** @class */ (function (_super) {
    __extends(MultiLevelType, _super);
    function MultiLevelType(value) {
        var _this = _super.call(this, "w:multiLevelType") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
        return _this;
    }
    return MultiLevelType;
}(xml_components_1.XmlComponent));
exports.MultiLevelType = MultiLevelType;
