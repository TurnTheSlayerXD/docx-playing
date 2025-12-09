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
exports.CurrentSection = exports.NumberOfPagesSection = exports.NumberOfPages = exports.Page = void 0;
var shared_1 = require("@file/shared");
var xml_components_1 = require("@file/xml-components");
var text_attributes_1 = require("./text-attributes");
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        var _this = _super.call(this, "w:instrText") || this;
        _this.root.push(new text_attributes_1.TextAttributes({ space: shared_1.SpaceType.PRESERVE }));
        _this.root.push("PAGE");
        return _this;
    }
    return Page;
}(xml_components_1.XmlComponent));
exports.Page = Page;
var NumberOfPages = /** @class */ (function (_super) {
    __extends(NumberOfPages, _super);
    function NumberOfPages() {
        var _this = _super.call(this, "w:instrText") || this;
        _this.root.push(new text_attributes_1.TextAttributes({ space: shared_1.SpaceType.PRESERVE }));
        _this.root.push("NUMPAGES");
        return _this;
    }
    return NumberOfPages;
}(xml_components_1.XmlComponent));
exports.NumberOfPages = NumberOfPages;
var NumberOfPagesSection = /** @class */ (function (_super) {
    __extends(NumberOfPagesSection, _super);
    function NumberOfPagesSection() {
        var _this = _super.call(this, "w:instrText") || this;
        _this.root.push(new text_attributes_1.TextAttributes({ space: shared_1.SpaceType.PRESERVE }));
        _this.root.push("SECTIONPAGES");
        return _this;
    }
    return NumberOfPagesSection;
}(xml_components_1.XmlComponent));
exports.NumberOfPagesSection = NumberOfPagesSection;
var CurrentSection = /** @class */ (function (_super) {
    __extends(CurrentSection, _super);
    function CurrentSection() {
        var _this = _super.call(this, "w:instrText") || this;
        _this.root.push(new text_attributes_1.TextAttributes({ space: shared_1.SpaceType.PRESERVE }));
        _this.root.push("SECTION");
        return _this;
    }
    return CurrentSection;
}(xml_components_1.XmlComponent));
exports.CurrentSection = CurrentSection;
