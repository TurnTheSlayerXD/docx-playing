"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageReplacer = void 0;
var ImageReplacer = /** @class */ (function () {
    function ImageReplacer() {
    }
    ImageReplacer.prototype.replace = function (xmlData, mediaData, offset) {
        var currentXmlData = xmlData;
        mediaData.forEach(function (image, i) {
            currentXmlData = currentXmlData.replace(new RegExp("{".concat(image.fileName, "}"), "g"), (offset + i).toString());
        });
        return currentXmlData;
    };
    ImageReplacer.prototype.getMediaData = function (xmlData, media) {
        return media.Array.filter(function (image) { return xmlData.search("{".concat(image.fileName, "}")) > 0; });
    };
    return ImageReplacer;
}());
exports.ImageReplacer = ImageReplacer;
