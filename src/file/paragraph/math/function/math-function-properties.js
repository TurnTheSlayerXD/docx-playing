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
exports.MathFunctionProperties = void 0;
// http://www.datypic.com/sc/ooxml/e-m_radPr-1.html
var xml_components_1 = require("@file/xml-components");
var MathFunctionProperties = /** @class */ (function (_super) {
    __extends(MathFunctionProperties, _super);
    function MathFunctionProperties() {
        return _super.call(this, "m:funcPr") || this;
    }
    return MathFunctionProperties;
}(xml_components_1.XmlComponent));
exports.MathFunctionProperties = MathFunctionProperties;
