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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberedItemReference = exports.NumberedItemReferenceFormat = void 0;
var simple_field_1 = require("../run/simple-field");
// https://learn.microsoft.com/en-us/openspecs/office_standards/ms-oi29500/7088a8ce-e784-49d4-94b8-cba6ef8fce78
var NumberedItemReferenceFormat;
(function (NumberedItemReferenceFormat) {
    NumberedItemReferenceFormat["NONE"] = "none";
    /**
     * \r option - inserts the paragraph number of the bookmarked paragraph in relative context, or relative to its position in the numbering scheme
     */
    NumberedItemReferenceFormat["RELATIVE"] = "relative";
    /**
     * \n option - causes the field result to be the paragraph number without trailing periods. No information about prior numbered levels is displayed unless it is included as part of the current level.
     */
    NumberedItemReferenceFormat["NO_CONTEXT"] = "no_context";
    /**
     * \w option - causes the field result to be the entire paragraph number without trailing periods, regardless of the location of the REF field.
     */
    NumberedItemReferenceFormat["FULL_CONTEXT"] = "full_context";
})(NumberedItemReferenceFormat || (exports.NumberedItemReferenceFormat = NumberedItemReferenceFormat = {}));
var SWITCH_MAP = (_a = {},
    _a[NumberedItemReferenceFormat.RELATIVE] = "\\r",
    _a[NumberedItemReferenceFormat.NO_CONTEXT] = "\\n",
    _a[NumberedItemReferenceFormat.FULL_CONTEXT] = "\\w",
    _a[NumberedItemReferenceFormat.NONE] = undefined,
    _a);
/**
 * Creates a field/cross reference to a numbered item in the document.
 */
var NumberedItemReference = /** @class */ (function (_super) {
    __extends(NumberedItemReference, _super);
    function NumberedItemReference(bookmarkId, 
    // TODO: It would be nice if the cached value could be automatically generated
    /**
     * The cached value of the field. This is used to display the field result in the document.
     */
    cachedValue, options) {
        if (options === void 0) { options = {}; }
        var _a = options.hyperlink, hyperlink = _a === void 0 ? true : _a, _b = options.referenceFormat, referenceFormat = _b === void 0 ? NumberedItemReferenceFormat.FULL_CONTEXT : _b;
        var baseInstruction = "REF ".concat(bookmarkId);
        // TODO: Requires TypeScript 5.5 update for it to understand `filter`
        // @ts-expect-error TS2322
        var switches = __spreadArray(__spreadArray([], (hyperlink ? ["\\h"] : []), true), [SWITCH_MAP[referenceFormat]].filter(function (a) { return !!a; }), true);
        var instruction = "".concat(baseInstruction, " ").concat(switches.join(" "));
        return _super.call(this, instruction, cachedValue) || this;
    }
    return NumberedItemReference;
}(simple_field_1.SimpleField));
exports.NumberedItemReference = NumberedItemReference;
