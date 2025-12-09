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
exports.TableWidthElement = exports.WidthType = void 0;
// http://officeopenxml.com/WPtableWidth.php
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
// <xsd:simpleType name="ST_TblWidth">
//   <xsd:restriction base="xsd:string">
//     <xsd:enumeration value="nil"/>
//     <xsd:enumeration value="pct"/>
//     <xsd:enumeration value="dxa"/>
//     <xsd:enumeration value="auto"/>
//   </xsd:restriction>
// </xsd:simpleType>
exports.WidthType = {
    /** Auto. */
    AUTO: "auto",
    /** Value is in twentieths of a point */
    DXA: "dxa",
    /** No (empty) value. */
    NIL: "nil",
    /** Value is in percentage. */
    PERCENTAGE: "pct",
};
var TableWidthElement = /** @class */ (function (_super) {
    __extends(TableWidthElement, _super);
    function TableWidthElement(name, _a) {
        var _b = _a.type, type = _b === void 0 ? exports.WidthType.AUTO : _b, size = _a.size;
        var _this = _super.call(this, name) || this;
        // super("w:tblW");
        var tableWidthValue = size;
        if (type === exports.WidthType.PERCENTAGE && typeof size === "number") {
            tableWidthValue = "".concat(size, "%");
        }
        _this.root.push(new xml_components_1.NextAttributeComponent({
            type: { key: "w:type", value: type },
            size: { key: "w:w", value: (0, values_1.measurementOrPercentValue)(tableWidthValue) },
        }));
        return _this;
    }
    return TableWidthElement;
}(xml_components_1.XmlComponent));
exports.TableWidthElement = TableWidthElement;
