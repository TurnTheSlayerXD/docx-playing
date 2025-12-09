"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocumentGrid = exports.DocumentGridType = void 0;
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
/**
 * Specifies the type of the current document grid, which defines the grid behavior.
 *
 * The grid can define a grid which snaps all East Asian characters to grid positions, but leaves Latin text with its default spacing; a grid which adds the specified character pitch to all characters on each row; or a grid which affects only the line pitch for the current section.
 *
 * Reference: https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_ST_DocGrid_topic_ID0ELYP2.html
 *
 * ## XSD Schema
 * ```xml
 * <xsd:simpleType name="ST_DocGrid">
 *   <xsd:restriction base="xsd:string">
 *     <xsd:enumeration value="default"/>
 *     <xsd:enumeration value="lines"/>
 *     <xsd:enumeration value="linesAndChars"/>
 *     <xsd:enumeration value="snapToChars"/>
 *   </xsd:restriction>
 * </xsd:simpleType>
 * ```
 */
exports.DocumentGridType = {
    /**
     * Specifies that no document grid shall be applied to the contents of the current section in the document.
     */
    DEFAULT: "default",
    /**
     * Specifies that the parent section shall have additional line pitch added to each line within it (as specified on the <docGrid> element (§2.6.5)) in order to maintain the specified number of lines per page.
     */
    LINES: "lines",
    /**
     * Specifies that the parent section shall have both the additional line pitch and character pitch added to each line and character within it (as specified on the <docGrid> element (§2.6.5)) in order to maintain a specific number of lines per page and characters per line.
     *
     * When this value is set, the input specified via the user interface may be allowed in exact number of line/character pitch units. */
    LINES_AND_CHARS: "linesAndChars",
    /**
     * Specifies that the parent section shall have both the additional line pitch and character pitch added to each line and character within it (as specified on the <docGrid> element (§2.6.5)) in order to maintain a specific number of lines per page and characters per line.
     *
     * When this value is set, the input specified via the user interface may be restricted to the number of lines per page and characters per line, with the consumer or producer translating this information based on the current font data to get the resulting line and character pitch values
     */
    SNAP_TO_CHARS: "snapToChars",
};
/**
 * This element specifies the settings for the document grid, which enables precise layout of full-width East Asian language characters within a document by specifying the desired number of characters per line and lines per page for all East Asian text content in this section.
 *
 * Reference: https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_docGrid_topic_ID0EHU5S.html
 *
 * ```xml
 * <xsd:complexType name="CT_DocGrid">
 *   <xsd:attribute name="type" type="ST_DocGrid"/>
 *   <xsd:attribute name="linePitch" type="ST_DecimalNumber"/>
 *   <xsd:attribute name="charSpace" type="ST_DecimalNumber"/>
 * </xsd:complexType>
 * ```
 * @returns
 */
var createDocumentGrid = function (_a) {
    var type = _a.type, linePitch = _a.linePitch, charSpace = _a.charSpace;
    return new xml_components_1.BuilderElement({
        name: "w:docGrid",
        attributes: {
            type: { key: "w:type", value: type },
            linePitch: { key: "w:linePitch", value: (0, values_1.decimalNumber)(linePitch) },
            charSpace: { key: "w:charSpace", value: charSpace ? (0, values_1.decimalNumber)(charSpace) : undefined },
        },
    });
};
exports.createDocumentGrid = createDocumentGrid;
