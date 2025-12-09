"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSimplePos = void 0;
// http://officeopenxml.com/drwPicFloating-position.php
var xml_components_1 = require("@file/xml-components");
/**
 * # Simple Positioning Coordinates
 *
 * This element specifies the coordinates at which a DrawingML object shall be positioned relative to the top-left edge of its page, when the `simplePos` attribute is specified on the <anchor> element (§5.5.2.3).
 *
 * References:
 * - https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_simplePos_topic_ID0E5K6OB.html
 * - http://officeopenxml.com/drwPicFloating-position.php
 *
 * ## XSD Schema
 *
 * ```xml
 * <xsd:complexType name="CT_Point2D">
 *   <xsd:attribute name="x" type="ST_Coordinate" use="required"/>
 *   <xsd:attribute name="y" type="ST_Coordinate" use="required"/>
 * </xsd:complexType>
 * ```
 */
var createSimplePos = function () {
    return new xml_components_1.BuilderElement({
        name: "wp:simplePos",
        // NOTE: It's not fully supported in Microsoft Word, but this element is needed anyway
        attributes: {
            x: { key: "x", value: 0 },
            y: { key: "y", value: 0 },
        },
    });
};
exports.createSimplePos = createSimplePos;
