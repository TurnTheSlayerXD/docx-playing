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
exports.TableCell = void 0;
// http://officeopenxml.com/WPtableGrid.php
var paragraph_1 = require("@file/paragraph");
var xml_components_1 = require("@file/xml-components");
var table_cell_properties_1 = require("./table-cell-properties");
var TableCell = /** @class */ (function (_super) {
    __extends(TableCell, _super);
    function TableCell(options) {
        var _this = _super.call(this, "w:tc") || this;
        _this.options = options;
        _this.root.push(new table_cell_properties_1.TableCellProperties(options));
        for (var _i = 0, _a = options.children; _i < _a.length; _i++) {
            var child = _a[_i];
            _this.root.push(child);
        }
        return _this;
    }
    TableCell.prototype.prepForXml = function (context) {
        // Cells must end with a paragraph
        if (!(this.root[this.root.length - 1] instanceof paragraph_1.Paragraph)) {
            this.root.push(new paragraph_1.Paragraph({}));
        }
        return _super.prototype.prepForXml.call(this, context);
    };
    return TableCell;
}(xml_components_1.XmlComponent));
exports.TableCell = TableCell;
