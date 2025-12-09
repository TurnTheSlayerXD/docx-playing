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
exports.Indent = void 0;
// http://officeopenxml.com/WPindentation.php
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
// <xsd:complexType name="CT_PPrBase">
// <xsd:sequence>
//     ...
//     <xsd:element name="ind" type="CT_Ind" minOccurs="0"/>
var Indent = /** @class */ (function (_super) {
    __extends(Indent, _super);
    function Indent(_a) {
        var start = _a.start, end = _a.end, left = _a.left, right = _a.right, hanging = _a.hanging, firstLine = _a.firstLine;
        var _this = _super.call(this, "w:ind") || this;
        // <xsd:complexType name="CT_Ind">
        //     <xsd:attribute name="start" type="ST_SignedTwipsMeasure" use="optional"/>
        //     <xsd:attribute name="startChars" type="ST_DecimalNumber" use="optional"/>
        //     <xsd:attribute name="end" type="ST_SignedTwipsMeasure" use="optional"/>
        //     <xsd:attribute name="endChars" type="ST_DecimalNumber" use="optional"/>
        //     <xsd:attribute name="left" type="ST_SignedTwipsMeasure" use="optional"/>
        //     <xsd:attribute name="leftChars" type="ST_DecimalNumber" use="optional"/>
        //     <xsd:attribute name="right" type="ST_SignedTwipsMeasure" use="optional"/>
        //     <xsd:attribute name="rightChars" type="ST_DecimalNumber" use="optional"/>
        //     <xsd:attribute name="hanging" type="s:ST_TwipsMeasure" use="optional"/>
        //     <xsd:attribute name="hangingChars" type="ST_DecimalNumber" use="optional"/>
        //     <xsd:attribute name="firstLine" type="s:ST_TwipsMeasure" use="optional"/>
        //     <xsd:attribute name="firstLineChars" type="ST_DecimalNumber" use="optional"/>
        // </xsd:complexType>
        _this.root.push(new xml_components_1.NextAttributeComponent({
            start: {
                key: "w:start",
                value: start === undefined ? undefined : (0, values_1.signedTwipsMeasureValue)(start),
            },
            end: {
                key: "w:end",
                value: end === undefined ? undefined : (0, values_1.signedTwipsMeasureValue)(end),
            },
            left: {
                key: "w:left",
                value: left === undefined ? undefined : (0, values_1.signedTwipsMeasureValue)(left),
            },
            right: {
                key: "w:right",
                value: right === undefined ? undefined : (0, values_1.signedTwipsMeasureValue)(right),
            },
            hanging: {
                key: "w:hanging",
                value: hanging === undefined ? undefined : (0, values_1.twipsMeasureValue)(hanging),
            },
            firstLine: {
                key: "w:firstLine",
                value: firstLine === undefined ? undefined : (0, values_1.twipsMeasureValue)(firstLine),
            },
        }));
        return _this;
    }
    return Indent;
}(xml_components_1.XmlComponent));
exports.Indent = Indent;
