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
exports.Graphic = void 0;
var xml_components_1 = require("@file/xml-components");
var graphic_data_1 = require("./graphic-data");
var GraphicAttributes = /** @class */ (function (_super) {
    __extends(GraphicAttributes, _super);
    function GraphicAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            a: "xmlns:a",
        };
        return _this;
    }
    return GraphicAttributes;
}(xml_components_1.XmlAttributeComponent));
var Graphic = /** @class */ (function (_super) {
    __extends(Graphic, _super);
    function Graphic(_a) {
        var mediaData = _a.mediaData, transform = _a.transform, outline = _a.outline;
        var _this = _super.call(this, "a:graphic") || this;
        _this.root.push(new GraphicAttributes({
            a: "http://schemas.openxmlformats.org/drawingml/2006/main",
        }));
        _this.data = new graphic_data_1.GraphicData({ mediaData: mediaData, transform: transform, outline: outline });
        _this.root.push(_this.data);
        return _this;
    }
    return Graphic;
}(xml_components_1.XmlComponent));
exports.Graphic = Graphic;
