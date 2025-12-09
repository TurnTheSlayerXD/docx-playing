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
exports.Paragraph = void 0;
// http://officeopenxml.com/WPparagraph.php
var file_child_1 = require("@file/file-child");
var convenience_functions_1 = require("@util/convenience-functions");
var relationship_1 = require("../relationships/relationship/relationship");
var links_1 = require("./links");
var properties_1 = require("./properties");
var run_1 = require("./run");
var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph(options) {
        var _this = _super.call(this, "w:p") || this;
        if (typeof options === "string") {
            _this.properties = new properties_1.ParagraphProperties({});
            _this.root.push(_this.properties);
            _this.root.push(new run_1.TextRun(options));
            return _this;
        }
        _this.properties = new properties_1.ParagraphProperties(options);
        _this.root.push(_this.properties);
        if (options.text) {
            _this.root.push(new run_1.TextRun(options.text));
        }
        if (options.children) {
            for (var _i = 0, _a = options.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child instanceof links_1.Bookmark) {
                    _this.root.push(child.start);
                    for (var _b = 0, _c = child.children; _b < _c.length; _b++) {
                        var textRun = _c[_b];
                        _this.root.push(textRun);
                    }
                    _this.root.push(child.end);
                    continue;
                }
                _this.root.push(child);
            }
        }
        return _this;
    }
    Paragraph.prototype.prepForXml = function (context) {
        for (var _i = 0, _a = this.root; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element instanceof links_1.ExternalHyperlink) {
                var index = this.root.indexOf(element);
                var concreteHyperlink = new links_1.ConcreteHyperlink(element.options.children, (0, convenience_functions_1.uniqueId)());
                context.viewWrapper.Relationships.createRelationship(concreteHyperlink.linkId, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", element.options.link, relationship_1.TargetModeType.EXTERNAL);
                this.root[index] = concreteHyperlink;
            }
        }
        return _super.prototype.prepForXml.call(this, context);
    };
    Paragraph.prototype.addRunToFront = function (run) {
        this.root.splice(1, 0, run);
        return this;
    };
    return Paragraph;
}(file_child_1.FileChild));
exports.Paragraph = Paragraph;
