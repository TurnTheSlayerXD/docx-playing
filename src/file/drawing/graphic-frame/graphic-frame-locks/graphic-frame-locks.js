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
exports.GraphicFrameLocks = void 0;
var xml_components_1 = require("@file/xml-components");
var graphic_frame_lock_attributes_1 = require("./graphic-frame-lock-attributes");
var GraphicFrameLocks = /** @class */ (function (_super) {
    __extends(GraphicFrameLocks, _super);
    function GraphicFrameLocks() {
        var _this = _super.call(this, "a:graphicFrameLocks") || this;
        _this.root.push(new graphic_frame_lock_attributes_1.GraphicFrameLockAttributes({
            xmlns: "http://schemas.openxmlformats.org/drawingml/2006/main",
            noChangeAspect: 1,
        }));
        return _this;
    }
    return GraphicFrameLocks;
}(xml_components_1.XmlComponent));
exports.GraphicFrameLocks = GraphicFrameLocks;
