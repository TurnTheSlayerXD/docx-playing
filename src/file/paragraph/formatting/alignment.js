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
exports.Alignment = exports.AlignmentAttributes = exports.AlignmentType = void 0;
// http://officeopenxml.com/WPalignment.php
// http://officeopenxml.com/WPtableAlignment.php
// http://www.datypic.com/sc/ooxml/t-w_ST_Jc.html
var xml_components_1 = require("@file/xml-components");
// <xsd:simpleType name="ST_Jc">
//     <xsd:restriction base="xsd:string">
//         <xsd:enumeration value="start"/>
//         <xsd:enumeration value="center"/>
//         <xsd:enumeration value="end"/>
//         <xsd:enumeration value="both"/>
//         <xsd:enumeration value="mediumKashida"/>
//         <xsd:enumeration value="distribute"/>
//         <xsd:enumeration value="numTab"/>
//         <xsd:enumeration value="highKashida"/>
//         <xsd:enumeration value="lowKashida"/>
//         <xsd:enumeration value="thaiDistribute"/>
//         <xsd:enumeration value="left"/>
//         <xsd:enumeration value="right"/>
//     </xsd:restriction>
// </xsd:simpleType>
exports.AlignmentType = {
    /** Align Start */
    START: "start",
    /** Align Center */
    CENTER: "center",
    /** End */
    END: "end",
    /** Justified */
    BOTH: "both",
    /** Medium Kashida Length */
    MEDIUM_KASHIDA: "mediumKashida",
    /** Distribute All Characters Equally */
    DISTRIBUTE: "distribute",
    /** Align to List Tab */
    NUM_TAB: "numTab",
    /** Widest Kashida Length */
    HIGH_KASHIDA: "highKashida",
    /** Low Kashida Length */
    LOW_KASHIDA: "lowKashida",
    /** Thai Language Justification */
    THAI_DISTRIBUTE: "thaiDistribute",
    /** Align Left */
    LEFT: "left",
    /** Align Right */
    RIGHT: "right",
    /** Justified */
    JUSTIFIED: "both",
};
var AlignmentAttributes = /** @class */ (function (_super) {
    __extends(AlignmentAttributes, _super);
    function AlignmentAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { val: "w:val" };
        return _this;
    }
    return AlignmentAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.AlignmentAttributes = AlignmentAttributes;
var Alignment = /** @class */ (function (_super) {
    __extends(Alignment, _super);
    function Alignment(type) {
        var _this = _super.call(this, "w:jc") || this;
        _this.root.push(new AlignmentAttributes({ val: type }));
        return _this;
    }
    return Alignment;
}(xml_components_1.XmlComponent));
exports.Alignment = Alignment;
