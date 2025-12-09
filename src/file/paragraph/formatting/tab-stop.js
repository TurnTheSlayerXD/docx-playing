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
exports.TabStopItem = exports.TabAttributes = exports.TabStopPosition = exports.LeaderType = exports.TabStopType = exports.TabStop = void 0;
// http://officeopenxml.com/WPtab.php
var xml_components_1 = require("@file/xml-components");
var TabStop = /** @class */ (function (_super) {
    __extends(TabStop, _super);
    function TabStop(tabDefinitions) {
        var _this = _super.call(this, "w:tabs") || this;
        for (var _i = 0, tabDefinitions_1 = tabDefinitions; _i < tabDefinitions_1.length; _i++) {
            var tabDefinition = tabDefinitions_1[_i];
            _this.root.push(new TabStopItem(tabDefinition));
        }
        return _this;
    }
    return TabStop;
}(xml_components_1.XmlComponent));
exports.TabStop = TabStop;
exports.TabStopType = {
    LEFT: "left",
    RIGHT: "right",
    CENTER: "center",
    BAR: "bar",
    CLEAR: "clear",
    DECIMAL: "decimal",
    END: "end",
    NUM: "num",
    START: "start",
};
exports.LeaderType = {
    DOT: "dot",
    HYPHEN: "hyphen",
    MIDDLE_DOT: "middleDot",
    NONE: "none",
    UNDERSCORE: "underscore",
};
exports.TabStopPosition = {
    MAX: 9026,
};
var TabAttributes = /** @class */ (function (_super) {
    __extends(TabAttributes, _super);
    function TabAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { val: "w:val", pos: "w:pos", leader: "w:leader" };
        return _this;
    }
    return TabAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.TabAttributes = TabAttributes;
var TabStopItem = /** @class */ (function (_super) {
    __extends(TabStopItem, _super);
    function TabStopItem(_a) {
        var type = _a.type, position = _a.position, leader = _a.leader;
        var _this = _super.call(this, "w:tab") || this;
        _this.root.push(new TabAttributes({
            val: type,
            pos: position,
            leader: leader,
        }));
        return _this;
    }
    return TabStopItem;
}(xml_components_1.XmlComponent));
exports.TabStopItem = TabStopItem;
