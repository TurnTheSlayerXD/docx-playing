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
exports.DeletedNumberOfPagesSection = exports.DeletedNumberOfPages = exports.DeletedPage = void 0;
var text_attributes_1 = require("@file/paragraph/run/text-attributes");
var shared_1 = require("@file/shared");
var xml_components_1 = require("@file/xml-components");
var DeletedPage = /** @class */ (function (_super) {
    __extends(DeletedPage, _super);
    function DeletedPage() {
        var _this = _super.call(this, "w:delInstrText") || this;
        _this.root.push(new text_attributes_1.TextAttributes({ space: shared_1.SpaceType.PRESERVE }));
        _this.root.push("PAGE");
        return _this;
    }
    return DeletedPage;
}(xml_components_1.XmlComponent));
exports.DeletedPage = DeletedPage;
var DeletedNumberOfPages = /** @class */ (function (_super) {
    __extends(DeletedNumberOfPages, _super);
    function DeletedNumberOfPages() {
        var _this = _super.call(this, "w:delInstrText") || this;
        _this.root.push(new text_attributes_1.TextAttributes({ space: shared_1.SpaceType.PRESERVE }));
        _this.root.push("NUMPAGES");
        return _this;
    }
    return DeletedNumberOfPages;
}(xml_components_1.XmlComponent));
exports.DeletedNumberOfPages = DeletedNumberOfPages;
var DeletedNumberOfPagesSection = /** @class */ (function (_super) {
    __extends(DeletedNumberOfPagesSection, _super);
    function DeletedNumberOfPagesSection() {
        var _this = _super.call(this, "w:delInstrText") || this;
        _this.root.push(new text_attributes_1.TextAttributes({ space: shared_1.SpaceType.PRESERVE }));
        _this.root.push("SECTIONPAGES");
        return _this;
    }
    return DeletedNumberOfPagesSection;
}(xml_components_1.XmlComponent));
exports.DeletedNumberOfPagesSection = DeletedNumberOfPagesSection;
