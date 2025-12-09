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
exports.Text = void 0;
var shared_1 = require("@file/shared");
var xml_components_1 = require("@file/xml-components");
var text_attributes_1 = require("../text-attributes");
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(options) {
        var _a;
        var _this = _super.call(this, "w:t") || this;
        if (typeof options === "string") {
            _this.root.push(new text_attributes_1.TextAttributes({ space: shared_1.SpaceType.PRESERVE }));
            _this.root.push(options);
        }
        else {
            _this.root.push(new text_attributes_1.TextAttributes({ space: (_a = options.space) !== null && _a !== void 0 ? _a : shared_1.SpaceType.DEFAULT }));
            _this.root.push(options.text);
        }
        return _this;
    }
    return Text;
}(xml_components_1.XmlComponent));
exports.Text = Text;
