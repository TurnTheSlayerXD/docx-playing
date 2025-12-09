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
exports.MathLimitUpper = void 0;
// http://www.datypic.com/sc/ooxml/e-m_limUpp-1.html
var xml_components_1 = require("@file/xml-components");
var math_base_1 = require("./math-base");
var math_limit_1 = require("./math-limit");
var MathLimitUpper = /** @class */ (function (_super) {
    __extends(MathLimitUpper, _super);
    function MathLimitUpper(options) {
        var _this = _super.call(this, "m:limUpp") || this;
        _this.root.push((0, math_base_1.createMathBase)({ children: options.children }));
        _this.root.push(new math_limit_1.MathLimit(options.limit));
        return _this;
    }
    return MathLimitUpper;
}(xml_components_1.XmlComponent));
exports.MathLimitUpper = MathLimitUpper;
