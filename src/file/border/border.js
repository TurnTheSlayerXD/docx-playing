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
exports.BorderStyle = exports.BorderElement = void 0;
// Note that the border type is identical in all places,
// regardless of where it's used like paragraph/table/etc.
// PageBorders are a superset, but we're not using any of those extras.
//
// http://officeopenxml.com/WPborders.php
// http://officeopenxml.com/WPtableBorders.php
// http://officeopenxml.com/WPtableCellProperties-Borders.php
// http://officeopenxml.com/WPsectionBorders.php
//
// This describes the CT_Border type.
// <xsd:complexType name="CT_Border">
//     <xsd:attribute name="val" type="ST_Border" use="required"/>
//     <xsd:attribute name="color" type="ST_HexColor" use="optional" default="auto"/>
//     <xsd:attribute name="themeColor" type="ST_ThemeColor" use="optional"/>
//     <xsd:attribute name="themeTint" type="ST_UcharHexNumber" use="optional"/>
//     <xsd:attribute name="themeShade" type="ST_UcharHexNumber" use="optional"/>
//     <xsd:attribute name="sz" type="ST_EighthPointMeasure" use="optional"/>
//     <xsd:attribute name="space" type="ST_PointMeasure" use="optional" default="0"/>
//     <xsd:attribute name="shadow" type="s:ST_OnOff" use="optional"/>
//     <xsd:attribute name="frame" type="s:ST_OnOff" use="optional"/>
// </xsd:complexType>
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var BorderElement = /** @class */ (function (_super) {
    __extends(BorderElement, _super);
    function BorderElement(elementName, _a) {
        var color = _a.color, size = _a.size, space = _a.space, style = _a.style;
        var _this = _super.call(this, elementName) || this;
        _this.root.push(new BordersAttributes({
            style: style,
            color: color === undefined ? undefined : (0, values_1.hexColorValue)(color),
            size: size === undefined ? undefined : (0, values_1.eighthPointMeasureValue)(size),
            space: space === undefined ? undefined : (0, values_1.pointMeasureValue)(space),
        }));
        return _this;
    }
    return BorderElement;
}(xml_components_1.XmlComponent));
exports.BorderElement = BorderElement;
var BordersAttributes = /** @class */ (function (_super) {
    __extends(BordersAttributes, _super);
    function BordersAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            style: "w:val",
            color: "w:color",
            size: "w:sz",
            space: "w:space",
        };
        return _this;
    }
    return BordersAttributes;
}(xml_components_1.XmlAttributeComponent));
/**
 * Table borders are defined with the <w:tblBorders> element. Child elements of this element specify the kinds of `border`:
 *
 * `bottom`, `end` (`right` in the previous version of the standard), `insideH`, `insideV`, `start` (`left` in the previous version of the standard), and `top`.
 *
 * Reference: http://officeopenxml.com/WPtableBorders.php
 *
 * ## XSD Schema
 * ```xml
 * <xsd:simpleType name="ST_Border">
 *     <xsd:restriction base="xsd:string">
 *          <xsd:enumeration value="single"/>
 *          <xsd:enumeration value="dashDotStroked"/>
 *          <xsd:enumeration value="dashed"/>
 *          <xsd:enumeration value="dashSmallGap"/>
 *          <xsd:enumeration value="dotDash"/>
 *          <xsd:enumeration value="dotDotDash"/>
 *          <xsd:enumeration value="dotted"/>
 *          <xsd:enumeration value="double"/>
 *          <xsd:enumeration value="doubleWave"/>
 *          <xsd:enumeration value="inset"/>
 *          <xsd:enumeration value="nil"/>
 *          <xsd:enumeration value="none"/>
 *          <xsd:enumeration value="outset"/>
 *          <xsd:enumeration value="thick"/>
 *          <xsd:enumeration value="thickThinLargeGap"/>
 *          <xsd:enumeration value="thickThinMediumGap"/>
 *          <xsd:enumeration value="thickThinSmallGap"/>
 *          <xsd:enumeration value="thinThickLargeGap"/>
 *          <xsd:enumeration value="thinThickMediumGap"/>
 *          <xsd:enumeration value="thinThickSmallGap"/>
 *          <xsd:enumeration value="thinThickThinLargeGap"/>
 *          <xsd:enumeration value="thinThickThinMediumGap"/>
 *          <xsd:enumeration value="thinThickThinSmallGap"/>
 *          <xsd:enumeration value="threeDEmboss"/>
 *          <xsd:enumeration value="threeDEngrave"/>
 *          <xsd:enumeration value="triple"/>
 *          <xsd:enumeration value="wave"/>
 *     </xsd:restriction>
 * </xsd:simpleType>
 * ```
 */
exports.BorderStyle = {
    /** a single line */
    SINGLE: "single",
    /** a line with a series of alternating thin and thick strokes */
    DASH_DOT_STROKED: "dashDotStroked",
    /** a dashed line */
    DASHED: "dashed",
    /** a dashed line with small gaps */
    DASH_SMALL_GAP: "dashSmallGap",
    /** a line with alternating dots and dashes */
    DOT_DASH: "dotDash",
    /** a line with a repeating dot - dot - dash sequence */
    DOT_DOT_DASH: "dotDotDash",
    /** a dotted line */
    DOTTED: "dotted",
    /** a double line */
    DOUBLE: "double",
    /** a double wavy line */
    DOUBLE_WAVE: "doubleWave",
    /** an inset set of lines */
    INSET: "inset",
    /** no border */
    NIL: "nil",
    /** no border */
    NONE: "none",
    /** an outset set of lines */
    OUTSET: "outset",
    /** a single line */
    THICK: "thick",
    /** a thick line contained within a thin line with a large-sized intermediate gap */
    THICK_THIN_LARGE_GAP: "thickThinLargeGap",
    /** a thick line contained within a thin line with a medium-sized intermediate gap */
    THICK_THIN_MEDIUM_GAP: "thickThinMediumGap",
    /** a thick line contained within a thin line with a small intermediate gap */
    THICK_THIN_SMALL_GAP: "thickThinSmallGap",
    /** a thin line contained within a thick line with a large-sized intermediate gap */
    THIN_THICK_LARGE_GAP: "thinThickLargeGap",
    /** a thick line contained within a thin line with a medium-sized intermediate gap */
    THIN_THICK_MEDIUM_GAP: "thinThickMediumGap",
    /** a thick line contained within a thin line with a small intermediate gap */
    THIN_THICK_SMALL_GAP: "thinThickSmallGap",
    /** a thin-thick-thin line with a large gap */
    THIN_THICK_THIN_LARGE_GAP: "thinThickThinLargeGap",
    /** a thin-thick-thin line with a medium gap */
    THIN_THICK_THIN_MEDIUM_GAP: "thinThickThinMediumGap",
    /** a thin-thick-thin line with a small gap */
    THIN_THICK_THIN_SMALL_GAP: "thinThickThinSmallGap",
    /** a three-staged gradient line, getting darker towards the paragraph */
    THREE_D_EMBOSS: "threeDEmboss",
    /** a three-staged gradient like, getting darker away from the paragraph */
    THREE_D_ENGRAVE: "threeDEngrave",
    /** a triple line */
    TRIPLE: "triple",
    /** a wavy line */
    WAVE: "wave",
};
