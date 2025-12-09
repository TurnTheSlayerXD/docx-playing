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
exports.PageMargin = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var PageMargin = /** @class */ (function (_super) {
    __extends(PageMargin, _super);
    function PageMargin(top, right, bottom, left, header, footer, gutter) {
        var _this = _super.call(this, "w:pgMar") || this;
        _this.root.push(new xml_components_1.NextAttributeComponent({
            top: { key: "w:top", value: (0, values_1.signedTwipsMeasureValue)(top) },
            right: { key: "w:right", value: (0, values_1.twipsMeasureValue)(right) },
            bottom: { key: "w:bottom", value: (0, values_1.signedTwipsMeasureValue)(bottom) },
            left: { key: "w:left", value: (0, values_1.twipsMeasureValue)(left) },
            header: { key: "w:header", value: (0, values_1.twipsMeasureValue)(header) },
            footer: { key: "w:footer", value: (0, values_1.twipsMeasureValue)(footer) },
            gutter: { key: "w:gutter", value: (0, values_1.twipsMeasureValue)(gutter) },
        }));
        return _this;
    }
    return PageMargin;
}(xml_components_1.XmlComponent));
exports.PageMargin = PageMargin;
