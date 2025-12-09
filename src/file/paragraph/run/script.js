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
exports.SubScript = exports.SuperScript = exports.VerticalAlign = void 0;
var xml_components_1 = require("@file/xml-components");
var VerticalAlign = /** @class */ (function (_super) {
    __extends(VerticalAlign, _super);
    function VerticalAlign(type) {
        var _this = _super.call(this, "w:vertAlign") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: type,
        }));
        return _this;
    }
    return VerticalAlign;
}(xml_components_1.XmlComponent));
exports.VerticalAlign = VerticalAlign;
var SuperScript = /** @class */ (function (_super) {
    __extends(SuperScript, _super);
    function SuperScript() {
        return _super.call(this, "superscript") || this;
    }
    return SuperScript;
}(VerticalAlign));
exports.SuperScript = SuperScript;
var SubScript = /** @class */ (function (_super) {
    __extends(SubScript, _super);
    function SubScript() {
        return _super.call(this, "subscript") || this;
    }
    return SubScript;
}(VerticalAlign));
exports.SubScript = SubScript;
