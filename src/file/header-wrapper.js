"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderWrapper = void 0;
var header_1 = require("./header/header");
var relationships_1 = require("./relationships");
var HeaderWrapper = /** @class */ (function () {
    function HeaderWrapper(media, referenceId, initContent) {
        this.media = media;
        this.header = new header_1.Header(referenceId, initContent);
        this.relationships = new relationships_1.Relationships();
    }
    HeaderWrapper.prototype.add = function (item) {
        this.header.add(item);
        return this;
    };
    HeaderWrapper.prototype.addChildElement = function (childElement) {
        this.header.addChildElement(childElement);
    };
    Object.defineProperty(HeaderWrapper.prototype, "View", {
        get: function () {
            return this.header;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HeaderWrapper.prototype, "Relationships", {
        get: function () {
            return this.relationships;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HeaderWrapper.prototype, "Media", {
        get: function () {
            return this.media;
        },
        enumerable: false,
        configurable: true
    });
    return HeaderWrapper;
}());
exports.HeaderWrapper = HeaderWrapper;
