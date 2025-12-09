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
exports.BuilderElement = exports.StringContainer = exports.StringEnumValueElement = exports.NumberValueElement = exports.createStringElement = exports.StringValueElement = exports.EmptyElement = exports.HpsMeasureElement = exports.OnOffElement = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
// This represents element type CT_OnOff, which indicate a boolean value.
//
// A value of 1 or true specifies that the property shall be explicitly applied.
// This is the default value for this attribute, and is implied when the parent
// element is present, but  this attribute is omitted.
// A value of 0 or false specifies that the property shall be explicitly turned off.
//
// <xsd:complexType name="CT_OnOff">
//     <xsd:attribute name="val" type="s:ST_OnOff"/>
// </xsd:complexType>
var OnOffElement = /** @class */ (function (_super) {
    __extends(OnOffElement, _super);
    function OnOffElement(name, val) {
        if (val === void 0) { val = true; }
        var _this = _super.call(this, name) || this;
        if (val !== true) {
            _this.root.push(new xml_components_1.Attributes({ val: val }));
        }
        return _this;
    }
    return OnOffElement;
}(xml_components_1.XmlComponent));
exports.OnOffElement = OnOffElement;
// This represents element type CT_HpsMeasure, which indicate an unsigned int or a measurement with unit.
//
// <xsd:complexType name="CT_HpsMeasure">
//     <xsd:attribute name="val" type="ST_HpsMeasure" use="required"/>
// </xsd:complexType>
// <xsd:simpleType name="ST_HpsMeasure">
//     <xsd:union memberTypes="s:ST_UnsignedDecimalNumber s:ST_PositiveUniversalMeasure" />
// </xsd:simpleType>
var HpsMeasureElement = /** @class */ (function (_super) {
    __extends(HpsMeasureElement, _super);
    function HpsMeasureElement(name, val) {
        var _this = _super.call(this, name) || this;
        _this.root.push(new xml_components_1.Attributes({ val: (0, values_1.hpsMeasureValue)(val) }));
        return _this;
    }
    return HpsMeasureElement;
}(xml_components_1.XmlComponent));
exports.HpsMeasureElement = HpsMeasureElement;
// This represents element type CT_String, which indicate a string value.
//
// <xsd:complexType name="CT_Empty"/>
var EmptyElement = /** @class */ (function (_super) {
    __extends(EmptyElement, _super);
    function EmptyElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EmptyElement;
}(xml_components_1.XmlComponent));
exports.EmptyElement = EmptyElement;
// This represents element type CT_Empty, which indicate aan empty element.
//
// <xsd:complexType name="CT_String">
//     <xsd:attribute name="val" type="s:ST_String" use="required"/>
// </xsd:complexType>
var StringValueElement = /** @class */ (function (_super) {
    __extends(StringValueElement, _super);
    function StringValueElement(name, val) {
        var _this = _super.call(this, name) || this;
        _this.root.push(new xml_components_1.Attributes({ val: val }));
        return _this;
    }
    return StringValueElement;
}(xml_components_1.XmlComponent));
exports.StringValueElement = StringValueElement;
var createStringElement = function (name, value) {
    return new BuilderElement({
        name: name,
        attributes: {
            value: { key: "w:val", value: value },
        },
    });
};
exports.createStringElement = createStringElement;
// This represents various number element types.
var NumberValueElement = /** @class */ (function (_super) {
    __extends(NumberValueElement, _super);
    function NumberValueElement(name, val) {
        var _this = _super.call(this, name) || this;
        _this.root.push(new xml_components_1.Attributes({ val: val }));
        return _this;
    }
    return NumberValueElement;
}(xml_components_1.XmlComponent));
exports.NumberValueElement = NumberValueElement;
var StringEnumValueElement = /** @class */ (function (_super) {
    __extends(StringEnumValueElement, _super);
    function StringEnumValueElement(name, val) {
        var _this = _super.call(this, name) || this;
        _this.root.push(new xml_components_1.Attributes({ val: val }));
        return _this;
    }
    return StringEnumValueElement;
}(xml_components_1.XmlComponent));
exports.StringEnumValueElement = StringEnumValueElement;
// Simple nodes containing text.
//
// new StringContainer("hello", "world")
// <hello>world</hello>
var StringContainer = /** @class */ (function (_super) {
    __extends(StringContainer, _super);
    function StringContainer(name, val) {
        var _this = _super.call(this, name) || this;
        _this.root.push(val);
        return _this;
    }
    return StringContainer;
}(xml_components_1.XmlComponent));
exports.StringContainer = StringContainer;
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
var BuilderElement = /** @class */ (function (_super) {
    __extends(BuilderElement, _super);
    function BuilderElement(_a) {
        var _b;
        var name = _a.name, attributes = _a.attributes, children = _a.children;
        var _this = _super.call(this, name) || this;
        if (attributes) {
            _this.root.push(new xml_components_1.NextAttributeComponent(attributes));
        }
        if (children) {
            (_b = _this.root).push.apply(_b, children);
        }
        return _this;
    }
    return BuilderElement;
}(xml_components_1.XmlComponent));
exports.BuilderElement = BuilderElement;
