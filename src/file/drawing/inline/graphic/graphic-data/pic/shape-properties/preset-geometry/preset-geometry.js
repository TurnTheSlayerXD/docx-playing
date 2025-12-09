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
exports.PresetGeometry = void 0;
// http://officeopenxml.com/drwSp-prstGeom.php
var xml_components_1 = require("@file/xml-components");
var adjustment_values_1 = require("./adjustment-values/adjustment-values");
var preset_geometry_attributes_1 = require("./preset-geometry-attributes");
var PresetGeometry = /** @class */ (function (_super) {
    __extends(PresetGeometry, _super);
    function PresetGeometry() {
        var _this = _super.call(this, "a:prstGeom") || this;
        _this.root.push(new preset_geometry_attributes_1.PresetGeometryAttributes({
            prst: "rect",
        }));
        _this.root.push(new adjustment_values_1.AdjustmentValues());
        return _this;
    }
    return PresetGeometry;
}(xml_components_1.XmlComponent));
exports.PresetGeometry = PresetGeometry;
