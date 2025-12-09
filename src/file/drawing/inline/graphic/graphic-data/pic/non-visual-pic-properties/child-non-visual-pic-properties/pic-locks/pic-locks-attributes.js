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
exports.PicLocksAttributes = void 0;
var xml_components_1 = require("@file/xml-components");
var PicLocksAttributes = /** @class */ (function (_super) {
    __extends(PicLocksAttributes, _super);
    function PicLocksAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            noChangeAspect: "noChangeAspect",
            noChangeArrowheads: "noChangeArrowheads",
        };
        return _this;
    }
    return PicLocksAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.PicLocksAttributes = PicLocksAttributes;
