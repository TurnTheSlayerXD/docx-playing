"use strict";
// http://officeopenxml.com/WPtableGrid.php
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
exports.GridCol = exports.TableGrid = void 0;
// <xsd:complexType name="CT_TblGridCol">
//     <xsd:attribute name="w" type="s:ST_TwipsMeasure"/>
// </xsd:complexType>
// <xsd:complexType name="CT_TblGridBase">
//     <xsd:sequence>
//         <xsd:element name="gridCol" type="CT_TblGridCol" minOccurs="0" maxOccurs="unbounded"/>
//     </xsd:sequence>
// </xsd:complexType>
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var TableGrid = /** @class */ (function (_super) {
    __extends(TableGrid, _super);
    function TableGrid(widths) {
        var _this = _super.call(this, "w:tblGrid") || this;
        for (var _i = 0, widths_1 = widths; _i < widths_1.length; _i++) {
            var width = widths_1[_i];
            _this.root.push(new GridCol(width));
        }
        return _this;
    }
    return TableGrid;
}(xml_components_1.XmlComponent));
exports.TableGrid = TableGrid;
var GridCol = /** @class */ (function (_super) {
    __extends(GridCol, _super);
    function GridCol(width) {
        var _this = _super.call(this, "w:gridCol") || this;
        if (width !== undefined) {
            _this.root.push(new xml_components_1.NextAttributeComponent({
                width: { key: "w:w", value: (0, values_1.twipsMeasureValue)(width) },
            }));
        }
        return _this;
    }
    return GridCol;
}(xml_components_1.XmlComponent));
exports.GridCol = GridCol;
