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
exports.MathRadicalProperties = void 0;
// http://www.datypic.com/sc/ooxml/e-m_radPr-1.html
var xml_components_1 = require("@file/xml-components");
var math_degree_hide_1 = require("./math-degree-hide");
var MathRadicalProperties = /** @class */ (function (_super) {
    __extends(MathRadicalProperties, _super);
    function MathRadicalProperties(hasDegree) {
        var _this = _super.call(this, "m:radPr") || this;
        if (!hasDegree) {
            _this.root.push(new math_degree_hide_1.MathDegreeHide());
        }
        return _this;
    }
    return MathRadicalProperties;
}(xml_components_1.XmlComponent));
exports.MathRadicalProperties = MathRadicalProperties;
