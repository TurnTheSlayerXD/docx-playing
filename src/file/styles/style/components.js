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
exports.RsId = exports.TableProperties = exports.UiPriority = exports.Name = void 0;
// http://officeopenxml.com/WPstyleGenProps.php
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var ComponentAttributes = /** @class */ (function (_super) {
    __extends(ComponentAttributes, _super);
    function ComponentAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { val: "w:val" };
        return _this;
    }
    return ComponentAttributes;
}(xml_components_1.XmlAttributeComponent));
var Name = /** @class */ (function (_super) {
    __extends(Name, _super);
    function Name(value) {
        var _this = _super.call(this, "w:name") || this;
        _this.root.push(new ComponentAttributes({ val: value }));
        return _this;
    }
    return Name;
}(xml_components_1.XmlComponent));
exports.Name = Name;
var UiPriority = /** @class */ (function (_super) {
    __extends(UiPriority, _super);
    function UiPriority(value) {
        var _this = _super.call(this, "w:uiPriority") || this;
        _this.root.push(new ComponentAttributes({ val: (0, values_1.decimalNumber)(value) }));
        return _this;
    }
    return UiPriority;
}(xml_components_1.XmlComponent));
exports.UiPriority = UiPriority;
var TableProperties = /** @class */ (function (_super) {
    __extends(TableProperties, _super);
    function TableProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TableProperties;
}(xml_components_1.XmlComponent));
exports.TableProperties = TableProperties;
var RsId = /** @class */ (function (_super) {
    __extends(RsId, _super);
    function RsId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RsId;
}(xml_components_1.XmlComponent));
exports.RsId = RsId;
