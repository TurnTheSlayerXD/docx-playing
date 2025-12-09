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
exports.Column = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column(_a) {
        var width = _a.width, space = _a.space;
        var _this = _super.call(this, "w:col") || this;
        _this.root.push(new xml_components_1.NextAttributeComponent({
            width: { key: "w:w", value: (0, values_1.twipsMeasureValue)(width) },
            space: { key: "w:space", value: space === undefined ? undefined : (0, values_1.twipsMeasureValue)(space) },
        }));
        return _this;
    }
    return Column;
}(xml_components_1.XmlComponent));
exports.Column = Column;
