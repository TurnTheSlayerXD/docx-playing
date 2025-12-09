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
exports.DotEmphasisMark = exports.EmphasisMark = exports.BaseEmphasisMark = exports.EmphasisMarkType = void 0;
var xml_components_1 = require("@file/xml-components");
exports.EmphasisMarkType = {
    DOT: "dot",
};
var BaseEmphasisMark = /** @class */ (function (_super) {
    __extends(BaseEmphasisMark, _super);
    function BaseEmphasisMark(emphasisMarkType) {
        var _this = _super.call(this, "w:em") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: emphasisMarkType,
        }));
        return _this;
    }
    return BaseEmphasisMark;
}(xml_components_1.XmlComponent));
exports.BaseEmphasisMark = BaseEmphasisMark;
var EmphasisMark = /** @class */ (function (_super) {
    __extends(EmphasisMark, _super);
    function EmphasisMark(emphasisMarkType) {
        if (emphasisMarkType === void 0) { emphasisMarkType = exports.EmphasisMarkType.DOT; }
        return _super.call(this, emphasisMarkType) || this;
    }
    return EmphasisMark;
}(BaseEmphasisMark));
exports.EmphasisMark = EmphasisMark;
var DotEmphasisMark = /** @class */ (function (_super) {
    __extends(DotEmphasisMark, _super);
    function DotEmphasisMark() {
        return _super.call(this, exports.EmphasisMarkType.DOT) || this;
    }
    return DotEmphasisMark;
}(BaseEmphasisMark));
exports.DotEmphasisMark = DotEmphasisMark;
