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
exports.DeletedTextRun = void 0;
var xml_components_1 = require("@file/xml-components");
var deleted_page_number_1 = require("./deleted-page-number");
var deleted_text_1 = require("./deleted-text");
var break_1 = require("../../paragraph/run/break");
var field_1 = require("../../paragraph/run/field");
var properties_1 = require("../../paragraph/run/properties");
var run_1 = require("../../paragraph/run/run");
var track_revision_1 = require("../track-revision");
var DeletedTextRun = /** @class */ (function (_super) {
    __extends(DeletedTextRun, _super);
    function DeletedTextRun(options) {
        var _this = _super.call(this, "w:del") || this;
        _this.root.push(new track_revision_1.ChangeAttributes({
            id: options.id,
            author: options.author,
            date: options.date,
        }));
        _this.deletedTextRunWrapper = new DeletedTextRunWrapper(options);
        _this.addChildElement(_this.deletedTextRunWrapper);
        return _this;
    }
    return DeletedTextRun;
}(xml_components_1.XmlComponent));
exports.DeletedTextRun = DeletedTextRun;
var DeletedTextRunWrapper = /** @class */ (function (_super) {
    __extends(DeletedTextRunWrapper, _super);
    function DeletedTextRunWrapper(options) {
        var _this = _super.call(this, "w:r") || this;
        _this.root.push(new properties_1.RunProperties(options));
        if (options.children) {
            for (var _i = 0, _a = options.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (typeof child === "string") {
                    switch (child) {
                        case run_1.PageNumber.CURRENT:
                            _this.root.push(new field_1.Begin());
                            _this.root.push(new deleted_page_number_1.DeletedPage());
                            _this.root.push(new field_1.Separate());
                            _this.root.push(new field_1.End());
                            break;
                        case run_1.PageNumber.TOTAL_PAGES:
                            _this.root.push(new field_1.Begin());
                            _this.root.push(new deleted_page_number_1.DeletedNumberOfPages());
                            _this.root.push(new field_1.Separate());
                            _this.root.push(new field_1.End());
                            break;
                        case run_1.PageNumber.TOTAL_PAGES_IN_SECTION:
                            _this.root.push(new field_1.Begin());
                            _this.root.push(new deleted_page_number_1.DeletedNumberOfPagesSection());
                            _this.root.push(new field_1.Separate());
                            _this.root.push(new field_1.End());
                            break;
                        default:
                            _this.root.push(new deleted_text_1.DeletedText(child));
                            break;
                    }
                    continue;
                }
                _this.root.push(child);
            }
        }
        else if (options.text) {
            _this.root.push(new deleted_text_1.DeletedText(options.text));
        }
        if (options.break) {
            for (var i = 0; i < options.break; i++) {
                _this.root.splice(1, 0, new break_1.Break());
            }
        }
        return _this;
    }
    return DeletedTextRunWrapper;
}(xml_components_1.XmlComponent));
