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
exports.Underline = exports.UnderlineType = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
exports.UnderlineType = {
    SINGLE: "single",
    WORDS: "words",
    DOUBLE: "double",
    THICK: "thick",
    DOTTED: "dotted",
    DOTTEDHEAVY: "dottedHeavy",
    DASH: "dash",
    DASHEDHEAVY: "dashedHeavy",
    DASHLONG: "dashLong",
    DASHLONGHEAVY: "dashLongHeavy",
    DOTDASH: "dotDash",
    DASHDOTHEAVY: "dashDotHeavy",
    DOTDOTDASH: "dotDotDash",
    DASHDOTDOTHEAVY: "dashDotDotHeavy",
    WAVE: "wave",
    WAVYHEAVY: "wavyHeavy",
    WAVYDOUBLE: "wavyDouble",
    NONE: "none",
};
var Underline = /** @class */ (function (_super) {
    __extends(Underline, _super);
    function Underline(underlineType, color) {
        if (underlineType === void 0) { underlineType = exports.UnderlineType.SINGLE; }
        var _this = _super.call(this, "w:u") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: underlineType,
            color: color === undefined ? undefined : (0, values_1.hexColorValue)(color),
        }));
        return _this;
    }
    return Underline;
}(xml_components_1.XmlComponent));
exports.Underline = Underline;
