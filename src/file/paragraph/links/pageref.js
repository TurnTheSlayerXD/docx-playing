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
exports.PageReference = void 0;
// See https://www.ecma-international.org/publications/standards/Ecma-376.htm (at Part 1, Page 1234)
var field_1 = require("@file/paragraph/run/field");
var run_1 = require("../run");
var pageref_field_instruction_1 = require("./pageref-field-instruction");
var PageReference = /** @class */ (function (_super) {
    __extends(PageReference, _super);
    function PageReference(bookmarkId, options) {
        if (options === void 0) { options = {}; }
        return _super.call(this, {
            children: [new field_1.Begin(true), new pageref_field_instruction_1.PageReferenceFieldInstruction(bookmarkId, options), new field_1.End()],
        }) || this;
    }
    return PageReference;
}(run_1.Run));
exports.PageReference = PageReference;
