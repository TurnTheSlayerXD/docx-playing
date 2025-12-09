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
exports.TableProperties = void 0;
// http://officeopenxml.com/WPtableProperties.php
//
// <xsd:complexType name="CT_TblPrBase">
//     <xsd:sequence>
//         <xsd:element name="tblStyle" type="CT_String" minOccurs="0"/>
//         <xsd:element name="tblpPr" type="CT_TblPPr" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="tblOverlap" type="CT_TblOverlap" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="bidiVisual" type="CT_OnOff" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="tblStyleRowBandSize" type="CT_DecimalNumber" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="tblStyleColBandSize" type="CT_DecimalNumber" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="tblW" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="jc" type="CT_JcTable" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="tblCellSpacing" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="tblInd" type="CT_TblWidth" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="tblBorders" type="CT_TblBorders" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="shd" type="CT_Shd" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="tblLayout" type="CT_TblLayoutType" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="tblCellMar" type="CT_TblCellMar" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="tblLook" type="CT_TblLook" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="tblCaption" type="CT_String" minOccurs="0" maxOccurs="1"/>
//         <xsd:element name="tblDescription" type="CT_String" minOccurs="0" maxOccurs="1"/>
//     </xsd:sequence>
// </xsd:complexType>
var xml_components_1 = require("@file/xml-components");
var paragraph_1 = require("../../paragraph");
var shading_1 = require("../../shading");
var table_width_1 = require("../table-width");
var table_borders_1 = require("./table-borders");
var table_cell_margin_1 = require("./table-cell-margin");
var table_float_properties_1 = require("./table-float-properties");
var table_layout_1 = require("./table-layout");
var table_cell_spacing_1 = require("../table-cell-spacing");
var TableProperties = /** @class */ (function (_super) {
    __extends(TableProperties, _super);
    function TableProperties(options) {
        var _this = _super.call(this, "w:tblPr") || this;
        if (options.style) {
            _this.root.push(new xml_components_1.StringValueElement("w:tblStyle", options.style));
        }
        if (options.float) {
            _this.root.push(new table_float_properties_1.TableFloatProperties(options.float));
        }
        if (options.visuallyRightToLeft !== undefined) {
            _this.root.push(new xml_components_1.OnOffElement("w:bidiVisual", options.visuallyRightToLeft));
        }
        if (options.width) {
            _this.root.push(new table_width_1.TableWidthElement("w:tblW", options.width));
        }
        if (options.alignment) {
            _this.root.push(new paragraph_1.Alignment(options.alignment));
        }
        if (options.indent) {
            _this.root.push(new table_width_1.TableWidthElement("w:tblInd", options.indent));
        }
        if (options.borders) {
            _this.root.push(new table_borders_1.TableBorders(options.borders));
        }
        if (options.shading) {
            _this.root.push(new shading_1.Shading(options.shading));
        }
        if (options.layout) {
            _this.root.push(new table_layout_1.TableLayout(options.layout));
        }
        if (options.cellMargin) {
            _this.root.push(new table_cell_margin_1.TableCellMargin(table_cell_margin_1.TableCellMarginElementType.TABLE, options.cellMargin));
        }
        if (options.cellSpacing) {
            _this.root.push(new table_cell_spacing_1.TableCellSpacingElement(options.cellSpacing));
        }
        return _this;
    }
    return TableProperties;
}(xml_components_1.IgnoreIfEmptyXmlComponent));
exports.TableProperties = TableProperties;
