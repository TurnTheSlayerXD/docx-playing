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
exports.BookmarkEnd = exports.BookmarkStart = exports.Bookmark = void 0;
// http://officeopenxml.com/WPbookmark.php
var xml_components_1 = require("@file/xml-components");
var convenience_functions_1 = require("@util/convenience-functions");
var bookmark_attributes_1 = require("./bookmark-attributes");
var Bookmark = /** @class */ (function () {
    function Bookmark(options) {
        this.bookmarkUniqueNumericId = (0, convenience_functions_1.bookmarkUniqueNumericIdGen)();
        var linkId = this.bookmarkUniqueNumericId();
        this.start = new BookmarkStart(options.id, linkId);
        this.children = options.children;
        this.end = new BookmarkEnd(linkId);
    }
    return Bookmark;
}());
exports.Bookmark = Bookmark;
// <xsd:element name="bookmarkStart" type="CT_Bookmark"/>
// <xsd:element name="bookmarkEnd" type="CT_MarkupRange"/>
// <xsd:complexType name="CT_Bookmark">
//   <xsd:complexContent>
//     <xsd:extension base="CT_BookmarkRange">
//     <xsd:attribute name="name" type="s:ST_String" use="required"/>
//     </xsd:extension>
//   </xsd:complexContent>
// </xsd:complexType>
// <xsd:complexType name="CT_BookmarkRange">
//   <xsd:complexContent>
//     <xsd:extension base="CT_MarkupRange">
//       <xsd:attribute name="colFirst" type="ST_DecimalNumber" use="optional"/>
//       <xsd:attribute name="colLast" type="ST_DecimalNumber" use="optional"/>
//     </xsd:extension>
//   </xsd:complexContent>
// </xsd:complexType>
// <xsd:complexType name="CT_MarkupRange">
//   <xsd:complexContent>
//     <xsd:extension base="CT_Markup">
//       <xsd:attribute name="displacedByCustomXml" type="ST_DisplacedByCustomXml" use="optional"/>
//     </xsd:extension>
//   </xsd:complexContent>
// </xsd:complexType>
// <xsd:complexType name="CT_Markup">
//   <xsd:attribute name="id" type="ST_DecimalNumber" use="required"/>
// </xsd:complexType>
var BookmarkStart = /** @class */ (function (_super) {
    __extends(BookmarkStart, _super);
    function BookmarkStart(id, linkId) {
        var _this = _super.call(this, "w:bookmarkStart") || this;
        var attributes = new bookmark_attributes_1.BookmarkStartAttributes({
            name: id,
            id: linkId,
        });
        _this.root.push(attributes);
        return _this;
    }
    return BookmarkStart;
}(xml_components_1.XmlComponent));
exports.BookmarkStart = BookmarkStart;
var BookmarkEnd = /** @class */ (function (_super) {
    __extends(BookmarkEnd, _super);
    function BookmarkEnd(linkId) {
        var _this = _super.call(this, "w:bookmarkEnd") || this;
        var attributes = new bookmark_attributes_1.BookmarkEndAttributes({
            id: linkId,
        });
        _this.root.push(attributes);
        return _this;
    }
    return BookmarkEnd;
}(xml_components_1.XmlComponent));
exports.BookmarkEnd = BookmarkEnd;
