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
exports.TableCellMargin = exports.TableCellMarginElementType = void 0;
var table_1 = require("@file/table");
var xml_components_1 = require("@file/xml-components");
// Technically two different types, but they're identical
//
// <xsd:complexType name="CT_TcMar">
//     <xsd:sequence>
//     <xsd:element name="top" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//     <xsd:element name="start" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//     <xsd:element name="left" type="CT_TblWidth" minOccurs="0"/>
//     <xsd:element name="bottom" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//     <xsd:element name="end" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//     <xsd:element name="right" type="CT_TblWidth" minOccurs="0"/>
//     </xsd:sequence>
// </xsd:complexType>
// <xsd:complexType name="CT_TblCellMar">
//     <xsd:sequence>
//     <xsd:element name="top" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//     <xsd:element name="start" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//     <xsd:element name="left" type="CT_TblWidth" minOccurs="0"/>
//     <xsd:element name="bottom" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//     <xsd:element name="end" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//     <xsd:element name="right" type="CT_TblWidth" minOccurs="0"/>
//     </xsd:sequence>
// </xsd:complexType>
exports.TableCellMarginElementType = {
    TABLE: "w:tblCellMar",
    TABLE_CELL: "w:tcMar",
};
var TableCellMargin = /** @class */ (function (_super) {
    __extends(TableCellMargin, _super);
    function TableCellMargin(type, _a) {
        var _b = _a.marginUnitType, marginUnitType = _b === void 0 ? table_1.WidthType.DXA : _b, top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
        var _this = _super.call(this, type) || this;
        if (top !== undefined) {
            _this.root.push(new table_1.TableWidthElement("w:top", { type: marginUnitType, size: top }));
        }
        if (left !== undefined) {
            _this.root.push(new table_1.TableWidthElement("w:left", { type: marginUnitType, size: left }));
        }
        if (bottom !== undefined) {
            _this.root.push(new table_1.TableWidthElement("w:bottom", { type: marginUnitType, size: bottom }));
        }
        if (right !== undefined) {
            _this.root.push(new table_1.TableWidthElement("w:right", { type: marginUnitType, size: right }));
        }
        return _this;
    }
    return TableCellMargin;
}(xml_components_1.IgnoreIfEmptyXmlComponent));
exports.TableCellMargin = TableCellMargin;
