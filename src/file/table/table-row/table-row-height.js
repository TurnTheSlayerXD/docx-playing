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
exports.TableRowHeight = exports.TableRowHeightAttributes = exports.HeightRule = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
// <xsd:complexType name="CT_Height">
//     <xsd:attribute name="val" type="s:ST_TwipsMeasure"/>
//     <xsd:attribute name="hRule" type="ST_HeightRule"/>
// </xsd:complexType>
// <xsd:simpleType name="ST_HeightRule">
//     <xsd:restriction base="xsd:string">
//         <xsd:enumeration value="auto"/>
//         <xsd:enumeration value="exact"/>
//         <xsd:enumeration value="atLeast"/>
//     </xsd:restriction>
// </xsd:simpleType>
exports.HeightRule = {
    /** Height is determined based on the content, so value is ignored. */
    AUTO: "auto",
    /** At least the value specified */
    ATLEAST: "atLeast",
    /** Exactly the value specified */
    EXACT: "exact",
};
var TableRowHeightAttributes = /** @class */ (function (_super) {
    __extends(TableRowHeightAttributes, _super);
    function TableRowHeightAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { value: "w:val", rule: "w:hRule" };
        return _this;
    }
    return TableRowHeightAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.TableRowHeightAttributes = TableRowHeightAttributes;
var TableRowHeight = /** @class */ (function (_super) {
    __extends(TableRowHeight, _super);
    function TableRowHeight(value, rule) {
        var _this = _super.call(this, "w:trHeight") || this;
        _this.root.push(new TableRowHeightAttributes({
            value: (0, values_1.twipsMeasureValue)(value),
            rule: rule,
        }));
        return _this;
    }
    return TableRowHeight;
}(xml_components_1.XmlComponent));
exports.TableRowHeight = TableRowHeight;
