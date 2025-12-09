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
exports.Pic = void 0;
var xml_components_1 = require("@file/xml-components");
var blip_fill_1 = require("./blip/blip-fill");
var non_visual_pic_properties_1 = require("./non-visual-pic-properties/non-visual-pic-properties");
var pic_attributes_1 = require("./pic-attributes");
var shape_properties_1 = require("./shape-properties/shape-properties");
var Pic = /** @class */ (function (_super) {
    __extends(Pic, _super);
    function Pic(_a) {
        var mediaData = _a.mediaData, transform = _a.transform, outline = _a.outline;
        var _this = _super.call(this, "pic:pic") || this;
        _this.root.push(new pic_attributes_1.PicAttributes({
            xmlns: "http://schemas.openxmlformats.org/drawingml/2006/picture",
        }));
        _this.root.push(new non_visual_pic_properties_1.NonVisualPicProperties());
        _this.root.push(new blip_fill_1.BlipFill(mediaData));
        _this.root.push(new shape_properties_1.ShapeProperties({ transform: transform, outline: outline }));
        return _this;
    }
    return Pic;
}(xml_components_1.XmlComponent));
exports.Pic = Pic;
