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
exports.BlipFill = void 0;
var xml_components_1 = require("@file/xml-components");
var blip_1 = require("./blip");
var source_rectangle_1 = require("./source-rectangle");
var stretch_1 = require("./stretch");
var BlipFill = /** @class */ (function (_super) {
    __extends(BlipFill, _super);
    function BlipFill(mediaData) {
        var _this = _super.call(this, "pic:blipFill") || this;
        _this.root.push((0, blip_1.createBlip)(mediaData));
        _this.root.push(new source_rectangle_1.SourceRectangle());
        _this.root.push(new stretch_1.Stretch());
        return _this;
    }
    return BlipFill;
}(xml_components_1.XmlComponent));
exports.BlipFill = BlipFill;
