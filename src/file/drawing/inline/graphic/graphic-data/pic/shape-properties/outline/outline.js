"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOutline = exports.PenAlignment = exports.CompoundLine = exports.LineCap = void 0;
// http://officeopenxml.com/drwSp-outline.php
var xml_components_1 = require("@file/xml-components");
var no_fill_1 = require("./no-fill");
var solid_fill_1 = require("./solid-fill");
// <xsd:complexType name="CT_TextOutlineEffect">
//     <xsd:sequence>
//         <xsd:group ref="EG_FillProperties" minOccurs="0"/>
//         <xsd:group ref="EG_LineDashProperties" minOccurs="0"/>
//         <xsd:group ref="EG_LineJoinProperties" minOccurs="0"/>
//     </xsd:sequence>
//     <xsd:attribute name="w" use="optional" type="a:ST_LineWidth"/>
//     <xsd:attribute name="cap" use="optional" type="ST_LineCap"/>
//     <xsd:attribute name="cmpd" use="optional" type="ST_CompoundLine"/>
//     <xsd:attribute name="algn" use="optional" type="ST_PenAlignment"/>
// </xsd:complexType>
// <xsd:simpleType name="ST_LineCap">
//     <xsd:restriction base="xsd:string">
//     <xsd:enumeration value="rnd"/>
//     <xsd:enumeration value="sq"/>
//     <xsd:enumeration value="flat"/>
//     </xsd:restriction>
// </xsd:simpleType>
exports.LineCap = {
    ROUND: "rnd",
    SQUARE: "sq",
    FLAT: "flat",
};
// <xsd:simpleType name="ST_CompoundLine">
//     <xsd:restriction base="xsd:string">
//         <xsd:enumeration value="sng"/>
//         <xsd:enumeration value="dbl"/>
//         <xsd:enumeration value="thickThin"/>
//         <xsd:enumeration value="thinThick"/>
//         <xsd:enumeration value="tri"/>
//     </xsd:restriction>
// </xsd:simpleType>
exports.CompoundLine = {
    SINGLE: "sng",
    DOUBLE: "dbl",
    THICK_THIN: "thickThin",
    THIN_THICK: "thinThick",
    TRI: "tri",
};
// <xsd:simpleType name="ST_PenAlignment">
//     <xsd:restriction base="xsd:string">
//         <xsd:enumeration value="ctr"/>
//         <xsd:enumeration value="in"/>
//     </xsd:restriction>
// </xsd:simpleType>
exports.PenAlignment = {
    CENTER: "ctr",
    INSET: "in",
};
var createOutline = function (options) {
    return new xml_components_1.BuilderElement({
        name: "a:ln",
        attributes: {
            width: {
                key: "w",
                value: options.width,
            },
            cap: {
                key: "cap",
                value: options.cap,
            },
            compoundLine: {
                key: "cmpd",
                value: options.compoundLine,
            },
            align: {
                key: "algn",
                value: options.align,
            },
        },
        children: [
            options.type === "noFill"
                ? (0, no_fill_1.createNoFill)()
                : options.solidFillType === "rgb"
                    ? (0, solid_fill_1.createSolidFill)({
                        type: "rgb",
                        value: options.value,
                    })
                    : (0, solid_fill_1.createSolidFill)({
                        type: "scheme",
                        value: options.value,
                    }),
        ],
    });
};
exports.createOutline = createOutline;
