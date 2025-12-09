"use strict";
//     <sequence>
//         <element name="hlinkClick" type="CT_Hyperlink" minOccurs="0" maxOccurs="1" />
//         <element name="hlinkHover" type="CT_Hyperlink" minOccurs="0" maxOccurs="1" />
//         <element name="extLst" type="CT_OfficeArtExtensionList" minOccurs="0" maxOccurs="1" />
//     </sequence>
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
exports.createHyperlinkHover = exports.createHyperlinkClick = void 0;
var xml_components_1 = require("@file/xml-components");
// <xsd:complexType name="CT_Hyperlink">
//     <xsd:group ref="EG_PContent" minOccurs="0" maxOccurs="unbounded" />
//     <xsd:attribute name="tgtFrame" type="s:ST_String" use="optional" />
//     <xsd:attribute name="tooltip" type="s:ST_String" use="optional" />
//     <xsd:attribute name="docLocation" type="s:ST_String" use="optional" />
//     <xsd:attribute name="history" type="s:ST_OnOff" use="optional" />
//     <xsd:attribute name="anchor" type="s:ST_String" use="optional" />
//     <xsd:attribute ref="r:id" />
// </xsd:complexType>
// TODO: Implement the rest of the attributes
var createHyperlinkClick = function (linkId, hasXmlNs) {
    return new xml_components_1.BuilderElement({
        name: "a:hlinkClick",
        attributes: __assign(__assign({}, (hasXmlNs
            ? {
                xmlns: {
                    key: "xmlns:a",
                    value: "http://schemas.openxmlformats.org/drawingml/2006/main",
                },
            }
            : {})), { id: {
                key: "r:id",
                value: "rId".concat(linkId),
            } }),
    });
};
exports.createHyperlinkClick = createHyperlinkClick;
var createHyperlinkHover = function (linkId, hasXmlNs) {
    return new xml_components_1.BuilderElement({
        name: "a:hlinkHover",
        attributes: __assign(__assign({}, (hasXmlNs
            ? {
                xmlns: {
                    key: "xmlns:a",
                    value: "http://schemas.openxmlformats.org/drawingml/2006/main",
                },
            }
            : {})), { id: {
                key: "r:id",
                value: "rId".concat(linkId),
            } }),
    });
};
exports.createHyperlinkHover = createHyperlinkHover;
