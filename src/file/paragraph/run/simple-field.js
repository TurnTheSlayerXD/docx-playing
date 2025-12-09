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
exports.SimpleMailMergeField = exports.SimpleField = void 0;
// http://www.datypic.com/sc/ooxml/e-w_fldSimple-1.html
var xml_components_1 = require("@file/xml-components");
var text_run_1 = require("./text-run");
var FldSimpleAttrs = /** @class */ (function (_super) {
    __extends(FldSimpleAttrs, _super);
    function FldSimpleAttrs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { instr: "w:instr" };
        return _this;
    }
    return FldSimpleAttrs;
}(xml_components_1.XmlAttributeComponent));
var SimpleField = /** @class */ (function (_super) {
    __extends(SimpleField, _super);
    function SimpleField(instruction, cachedValue) {
        var _this = _super.call(this, "w:fldSimple") || this;
        _this.root.push(new FldSimpleAttrs({ instr: instruction }));
        if (cachedValue !== undefined) {
            _this.root.push(new text_run_1.TextRun(cachedValue));
        }
        return _this;
    }
    return SimpleField;
}(xml_components_1.XmlComponent));
exports.SimpleField = SimpleField;
var SimpleMailMergeField = /** @class */ (function (_super) {
    __extends(SimpleMailMergeField, _super);
    function SimpleMailMergeField(fieldName) {
        return _super.call(this, " MERGEFIELD ".concat(fieldName, " "), "\u00AB".concat(fieldName, "\u00BB")) || this;
    }
    return SimpleMailMergeField;
}(SimpleField));
exports.SimpleMailMergeField = SimpleMailMergeField;
