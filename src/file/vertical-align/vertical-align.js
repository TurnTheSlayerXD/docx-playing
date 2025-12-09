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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerticalAlignElement = exports.VerticalAlignAttributes = exports.VerticalAlign = exports.VerticalAlignSection = exports.VerticalAlignTable = void 0;
var xml_components_1 = require("@file/xml-components");
// <xsd:complexType name="CT_VerticalJc">
//     <xsd:attribute name="val" type="ST_VerticalJc" use="required"/>
// </xsd:complexType>
// <xsd:simpleType name="ST_VerticalJc">
// <xsd:restriction base="xsd:string">
//   <xsd:enumeration value="both"/>
//   <xsd:enumeration value="top"/>
//   <xsd:enumeration value="center"/>
//   <xsd:enumeration value="bottom"/>
// </xsd:restriction>
// </xsd:simpleType>
/**
 * Enumeration for table-cell vertical alignment. Only `top`, `center`, `bottom`
 * are valid according to ECMA-376 (§17.18.87 ST_VerticalJc within <w:tcPr>).
 */
exports.VerticalAlignTable = {
    TOP: "top",
    CENTER: "center",
    BOTTOM: "bottom",
};
/**
 * Enumeration for section (<w:sectPr>) vertical alignment. Adds `both` on top of
 * the table-cell set (§17.18.87 ST_VerticalJc within <w:sectPr>).
 */
exports.VerticalAlignSection = __assign(__assign({}, exports.VerticalAlignTable), { BOTH: "both" });
/**
 * @deprecated Use {@link VerticalAlignTable} for table cells or
 * {@link VerticalAlignSection} for section properties. This alias remains for
 * backward-compatibility and will be removed in the next major release.
 */
exports.VerticalAlign = exports.VerticalAlignSection;
var VerticalAlignAttributes = /** @class */ (function (_super) {
    __extends(VerticalAlignAttributes, _super);
    function VerticalAlignAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            verticalAlign: "w:val",
        };
        return _this;
    }
    return VerticalAlignAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.VerticalAlignAttributes = VerticalAlignAttributes;
var VerticalAlignElement = /** @class */ (function (_super) {
    __extends(VerticalAlignElement, _super);
    function VerticalAlignElement(value) {
        var _this = _super.call(this, "w:vAlign") || this;
        _this.root.push(new VerticalAlignAttributes({ verticalAlign: value }));
        return _this;
    }
    return VerticalAlignElement;
}(xml_components_1.XmlComponent));
exports.VerticalAlignElement = VerticalAlignElement;
