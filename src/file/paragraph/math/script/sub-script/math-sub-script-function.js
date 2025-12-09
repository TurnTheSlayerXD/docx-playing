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
exports.MathSubScript = void 0;
// http://www.datypic.com/sc/ooxml/e-m_sSub-1.html
var xml_components_1 = require("@file/xml-components");
var math_sub_script_function_properties_1 = require("./math-sub-script-function-properties");
var n_ary_1 = require("../../n-ary");
var MathSubScript = /** @class */ (function (_super) {
    __extends(MathSubScript, _super);
    function MathSubScript(options) {
        var _this = _super.call(this, "m:sSub") || this;
        _this.root.push((0, math_sub_script_function_properties_1.createMathSubScriptProperties)());
        _this.root.push((0, n_ary_1.createMathBase)({ children: options.children }));
        _this.root.push((0, n_ary_1.createMathSubScriptElement)({ children: options.subScript }));
        return _this;
    }
    return MathSubScript;
}(xml_components_1.XmlComponent));
exports.MathSubScript = MathSubScript;
