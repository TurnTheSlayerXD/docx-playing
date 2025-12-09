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
exports.HeaderFooterReference = exports.HeaderFooterType = exports.HeaderFooterReferenceType = void 0;
var xml_components_1 = require("@file/xml-components");
/**
 * This simple type specifies the possible types of headers and footers which may be specified for a given header or footer reference in a document. This value determines the page(s) on which the current header or footer shall be displayed.
 *
 * Reference: https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_ST_HdrFtr_topic_ID0E2UW2.html
 *
 * ## XSD Schema
 * ```xml
 * <xsd:simpleType name="ST_HdrFtr">
 *   <xsd:restriction base="xsd:string">
 *     <xsd:enumeration value="even"/>
 *     <xsd:enumeration value="default"/>
 *     <xsd:enumeration value="first"/>
 *   </xsd:restriction>
 * </xsd:simpleType>
 * ```
 */
exports.HeaderFooterReferenceType = {
    /** Specifies that this header or footer shall appear on every page in this section which is not overridden with a specific `even` or `first` page header/footer. In a section with all three types specified, this type shall be used on all odd numbered pages (counting from the `first` page in the section, not the section numbering). */
    DEFAULT: "default",
    /** Specifies that this header or footer shall appear on the first page in this section. The appearance of this header or footer is contingent on the setting of the `titlePg` element (§2.10.6). */
    FIRST: "first",
    /** Specifies that this header or footer shall appear on all even numbered pages in this section (counting from the first page in the section, not the section numbering). The appearance of this header or footer is contingent on the setting of the `evenAndOddHeaders` element (§2.10.1). */
    EVEN: "even",
};
var FooterReferenceAttributes = /** @class */ (function (_super) {
    __extends(FooterReferenceAttributes, _super);
    function FooterReferenceAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            type: "w:type",
            id: "r:id",
        };
        return _this;
    }
    return FooterReferenceAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.HeaderFooterType = {
    HEADER: "w:headerReference",
    FOOTER: "w:footerReference",
};
var HeaderFooterReference = /** @class */ (function (_super) {
    __extends(HeaderFooterReference, _super);
    function HeaderFooterReference(type, options) {
        var _this = _super.call(this, type) || this;
        _this.root.push(new FooterReferenceAttributes({
            type: options.type || exports.HeaderFooterReferenceType.DEFAULT,
            id: "rId".concat(options.id),
        }));
        return _this;
    }
    return HeaderFooterReference;
}(xml_components_1.XmlComponent));
exports.HeaderFooterReference = HeaderFooterReference;
