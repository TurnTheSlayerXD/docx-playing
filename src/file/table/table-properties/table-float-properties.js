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
exports.TableFloatProperties = exports.OverlapType = exports.RelativeVerticalPosition = exports.RelativeHorizontalPosition = exports.TableAnchorType = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
exports.TableAnchorType = {
    MARGIN: "margin",
    PAGE: "page",
    TEXT: "text",
};
exports.RelativeHorizontalPosition = {
    CENTER: "center",
    INSIDE: "inside",
    LEFT: "left",
    OUTSIDE: "outside",
    RIGHT: "right",
};
exports.RelativeVerticalPosition = {
    CENTER: "center",
    INSIDE: "inside",
    BOTTOM: "bottom",
    OUTSIDE: "outside",
    INLINE: "inline",
    TOP: "top",
};
// <xsd:simpleType name="ST_TblOverlap">
//     <xsd:restriction base="xsd:string">
//         <xsd:enumeration value="never"/>
//         <xsd:enumeration value="overlap"/>
//     </xsd:restriction>
// </xsd:simpleType>
exports.OverlapType = {
    NEVER: "never",
    OVERLAP: "overlap",
};
// <xsd:complexType name="CT_TblPPr">
//     <xsd:attribute name="leftFromText" type="s:ST_TwipsMeasure"/>
//     <xsd:attribute name="rightFromText" type="s:ST_TwipsMeasure"/>
//     <xsd:attribute name="topFromText" type="s:ST_TwipsMeasure"/>
//     <xsd:attribute name="bottomFromText" type="s:ST_TwipsMeasure"/>
//     <xsd:attribute name="vertAnchor" type="ST_VAnchor"/>
//     <xsd:attribute name="horzAnchor" type="ST_HAnchor"/>
//     <xsd:attribute name="tblpXSpec" type="s:ST_XAlign"/>
//     <xsd:attribute name="tblpX" type="ST_SignedTwipsMeasure"/>
//     <xsd:attribute name="tblpYSpec" type="s:ST_YAlign"/>
//     <xsd:attribute name="tblpY" type="ST_SignedTwipsMeasure"/>
// </xsd:complexType>
var TableFloatProperties = /** @class */ (function (_super) {
    __extends(TableFloatProperties, _super);
    function TableFloatProperties(_a) {
        var horizontalAnchor = _a.horizontalAnchor, verticalAnchor = _a.verticalAnchor, absoluteHorizontalPosition = _a.absoluteHorizontalPosition, relativeHorizontalPosition = _a.relativeHorizontalPosition, absoluteVerticalPosition = _a.absoluteVerticalPosition, relativeVerticalPosition = _a.relativeVerticalPosition, bottomFromText = _a.bottomFromText, topFromText = _a.topFromText, leftFromText = _a.leftFromText, rightFromText = _a.rightFromText, overlap = _a.overlap;
        var _this = _super.call(this, "w:tblpPr") || this;
        _this.root.push(new xml_components_1.NextAttributeComponent({
            leftFromText: {
                key: "w:leftFromText",
                value: leftFromText === undefined ? undefined : (0, values_1.twipsMeasureValue)(leftFromText),
            },
            rightFromText: {
                key: "w:rightFromText",
                value: rightFromText === undefined ? undefined : (0, values_1.twipsMeasureValue)(rightFromText),
            },
            topFromText: {
                key: "w:topFromText",
                value: topFromText === undefined ? undefined : (0, values_1.twipsMeasureValue)(topFromText),
            },
            bottomFromText: {
                key: "w:bottomFromText",
                value: bottomFromText === undefined ? undefined : (0, values_1.twipsMeasureValue)(bottomFromText),
            },
            absoluteHorizontalPosition: {
                key: "w:tblpX",
                value: absoluteHorizontalPosition === undefined ? undefined : (0, values_1.signedTwipsMeasureValue)(absoluteHorizontalPosition),
            },
            absoluteVerticalPosition: {
                key: "w:tblpY",
                value: absoluteVerticalPosition === undefined ? undefined : (0, values_1.signedTwipsMeasureValue)(absoluteVerticalPosition),
            },
            horizontalAnchor: {
                key: "w:horzAnchor",
                value: horizontalAnchor === undefined ? undefined : horizontalAnchor,
            },
            relativeHorizontalPosition: {
                key: "w:tblpXSpec",
                value: relativeHorizontalPosition,
            },
            relativeVerticalPosition: {
                key: "w:tblpYSpec",
                value: relativeVerticalPosition,
            },
            verticalAnchor: {
                key: "w:vertAnchor",
                value: verticalAnchor,
            },
        }));
        if (overlap) {
            // <xsd:complexType name="CT_TblOverlap">
            //     <xsd:attribute name="val" type="ST_TblOverlap" use="required"/>
            // </xsd:complexType>
            _this.root.push(new xml_components_1.StringEnumValueElement("w:tblOverlap", overlap));
        }
        return _this;
    }
    return TableFloatProperties;
}(xml_components_1.XmlComponent));
exports.TableFloatProperties = TableFloatProperties;
