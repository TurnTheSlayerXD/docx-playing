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
exports.HighlightComplexScript = exports.Highlight = exports.Color = exports.CharacterSpacing = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var CharacterSpacing = /** @class */ (function (_super) {
    __extends(CharacterSpacing, _super);
    function CharacterSpacing(value) {
        var _this = _super.call(this, "w:spacing") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: (0, values_1.signedTwipsMeasureValue)(value),
        }));
        return _this;
    }
    return CharacterSpacing;
}(xml_components_1.XmlComponent));
exports.CharacterSpacing = CharacterSpacing;
// <xsd:complexType name="CT_Color">
//     <xsd:attribute name="val" type="ST_HexColor" use="required"/>
//     <xsd:attribute name="themeColor" type="ST_ThemeColor" use="optional"/>
//     <xsd:attribute name="themeTint" type="ST_UcharHexNumber" use="optional"/>
//     <xsd:attribute name="themeShade" type="ST_UcharHexNumber" use="optional"/>
// </xsd:complexType>
var Color = /** @class */ (function (_super) {
    __extends(Color, _super);
    function Color(color) {
        var _this = _super.call(this, "w:color") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: (0, values_1.hexColorValue)(color),
        }));
        return _this;
    }
    return Color;
}(xml_components_1.XmlComponent));
exports.Color = Color;
// <xsd:simpleType name="ST_HighlightColor">
//     <xsd:restriction base="xsd:string">
//         <xsd:enumeration value="black"/>
//         <xsd:enumeration value="blue"/>
//         <xsd:enumeration value="cyan"/>
//         <xsd:enumeration value="green"/>
//         <xsd:enumeration value="magenta"/>
//         <xsd:enumeration value="red"/>
//         <xsd:enumeration value="yellow"/>
//         <xsd:enumeration value="white"/>
//         <xsd:enumeration value="darkBlue"/>
//         <xsd:enumeration value="darkCyan"/>
//         <xsd:enumeration value="darkGreen"/>
//         <xsd:enumeration value="darkMagenta"/>
//         <xsd:enumeration value="darkRed"/>
//         <xsd:enumeration value="darkYellow"/>
//         <xsd:enumeration value="darkGray"/>
//         <xsd:enumeration value="lightGray"/>
//         <xsd:enumeration value="none"/>
//     </xsd:restriction>
// </xsd:simpleType>
var Highlight = /** @class */ (function (_super) {
    __extends(Highlight, _super);
    function Highlight(color) {
        var _this = _super.call(this, "w:highlight") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: color,
        }));
        return _this;
    }
    return Highlight;
}(xml_components_1.XmlComponent));
exports.Highlight = Highlight;
var HighlightComplexScript = /** @class */ (function (_super) {
    __extends(HighlightComplexScript, _super);
    function HighlightComplexScript(color) {
        var _this = _super.call(this, "w:highlightCs") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: color,
        }));
        return _this;
    }
    return HighlightComplexScript;
}(xml_components_1.XmlComponent));
exports.HighlightComplexScript = HighlightComplexScript;
