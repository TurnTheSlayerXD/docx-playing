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
exports.Offset = void 0;
// http://officeopenxml.com/drwSp-size.php
var xml_components_1 = require("@file/xml-components");
var off_attributes_1 = require("./off-attributes");
var Offset = /** @class */ (function (_super) {
    __extends(Offset, _super);
    function Offset() {
        var _this = _super.call(this, "a:off") || this;
        _this.root.push(new off_attributes_1.OffsetAttributes({
            x: 0,
            y: 0,
        }));
        return _this;
    }
    return Offset;
}(xml_components_1.XmlComponent));
exports.Offset = Offset;
