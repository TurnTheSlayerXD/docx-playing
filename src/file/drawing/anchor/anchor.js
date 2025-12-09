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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anchor = void 0;
var xml_components_1 = require("@file/xml-components");
var floating_1 = require("../floating");
var graphic_1 = require("../inline/graphic");
var text_wrap_1 = require("../text-wrap");
var doc_properties_1 = require("./../doc-properties/doc-properties");
var effect_extent_1 = require("./../effect-extent/effect-extent");
var extent_1 = require("./../extent/extent");
var graphic_frame_properties_1 = require("./../graphic-frame/graphic-frame-properties");
var anchor_attributes_1 = require("./anchor-attributes");
// <xsd:complexType name="CT_Anchor">
//     <xsd:sequence>
//         <xsd:element name="simplePos" type="a:CT_Point2D"/>
//         <xsd:element name="positionH" type="CT_PosH"/>
//         <xsd:element name="positionV" type="CT_PosV"/>
//         <xsd:element name="extent" type="a:CT_PositiveSize2D"/>
//         <xsd:element name="effectExtent" type="CT_EffectExtent" minOccurs="0"/>
//         <xsd:group ref="EG_WrapType"/>
//         <xsd:element name="docPr" type="a:CT_NonVisualDrawingProps" minOccurs="1" maxOccurs="1"/>
//         <xsd:element name="cNvGraphicFramePr" type="a:CT_NonVisualGraphicFrameProperties"
//             minOccurs="0" maxOccurs="1"/>
//         <xsd:element ref="a:graphic" minOccurs="1" maxOccurs="1"/>
//     </xsd:sequence>
//     <xsd:attribute name="distT" type="ST_WrapDistance" use="optional"/>
//     <xsd:attribute name="distB" type="ST_WrapDistance" use="optional"/>
//     <xsd:attribute name="distL" type="ST_WrapDistance" use="optional"/>
//     <xsd:attribute name="distR" type="ST_WrapDistance" use="optional"/>
//     <xsd:attribute name="simplePos" type="xsd:boolean"/>
//     <xsd:attribute name="relativeHeight" type="xsd:unsignedInt" use="required"/>
//     <xsd:attribute name="behindDoc" type="xsd:boolean" use="required"/>
//     <xsd:attribute name="locked" type="xsd:boolean" use="required"/>
//     <xsd:attribute name="layoutInCell" type="xsd:boolean" use="required"/>
//     <xsd:attribute name="hidden" type="xsd:boolean" use="optional"/>
//     <xsd:attribute name="allowOverlap" type="xsd:boolean" use="required"/>
// </xsd:complexType>
var Anchor = /** @class */ (function (_super) {
    __extends(Anchor, _super);
    function Anchor(_a) {
        var mediaData = _a.mediaData, transform = _a.transform, drawingOptions = _a.drawingOptions;
        var _this = _super.call(this, "wp:anchor") || this;
        var floating = __assign({ allowOverlap: true, behindDocument: false, lockAnchor: false, layoutInCell: true, verticalPosition: {}, horizontalPosition: {} }, drawingOptions.floating);
        _this.root.push(new anchor_attributes_1.AnchorAttributes({
            distT: floating.margins ? floating.margins.top || 0 : 0,
            distB: floating.margins ? floating.margins.bottom || 0 : 0,
            distL: floating.margins ? floating.margins.left || 0 : 0,
            distR: floating.margins ? floating.margins.right || 0 : 0,
            simplePos: "0", // note: word doesn't fully support - so we use 0
            allowOverlap: floating.allowOverlap === true ? "1" : "0",
            behindDoc: floating.behindDocument === true ? "1" : "0",
            locked: floating.lockAnchor === true ? "1" : "0",
            layoutInCell: floating.layoutInCell === true ? "1" : "0",
            relativeHeight: floating.zIndex ? floating.zIndex : transform.emus.y,
        }));
        _this.root.push((0, floating_1.createSimplePos)());
        _this.root.push((0, floating_1.createHorizontalPosition)(floating.horizontalPosition));
        _this.root.push((0, floating_1.createVerticalPosition)(floating.verticalPosition));
        _this.root.push((0, extent_1.createExtent)({ x: transform.emus.x, y: transform.emus.y }));
        _this.root.push((0, effect_extent_1.createEffectExtent)({ top: 0, right: 0, bottom: 0, left: 0 }));
        if (drawingOptions.floating !== undefined && drawingOptions.floating.wrap !== undefined) {
            switch (drawingOptions.floating.wrap.type) {
                case text_wrap_1.TextWrappingType.SQUARE:
                    _this.root.push(new text_wrap_1.WrapSquare(drawingOptions.floating.wrap, drawingOptions.floating.margins));
                    break;
                case text_wrap_1.TextWrappingType.TIGHT:
                    _this.root.push(new text_wrap_1.WrapTight(drawingOptions.floating.margins));
                    break;
                case text_wrap_1.TextWrappingType.TOP_AND_BOTTOM:
                    _this.root.push(new text_wrap_1.WrapTopAndBottom(drawingOptions.floating.margins));
                    break;
                case text_wrap_1.TextWrappingType.NONE:
                default:
                    _this.root.push(new text_wrap_1.WrapNone());
            }
        }
        else {
            _this.root.push(new text_wrap_1.WrapNone());
        }
        _this.root.push(new doc_properties_1.DocProperties(drawingOptions.docProperties));
        _this.root.push((0, graphic_frame_properties_1.createGraphicFrameProperties)());
        _this.root.push(new graphic_1.Graphic({ mediaData: mediaData, transform: transform, outline: drawingOptions.outline }));
        return _this;
    }
    return Anchor;
}(xml_components_1.XmlComponent));
exports.Anchor = Anchor;
