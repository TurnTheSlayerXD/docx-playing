"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExtent = void 0;
var xml_components_1 = require("@file/xml-components");
/**
 * This element specifies the extents of the parent `DrawingML` object within the document (i.e. its final height and width).
 *
 * Reference: https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_extent_topic_ID0EQB4OB.html
 *
 * ## XSD Schema
 *
 * ```xml
 * <complexType name="CT_PositiveSize2D">
 *   <attribute name="cx" type="ST_PositiveCoordinate" use="required"/>
 *   <attribute name="cy" type="ST_PositiveCoordinate" use="required"/>
 * </complexType>
 * ```
 */
var createExtent = function (_a) {
    var x = _a.x, y = _a.y;
    return new xml_components_1.BuilderElement({
        name: "wp:extent",
        attributes: {
            x: { key: "cx", value: x },
            y: { key: "cy", value: y },
        },
    });
};
exports.createExtent = createExtent;
