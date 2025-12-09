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
exports.ShadingType = exports.Shading = void 0;
// Note that the shading type is identical in all places,
// regardless of where it's used like paragraph/table/etc.
//
// http://officeopenxml.com/WPshading.php
// http://officeopenxml.com/WPtableShading.php
// http://officeopenxml.com/WPtableCellProperties-Shading.php
//
// This describes the CT_Shd type.
// <xsd:complexType name="CT_Shd">
//     <xsd:attribute name="val" type="ST_Shd" use="required"/>
//     <xsd:attribute name="color" type="ST_HexColor" use="optional"/>
//     <xsd:attribute name="themeColor" type="ST_ThemeColor" use="optional"/>
//     <xsd:attribute name="themeTint" type="ST_UcharHexNumber" use="optional"/>
//     <xsd:attribute name="themeShade" type="ST_UcharHexNumber" use="optional"/>
//     <xsd:attribute name="fill" type="ST_HexColor" use="optional"/>
//     <xsd:attribute name="themeFill" type="ST_ThemeColor" use="optional"/>
//     <xsd:attribute name="themeFillTint" type="ST_UcharHexNumber" use="optional"/>
//     <xsd:attribute name="themeFillShade" type="ST_UcharHexNumber" use="optional"/>
// </xsd:complexType>
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var ShadingAttributes = /** @class */ (function (_super) {
    __extends(ShadingAttributes, _super);
    function ShadingAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            fill: "w:fill",
            color: "w:color",
            type: "w:val",
        };
        return _this;
    }
    return ShadingAttributes;
}(xml_components_1.XmlAttributeComponent));
var Shading = /** @class */ (function (_super) {
    __extends(Shading, _super);
    function Shading(_a) {
        var fill = _a.fill, color = _a.color, type = _a.type;
        var _this = _super.call(this, "w:shd") || this;
        _this.root.push(new ShadingAttributes({
            fill: fill === undefined ? undefined : (0, values_1.hexColorValue)(fill),
            color: color === undefined ? undefined : (0, values_1.hexColorValue)(color),
            type: type,
        }));
        return _this;
    }
    return Shading;
}(xml_components_1.XmlComponent));
exports.Shading = Shading;
exports.ShadingType = {
    CLEAR: "clear",
    DIAGONAL_CROSS: "diagCross",
    DIAGONAL_STRIPE: "diagStripe",
    HORIZONTAL_CROSS: "horzCross",
    HORIZONTAL_STRIPE: "horzStripe",
    NIL: "nil",
    PERCENT_5: "pct5",
    PERCENT_10: "pct10",
    PERCENT_12: "pct12",
    PERCENT_15: "pct15",
    PERCENT_20: "pct20",
    PERCENT_25: "pct25",
    PERCENT_30: "pct30",
    PERCENT_35: "pct35",
    PERCENT_37: "pct37",
    PERCENT_40: "pct40",
    PERCENT_45: "pct45",
    PERCENT_50: "pct50",
    PERCENT_55: "pct55",
    PERCENT_60: "pct60",
    PERCENT_62: "pct62",
    PERCENT_65: "pct65",
    PERCENT_70: "pct70",
    PERCENT_75: "pct75",
    PERCENT_80: "pct80",
    PERCENT_85: "pct85",
    PERCENT_87: "pct87",
    PERCENT_90: "pct90",
    PERCENT_95: "pct95",
    REVERSE_DIAGONAL_STRIPE: "reverseDiagStripe",
    SOLID: "solid",
    THIN_DIAGONAL_CROSS: "thinDiagCross",
    THIN_DIAGONAL_STRIPE: "thinDiagStripe",
    THIN_HORIZONTAL_CROSS: "thinHorzCross",
    THIN_REVERSE_DIAGONAL_STRIPE: "thinReverseDiagStripe",
    THIN_VERTICAL_STRIPE: "thinVertStripe",
    VERTICAL_STRIPE: "vertStripe",
};
