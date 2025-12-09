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
exports.MathFunction = void 0;
// http://www.datypic.com/sc/ooxml/e-m_func-1.html
var xml_components_1 = require("@file/xml-components");
var n_ary_1 = require("../n-ary");
var math_function_name_1 = require("./math-function-name");
var math_function_properties_1 = require("./math-function-properties");
var MathFunction = /** @class */ (function (_super) {
    __extends(MathFunction, _super);
    function MathFunction(options) {
        var _this = _super.call(this, "m:func") || this;
        _this.root.push(new math_function_properties_1.MathFunctionProperties());
        _this.root.push(new math_function_name_1.MathFunctionName(options.name));
        _this.root.push((0, n_ary_1.createMathBase)({ children: options.children }));
        return _this;
    }
    return MathFunction;
}(xml_components_1.XmlComponent));
exports.MathFunction = MathFunction;
