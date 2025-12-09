"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentWrapper = void 0;
var document_1 = require("./document");
var relationships_1 = require("./relationships");
var DocumentWrapper = /** @class */ (function () {
    function DocumentWrapper(options) {
        this.document = new document_1.Document(options);
        this.relationships = new relationships_1.Relationships();
    }
    Object.defineProperty(DocumentWrapper.prototype, "View", {
        get: function () {
            return this.document;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentWrapper.prototype, "Relationships", {
        get: function () {
            return this.relationships;
        },
        enumerable: false,
        configurable: true
    });
    return DocumentWrapper;
}());
exports.DocumentWrapper = DocumentWrapper;
