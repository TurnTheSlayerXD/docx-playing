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
exports.StyleForParagraph = void 0;
var paragraph_1 = require("@file/paragraph");
var properties_1 = require("@file/paragraph/run/properties");
var style_1 = require("./style");
var StyleForParagraph = /** @class */ (function (_super) {
    __extends(StyleForParagraph, _super);
    function StyleForParagraph(options) {
        var _this = _super.call(this, { type: "paragraph", styleId: options.id }, options) || this;
        _this.paragraphProperties = new paragraph_1.ParagraphProperties(options.paragraph);
        _this.runProperties = new properties_1.RunProperties(options.run);
        _this.root.push(_this.paragraphProperties);
        _this.root.push(_this.runProperties);
        return _this;
    }
    return StyleForParagraph;
}(style_1.Style));
exports.StyleForParagraph = StyleForParagraph;
