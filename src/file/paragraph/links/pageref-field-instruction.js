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
exports.PageReferenceFieldInstruction = void 0;
var shared_1 = require("@file/shared");
var xml_components_1 = require("@file/xml-components");
var text_attributes_1 = require("../run/text-attributes");
var PageReferenceFieldInstruction = /** @class */ (function (_super) {
    __extends(PageReferenceFieldInstruction, _super);
    function PageReferenceFieldInstruction(bookmarkId, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, "w:instrText") || this;
        _this.root.push(new text_attributes_1.TextAttributes({ space: shared_1.SpaceType.PRESERVE }));
        var instruction = "PAGEREF ".concat(bookmarkId);
        if (options.hyperlink) {
            instruction = "".concat(instruction, " \\h");
        }
        if (options.useRelativePosition) {
            instruction = "".concat(instruction, " \\p");
        }
        _this.root.push(instruction);
        return _this;
    }
    return PageReferenceFieldInstruction;
}(xml_components_1.XmlComponent));
exports.PageReferenceFieldInstruction = PageReferenceFieldInstruction;
