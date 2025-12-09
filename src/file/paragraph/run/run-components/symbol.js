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
exports.Symbol = void 0;
var xml_components_1 = require("@file/xml-components");
var SymbolAttributes = /** @class */ (function (_super) {
    __extends(SymbolAttributes, _super);
    function SymbolAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            char: "w:char",
            symbolfont: "w:font",
        };
        return _this;
    }
    return SymbolAttributes;
}(xml_components_1.XmlAttributeComponent));
var Symbol = /** @class */ (function (_super) {
    __extends(Symbol, _super);
    function Symbol(char, symbolfont) {
        if (char === void 0) { char = ""; }
        if (symbolfont === void 0) { symbolfont = "Wingdings"; }
        var _this = _super.call(this, "w:sym") || this;
        _this.root.push(new SymbolAttributes({ char: char, symbolfont: symbolfont }));
        return _this;
    }
    return Symbol;
}(xml_components_1.XmlComponent));
exports.Symbol = Symbol;
