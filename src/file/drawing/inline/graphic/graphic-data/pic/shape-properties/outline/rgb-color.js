"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSolidRgbColor = void 0;
var xml_components_1 = require("@file/xml-components");
// <xsd:complexType name="CT_SRgbColor">
//     <xsd:sequence>
//         <xsd:group ref="EG_ColorTransform" minOccurs="0" maxOccurs="unbounded"/>
//     </xsd:sequence>
//     <xsd:attribute name="val" type="s:ST_HexColorRGB" use="required"/>
// </xsd:complexType>
var createSolidRgbColor = function (options) {
    return new xml_components_1.BuilderElement({
        name: "a:srgbClr",
        attributes: {
            value: {
                key: "val",
                value: options.value,
            },
        },
    });
};
exports.createSolidRgbColor = createSolidRgbColor;
