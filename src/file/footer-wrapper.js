"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterWrapper = void 0;
var footer_1 = require("./footer/footer");
var relationships_1 = require("./relationships");
var FooterWrapper = /** @class */ (function () {
    function FooterWrapper(media, referenceId, initContent) {
        this.media = media;
        this.footer = new footer_1.Footer(referenceId, initContent);
        this.relationships = new relationships_1.Relationships();
    }
    FooterWrapper.prototype.add = function (item) {
        this.footer.add(item);
    };
    FooterWrapper.prototype.addChildElement = function (childElement) {
        this.footer.addChildElement(childElement);
    };
    Object.defineProperty(FooterWrapper.prototype, "View", {
        get: function () {
            return this.footer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FooterWrapper.prototype, "Relationships", {
        get: function () {
            return this.relationships;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FooterWrapper.prototype, "Media", {
        get: function () {
            return this.media;
        },
        enumerable: false,
        configurable: true
    });
    return FooterWrapper;
}());
exports.FooterWrapper = FooterWrapper;
