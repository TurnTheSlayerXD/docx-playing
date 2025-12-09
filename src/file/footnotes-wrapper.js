"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootnotesWrapper = void 0;
var footnotes_1 = require("./footnotes/footnotes");
var relationships_1 = require("./relationships");
var FootnotesWrapper = /** @class */ (function () {
    function FootnotesWrapper() {
        this.footnotess = new footnotes_1.FootNotes();
        this.relationships = new relationships_1.Relationships();
    }
    Object.defineProperty(FootnotesWrapper.prototype, "View", {
        get: function () {
            return this.footnotess;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FootnotesWrapper.prototype, "Relationships", {
        get: function () {
            return this.relationships;
        },
        enumerable: false,
        configurable: true
    });
    return FootnotesWrapper;
}());
exports.FootnotesWrapper = FootnotesWrapper;
