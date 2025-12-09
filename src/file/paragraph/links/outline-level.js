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
exports.OutlineLevel = void 0;
// http://officeopenxml.com/WPparagraph.php
var xml_components_1 = require("@file/xml-components");
var OutlineLevel = /** @class */ (function (_super) {
    __extends(OutlineLevel, _super);
    function OutlineLevel(level) {
        var _this = _super.call(this, "w:outlineLvl") || this;
        _this.level = level;
        _this.root.push(new xml_components_1.Attributes({
            val: level,
        }));
        return _this;
    }
    return OutlineLevel;
}(xml_components_1.XmlComponent));
exports.OutlineLevel = OutlineLevel;
