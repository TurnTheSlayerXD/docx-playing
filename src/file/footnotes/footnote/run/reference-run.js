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
exports.FootnoteReferenceRun = exports.FootnoteReference = exports.FootNoteReferenceRunAttributes = void 0;
var run_1 = require("@file/paragraph/run");
var xml_components_1 = require("@file/xml-components");
var FootNoteReferenceRunAttributes = /** @class */ (function (_super) {
    __extends(FootNoteReferenceRunAttributes, _super);
    function FootNoteReferenceRunAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            id: "w:id",
        };
        return _this;
    }
    return FootNoteReferenceRunAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.FootNoteReferenceRunAttributes = FootNoteReferenceRunAttributes;
var FootnoteReference = /** @class */ (function (_super) {
    __extends(FootnoteReference, _super);
    function FootnoteReference(id) {
        var _this = _super.call(this, "w:footnoteReference") || this;
        _this.root.push(new FootNoteReferenceRunAttributes({
            id: id,
        }));
        return _this;
    }
    return FootnoteReference;
}(xml_components_1.XmlComponent));
exports.FootnoteReference = FootnoteReference;
var FootnoteReferenceRun = /** @class */ (function (_super) {
    __extends(FootnoteReferenceRun, _super);
    function FootnoteReferenceRun(id) {
        var _this = _super.call(this, { style: "FootnoteReference" }) || this;
        _this.root.push(new FootnoteReference(id));
        return _this;
    }
    return FootnoteReferenceRun;
}(run_1.Run));
exports.FootnoteReferenceRun = FootnoteReferenceRun;
