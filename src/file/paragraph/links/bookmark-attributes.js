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
exports.BookmarkEndAttributes = exports.BookmarkStartAttributes = void 0;
var xml_components_1 = require("@file/xml-components");
var BookmarkStartAttributes = /** @class */ (function (_super) {
    __extends(BookmarkStartAttributes, _super);
    function BookmarkStartAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            id: "w:id",
            name: "w:name",
        };
        return _this;
    }
    return BookmarkStartAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.BookmarkStartAttributes = BookmarkStartAttributes;
var BookmarkEndAttributes = /** @class */ (function (_super) {
    __extends(BookmarkEndAttributes, _super);
    function BookmarkEndAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            id: "w:id",
        };
        return _this;
    }
    return BookmarkEndAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.BookmarkEndAttributes = BookmarkEndAttributes;
