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
exports.End = exports.Separate = exports.Begin = void 0;
var xml_components_1 = require("@file/xml-components");
var FieldCharacterType = {
    BEGIN: "begin",
    END: "end",
    SEPARATE: "separate",
};
var FidCharAttrs = /** @class */ (function (_super) {
    __extends(FidCharAttrs, _super);
    function FidCharAttrs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { type: "w:fldCharType", dirty: "w:dirty" };
        return _this;
    }
    return FidCharAttrs;
}(xml_components_1.XmlAttributeComponent));
var Begin = /** @class */ (function (_super) {
    __extends(Begin, _super);
    function Begin(dirty) {
        var _this = _super.call(this, "w:fldChar") || this;
        _this.root.push(new FidCharAttrs({ type: FieldCharacterType.BEGIN, dirty: dirty }));
        return _this;
    }
    return Begin;
}(xml_components_1.XmlComponent));
exports.Begin = Begin;
var Separate = /** @class */ (function (_super) {
    __extends(Separate, _super);
    function Separate(dirty) {
        var _this = _super.call(this, "w:fldChar") || this;
        _this.root.push(new FidCharAttrs({ type: FieldCharacterType.SEPARATE, dirty: dirty }));
        return _this;
    }
    return Separate;
}(xml_components_1.XmlComponent));
exports.Separate = Separate;
var End = /** @class */ (function (_super) {
    __extends(End, _super);
    function End(dirty) {
        var _this = _super.call(this, "w:fldChar") || this;
        _this.root.push(new FidCharAttrs({ type: FieldCharacterType.END, dirty: dirty }));
        return _this;
    }
    return End;
}(xml_components_1.XmlComponent));
exports.End = End;
