"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueUuid = exports.hashedId = exports.uniqueId = exports.bookmarkUniqueNumericIdGen = exports.docPropertiesUniqueNumericIdGen = exports.concreteNumUniqueNumericIdGen = exports.abstractNumUniqueNumericIdGen = exports.uniqueNumericIdCreator = exports.convertInchesToTwip = exports.convertMillimetersToTwip = void 0;
var hash_js_1 = require("hash.js");
var non_secure_1 = require("nanoid/non-secure");
// Twip - twentieths of a point
var convertMillimetersToTwip = function (millimeters) { return Math.floor((millimeters / 25.4) * 72 * 20); };
exports.convertMillimetersToTwip = convertMillimetersToTwip;
var convertInchesToTwip = function (inches) { return Math.floor(inches * 72 * 20); };
exports.convertInchesToTwip = convertInchesToTwip;
var uniqueNumericIdCreator = function (initial) {
    if (initial === void 0) { initial = 0; }
    var currentCount = initial;
    return function () { return ++currentCount; };
};
exports.uniqueNumericIdCreator = uniqueNumericIdCreator;
var abstractNumUniqueNumericIdGen = function () { return (0, exports.uniqueNumericIdCreator)(); };
exports.abstractNumUniqueNumericIdGen = abstractNumUniqueNumericIdGen;
// Setting initial to 1 as we have numId = 1 for "default-bullet-numbering"
var concreteNumUniqueNumericIdGen = function () { return (0, exports.uniqueNumericIdCreator)(1); };
exports.concreteNumUniqueNumericIdGen = concreteNumUniqueNumericIdGen;
var docPropertiesUniqueNumericIdGen = function () { return (0, exports.uniqueNumericIdCreator)(); };
exports.docPropertiesUniqueNumericIdGen = docPropertiesUniqueNumericIdGen;
var bookmarkUniqueNumericIdGen = function () { return (0, exports.uniqueNumericIdCreator)(); };
exports.bookmarkUniqueNumericIdGen = bookmarkUniqueNumericIdGen;
var uniqueId = function () { return (0, non_secure_1.nanoid)().toLowerCase(); };
exports.uniqueId = uniqueId;
var hashedId = function (data) {
    return hash_js_1.default
        .sha1()
        .update(data instanceof ArrayBuffer ? new Uint8Array(data) : data)
        .digest("hex");
};
exports.hashedId = hashedId;
var generateUuidPart = function (count) { return (0, non_secure_1.customAlphabet)("1234567890abcdef", count)(); };
var uniqueUuid = function () {
    return "".concat(generateUuidPart(8), "-").concat(generateUuidPart(4), "-").concat(generateUuidPart(4), "-").concat(generateUuidPart(4), "-").concat(generateUuidPart(12));
};
exports.uniqueUuid = uniqueUuid;
