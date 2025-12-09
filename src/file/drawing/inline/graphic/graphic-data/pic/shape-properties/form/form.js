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
exports.Form = exports.FormAttributes = void 0;
var xml_components_1 = require("@file/xml-components");
var extents_1 = require("./extents/extents");
var off_1 = require("./offset/off");
var FormAttributes = /** @class */ (function (_super) {
    __extends(FormAttributes, _super);
    function FormAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            flipVertical: "flipV",
            flipHorizontal: "flipH",
            rotation: "rot",
        };
        return _this;
    }
    return FormAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.FormAttributes = FormAttributes;
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(options) {
        var _a, _b;
        var _this = _super.call(this, "a:xfrm") || this;
        _this.root.push(new FormAttributes({
            flipVertical: (_a = options.flip) === null || _a === void 0 ? void 0 : _a.vertical,
            flipHorizontal: (_b = options.flip) === null || _b === void 0 ? void 0 : _b.horizontal,
            rotation: options.rotation,
        }));
        _this.extents = new extents_1.Extents(options.emus.x, options.emus.y);
        _this.root.push(new off_1.Offset());
        _this.root.push(_this.extents);
        return _this;
    }
    return Form;
}(xml_components_1.XmlComponent));
exports.Form = Form;
