"use strict";
// http://officeopenxml.com/WPtableRowProperties.php
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
exports.TableRowProperties = void 0;
// <xsd:complexType name="CT_TrPrBase">
//     <xsd:choice maxOccurs="unbounded">
//         <xsd:element name="cnfStyle" type="CT_Cnf" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="divId" type="CT_DecimalNumber" minOccurs="0"/>
//         <xsd:element name="gridBefore" type="CT_DecimalNumber" minOccurs="0"/>
//         <xsd:element name="gridAfter" type="CT_DecimalNumber" minOccurs="0"/>
//         <xsd:element name="wBefore" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="wAfter" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="cantSplit" type="CT_OnOff" minOccurs="0"/>
//         <xsd:element name="trHeight" type="CT_Height" minOccurs="0"/>
//         <xsd:element name="tblHeader" type="CT_OnOff" minOccurs="0"/>
//         <xsd:element name="tblCellSpacing" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="jc" type="CT_JcTable" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="hidden" type="CT_OnOff" minOccurs="0"/>
//     </xsd:choice>
// </xsd:complexType>
// <xsd:complexType name="CT_TrPr">
//     <xsd:complexContent>
//         <xsd:extension base="CT_TrPrBase">
//             <xsd:sequence>
//                 <xsd:element name="ins" type="CT_TrackChange" minOccurs="0"/>
//                 <xsd:element name="del" type="CT_TrackChange" minOccurs="0"/>
//                 <xsd:element name="trPrChange" type="CT_TrPrChange" minOccurs="0"/>
//             </xsd:sequence>
//         </xsd:extension>
//     </xsd:complexContent>
// </xsd:complexType>
var xml_components_1 = require("@file/xml-components");
var table_row_height_1 = require("./table-row-height");
var table_cell_spacing_1 = require("../table-cell-spacing");
var TableRowProperties = /** @class */ (function (_super) {
    __extends(TableRowProperties, _super);
    function TableRowProperties(options) {
        var _this = _super.call(this, "w:trPr") || this;
        if (options.cantSplit !== undefined) {
            _this.root.push(new xml_components_1.OnOffElement("w:cantSplit", options.cantSplit));
        }
        if (options.tableHeader !== undefined) {
            _this.root.push(new xml_components_1.OnOffElement("w:tblHeader", options.tableHeader));
        }
        if (options.height) {
            _this.root.push(new table_row_height_1.TableRowHeight(options.height.value, options.height.rule));
        }
        if (options.cellSpacing) {
            _this.root.push(new table_cell_spacing_1.TableCellSpacingElement(options.cellSpacing));
        }
        return _this;
    }
    return TableRowProperties;
}(xml_components_1.IgnoreIfEmptyXmlComponent));
exports.TableRowProperties = TableRowProperties;
