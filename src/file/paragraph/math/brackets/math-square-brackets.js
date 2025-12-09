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
exports.MathSquareBrackets = void 0;
// http://www.datypic.com/sc/ooxml/e-m_d-1.html
var xml_components_1 = require("@file/xml-components");
var n_ary_1 = require("../n-ary");
var math_bracket_properties_1 = require("./math-bracket-properties");
var MathSquareBrackets = /** @class */ (function (_super) {
    __extends(MathSquareBrackets, _super);
    function MathSquareBrackets(options) {
        var _this = _super.call(this, "m:d") || this;
        _this.root.push((0, math_bracket_properties_1.createMathBracketProperties)({
            characters: {
                beginningCharacter: "[",
                endingCharacter: "]",
            },
        }));
        _this.root.push((0, n_ary_1.createMathBase)({ children: options.children }));
        return _this;
    }
    return MathSquareBrackets;
}(xml_components_1.XmlComponent));
exports.MathSquareBrackets = MathSquareBrackets;
