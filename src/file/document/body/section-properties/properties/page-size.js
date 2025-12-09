"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPageSize = exports.PageOrientation = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
/**
 * This simple type specifies the orientation of all pages in the parent section. This information is used to determine the actual paper size to use when printing the file.
 *
 * Reference: https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_ST_PageOrientation_topic_ID0EKBK3.html
 *
 * ## XSD Schema
 *
 * ```xml
 * <xsd:simpleType name="ST_PageOrientation">
 *   <xsd:restriction base="xsd:string">
 *     <xsd:enumeration value="portrait"/>
 *     <xsd:enumeration value="landscape"/>
 *   </xsd:restriction>
 * </xsd:simpleType>
 * ```
 */
exports.PageOrientation = {
    /**
     * ## Portrait Mode
     *
     * Specifies that pages in this section shall be printed in portrait mode.
     */
    PORTRAIT: "portrait",
    /**
     * ## Landscape Mode
     *
     * Specifies that pages in this section shall be printed in landscape mode, which prints the page contents with a 90 degree rotation with respect to the normal page orientation.
     */
    LANDSCAPE: "landscape",
};
/**
 * This element specifies the properties (size and orientation) for all pages in the current section.
 *
 * Reference: https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_pgSz_topic_ID0ENEDT.html?hl=pgsz%2Cpage%2Csize
 *
 * ## XSD Schema
 *
 * ```xml
 * <xsd:complexType name="CT_PageSz">
 *   <xsd:attribute name="w" type="s:ST_TwipsMeasure"/>
 *   <xsd:attribute name="h" type="s:ST_TwipsMeasure"/>
 *   <xsd:attribute name="orient" type="ST_PageOrientation" use="optional"/>
 *   <xsd:attribute name="code" type="ST_DecimalNumber" use="optional"/>
 * </xsd:complexType>
 * ```
 */
var createPageSize = function (_a) {
    var width = _a.width, height = _a.height, orientation = _a.orientation, code = _a.code;
    var widthTwips = (0, values_1.twipsMeasureValue)(width);
    var heightTwips = (0, values_1.twipsMeasureValue)(height);
    return new xml_components_1.BuilderElement({
        name: "w:pgSz",
        attributes: {
            width: { key: "w:w", value: orientation === exports.PageOrientation.LANDSCAPE ? heightTwips : widthTwips },
            height: { key: "w:h", value: orientation === exports.PageOrientation.LANDSCAPE ? widthTwips : heightTwips },
            orientation: { key: "w:orient", value: orientation },
            code: { key: "w:code", value: code },
        },
    });
};
exports.createPageSize = createPageSize;
