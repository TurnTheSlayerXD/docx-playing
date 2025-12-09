"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontWrapper = void 0;
var relationships_1 = require("@file/relationships");
var convenience_functions_1 = require("@util/convenience-functions");
var font_table_1 = require("./font-table");
var FontWrapper = /** @class */ (function () {
    function FontWrapper(options) {
        this.options = options;
        this.fontOptionsWithKey = [];
        this.fontOptionsWithKey = options.map(function (o) { return (__assign(__assign({}, o), { fontKey: (0, convenience_functions_1.uniqueUuid)() })); });
        this.fontTable = (0, font_table_1.createFontTable)(this.fontOptionsWithKey);
        this.relationships = new relationships_1.Relationships();
        for (var i = 0; i < options.length; i++) {
            this.relationships.createRelationship(i + 1, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/font", "fonts/".concat(options[i].name, ".odttf"));
        }
    }
    Object.defineProperty(FontWrapper.prototype, "View", {
        get: function () {
            return this.fontTable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FontWrapper.prototype, "Relationships", {
        get: function () {
            return this.relationships;
        },
        enumerable: false,
        configurable: true
    });
    return FontWrapper;
}());
exports.FontWrapper = FontWrapper;
