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
exports.AppProperties = void 0;
var xml_components_1 = require("@file/xml-components");
var app_properties_attributes_1 = require("./app-properties-attributes");
var AppProperties = /** @class */ (function (_super) {
    __extends(AppProperties, _super);
    function AppProperties() {
        var _this = _super.call(this, "Properties") || this;
        _this.root.push(new app_properties_attributes_1.AppPropertiesAttributes({
            xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
            vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
        }));
        return _this;
    }
    return AppProperties;
}(xml_components_1.XmlComponent));
exports.AppProperties = AppProperties;
