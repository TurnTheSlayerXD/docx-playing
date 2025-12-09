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
exports.NumberProperties = void 0;
var xml_components_1 = require("@file/xml-components");
var NumberProperties = /** @class */ (function (_super) {
    __extends(NumberProperties, _super);
    function NumberProperties(numberId, indentLevel) {
        var _this = _super.call(this, "w:numPr") || this;
        _this.root.push(new IndentLevel(indentLevel));
        _this.root.push(new NumberId(numberId));
        return _this;
    }
    return NumberProperties;
}(xml_components_1.XmlComponent));
exports.NumberProperties = NumberProperties;
var IndentLevel = /** @class */ (function (_super) {
    __extends(IndentLevel, _super);
    function IndentLevel(level) {
        var _this = _super.call(this, "w:ilvl") || this;
        if (level > 9) {
            throw new Error("Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7");
        }
        _this.root.push(new xml_components_1.Attributes({
            val: level,
        }));
        return _this;
    }
    return IndentLevel;
}(xml_components_1.XmlComponent));
var NumberId = /** @class */ (function (_super) {
    __extends(NumberId, _super);
    function NumberId(id) {
        var _this = _super.call(this, "w:numId") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: typeof id === "string" ? "{".concat(id, "}") : id,
        }));
        return _this;
    }
    return NumberId;
}(xml_components_1.XmlComponent));
