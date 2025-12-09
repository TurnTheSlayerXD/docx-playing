"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawing = void 0;
var xml_components_1 = require("@file/xml-components");
var anchor_1 = require("./anchor");
var inline_1 = require("./inline");
// <xsd:complexType name="CT_Drawing">
// <xsd:choice minOccurs="1" maxOccurs="unbounded">
//   <xsd:element ref="wp:anchor" minOccurs="0"/>
//   <xsd:element ref="wp:inline" minOccurs="0"/>
// </xsd:choice>
// </xsd:complexType>
var Drawing = /** @class */ (function (_super) {
    __extends(Drawing, _super);
    function Drawing(imageData, drawingOptions) {
        if (drawingOptions === void 0) { drawingOptions = {}; }
        var _this = _super.call(this, "w:drawing") || this;
        if (!drawingOptions.floating) {
            _this.root.push((0, inline_1.createInline)({
                mediaData: imageData,
                transform: imageData.transformation,
                docProperties: drawingOptions.docProperties,
                outline: drawingOptions.outline,
            }));
        }
        else {
            _this.root.push(new anchor_1.Anchor({ mediaData: imageData, transform: imageData.transformation, drawingOptions: drawingOptions }));
        }
        return _this;
    }
    return Drawing;
}(xml_components_1.XmlComponent));
exports.Drawing = Drawing;
