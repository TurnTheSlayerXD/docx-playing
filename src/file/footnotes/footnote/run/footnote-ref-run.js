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
exports.FootnoteRefRun = void 0;
var paragraph_1 = require("@file/paragraph");
var footnote_ref_1 = require("./footnote-ref");
var FootnoteRefRun = /** @class */ (function (_super) {
    __extends(FootnoteRefRun, _super);
    function FootnoteRefRun() {
        var _this = _super.call(this, {
            style: "FootnoteReference",
        }) || this;
        _this.root.push(new footnote_ref_1.FootnoteRef());
        return _this;
    }
    return FootnoteRefRun;
}(paragraph_1.Run));
exports.FootnoteRefRun = FootnoteRefRun;
