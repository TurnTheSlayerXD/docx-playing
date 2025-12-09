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
exports.Run = exports.PageNumber = void 0;
var xml_components_1 = require("@file/xml-components");
var break_1 = require("./break");
var field_1 = require("./field");
var page_number_1 = require("./page-number");
var properties_1 = require("./properties");
var text_1 = require("./run-components/text");
exports.PageNumber = {
    CURRENT: "CURRENT",
    TOTAL_PAGES: "TOTAL_PAGES",
    TOTAL_PAGES_IN_SECTION: "TOTAL_PAGES_IN_SECTION",
    CURRENT_SECTION: "SECTION",
};
var Run = /** @class */ (function (_super) {
    __extends(Run, _super);
    function Run(options) {
        var _this = _super.call(this, "w:r") || this;
        _this.properties = new properties_1.RunProperties(options);
        _this.root.push(_this.properties);
        if (options.break) {
            for (var i = 0; i < options.break; i++) {
                _this.root.push(new break_1.Break());
            }
        }
        if (options.children) {
            for (var _i = 0, _a = options.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (typeof child === "string") {
                    switch (child) {
                        case exports.PageNumber.CURRENT:
                            _this.root.push(new field_1.Begin());
                            _this.root.push(new page_number_1.Page());
                            _this.root.push(new field_1.Separate());
                            _this.root.push(new field_1.End());
                            break;
                        case exports.PageNumber.TOTAL_PAGES:
                            _this.root.push(new field_1.Begin());
                            _this.root.push(new page_number_1.NumberOfPages());
                            _this.root.push(new field_1.Separate());
                            _this.root.push(new field_1.End());
                            break;
                        case exports.PageNumber.TOTAL_PAGES_IN_SECTION:
                            _this.root.push(new field_1.Begin());
                            _this.root.push(new page_number_1.NumberOfPagesSection());
                            _this.root.push(new field_1.Separate());
                            _this.root.push(new field_1.End());
                            break;
                        case exports.PageNumber.CURRENT_SECTION:
                            _this.root.push(new field_1.Begin());
                            _this.root.push(new page_number_1.CurrentSection());
                            _this.root.push(new field_1.Separate());
                            _this.root.push(new field_1.End());
                            break;
                        default:
                            _this.root.push(new text_1.Text(child));
                            break;
                    }
                    continue;
                }
                _this.root.push(child);
            }
        }
        else if (options.text !== undefined) {
            _this.root.push(new text_1.Text(options.text));
        }
        return _this;
    }
    return Run;
}(xml_components_1.XmlComponent));
exports.Run = Run;
