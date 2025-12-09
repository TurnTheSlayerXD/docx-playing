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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footnote = exports.FootnoteType = void 0;
var xml_components_1 = require("@file/xml-components");
var footnote_attributes_1 = require("./footnote-attributes");
var footnote_ref_run_1 = require("./run/footnote-ref-run");
exports.FootnoteType = {
    SEPERATOR: "separator",
    CONTINUATION_SEPERATOR: "continuationSeparator",
};
var Footnote = /** @class */ (function (_super) {
    __extends(Footnote, _super);
    function Footnote(options) {
        var _this = _super.call(this, "w:footnote") || this;
        _this.root.push(new footnote_attributes_1.FootnoteAttributes({
            type: options.type,
            id: options.id,
        }));
        for (var i = 0; i < options.children.length; i++) {
            var child = options.children[i];
            if (i === 0) {
                child.addRunToFront(new footnote_ref_run_1.FootnoteRefRun());
            }
            _this.root.push(child);
        }
        return _this;
    }
    return Footnote;
}(xml_components_1.XmlComponent));
exports.Footnote = Footnote;
