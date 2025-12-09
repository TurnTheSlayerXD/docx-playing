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
exports.Math = void 0;
// http://www.datypic.com/sc/ooxml/e-m_oMath-1.html
var xml_components_1 = require("@file/xml-components");
var Math = /** @class */ (function (_super) {
    __extends(Math, _super);
    function Math(options) {
        var _this = _super.call(this, "m:oMath") || this;
        for (var _i = 0, _a = options.children; _i < _a.length; _i++) {
            var child = _a[_i];
            _this.root.push(child);
        }
        return _this;
    }
    return Math;
}(xml_components_1.XmlComponent));
exports.Math = Math;
