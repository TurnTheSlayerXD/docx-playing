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
exports.SequentialIdentifier = void 0;
var run_1 = require("@file/paragraph/run");
var field_1 = require("@file/paragraph/run/field");
var sequential_identifier_instruction_1 = require("./sequential-identifier-instruction");
var SequentialIdentifier = /** @class */ (function (_super) {
    __extends(SequentialIdentifier, _super);
    function SequentialIdentifier(identifier) {
        var _this = _super.call(this, {}) || this;
        _this.root.push(new field_1.Begin(true));
        _this.root.push(new sequential_identifier_instruction_1.SequentialIdentifierInstruction(identifier));
        _this.root.push(new field_1.Separate());
        _this.root.push(new field_1.End());
        return _this;
    }
    return SequentialIdentifier;
}(run_1.Run));
exports.SequentialIdentifier = SequentialIdentifier;
