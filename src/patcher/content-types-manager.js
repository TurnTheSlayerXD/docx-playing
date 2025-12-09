"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendContentType = void 0;
var util_1 = require("./util");
var appendContentType = function (element, contentType, extension) {
    var relationshipElements = (0, util_1.getFirstLevelElements)(element, "Types");
    var exist = relationshipElements.some(function (el) {
        var _a, _b;
        return el.type === "element" &&
            el.name === "Default" &&
            ((_a = el === null || el === void 0 ? void 0 : el.attributes) === null || _a === void 0 ? void 0 : _a.ContentType) === contentType &&
            ((_b = el === null || el === void 0 ? void 0 : el.attributes) === null || _b === void 0 ? void 0 : _b.Extension) === extension;
    });
    if (exist) {
        return;
    }
    // eslint-disable-next-line functional/immutable-data
    relationshipElements.push({
        attributes: {
            ContentType: contentType,
            Extension: extension,
        },
        name: "Default",
        type: "element",
    });
};
exports.appendContentType = appendContentType;
