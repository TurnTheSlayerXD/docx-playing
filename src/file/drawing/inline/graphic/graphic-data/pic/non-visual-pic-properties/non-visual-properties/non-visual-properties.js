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
exports.NonVisualProperties = void 0;
var doc_properties_children_1 = require("@file/drawing/doc-properties/doc-properties-children");
var paragraph_1 = require("@file/paragraph");
var xml_components_1 = require("@file/xml-components");
var non_visual_properties_attributes_1 = require("./non-visual-properties-attributes");
// <complexType name="CT_NonVisualDrawingProps">
//     <sequence>
//         <element name="hlinkClick" type="CT_Hyperlink" minOccurs="0" maxOccurs="1" />
//         <element name="hlinkHover" type="CT_Hyperlink" minOccurs="0" maxOccurs="1" />
//         <element name="extLst" type="CT_OfficeArtExtensionList" minOccurs="0" maxOccurs="1" />
//     </sequence>
//     <attribute name="id" type="ST_DrawingElementId" use="required" />
//     <attribute name="name" type="xsd:string" use="required" />
//     <attribute name="descr" type="xsd:string" use="optional" default="" />
//     <attribute name="hidden" type="xsd:boolean" use="optional" default="false" />
// </complexType>
var NonVisualProperties = /** @class */ (function (_super) {
    __extends(NonVisualProperties, _super);
    function NonVisualProperties() {
        var _this = _super.call(this, "pic:cNvPr") || this;
        _this.root.push(new non_visual_properties_attributes_1.NonVisualPropertiesAttributes({
            id: 0,
            name: "",
            descr: "",
        }));
        return _this;
    }
    NonVisualProperties.prototype.prepForXml = function (context) {
        for (var i = context.stack.length - 1; i >= 0; i--) {
            var element = context.stack[i];
            if (!(element instanceof paragraph_1.ConcreteHyperlink)) {
                continue;
            }
            this.root.push((0, doc_properties_children_1.createHyperlinkClick)(element.linkId, false));
            break;
        }
        return _super.prototype.prepForXml.call(this, context);
    };
    return NonVisualProperties;
}(xml_components_1.XmlComponent));
exports.NonVisualProperties = NonVisualProperties;
