"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
var Media = /** @class */ (function () {
    function Media() {
        this.map = new Map();
    }
    Media.prototype.addImage = function (key, mediaData) {
        this.map.set(key, mediaData);
    };
    Object.defineProperty(Media.prototype, "Array", {
        get: function () {
            return Array.from(this.map.values());
        },
        enumerable: false,
        configurable: true
    });
    return Media;
}());
exports.Media = Media;
