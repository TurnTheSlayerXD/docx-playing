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
exports.NonVisualPicProperties = void 0;
var xml_components_1 = require("@file/xml-components");
var child_non_visual_pic_properties_1 = require("./child-non-visual-pic-properties/child-non-visual-pic-properties");
var non_visual_properties_1 = require("./non-visual-properties/non-visual-properties");
var NonVisualPicProperties = /** @class */ (function (_super) {
    __extends(NonVisualPicProperties, _super);
    function NonVisualPicProperties() {
        var _this = _super.call(this, "pic:nvPicPr") || this;
        _this.root.push(new non_visual_properties_1.NonVisualProperties());
        _this.root.push(new child_non_visual_pic_properties_1.ChildNonVisualProperties());
        return _this;
    }
    return NonVisualPicProperties;
}(xml_components_1.XmlComponent));
exports.NonVisualPicProperties = NonVisualPicProperties;
