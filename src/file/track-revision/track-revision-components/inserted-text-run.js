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
exports.InsertedTextRun = void 0;
var xml_components_1 = require("@file/xml-components");
var index_1 = require("../../index");
var track_revision_1 = require("../track-revision");
var InsertedTextRun = /** @class */ (function (_super) {
    __extends(InsertedTextRun, _super);
    function InsertedTextRun(options) {
        var _this = _super.call(this, "w:ins") || this;
        _this.root.push(new track_revision_1.ChangeAttributes({
            id: options.id,
            author: options.author,
            date: options.date,
        }));
        _this.addChildElement(new index_1.TextRun(options));
        return _this;
    }
    return InsertedTextRun;
}(xml_components_1.XmlComponent));
exports.InsertedTextRun = InsertedTextRun;
