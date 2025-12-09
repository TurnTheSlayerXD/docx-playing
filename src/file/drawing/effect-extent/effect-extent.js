"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEffectExtent = void 0;
var xml_components_1 = require("@file/xml-components");
/**
 * This element specifies the additional extent which shall be added to each edge of the image (top, bottom, left, right) in order to compensate for any drawing effects applied to the DrawingML object.
 *
 * The `<extent>` element (§5.5.2.7) specifies the size of the actual DrawingML object; however, an object may have effects applied which change its overall size
 *
 * Reference: https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_effectExtent_topic_ID0E5O3OB.html
 *
 * ## XSD Schema
 *
 * ```xml
 * <xsd:complexType name="CT_EffectExtent">
 *   <xsd:attribute name="l" type="a:ST_Coordinate" use="required"/>
 *   <xsd:attribute name="t" type="a:ST_Coordinate" use="required"/>
 *   <xsd:attribute name="r" type="a:ST_Coordinate" use="required"/>
 *   <xsd:attribute name="b" type="a:ST_Coordinate" use="required"/>
 * </xsd:complexType>
 * ```
 */
var createEffectExtent = function (_a) {
    var top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    return new xml_components_1.BuilderElement({
        name: "wp:effectExtent",
        attributes: {
            top: {
                key: "t",
                value: top,
            },
            right: {
                key: "r",
                value: right,
            },
            bottom: {
                key: "b",
                value: bottom,
            },
            left: {
                key: "l",
                value: left,
            },
        },
    });
};
exports.createEffectExtent = createEffectExtent;
