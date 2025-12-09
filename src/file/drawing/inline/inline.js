"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInline = void 0;
var xml_components_1 = require("@file/xml-components");
var doc_properties_1 = require("./../doc-properties/doc-properties");
var effect_extent_1 = require("./../effect-extent/effect-extent");
var extent_1 = require("./../extent/extent");
var graphic_frame_properties_1 = require("./../graphic-frame/graphic-frame-properties");
var graphic_1 = require("./../inline/graphic");
// <xsd:complexType name="CT_Inline">
//     <xsd:sequence>
//         <xsd:element name="extent" type="a:CT_PositiveSize2D"/>
//         <xsd:element name="effectExtent" type="CT_EffectExtent" minOccurs="0"/>
//         <xsd:element name="docPr" type="a:CT_NonVisualDrawingProps" minOccurs="1" maxOccurs="1"/>
//         <xsd:element name="cNvGraphicFramePr" type="a:CT_NonVisualGraphicFrameProperties"
//             minOccurs="0" maxOccurs="1"/>
//         <xsd:element ref="a:graphic" minOccurs="1" maxOccurs="1"/>
//     </xsd:sequence>
//     <xsd:attribute name="distT" type="ST_WrapDistance" use="optional"/>
//     <xsd:attribute name="distB" type="ST_WrapDistance" use="optional"/>
//     <xsd:attribute name="distL" type="ST_WrapDistance" use="optional"/>
//     <xsd:attribute name="distR" type="ST_WrapDistance" use="optional"/>
// </xsd:complexType>
var createInline = function (_a) {
    var _b, _c, _d, _e;
    var mediaData = _a.mediaData, transform = _a.transform, docProperties = _a.docProperties, outline = _a.outline;
    return new xml_components_1.BuilderElement({
        name: "wp:inline",
        attributes: {
            distanceTop: {
                key: "distT",
                value: 0,
            },
            distanceBottom: {
                key: "distB",
                value: 0,
            },
            distanceLeft: {
                key: "distL",
                value: 0,
            },
            distanceRight: {
                key: "distR",
                value: 0,
            },
        },
        children: [
            (0, extent_1.createExtent)({ x: transform.emus.x, y: transform.emus.y }),
            (0, effect_extent_1.createEffectExtent)(outline
                ? {
                    top: ((_b = outline.width) !== null && _b !== void 0 ? _b : 9525) * 2,
                    right: ((_c = outline.width) !== null && _c !== void 0 ? _c : 9525) * 2,
                    bottom: ((_d = outline.width) !== null && _d !== void 0 ? _d : 9525) * 2,
                    left: ((_e = outline.width) !== null && _e !== void 0 ? _e : 9525) * 2,
                }
                : { top: 0, right: 0, bottom: 0, left: 0 }),
            new doc_properties_1.DocProperties(docProperties),
            (0, graphic_frame_properties_1.createGraphicFrameProperties)(),
            new graphic_1.Graphic({ mediaData: mediaData, transform: transform, outline: outline }),
        ],
    });
};
exports.createInline = createInline;
