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
exports.Default = void 0;
var xml_components_1 = require("@file/xml-components");
var default_attributes_1 = require("./default-attributes");
var Default = /** @class */ (function (_super) {
    __extends(Default, _super);
    function Default(contentType, extension) {
        var _this = _super.call(this, "Default") || this;
        _this.root.push(new default_attributes_1.DefaultAttributes({
            contentType: contentType,
            extension: extension,
        }));
        return _this;
    }
    return Default;
}(xml_components_1.XmlComponent));
exports.Default = Default;
