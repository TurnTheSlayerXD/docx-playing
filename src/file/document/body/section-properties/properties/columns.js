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
exports.Columns = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var Columns = /** @class */ (function (_super) {
    __extends(Columns, _super);
    function Columns(_a) {
        var space = _a.space, count = _a.count, separate = _a.separate, equalWidth = _a.equalWidth, children = _a.children;
        var _this = _super.call(this, "w:cols") || this;
        _this.root.push(new xml_components_1.NextAttributeComponent({
            space: { key: "w:space", value: space === undefined ? undefined : (0, values_1.twipsMeasureValue)(space) },
            count: { key: "w:num", value: count === undefined ? undefined : (0, values_1.decimalNumber)(count) },
            separate: { key: "w:sep", value: separate },
            equalWidth: { key: "w:equalWidth", value: equalWidth },
        }));
        if (!equalWidth && children) {
            children.forEach(function (column) { return _this.addChildElement(column); });
        }
        return _this;
    }
    return Columns;
}(xml_components_1.XmlComponent));
exports.Columns = Columns;
