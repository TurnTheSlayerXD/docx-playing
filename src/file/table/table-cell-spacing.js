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
exports.TableCellSpacingElement = exports.CellSpacingType = void 0;
// http://officeopenxml.com/WPtableCellSpacing.php
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
// <xsd:simpleType name="ST_TblCellSpacing">
//   <xsd:restriction base="xsd:string">
//     <xsd:enumeration value="nil"/>
//     <xsd:enumeration value="dxa"/>
//   </xsd:restriction>
// </xsd:simpleType>
exports.CellSpacingType = {
    /** Value is in twentieths of a point */
    DXA: "dxa",
    /** No (empty) value. */
    NIL: "nil",
};
var TableCellSpacingElement = /** @class */ (function (_super) {
    __extends(TableCellSpacingElement, _super);
    function TableCellSpacingElement(_a) {
        var _b = _a.type, type = _b === void 0 ? exports.CellSpacingType.DXA : _b, value = _a.value;
        var _this = _super.call(this, "w:tblCellSpacing") || this;
        _this.root.push(new xml_components_1.NextAttributeComponent({
            type: { key: "w:type", value: type },
            value: { key: "w:w", value: (0, values_1.measurementOrPercentValue)(value) },
        }));
        return _this;
    }
    return TableCellSpacingElement;
}(xml_components_1.XmlComponent));
exports.TableCellSpacingElement = TableCellSpacingElement;
