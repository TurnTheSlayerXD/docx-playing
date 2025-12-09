"use strict";
// This represents element type CT_SdtCheckboxSymbol element
// <xsd:complexType name="CT_SdtCheckboxSymbol">
//   <xsd:attribute name="font" type="w:ST_String"/>
//    <xsd:attribute name="val" type="w:ST_ShortHexNumber"/>
// </xsd:complexType>
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
exports.CheckBoxSymbolElement = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var CheckboxSymbolAttributes = /** @class */ (function (_super) {
    __extends(CheckboxSymbolAttributes, _super);
    function CheckboxSymbolAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            val: "w14:val",
            symbolfont: "w14:font",
        };
        return _this;
    }
    return CheckboxSymbolAttributes;
}(xml_components_1.XmlAttributeComponent));
var CheckBoxSymbolElement = /** @class */ (function (_super) {
    __extends(CheckBoxSymbolElement, _super);
    function CheckBoxSymbolElement(name, val, font) {
        var _this = _super.call(this, name) || this;
        if (font) {
            _this.root.push(new CheckboxSymbolAttributes({ val: (0, values_1.shortHexNumber)(val), symbolfont: font }));
        }
        else {
            _this.root.push(new CheckboxSymbolAttributes({ val: val }));
        }
        return _this;
    }
    return CheckBoxSymbolElement;
}(xml_components_1.XmlComponent));
exports.CheckBoxSymbolElement = CheckBoxSymbolElement;
