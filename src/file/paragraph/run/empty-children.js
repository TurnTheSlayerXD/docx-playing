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
exports.LastRenderedPageBreak = exports.Tab = exports.CarriageReturn = exports.PageNumberElement = exports.ContinuationSeparator = exports.Separator = exports.EndnoteReference = exports.FootnoteReferenceElement = exports.AnnotationReference = exports.YearLong = exports.MonthLong = exports.DayLong = exports.YearShort = exports.MonthShort = exports.DayShort = exports.SoftHyphen = exports.NoBreakHyphen = void 0;
var xml_components_1 = require("@file/xml-components");
// <xsd:group name="EG_RunInnerContent">
//         ...
//         <xsd:element name="noBreakHyphen" type="CT_Empty"/>
//         <xsd:element name="softHyphen" type="CT_Empty" minOccurs="0" />
//         <xsd:element name="dayShort" type="CT_Empty" minOccurs="0" />
//         <xsd:element name="monthShort" type="CT_Empty" minOccurs="0" />
//         <xsd:element name="yearShort" type="CT_Empty" minOccurs="0" />
//         <xsd:element name="dayLong" type="CT_Empty" minOccurs="0" />
//         <xsd:element name="monthLong" type="CT_Empty" minOccurs="0" />
//         <xsd:element name="yearLong" type="CT_Empty" minOccurs="0" />
//         <xsd:element name="annotationRef" type="CT_Empty" minOccurs="0" />
//         <xsd:element name="footnoteRef" type="CT_Empty" minOccurs="0" />
//         <xsd:element name="endnoteRef" type="CT_Empty" minOccurs="0" />
//         <xsd:element name="separator" type="CT_Empty" minOccurs="0" />
//         <xsd:element name="continuationSeparator" type="CT_Empty" minOccurs="0" />
//         ...
//         <xsd:element name="pgNum" type="CT_Empty" minOccurs="0" />
//         <xsd:element name="cr" type="CT_Empty" minOccurs="0" />
//         <xsd:element name="tab" type="CT_Empty" minOccurs="0" />
//         ...
//         <xsd:element name="lastRenderedPageBreak" type="CT_Empty" minOccurs="0" maxOccurs="1" />
//     </xsd:choice>
// </xsd:group>
var NoBreakHyphen = /** @class */ (function (_super) {
    __extends(NoBreakHyphen, _super);
    function NoBreakHyphen() {
        return _super.call(this, "w:noBreakHyphen") || this;
    }
    return NoBreakHyphen;
}(xml_components_1.EmptyElement));
exports.NoBreakHyphen = NoBreakHyphen;
var SoftHyphen = /** @class */ (function (_super) {
    __extends(SoftHyphen, _super);
    function SoftHyphen() {
        return _super.call(this, "w:softHyphen") || this;
    }
    return SoftHyphen;
}(xml_components_1.EmptyElement));
exports.SoftHyphen = SoftHyphen;
var DayShort = /** @class */ (function (_super) {
    __extends(DayShort, _super);
    function DayShort() {
        return _super.call(this, "w:dayShort") || this;
    }
    return DayShort;
}(xml_components_1.EmptyElement));
exports.DayShort = DayShort;
var MonthShort = /** @class */ (function (_super) {
    __extends(MonthShort, _super);
    function MonthShort() {
        return _super.call(this, "w:monthShort") || this;
    }
    return MonthShort;
}(xml_components_1.EmptyElement));
exports.MonthShort = MonthShort;
var YearShort = /** @class */ (function (_super) {
    __extends(YearShort, _super);
    function YearShort() {
        return _super.call(this, "w:yearShort") || this;
    }
    return YearShort;
}(xml_components_1.EmptyElement));
exports.YearShort = YearShort;
var DayLong = /** @class */ (function (_super) {
    __extends(DayLong, _super);
    function DayLong() {
        return _super.call(this, "w:dayLong") || this;
    }
    return DayLong;
}(xml_components_1.EmptyElement));
exports.DayLong = DayLong;
var MonthLong = /** @class */ (function (_super) {
    __extends(MonthLong, _super);
    function MonthLong() {
        return _super.call(this, "w:monthLong") || this;
    }
    return MonthLong;
}(xml_components_1.EmptyElement));
exports.MonthLong = MonthLong;
var YearLong = /** @class */ (function (_super) {
    __extends(YearLong, _super);
    function YearLong() {
        return _super.call(this, "w:yearLong") || this;
    }
    return YearLong;
}(xml_components_1.EmptyElement));
exports.YearLong = YearLong;
var AnnotationReference = /** @class */ (function (_super) {
    __extends(AnnotationReference, _super);
    function AnnotationReference() {
        return _super.call(this, "w:annotationRef") || this;
    }
    return AnnotationReference;
}(xml_components_1.EmptyElement));
exports.AnnotationReference = AnnotationReference;
var FootnoteReferenceElement = /** @class */ (function (_super) {
    __extends(FootnoteReferenceElement, _super);
    function FootnoteReferenceElement() {
        return _super.call(this, "w:footnoteRef") || this;
    }
    return FootnoteReferenceElement;
}(xml_components_1.EmptyElement));
exports.FootnoteReferenceElement = FootnoteReferenceElement;
var EndnoteReference = /** @class */ (function (_super) {
    __extends(EndnoteReference, _super);
    function EndnoteReference() {
        return _super.call(this, "w:endnoteRef") || this;
    }
    return EndnoteReference;
}(xml_components_1.EmptyElement));
exports.EndnoteReference = EndnoteReference;
var Separator = /** @class */ (function (_super) {
    __extends(Separator, _super);
    function Separator() {
        return _super.call(this, "w:separator") || this;
    }
    return Separator;
}(xml_components_1.EmptyElement));
exports.Separator = Separator;
var ContinuationSeparator = /** @class */ (function (_super) {
    __extends(ContinuationSeparator, _super);
    function ContinuationSeparator() {
        return _super.call(this, "w:continuationSeparator") || this;
    }
    return ContinuationSeparator;
}(xml_components_1.EmptyElement));
exports.ContinuationSeparator = ContinuationSeparator;
var PageNumberElement = /** @class */ (function (_super) {
    __extends(PageNumberElement, _super);
    function PageNumberElement() {
        return _super.call(this, "w:pgNum") || this;
    }
    return PageNumberElement;
}(xml_components_1.EmptyElement));
exports.PageNumberElement = PageNumberElement;
var CarriageReturn = /** @class */ (function (_super) {
    __extends(CarriageReturn, _super);
    function CarriageReturn() {
        return _super.call(this, "w:cr") || this;
    }
    return CarriageReturn;
}(xml_components_1.EmptyElement));
exports.CarriageReturn = CarriageReturn;
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        return _super.call(this, "w:tab") || this;
    }
    return Tab;
}(xml_components_1.EmptyElement));
exports.Tab = Tab;
var LastRenderedPageBreak = /** @class */ (function (_super) {
    __extends(LastRenderedPageBreak, _super);
    function LastRenderedPageBreak() {
        return _super.call(this, "w:lastRenderedPageBreak") || this;
    }
    return LastRenderedPageBreak;
}(xml_components_1.EmptyElement));
exports.LastRenderedPageBreak = LastRenderedPageBreak;
