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
exports.Style = void 0;
var xml_components_1 = require("@file/xml-components");
var components_1 = require("./components");
var StyleAttributes = /** @class */ (function (_super) {
    __extends(StyleAttributes, _super);
    function StyleAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            type: "w:type",
            styleId: "w:styleId",
            default: "w:default",
            customStyle: "w:customStyle",
        };
        return _this;
    }
    return StyleAttributes;
}(xml_components_1.XmlAttributeComponent));
var Style = /** @class */ (function (_super) {
    __extends(Style, _super);
    function Style(attributes, options) {
        var _this = _super.call(this, "w:style") || this;
        _this.root.push(new StyleAttributes(attributes));
        if (options.name) {
            _this.root.push(new components_1.Name(options.name));
        }
        if (options.basedOn) {
            _this.root.push(new xml_components_1.StringValueElement("w:basedOn", options.basedOn));
        }
        if (options.next) {
            _this.root.push(new xml_components_1.StringValueElement("w:next", options.next));
        }
        if (options.link) {
            _this.root.push(new xml_components_1.StringValueElement("w:link", options.link));
        }
        if (options.uiPriority !== undefined) {
            _this.root.push(new components_1.UiPriority(options.uiPriority));
        }
        if (options.semiHidden !== undefined) {
            _this.root.push(new xml_components_1.OnOffElement("w:semiHidden", options.semiHidden));
        }
        if (options.unhideWhenUsed !== undefined) {
            _this.root.push(new xml_components_1.OnOffElement("w:unhideWhenUsed", options.unhideWhenUsed));
        }
        if (options.quickFormat !== undefined) {
            _this.root.push(new xml_components_1.OnOffElement("w:qFormat", options.quickFormat));
        }
        return _this;
    }
    return Style;
}(xml_components_1.XmlComponent));
exports.Style = Style;
