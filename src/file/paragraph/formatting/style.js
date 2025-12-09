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
exports.Style = exports.HeadingLevel = void 0;
var xml_components_1 = require("@file/xml-components");
exports.HeadingLevel = {
    HEADING_1: "Heading1",
    HEADING_2: "Heading2",
    HEADING_3: "Heading3",
    HEADING_4: "Heading4",
    HEADING_5: "Heading5",
    HEADING_6: "Heading6",
    TITLE: "Title",
};
var Style = /** @class */ (function (_super) {
    __extends(Style, _super);
    function Style(styleId) {
        var _this = _super.call(this, "w:pStyle") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: styleId,
        }));
        return _this;
    }
    return Style;
}(xml_components_1.XmlComponent));
exports.Style = Style;
