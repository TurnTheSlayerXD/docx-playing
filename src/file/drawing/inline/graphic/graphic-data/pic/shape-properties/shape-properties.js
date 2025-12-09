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
exports.ShapeProperties = void 0;
var xml_components_1 = require("@file/xml-components");
var form_1 = require("./form");
var no_fill_1 = require("./outline/no-fill");
var outline_1 = require("./outline/outline");
var preset_geometry_1 = require("./preset-geometry/preset-geometry");
var shape_properties_attributes_1 = require("./shape-properties-attributes");
var ShapeProperties = /** @class */ (function (_super) {
    __extends(ShapeProperties, _super);
    function ShapeProperties(_a) {
        var outline = _a.outline, transform = _a.transform;
        var _this = _super.call(this, "pic:spPr") || this;
        _this.root.push(new shape_properties_attributes_1.ShapePropertiesAttributes({
            bwMode: "auto",
        }));
        _this.form = new form_1.Form(transform);
        _this.root.push(_this.form);
        _this.root.push(new preset_geometry_1.PresetGeometry());
        if (outline) {
            _this.root.push((0, no_fill_1.createNoFill)());
            _this.root.push((0, outline_1.createOutline)(outline));
        }
        return _this;
    }
    return ShapeProperties;
}(xml_components_1.XmlComponent));
exports.ShapeProperties = ShapeProperties;
