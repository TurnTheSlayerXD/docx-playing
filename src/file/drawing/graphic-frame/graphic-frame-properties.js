"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraphicFrameProperties = void 0;
var xml_components_1 = require("@file/xml-components");
var graphic_frame_locks_1 = require("./graphic-frame-locks/graphic-frame-locks");
/**
 * # Common DrawingML Non-Visual Properties
 *
 * This element specifies common non-visual DrawingML object properties for the parent DrawingML object. These properties are specified as child elements of this element.
 *
 * References:
 * - https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_cNvGraphicFramePr_topic_ID0E6U2OB.html
 *
 * ## XSD Schema
 *
 * ```xml
 * <xsd:complexType name="CT_NonVisualGraphicFrameProperties">
 *   <xsd:sequence>
 *     <xsd:element name="graphicFrameLocks" type="CT_GraphicalObjectFrameLocking" minOccurs="0" maxOccurs="1"/>
 *     <xsd:element name="extLst" type="CT_OfficeArtExtensionList" minOccurs="0" maxOccurs="1"/>
 *   </xsd:sequence>
 * </xsd:complexType>
 * ```
 */
var createGraphicFrameProperties = function () {
    return new xml_components_1.BuilderElement({
        name: "wp:cNvGraphicFramePr",
        children: [new graphic_frame_locks_1.GraphicFrameLocks()],
    });
};
exports.createGraphicFrameProperties = createGraphicFrameProperties;
