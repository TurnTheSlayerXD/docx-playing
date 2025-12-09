"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPositionOffset = void 0;
var xml_components_1 = require("@file/xml-components");
/**
 * # Absolute Position Offset
 *
 * This element specifies an absolute measurement for the positioning of a floating DrawingML object within a WordprocessingML document. This measurement shall be calculated relative to the top left edge of the positioning base specified by the parent element's `relativeFrom` attribute.
 *
 * References:
 * - https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_posOffset_topic_ID0EMG6OB.html
 * - http://officeopenxml.com/drwPicFloating-position.php
 */
var createPositionOffset = function (offsetValue) {
    return new xml_components_1.BuilderElement({
        name: "wp:posOffset",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        children: [offsetValue.toString()],
    });
};
exports.createPositionOffset = createPositionOffset;
