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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextAttributeComponent = exports.XmlAttributeComponent = void 0;
var base_1 = require("./base");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var XmlAttributeComponent = /** @class */ (function (_super) {
    __extends(XmlAttributeComponent, _super);
    function XmlAttributeComponent(root) {
        var _this = _super.call(this, "_attr") || this;
        _this.root = root;
        return _this;
    }
    XmlAttributeComponent.prototype.prepForXml = function (_) {
        var _this = this;
        var attrs = {};
        Object.entries(this.root).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                var newKey = (_this.xmlKeys && _this.xmlKeys[key]) || key;
                // eslint-disable-next-line functional/immutable-data
                attrs[newKey] = value;
            }
        });
        return { _attr: attrs };
    };
    return XmlAttributeComponent;
}(base_1.BaseXmlComponent));
exports.XmlAttributeComponent = XmlAttributeComponent;
var NextAttributeComponent = /** @class */ (function (_super) {
    __extends(NextAttributeComponent, _super);
    function NextAttributeComponent(root) {
        var _this = _super.call(this, "_attr") || this;
        _this.root = root;
        return _this;
    }
    NextAttributeComponent.prototype.prepForXml = function (_) {
        var attrs = Object.values(this.root)
            .filter(function (_a) {
            var value = _a.value;
            return value !== undefined;
        })
            .reduce(function (acc, _a) {
            var _b;
            var key = _a.key, value = _a.value;
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = value, _b)));
        }, {});
        return { _attr: attrs };
    };
    return NextAttributeComponent;
}(base_1.BaseXmlComponent));
exports.NextAttributeComponent = NextAttributeComponent;
