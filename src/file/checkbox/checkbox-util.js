"use strict";
// <xsd:complexType name="CT_SdtCheckbox">
//    <xsd:sequence>
//        <xsd:element name="checked" type="CT_OnOff" minOccurs="0"/>
//        <xsd:element name="checkedState" type="CT_SdtCheckboxSymbol" minOccurs="0"/>
//        <xsd:element name="uncheckedState" type="CT_SdtCheckboxSymbol" minOccurs="0"/>
//    </xsd:sequence>
// </xsd:complexType>
// <xsd:element name="checkbox" type="CT_SdtCheckbox"/>
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
exports.CheckBoxUtil = void 0;
var checkbox_symbol_1 = require("@file/checkbox/checkbox-symbol");
var xml_components_1 = require("@file/xml-components");
var CheckBoxUtil = /** @class */ (function (_super) {
    __extends(CheckBoxUtil, _super);
    function CheckBoxUtil(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var _this = _super.call(this, "w14:checkbox") || this;
        _this.DEFAULT_UNCHECKED_SYMBOL = "2610";
        _this.DEFAULT_CHECKED_SYMBOL = "2612";
        _this.DEFAULT_FONT = "MS Gothic";
        var value = (options === null || options === void 0 ? void 0 : options.checked) ? "1" : "0";
        var symbol;
        var font;
        _this.root.push(new checkbox_symbol_1.CheckBoxSymbolElement("w14:checked", value));
        symbol = ((_a = options === null || options === void 0 ? void 0 : options.checkedState) === null || _a === void 0 ? void 0 : _a.value) ? (_b = options === null || options === void 0 ? void 0 : options.checkedState) === null || _b === void 0 ? void 0 : _b.value : _this.DEFAULT_CHECKED_SYMBOL;
        font = ((_c = options === null || options === void 0 ? void 0 : options.checkedState) === null || _c === void 0 ? void 0 : _c.font) ? (_d = options === null || options === void 0 ? void 0 : options.checkedState) === null || _d === void 0 ? void 0 : _d.font : _this.DEFAULT_FONT;
        _this.root.push(new checkbox_symbol_1.CheckBoxSymbolElement("w14:checkedState", symbol, font));
        symbol = ((_e = options === null || options === void 0 ? void 0 : options.uncheckedState) === null || _e === void 0 ? void 0 : _e.value) ? (_f = options === null || options === void 0 ? void 0 : options.uncheckedState) === null || _f === void 0 ? void 0 : _f.value : _this.DEFAULT_UNCHECKED_SYMBOL;
        font = ((_g = options === null || options === void 0 ? void 0 : options.uncheckedState) === null || _g === void 0 ? void 0 : _g.font) ? (_h = options === null || options === void 0 ? void 0 : options.uncheckedState) === null || _h === void 0 ? void 0 : _h.font : _this.DEFAULT_FONT;
        _this.root.push(new checkbox_symbol_1.CheckBoxSymbolElement("w14:uncheckedState", symbol, font));
        return _this;
    }
    return CheckBoxUtil;
}(xml_components_1.XmlComponent));
exports.CheckBoxUtil = CheckBoxUtil;
