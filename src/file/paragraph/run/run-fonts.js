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
exports.RunFonts = void 0;
var xml_components_1 = require("@file/xml-components");
var RunFontAttributes = /** @class */ (function (_super) {
    __extends(RunFontAttributes, _super);
    function RunFontAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            ascii: "w:ascii",
            cs: "w:cs",
            eastAsia: "w:eastAsia",
            hAnsi: "w:hAnsi",
            hint: "w:hint",
        };
        return _this;
    }
    return RunFontAttributes;
}(xml_components_1.XmlAttributeComponent));
var RunFonts = /** @class */ (function (_super) {
    __extends(RunFonts, _super);
    function RunFonts(nameOrAttrs, hint) {
        var _this = _super.call(this, "w:rFonts") || this;
        if (typeof nameOrAttrs === "string") {
            // use public constructor(name: string, hint?: string);
            var name_1 = nameOrAttrs;
            _this.root.push(new RunFontAttributes({
                ascii: name_1,
                cs: name_1,
                eastAsia: name_1,
                hAnsi: name_1,
                hint: hint,
            }));
        }
        else {
            // use public constructor(attrs: IRunFontAttributesProperties);
            var attrs = nameOrAttrs;
            _this.root.push(new RunFontAttributes(attrs));
        }
        return _this;
    }
    return RunFonts;
}(xml_components_1.XmlComponent));
exports.RunFonts = RunFonts;
