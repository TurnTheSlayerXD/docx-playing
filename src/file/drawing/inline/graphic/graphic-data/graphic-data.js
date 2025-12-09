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
exports.GraphicData = void 0;
var xml_components_1 = require("@file/xml-components");
var graphic_data_attribute_1 = require("./graphic-data-attribute");
var pic_1 = require("./pic");
var GraphicData = /** @class */ (function (_super) {
    __extends(GraphicData, _super);
    function GraphicData(_a) {
        var mediaData = _a.mediaData, transform = _a.transform, outline = _a.outline;
        var _this = _super.call(this, "a:graphicData") || this;
        _this.root.push(new graphic_data_attribute_1.GraphicDataAttributes({
            uri: "http://schemas.openxmlformats.org/drawingml/2006/picture",
        }));
        _this.pic = new pic_1.Pic({ mediaData: mediaData, transform: transform, outline: outline });
        _this.root.push(_this.pic);
        return _this;
    }
    return GraphicData;
}(xml_components_1.XmlComponent));
exports.GraphicData = GraphicData;
