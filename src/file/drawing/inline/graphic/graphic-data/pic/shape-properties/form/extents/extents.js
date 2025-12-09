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
exports.Extents = void 0;
// http://officeopenxml.com/drwSp-size.php
var xml_components_1 = require("@file/xml-components");
var extents_attributes_1 = require("./extents-attributes");
var Extents = /** @class */ (function (_super) {
    __extends(Extents, _super);
    function Extents(x, y) {
        var _this = _super.call(this, "a:ext") || this;
        _this.attributes = new extents_attributes_1.ExtentsAttributes({
            cx: x,
            cy: y,
        });
        _this.root.push(_this.attributes);
        return _this;
    }
    return Extents;
}(xml_components_1.XmlComponent));
exports.Extents = Extents;
