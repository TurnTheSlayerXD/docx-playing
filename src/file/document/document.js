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
exports.Document = void 0;
// http://officeopenxml.com/WPdocument.php
var xml_components_1 = require("@file/xml-components");
var body_1 = require("./body");
var document_attributes_1 = require("./document-attributes");
var document_background_1 = require("./document-background");
// <xsd:element name="document" type="CT_Document"/>
//
// <xsd:complexType name="CT_Document">
//     <xsd:complexContent>
//         <xsd:extension base="CT_DocumentBase">
//             <xsd:sequence>
//                 <xsd:element name="body" type="CT_Body" minOccurs="0" maxOccurs="1"/>
//             </xsd:sequence>
//             <xsd:attribute name="conformance" type="s:ST_ConformanceClass"/>
//             <xsd:attribute ref="mc:Ignorable" use="optional" />
//         </xsd:extension>
//     </xsd:complexContent>
// </xsd:complexType>
//
// <xsd:complexType name="CT_DocumentBase">
//     <xsd:sequence>
//         <xsd:element name="background" type="CT_Background" minOccurs="0"/>
//     </xsd:sequence>
// </xsd:complexType>
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document(options) {
        var _this = _super.call(this, "w:document") || this;
        _this.root.push(new document_attributes_1.DocumentAttributes([
            "wpc",
            "mc",
            "o",
            "r",
            "m",
            "v",
            "wp14",
            "wp",
            "w10",
            "w",
            "w14",
            "w15",
            "wpg",
            "wpi",
            "wne",
            "wps",
            "cx",
            "cx1",
            "cx2",
            "cx3",
            "cx4",
            "cx5",
            "cx6",
            "cx7",
            "cx8",
            "aink",
            "am3d",
            "w16cex",
            "w16cid",
            "w16",
            "w16sdtdh",
            "w16se",
        ], "w14 w15 wp14"));
        _this.body = new body_1.Body();
        if (options.background) {
            _this.root.push(new document_background_1.DocumentBackground(options.background));
        }
        _this.root.push(_this.body);
        return _this;
    }
    Document.prototype.add = function (item) {
        this.body.push(item);
        return this;
    };
    Object.defineProperty(Document.prototype, "Body", {
        get: function () {
            return this.body;
        },
        enumerable: false,
        configurable: true
    });
    return Document;
}(xml_components_1.XmlComponent));
exports.Document = Document;
