"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLineNumberType = exports.LineNumberRestartFormat = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
/**
 * This simple type specifies when the line numbering in the parent section shall be reset to its restart value. The line numbering increments for each line (even if the line number itself is not displayed) until it reaches the restart point specified by this element.
 *
 * Reference: https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_ST_LineNumberRestart_topic_ID0EUS42.html
 *
 * ## XSD Schema
 *
 * ```xml
 * <xsd:simpleType name="ST_LineNumberRestart">
 *   <xsd:restriction base="xsd:string">
 *     <xsd:enumeration value="newPage"/>
 *     <xsd:enumeration value="newSection"/>
 *     <xsd:enumeration value="continuous"/>
 *   </xsd:restriction>
 * </xsd:simpleType>
 * ```
 */
exports.LineNumberRestartFormat = {
    /**
     * ## Restart Line Numbering on Each Page
     *
     * Specifies that line numbering for the parent section shall restart to the starting value whenever a new page is displayed.
     */
    NEW_PAGE: "newPage",
    /**
     * ## Restart Line Numbering for Each Section
     *
     * Specifies that line numbering for the parent section shall restart to the starting value whenever the parent begins.
     */
    NEW_SECTION: "newSection",
    /**
     * ## Continue Line Numbering From Previous Section
     *
     * Specifies that line numbering for the parent section shall continue from the line numbering from the end of the previous section, if any.
     */
    CONTINUOUS: "continuous",
};
/**
 * This element specifies the settings for line numbering to be displayed before each column of text in this section in the document.
 *
 * References:
 * - https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_lnNumType_topic_ID0EVRAT.html
 * - http://officeopenxml.com/WPsectionLineNumbering.php
 *
 * ## XSD Schema
 *
 * ```xml
 * <xsd:complexType name="CT_LineNumber">
 *   <xsd:attribute name="countBy" type="ST_DecimalNumber" use="optional"/>
 *   <xsd:attribute name="start" type="ST_DecimalNumber" use="optional" default="1"/>
 *   <xsd:attribute name="distance" type="s:ST_TwipsMeasure" use="optional"/>
 *   <xsd:attribute name="restart" type="ST_LineNumberRestart" use="optional" default="newPage"/>
 * </xsd:complexType>
 * ```
 */
var createLineNumberType = function (_a) {
    var countBy = _a.countBy, start = _a.start, restart = _a.restart, distance = _a.distance;
    return new xml_components_1.BuilderElement({
        name: "w:lnNumType",
        attributes: {
            countBy: { key: "w:countBy", value: countBy === undefined ? undefined : (0, values_1.decimalNumber)(countBy) },
            start: { key: "w:start", value: start === undefined ? undefined : (0, values_1.decimalNumber)(start) },
            restart: { key: "w:restart", value: restart },
            distance: {
                key: "w:distance",
                value: distance === undefined ? undefined : (0, values_1.twipsMeasureValue)(distance),
            },
        },
    });
};
exports.createLineNumberType = createLineNumberType;
