"use strict";
// http://officeopenxml.com/WPsection.php
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
exports.SectionProperties = exports.sectionPageSizeDefaults = exports.sectionMarginDefaults = void 0;
var vertical_align_1 = require("@file/vertical-align");
var xml_components_1 = require("@file/xml-components");
var columns_1 = require("./properties/columns");
var doc_grid_1 = require("./properties/doc-grid");
var header_footer_reference_1 = require("./properties/header-footer-reference");
var line_number_1 = require("./properties/line-number");
var page_borders_1 = require("./properties/page-borders");
var page_margin_1 = require("./properties/page-margin");
var page_number_1 = require("./properties/page-number");
var page_size_1 = require("./properties/page-size");
var page_text_direction_1 = require("./properties/page-text-direction");
var section_type_1 = require("./properties/section-type");
// <xsd:complexType name="CT_SectPr">
//     <xsd:sequence>
//         <xsd:group ref="EG_HdrFtrReferences" minOccurs="0" maxOccurs="6"/>
//         <xsd:group ref="EG_SectPrContents" minOccurs="0"/>
//         <xsd:element name="sectPrChange" type="CT_SectPrChange" minOccurs="0"/>
//     </xsd:sequence>
//     <xsd:attributeGroup ref="AG_SectPrAttributes"/>
// </xsd:complexType>
// <xsd:group name="EG_SectPrContents">
// <xsd:sequence>
//   <xsd:element name="footnotePr" type="CT_FtnProps" minOccurs="0"/>
//   <xsd:element name="endnotePr" type="CT_EdnProps" minOccurs="0"/>
//   <xsd:element name="type" type="CT_SectType" minOccurs="0"/>
//   <xsd:element name="pgSz" type="CT_PageSz" minOccurs="0"/>
//   <xsd:element name="pgMar" type="CT_PageMar" minOccurs="0"/>
//   <xsd:element name="paperSrc" type="CT_PaperSource" minOccurs="0"/>
//   <xsd:element name="pgBorders" type="CT_PageBorders" minOccurs="0"/>
//   <xsd:element name="lnNumType" type="CT_LineNumber" minOccurs="0"/>
//   <xsd:element name="pgNumType" type="CT_PageNumber" minOccurs="0"/>
//   <xsd:element name="cols" type="CT_Columns" minOccurs="0"/>
//   <xsd:element name="formProt" type="CT_OnOff" minOccurs="0"/>
//   <xsd:element name="vAlign" type="CT_VerticalJc" minOccurs="0"/>
//   <xsd:element name="noEndnote" type="CT_OnOff" minOccurs="0"/>
//   <xsd:element name="titlePg" type="CT_OnOff" minOccurs="0"/>
//   <xsd:element name="textDirection" type="CT_TextDirection" minOccurs="0"/>
//   <xsd:element name="bidi" type="CT_OnOff" minOccurs="0"/>
//   <xsd:element name="rtlGutter" type="CT_OnOff" minOccurs="0"/>
//   <xsd:element name="docGrid" type="CT_DocGrid" minOccurs="0"/>
//   <xsd:element name="printerSettings" type="CT_Rel" minOccurs="0"/>
// </xsd:sequence>
// </xsd:group>
exports.sectionMarginDefaults = {
    TOP: 1440,
    RIGHT: 1440,
    BOTTOM: 1440,
    LEFT: 1440,
    HEADER: 708,
    FOOTER: 708,
    GUTTER: 0,
};
exports.sectionPageSizeDefaults = {
    WIDTH: 11906,
    HEIGHT: 16838,
    ORIENTATION: page_size_1.PageOrientation.PORTRAIT,
};
var SectionProperties = /** @class */ (function (_super) {
    __extends(SectionProperties, _super);
    function SectionProperties(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.page, _d = _c === void 0 ? {} : _c, _e = _d.size, _f = _e === void 0 ? {} : _e, _g = _f.width, width = _g === void 0 ? exports.sectionPageSizeDefaults.WIDTH : _g, _h = _f.height, height = _h === void 0 ? exports.sectionPageSizeDefaults.HEIGHT : _h, _j = _f.orientation, orientation = _j === void 0 ? exports.sectionPageSizeDefaults.ORIENTATION : _j, _k = _d.margin, _l = _k === void 0 ? {} : _k, _m = _l.top, top = _m === void 0 ? exports.sectionMarginDefaults.TOP : _m, _o = _l.right, right = _o === void 0 ? exports.sectionMarginDefaults.RIGHT : _o, _p = _l.bottom, bottom = _p === void 0 ? exports.sectionMarginDefaults.BOTTOM : _p, _q = _l.left, left = _q === void 0 ? exports.sectionMarginDefaults.LEFT : _q, _r = _l.header, header = _r === void 0 ? exports.sectionMarginDefaults.HEADER : _r, _s = _l.footer, footer = _s === void 0 ? exports.sectionMarginDefaults.FOOTER : _s, _t = _l.gutter, gutter = _t === void 0 ? exports.sectionMarginDefaults.GUTTER : _t, _u = _d.pageNumbers, pageNumbers = _u === void 0 ? {} : _u, borders = _d.borders, textDirection = _d.textDirection, _v = _b.grid, _w = _v === void 0 ? {} : _v, _x = _w.linePitch, linePitch = _x === void 0 ? 360 : _x, charSpace = _w.charSpace, gridType = _w.type, _y = _b.headerWrapperGroup, headerWrapperGroup = _y === void 0 ? {} : _y, _z = _b.footerWrapperGroup, footerWrapperGroup = _z === void 0 ? {} : _z, lineNumbers = _b.lineNumbers, titlePage = _b.titlePage, verticalAlign = _b.verticalAlign, column = _b.column, type = _b.type;
        var _this = _super.call(this, "w:sectPr") || this;
        _this.addHeaderFooterGroup(header_footer_reference_1.HeaderFooterType.HEADER, headerWrapperGroup);
        _this.addHeaderFooterGroup(header_footer_reference_1.HeaderFooterType.FOOTER, footerWrapperGroup);
        if (type) {
            _this.root.push(new section_type_1.Type(type));
        }
        _this.root.push((0, page_size_1.createPageSize)({ width: width, height: height, orientation: orientation }));
        _this.root.push(new page_margin_1.PageMargin(top, right, bottom, left, header, footer, gutter));
        if (borders) {
            _this.root.push(new page_borders_1.PageBorders(borders));
        }
        if (lineNumbers) {
            _this.root.push((0, line_number_1.createLineNumberType)(lineNumbers));
        }
        _this.root.push(new page_number_1.PageNumberType(pageNumbers));
        if (column) {
            _this.root.push(new columns_1.Columns(column));
        }
        if (verticalAlign) {
            _this.root.push(new vertical_align_1.VerticalAlignElement(verticalAlign));
        }
        if (titlePage !== undefined) {
            _this.root.push(new xml_components_1.OnOffElement("w:titlePg", titlePage));
        }
        if (textDirection) {
            _this.root.push(new page_text_direction_1.PageTextDirection(textDirection));
        }
        _this.root.push((0, doc_grid_1.createDocumentGrid)({ linePitch: linePitch, charSpace: charSpace, type: gridType }));
        return _this;
    }
    SectionProperties.prototype.addHeaderFooterGroup = function (type, group) {
        if (group.default) {
            this.root.push(new header_footer_reference_1.HeaderFooterReference(type, {
                type: header_footer_reference_1.HeaderFooterReferenceType.DEFAULT,
                id: group.default.View.ReferenceId,
            }));
        }
        if (group.first) {
            this.root.push(new header_footer_reference_1.HeaderFooterReference(type, {
                type: header_footer_reference_1.HeaderFooterReferenceType.FIRST,
                id: group.first.View.ReferenceId,
            }));
        }
        if (group.even) {
            this.root.push(new header_footer_reference_1.HeaderFooterReference(type, {
                type: header_footer_reference_1.HeaderFooterReferenceType.EVEN,
                id: group.even.View.ReferenceId,
            }));
        }
    };
    return SectionProperties;
}(xml_components_1.XmlComponent));
exports.SectionProperties = SectionProperties;
