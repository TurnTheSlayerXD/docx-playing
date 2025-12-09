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
exports.SeperatorRun = void 0;
var paragraph_1 = require("@file/paragraph");
var seperator_1 = require("./seperator");
var SeperatorRun = /** @class */ (function (_super) {
    __extends(SeperatorRun, _super);
    function SeperatorRun() {
        var _this = _super.call(this, {}) || this;
        _this.root.push(new seperator_1.Seperator());
        return _this;
    }
    return SeperatorRun;
}(paragraph_1.Run));
exports.SeperatorRun = SeperatorRun;
