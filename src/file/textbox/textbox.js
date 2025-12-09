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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textbox = void 0;
var file_child_1 = require("@file/file-child");
var paragraph_1 = require("@file/paragraph");
var convenience_functions_1 = require("@util/convenience-functions");
var pict_element_1 = require("./pict-element/pict-element");
var shape_1 = require("./shape/shape");
var Textbox = /** @class */ (function (_super) {
    __extends(Textbox, _super);
    function Textbox(_a) {
        var _this = this;
        var style = _a.style, children = _a.children, rest = __rest(_a, ["style", "children"]);
        _this = _super.call(this, "w:p") || this;
        _this.root.push(new paragraph_1.ParagraphProperties(rest));
        _this.root.push((0, pict_element_1.createPictElement)({
            shape: (0, shape_1.createShape)({
                children: children,
                id: (0, convenience_functions_1.uniqueId)(),
                style: style,
            }),
        }));
        return _this;
    }
    return Textbox;
}(file_child_1.FileChild));
exports.Textbox = Textbox;
