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
exports.CoreProperties = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var document_attributes_1 = require("../document/document-attributes");
// <xs:element name="coreProperties" type="CT_CoreProperties"/>
/* cSpell:disable */
// <xs:complexType name="CT_CoreProperties">
//   <xs:all>
//     <xs:element name="category" minOccurs="0" maxOccurs="1" type="xs:string"/>
//     <xs:element name="contentStatus" minOccurs="0" maxOccurs="1" type="xs:string"/>
//     <xs:element ref="dcterms:created" minOccurs="0" maxOccurs="1"/>
//     <xs:element ref="dc:creator" minOccurs="0" maxOccurs="1"/>
//     <xs:element ref="dc:description" minOccurs="0" maxOccurs="1"/>
//     <xs:element ref="dc:identifier" minOccurs="0" maxOccurs="1"/>
//     <xs:element name="keywords" minOccurs="0" maxOccurs="1" type="CT_Keywords"/>
//     <xs:element ref="dc:language" minOccurs="0" maxOccurs="1"/>
//     <xs:element name="lastModifiedBy" minOccurs="0" maxOccurs="1" type="xs:string"/>
//     <xs:element name="lastPrinted" minOccurs="0" maxOccurs="1" type="xs:dateTime"/>
//     <xs:element ref="dcterms:modified" minOccurs="0" maxOccurs="1"/>
//     <xs:element name="revision" minOccurs="0" maxOccurs="1" type="xs:string"/>
//     <xs:element ref="dc:subject" minOccurs="0" maxOccurs="1"/>
//     <xs:element ref="dc:title" minOccurs="0" maxOccurs="1"/>
//     <xs:element name="version" minOccurs="0" maxOccurs="1" type="xs:string"/>
//   </xs:all>
// </xs:complexType>
/* cSpell:enable */
var CoreProperties = /** @class */ (function (_super) {
    __extends(CoreProperties, _super);
    function CoreProperties(options) {
        var _this = _super.call(this, "cp:coreProperties") || this;
        _this.root.push(new document_attributes_1.DocumentAttributes(["cp", "dc", "dcterms", "dcmitype", "xsi"]));
        if (options.title) {
            _this.root.push(new xml_components_1.StringContainer("dc:title", options.title));
        }
        if (options.subject) {
            _this.root.push(new xml_components_1.StringContainer("dc:subject", options.subject));
        }
        if (options.creator) {
            _this.root.push(new xml_components_1.StringContainer("dc:creator", options.creator));
        }
        if (options.keywords) {
            _this.root.push(new xml_components_1.StringContainer("cp:keywords", options.keywords));
        }
        if (options.description) {
            _this.root.push(new xml_components_1.StringContainer("dc:description", options.description));
        }
        if (options.lastModifiedBy) {
            _this.root.push(new xml_components_1.StringContainer("cp:lastModifiedBy", options.lastModifiedBy));
        }
        if (options.revision) {
            _this.root.push(new xml_components_1.StringContainer("cp:revision", String(options.revision)));
        }
        _this.root.push(new TimestampElement("dcterms:created"));
        _this.root.push(new TimestampElement("dcterms:modified"));
        return _this;
    }
    return CoreProperties;
}(xml_components_1.XmlComponent));
exports.CoreProperties = CoreProperties;
var TimestampElementProperties = /** @class */ (function (_super) {
    __extends(TimestampElementProperties, _super);
    function TimestampElementProperties() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { type: "xsi:type" };
        return _this;
    }
    return TimestampElementProperties;
}(xml_components_1.XmlAttributeComponent));
var TimestampElement = /** @class */ (function (_super) {
    __extends(TimestampElement, _super);
    function TimestampElement(name) {
        var _this = _super.call(this, name) || this;
        _this.root.push(new TimestampElementProperties({
            type: "dcterms:W3CDTF",
        }));
        _this.root.push((0, values_1.dateTimeValue)(new Date()));
        return _this;
    }
    return TimestampElement;
}(xml_components_1.XmlComponent));
