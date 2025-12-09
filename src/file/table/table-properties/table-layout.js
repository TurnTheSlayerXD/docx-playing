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
exports.TableLayout = exports.TableLayoutType = void 0;
var xml_components_1 = require("@file/xml-components");
// <xsd:simpleType name="ST_TblLayoutType">
//     <xsd:restriction base="xsd:string">
//         <xsd:enumeration value="fixed"/>
//         <xsd:enumeration value="autofit"/>
//     </xsd:restriction>
// </xsd:simpleType>
exports.TableLayoutType = {
    AUTOFIT: "autofit",
    FIXED: "fixed",
};
var TableLayoutAttributes = /** @class */ (function (_super) {
    __extends(TableLayoutAttributes, _super);
    function TableLayoutAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { type: "w:type" };
        return _this;
    }
    return TableLayoutAttributes;
}(xml_components_1.XmlAttributeComponent));
// <xsd:complexType name="CT_TblLayoutType">
//     <xsd:attribute name="type" type="ST_TblLayoutType"/>
// </xsd:complexType>
var TableLayout = /** @class */ (function (_super) {
    __extends(TableLayout, _super);
    function TableLayout(type) {
        var _this = _super.call(this, "w:tblLayout") || this;
        _this.root.push(new TableLayoutAttributes({ type: type }));
        return _this;
    }
    return TableLayout;
}(xml_components_1.XmlComponent));
exports.TableLayout = TableLayout;
