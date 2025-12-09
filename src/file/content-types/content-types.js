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
exports.ContentTypes = void 0;
var xml_components_1 = require("@file/xml-components");
var content_types_attributes_1 = require("./content-types-attributes");
var default_1 = require("./default/default");
var override_1 = require("./override/override");
var ContentTypes = /** @class */ (function (_super) {
    __extends(ContentTypes, _super);
    function ContentTypes() {
        var _this = _super.call(this, "Types") || this;
        _this.root.push(new content_types_attributes_1.ContentTypeAttributes({
            xmlns: "http://schemas.openxmlformats.org/package/2006/content-types",
        }));
        _this.root.push(new default_1.Default("image/png", "png"));
        _this.root.push(new default_1.Default("image/jpeg", "jpeg"));
        _this.root.push(new default_1.Default("image/jpeg", "jpg"));
        _this.root.push(new default_1.Default("image/bmp", "bmp"));
        _this.root.push(new default_1.Default("image/gif", "gif"));
        _this.root.push(new default_1.Default("image/svg+xml", "svg"));
        _this.root.push(new default_1.Default("application/vnd.openxmlformats-package.relationships+xml", "rels"));
        _this.root.push(new default_1.Default("application/xml", "xml"));
        _this.root.push(new default_1.Default("application/vnd.openxmlformats-officedocument.obfuscatedFont", "odttf"));
        _this.root.push(new override_1.Override("application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml", "/word/document.xml"));
        _this.root.push(new override_1.Override("application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml", "/word/styles.xml"));
        _this.root.push(new override_1.Override("application/vnd.openxmlformats-package.core-properties+xml", "/docProps/core.xml"));
        _this.root.push(new override_1.Override("application/vnd.openxmlformats-officedocument.custom-properties+xml", "/docProps/custom.xml"));
        _this.root.push(new override_1.Override("application/vnd.openxmlformats-officedocument.extended-properties+xml", "/docProps/app.xml"));
        _this.root.push(new override_1.Override("application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml", "/word/numbering.xml"));
        _this.root.push(new override_1.Override("application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml", "/word/footnotes.xml"));
        _this.root.push(new override_1.Override("application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml", "/word/settings.xml"));
        _this.root.push(new override_1.Override("application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml", "/word/comments.xml"));
        _this.root.push(new override_1.Override("application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml", "/word/fontTable.xml"));
        return _this;
    }
    ContentTypes.prototype.addFooter = function (index) {
        this.root.push(new override_1.Override("application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml", "/word/footer".concat(index, ".xml")));
    };
    ContentTypes.prototype.addHeader = function (index) {
        this.root.push(new override_1.Override("application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml", "/word/header".concat(index, ".xml")));
    };
    return ContentTypes;
}(xml_components_1.XmlComponent));
exports.ContentTypes = ContentTypes;
