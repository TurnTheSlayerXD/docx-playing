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
exports.Spacing = exports.LineRuleType = void 0;
// http://officeopenxml.com/WPspacing.php
var xml_components_1 = require("@file/xml-components");
exports.LineRuleType = {
    AT_LEAST: "atLeast",
    EXACTLY: "exactly",
    EXACT: "exact",
    AUTO: "auto",
};
var SpacingAttributes = /** @class */ (function (_super) {
    __extends(SpacingAttributes, _super);
    function SpacingAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            after: "w:after",
            before: "w:before",
            line: "w:line",
            lineRule: "w:lineRule",
            beforeAutoSpacing: "w:beforeAutospacing",
            afterAutoSpacing: "w:afterAutospacing",
        };
        return _this;
    }
    return SpacingAttributes;
}(xml_components_1.XmlAttributeComponent));
var Spacing = /** @class */ (function (_super) {
    __extends(Spacing, _super);
    function Spacing(options) {
        var _this = _super.call(this, "w:spacing") || this;
        _this.root.push(new SpacingAttributes(options));
        return _this;
    }
    return Spacing;
}(xml_components_1.XmlComponent));
exports.Spacing = Spacing;
