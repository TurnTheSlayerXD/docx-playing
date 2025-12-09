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
exports.PageBreakBefore = exports.ColumnBreak = exports.PageBreak = void 0;
// http://officeopenxml.com/WPtextSpecialContent-break.php
var xml_components_1 = require("@file/xml-components");
var run_1 = require("../run");
var BreakType = {
    COLUMN: "column",
    PAGE: "page",
    // textWrapping breaks are the default and already exposed via the "Run" class
};
var Break = /** @class */ (function (_super) {
    __extends(Break, _super);
    function Break(type) {
        var _this = _super.call(this, "w:br") || this;
        _this.root.push(new xml_components_1.Attributes({
            type: type,
        }));
        return _this;
    }
    return Break;
}(xml_components_1.XmlComponent));
var PageBreak = /** @class */ (function (_super) {
    __extends(PageBreak, _super);
    function PageBreak() {
        var _this = _super.call(this, {}) || this;
        _this.root.push(new Break(BreakType.PAGE));
        return _this;
    }
    return PageBreak;
}(run_1.Run));
exports.PageBreak = PageBreak;
var ColumnBreak = /** @class */ (function (_super) {
    __extends(ColumnBreak, _super);
    function ColumnBreak() {
        var _this = _super.call(this, {}) || this;
        _this.root.push(new Break(BreakType.COLUMN));
        return _this;
    }
    return ColumnBreak;
}(run_1.Run));
exports.ColumnBreak = ColumnBreak;
/**
 * Add page break before the paragraph if there is no one added before.
 */
var PageBreakBefore = /** @class */ (function (_super) {
    __extends(PageBreakBefore, _super);
    function PageBreakBefore() {
        return _super.call(this, "w:pageBreakBefore") || this;
    }
    return PageBreakBefore;
}(xml_components_1.XmlComponent));
exports.PageBreakBefore = PageBreakBefore;
