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
exports.Table = void 0;
// http://officeopenxml.com/WPtableGrid.php
var file_child_1 = require("@file/file-child");
var grid_1 = require("./grid");
var table_cell_1 = require("./table-cell");
var table_properties_1 = require("./table-properties");
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(_a) {
        var rows = _a.rows, width = _a.width, 
        // eslint-disable-next-line functional/immutable-data
        _b = _a.columnWidths, 
        // eslint-disable-next-line functional/immutable-data
        columnWidths = _b === void 0 ? Array(Math.max.apply(Math, rows.map(function (row) { return row.CellCount; }))).fill(100) : _b, margins = _a.margins, indent = _a.indent, float = _a.float, layout = _a.layout, style = _a.style, borders = _a.borders, alignment = _a.alignment, visuallyRightToLeft = _a.visuallyRightToLeft, cellSpacing = _a.cellSpacing;
        var _this = _super.call(this, "w:tbl") || this;
        _this.root.push(new table_properties_1.TableProperties({
            borders: borders !== null && borders !== void 0 ? borders : {},
            width: width !== null && width !== void 0 ? width : { size: 100 },
            indent: indent,
            float: float,
            layout: layout,
            style: style,
            alignment: alignment,
            cellMargin: margins,
            visuallyRightToLeft: visuallyRightToLeft,
            cellSpacing: cellSpacing,
        }));
        _this.root.push(new grid_1.TableGrid(columnWidths));
        for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            var row = rows_1[_i];
            _this.root.push(row);
        }
        rows.forEach(function (row, rowIndex) {
            if (rowIndex === rows.length - 1) {
                // don't process the end row
                return;
            }
            var columnIndex = 0;
            row.cells.forEach(function (cell) {
                // Row Span has to be added in this method and not the constructor because it needs to know information about the column which happens after Table Cell construction
                // Row Span of 1 will crash word as it will add RESTART and not a corresponding CONTINUE
                if (cell.options.rowSpan && cell.options.rowSpan > 1) {
                    var continueCell = new table_cell_1.TableCell({
                        // the inserted CONTINUE cell has rowSpan, and will be handled when process the next row
                        rowSpan: cell.options.rowSpan - 1,
                        columnSpan: cell.options.columnSpan,
                        borders: cell.options.borders,
                        children: [],
                        verticalMerge: table_cell_1.VerticalMergeType.CONTINUE,
                    });
                    rows[rowIndex + 1].addCellToColumnIndex(continueCell, columnIndex);
                }
                columnIndex += cell.options.columnSpan || 1;
            });
        });
        return _this;
    }
    return Table;
}(file_child_1.FileChild));
exports.Table = Table;
