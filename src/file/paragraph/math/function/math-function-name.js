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
exports.MathFunctionName = void 0;
// http://www.datypic.com/sc/ooxml/e-m_fName-1.html
var xml_components_1 = require("@file/xml-components");
var MathFunctionName = /** @class */ (function (_super) {
    __extends(MathFunctionName, _super);
    function MathFunctionName(children) {
        var _this = _super.call(this, "m:fName") || this;
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            _this.root.push(child);
        }
        return _this;
    }
    return MathFunctionName;
}(xml_components_1.XmlComponent));
exports.MathFunctionName = MathFunctionName;
