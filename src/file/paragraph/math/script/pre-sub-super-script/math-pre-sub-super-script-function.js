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
exports.MathPreSubSuperScript = void 0;
// http://www.datypic.com/sc/ooxml/e-m_sPre-1.html
var xml_components_1 = require("@file/xml-components");
var math_pre_sub_super_script_function_properties_1 = require("./math-pre-sub-super-script-function-properties");
var n_ary_1 = require("../../n-ary");
var MathPreSubSuperScript = /** @class */ (function (_super) {
    __extends(MathPreSubSuperScript, _super);
    function MathPreSubSuperScript(_a) {
        var children = _a.children, subScript = _a.subScript, superScript = _a.superScript;
        return _super.call(this, {
            name: "m:sPre",
            children: [
                (0, math_pre_sub_super_script_function_properties_1.createMathPreSubSuperScriptProperties)(),
                (0, n_ary_1.createMathBase)({ children: children }),
                (0, n_ary_1.createMathSubScriptElement)({ children: subScript }),
                (0, n_ary_1.createMathSuperScriptElement)({ children: superScript }),
            ],
        }) || this;
    }
    return MathPreSubSuperScript;
}(xml_components_1.BuilderElement));
exports.MathPreSubSuperScript = MathPreSubSuperScript;
