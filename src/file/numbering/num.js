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
exports.LevelOverride = exports.ConcreteNumbering = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var AbstractNumId = /** @class */ (function (_super) {
    __extends(AbstractNumId, _super);
    function AbstractNumId(value) {
        var _this = _super.call(this, "w:abstractNumId") || this;
        _this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
        return _this;
    }
    return AbstractNumId;
}(xml_components_1.XmlComponent));
var NumAttributes = /** @class */ (function (_super) {
    __extends(NumAttributes, _super);
    function NumAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { numId: "w:numId" };
        return _this;
    }
    return NumAttributes;
}(xml_components_1.XmlAttributeComponent));
// <xsd:complexType name="CT_Numbering">
//     ...
//     <xsd:element name="num" type="CT_Num" minOccurs="0" maxOccurs="unbounded"/>
//         <xsd:complexType name="CT_Num">
//             <xsd:sequence>
//                 <xsd:element name="abstractNumId" type="CT_DecimalNumber" minOccurs="1"/>
//                 <xsd:element name="lvlOverride" type="CT_NumLvl" minOccurs="0" maxOccurs="9"/>
//             </xsd:sequence>
//             <xsd:attribute name="numId" type="ST_DecimalNumber" use="required"/>
//         </xsd:complexType>
var ConcreteNumbering = /** @class */ (function (_super) {
    __extends(ConcreteNumbering, _super);
    function ConcreteNumbering(options) {
        var _this = _super.call(this, "w:num") || this;
        _this.numId = options.numId;
        _this.reference = options.reference;
        _this.instance = options.instance;
        _this.root.push(new NumAttributes({
            numId: (0, values_1.decimalNumber)(options.numId),
        }));
        _this.root.push(new AbstractNumId((0, values_1.decimalNumber)(options.abstractNumId)));
        if (options.overrideLevels && options.overrideLevels.length) {
            for (var _i = 0, _a = options.overrideLevels; _i < _a.length; _i++) {
                var level = _a[_i];
                _this.root.push(new LevelOverride(level.num, level.start));
            }
        }
        return _this;
    }
    return ConcreteNumbering;
}(xml_components_1.XmlComponent));
exports.ConcreteNumbering = ConcreteNumbering;
var LevelOverrideAttributes = /** @class */ (function (_super) {
    __extends(LevelOverrideAttributes, _super);
    function LevelOverrideAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { ilvl: "w:ilvl" };
        return _this;
    }
    return LevelOverrideAttributes;
}(xml_components_1.XmlAttributeComponent));
var LevelOverride = /** @class */ (function (_super) {
    __extends(LevelOverride, _super);
    function LevelOverride(levelNum, start) {
        var _this = _super.call(this, "w:lvlOverride") || this;
        _this.root.push(new LevelOverrideAttributes({ ilvl: levelNum }));
        if (start !== undefined) {
            _this.root.push(new StartOverride(start));
        }
        return _this;
    }
    return LevelOverride;
}(xml_components_1.XmlComponent));
exports.LevelOverride = LevelOverride;
var StartOverrideAttributes = /** @class */ (function (_super) {
    __extends(StartOverrideAttributes, _super);
    function StartOverrideAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { val: "w:val" };
        return _this;
    }
    return StartOverrideAttributes;
}(xml_components_1.XmlAttributeComponent));
var StartOverride = /** @class */ (function (_super) {
    __extends(StartOverride, _super);
    function StartOverride(start) {
        var _this = _super.call(this, "w:startOverride") || this;
        _this.root.push(new StartOverrideAttributes({ val: start }));
        return _this;
    }
    return StartOverride;
}(xml_components_1.XmlComponent));
