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
exports.MathSum = void 0;
// http://www.datypic.com/sc/ooxml/e-m_nary-1.html
var xml_components_1 = require("@file/xml-components");
var math_base_1 = require("./math-base");
var math_n_ary_properties_1 = require("./math-n-ary-properties");
var math_sub_script_1 = require("./math-sub-script");
var math_super_script_1 = require("./math-super-script");
var MathSum = /** @class */ (function (_super) {
    __extends(MathSum, _super);
    function MathSum(options) {
        var _this = _super.call(this, "m:nary") || this;
        _this.root.push((0, math_n_ary_properties_1.createMathNAryProperties)({
            accent: "∑",
            hasSuperScript: !!options.superScript,
            hasSubScript: !!options.subScript,
        }));
        if (!!options.subScript) {
            _this.root.push((0, math_sub_script_1.createMathSubScriptElement)({ children: options.subScript }));
        }
        if (!!options.superScript) {
            _this.root.push((0, math_super_script_1.createMathSuperScriptElement)({ children: options.superScript }));
        }
        _this.root.push((0, math_base_1.createMathBase)({ children: options.children }));
        return _this;
    }
    return MathSum;
}(xml_components_1.XmlComponent));
exports.MathSum = MathSum;
