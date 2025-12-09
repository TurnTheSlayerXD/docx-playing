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
exports.TableCellProperties = void 0;
var vertical_align_1 = require("@file/vertical-align");
var xml_components_1 = require("@file/xml-components");
var shading_1 = require("../../shading");
var table_cell_margin_1 = require("../table-properties/table-cell-margin");
var table_width_1 = require("../table-width");
var table_cell_components_1 = require("./table-cell-components");
var TableCellProperties = /** @class */ (function (_super) {
    __extends(TableCellProperties, _super);
    function TableCellProperties(options) {
        var _this = _super.call(this, "w:tcPr") || this;
        if (options.width) {
            _this.root.push(new table_width_1.TableWidthElement("w:tcW", options.width));
        }
        if (options.columnSpan) {
            _this.root.push(new table_cell_components_1.GridSpan(options.columnSpan));
        }
        if (options.verticalMerge) {
            _this.root.push(new table_cell_components_1.VerticalMerge(options.verticalMerge));
        }
        else if (options.rowSpan && options.rowSpan > 1) {
            // if cell already have a `verticalMerge`, don't handle `rowSpan`
            _this.root.push(new table_cell_components_1.VerticalMerge(table_cell_components_1.VerticalMergeType.RESTART));
        }
        if (options.borders) {
            _this.root.push(new table_cell_components_1.TableCellBorders(options.borders));
        }
        if (options.shading) {
            _this.root.push(new shading_1.Shading(options.shading));
        }
        if (options.margins) {
            _this.root.push(new table_cell_margin_1.TableCellMargin(table_cell_margin_1.TableCellMarginElementType.TABLE_CELL, options.margins));
        }
        if (options.textDirection) {
            _this.root.push(new table_cell_components_1.TDirection(options.textDirection));
        }
        if (options.verticalAlign) {
            _this.root.push(new vertical_align_1.VerticalAlignElement(options.verticalAlign));
        }
        return _this;
    }
    return TableCellProperties;
}(xml_components_1.IgnoreIfEmptyXmlComponent));
exports.TableCellProperties = TableCellProperties;
