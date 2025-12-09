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
exports.TableRow = void 0;
var xml_components_1 = require("@file/xml-components");
var table_cell_1 = require("../table-cell");
var table_row_properties_1 = require("./table-row-properties");
var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow(options) {
        var _this = _super.call(this, "w:tr") || this;
        _this.options = options;
        _this.root.push(new table_row_properties_1.TableRowProperties(options));
        for (var _i = 0, _a = options.children; _i < _a.length; _i++) {
            var child = _a[_i];
            _this.root.push(child);
        }
        return _this;
    }
    Object.defineProperty(TableRow.prototype, "CellCount", {
        get: function () {
            return this.options.children.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableRow.prototype, "cells", {
        get: function () {
            return this.root.filter(function (xmlComponent) { return xmlComponent instanceof table_cell_1.TableCell; });
        },
        enumerable: false,
        configurable: true
    });
    TableRow.prototype.addCellToIndex = function (cell, index) {
        // Offset because properties is also in root.
        this.root.splice(index + 1, 0, cell);
    };
    TableRow.prototype.addCellToColumnIndex = function (cell, columnIndex) {
        var rootIndex = this.columnIndexToRootIndex(columnIndex, true);
        this.addCellToIndex(cell, rootIndex - 1);
    };
    TableRow.prototype.rootIndexToColumnIndex = function (rootIndex) {
        // convert the root index to the virtual column index
        if (rootIndex < 1 || rootIndex >= this.root.length) {
            throw new Error("cell 'rootIndex' should between 1 to ".concat(this.root.length - 1));
        }
        var colIdx = 0;
        // Offset because properties is also in root.
        for (var rootIdx = 1; rootIdx < rootIndex; rootIdx++) {
            var cell = this.root[rootIdx];
            colIdx += cell.options.columnSpan || 1;
        }
        return colIdx;
    };
    TableRow.prototype.columnIndexToRootIndex = function (columnIndex, allowEndNewCell) {
        if (allowEndNewCell === void 0) { allowEndNewCell = false; }
        // convert the virtual column index to the root index
        // `allowEndNewCell` for get index to inert new cell
        if (columnIndex < 0) {
            throw new Error("cell 'columnIndex' should not less than zero");
        }
        var colIdx = 0;
        // Offset because properties is also in root.
        var rootIdx = 1;
        while (colIdx <= columnIndex) {
            if (rootIdx >= this.root.length) {
                if (allowEndNewCell) {
                    // for inserting verticalMerge CONTINUE cell at end of row
                    return this.root.length;
                }
                else {
                    throw new Error("cell 'columnIndex' should not great than ".concat(colIdx - 1));
                }
            }
            var cell = this.root[rootIdx];
            rootIdx += 1;
            colIdx += (cell && cell.options.columnSpan) || 1;
        }
        return rootIdx - 1;
    };
    return TableRow;
}(xml_components_1.XmlComponent));
exports.TableRow = TableRow;
