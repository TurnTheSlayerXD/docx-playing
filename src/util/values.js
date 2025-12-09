"use strict";
// Runtime checks and cleanup for value types in the spec that aren't easily expressed through our type system.
// These will help us to prevent silent failures and corrupted documents.
//
// Most of the rest of the types not defined here are either aliases of existing types or enumerations.
// Enumerations should probably just be implemented as enums, with instructions to end-users, without a runtime check.
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateTimeValue = exports.pointMeasureValue = exports.eighthPointMeasureValue = exports.measurementOrPercentValue = exports.percentageValue = exports.twipsMeasureValue = exports.signedHpsMeasureValue = exports.hpsMeasureValue = exports.signedTwipsMeasureValue = exports.hexColorValue = exports.positiveUniversalMeasureValue = exports.universalMeasureValue = exports.uCharHexNumber = exports.shortHexNumber = exports.longHexNumber = exports.unsignedDecimalNumber = exports.decimalNumber = void 0;
// <xsd:simpleType name="ST_DecimalNumber">
//     <xsd:restriction base="xsd:integer"/>
// </xsd:simpleType>
var decimalNumber = function (val) {
    if (isNaN(val)) {
        throw new Error("Invalid value '".concat(val, "' specified. Must be an integer."));
    }
    return Math.floor(val);
};
exports.decimalNumber = decimalNumber;
// <xsd:simpleType name="ST_UnsignedDecimalNumber">
//     <xsd:restriction base="xsd:unsignedLong"/>
// </xsd:simpleType>
var unsignedDecimalNumber = function (val) {
    var value = (0, exports.decimalNumber)(val);
    if (value < 0) {
        throw new Error("Invalid value '".concat(val, "' specified. Must be a positive integer."));
    }
    return value;
};
exports.unsignedDecimalNumber = unsignedDecimalNumber;
// The xsd:hexBinary type represents binary data as a sequence of binary octets.
// It uses hexadecimal encoding, where each binary octet is a two-character hexadecimal number.
// Lowercase and uppercase letters A through F are permitted. For example, 0FB8 and 0fb8 are two
// equal xsd:hexBinary representations consisting of two octets.
// http://www.datypic.com/sc/xsd/t-xsd_hexBinary.html
var hexBinary = function (val, length) {
    var expectedLength = length * 2;
    if (val.length !== expectedLength || isNaN(Number("0x".concat(val)))) {
        throw new Error("Invalid hex value '".concat(val, "'. Expected ").concat(expectedLength, " digit hex value"));
    }
    return val;
};
// <xsd:simpleType name="ST_LongHexNumber">
//     <xsd:restriction base="xsd:hexBinary">
//         <xsd:length value="4"/>
//     </xsd:restriction>
// </xsd:simpleType>
var longHexNumber = function (val) { return hexBinary(val, 4); };
exports.longHexNumber = longHexNumber;
// <xsd:simpleType name="ST_ShortHexNumber">
//     <xsd:restriction base="xsd:hexBinary">
//         <xsd:length value="2"/>
//     </xsd:restriction>
// </xsd:simpleType>
var shortHexNumber = function (val) { return hexBinary(val, 2); };
exports.shortHexNumber = shortHexNumber;
// <xsd:simpleType name="ST_UcharHexNumber">
//     <xsd:restriction base="xsd:hexBinary">
//         <xsd:length value="1"/>
//     </xsd:restriction>
// </xsd:simpleType>
var uCharHexNumber = function (val) { return hexBinary(val, 1); };
exports.uCharHexNumber = uCharHexNumber;
// <xsd:simpleType name="ST_LongHexNumber">
// <xsd:restriction base="xsd:hexBinary">
//   <xsd:length value="4"/>
// </xsd:restriction>
// </xsd:simpleType>
// <xsd:simpleType name="ST_UniversalMeasure">
//     <xsd:restriction base="xsd:string">
//         <xsd:pattern value="-?[0-9]+(\.[0-9]+)?(mm|cm|in|pt|pc|pi)"/>
//     </xsd:restriction>
// </xsd:simpleType>
var universalMeasureValue = function (val) {
    var unit = val.slice(-2);
    var amount = val.substring(0, val.length - 2);
    return "".concat(Number(amount)).concat(unit);
};
exports.universalMeasureValue = universalMeasureValue;
// <xsd:simpleType name="ST_PositiveUniversalMeasure">
//     <xsd:restriction base="ST_UniversalMeasure">
//         <xsd:pattern value="[0-9]+(\.[0-9]+)?(mm|cm|in|pt|pc|pi)"/>
//     </xsd:restriction>
// </xsd:simpleType>
var positiveUniversalMeasureValue = function (val) {
    var value = (0, exports.universalMeasureValue)(val);
    if (parseFloat(value) < 0) {
        throw new Error("Invalid value '".concat(value, "' specified. Expected a positive number."));
    }
    return value;
};
exports.positiveUniversalMeasureValue = positiveUniversalMeasureValue;
// <xsd:simpleType name="ST_HexColor">
//     <xsd:union memberTypes="ST_HexColorAuto s:ST_HexColorRGB"/>
// </xsd:simpleType>
//     <xsd:simpleType name="ST_HexColorAuto">
//         <xsd:restriction base="xsd:string">
//             <xsd:enumeration value="auto"/>
//         </xsd:restriction>
//     </xsd:simpleType>
//     <xsd:simpleType name="ST_HexColorRGB">
//         <xsd:restriction base="xsd:hexBinary">
//             <xsd:length value="3" fixed="true"/>
//         </xsd:restriction>
//     </xsd:simpleType>
var hexColorValue = function (val) {
    if (val === "auto") {
        return val;
    }
    // It's super common to see colors prefixed with a pound, but technically invalid here.
    // Most clients work with it, but strip it off anyway for strict compliance.
    var color = val.charAt(0) === "#" ? val.substring(1) : val;
    return hexBinary(color, 3);
};
exports.hexColorValue = hexColorValue;
// <xsd:simpleType name="ST_SignedTwipsMeasure">
//     <xsd:union memberTypes="xsd:integer s:ST_UniversalMeasure"/>
// </xsd:simpleType>
var signedTwipsMeasureValue = function (val) {
    return typeof val === "string" ? (0, exports.universalMeasureValue)(val) : (0, exports.decimalNumber)(val);
};
exports.signedTwipsMeasureValue = signedTwipsMeasureValue;
// <xsd:simpleType name="ST_HpsMeasure">
//     <xsd:union memberTypes="s:ST_UnsignedDecimalNumber s:ST_PositiveUniversalMeasure"/>
// </xsd:simpleType>
var hpsMeasureValue = function (val) {
    return typeof val === "string" ? (0, exports.positiveUniversalMeasureValue)(val) : (0, exports.unsignedDecimalNumber)(val);
};
exports.hpsMeasureValue = hpsMeasureValue;
// <xsd:simpleType name="ST_SignedHpsMeasure">
//     <xsd:union memberTypes="xsd:integer s:ST_UniversalMeasure"/>
// </xsd:simpleType>
var signedHpsMeasureValue = function (val) {
    return typeof val === "string" ? (0, exports.universalMeasureValue)(val) : (0, exports.decimalNumber)(val);
};
exports.signedHpsMeasureValue = signedHpsMeasureValue;
// <xsd:simpleType name="ST_TwipsMeasure">
//     <xsd:union memberTypes="ST_UnsignedDecimalNumber ST_PositiveUniversalMeasure"/>
// </xsd:simpleType>
var twipsMeasureValue = function (val) {
    return typeof val === "string" ? (0, exports.positiveUniversalMeasureValue)(val) : (0, exports.unsignedDecimalNumber)(val);
};
exports.twipsMeasureValue = twipsMeasureValue;
// <xsd:simpleType name="ST_Percentage">
//     <xsd:restriction base="xsd:string">
//         <xsd:pattern value="-?[0-9]+(\.[0-9]+)?%"/>
//     </xsd:restriction>
// </xsd:simpleType>
var percentageValue = function (val) {
    var percent = val.substring(0, val.length - 1);
    return "".concat(Number(percent), "%");
};
exports.percentageValue = percentageValue;
// <xsd:simpleType name="ST_MeasurementOrPercent">
//     <xsd:union memberTypes="ST_DecimalNumberOrPercent s:ST_UniversalMeasure"/>
// </xsd:simpleType>
// <xsd:simpleType name="ST_DecimalNumberOrPercent">
//     <xsd:union memberTypes="ST_UnqualifiedPercentage s:ST_Percentage"/>
// </xsd:simpleType>
// <xsd:simpleType name="ST_UnqualifiedPercentage">
//     <xsd:restriction base="xsd:integer"/>
// </xsd:simpleType>
var measurementOrPercentValue = function (val) {
    if (typeof val === "number") {
        return (0, exports.decimalNumber)(val);
    }
    if (val.slice(-1) === "%") {
        return (0, exports.percentageValue)(val);
    }
    return (0, exports.universalMeasureValue)(val);
};
exports.measurementOrPercentValue = measurementOrPercentValue;
// <xsd:simpleType name="ST_EighthPointMeasure">
//     <xsd:restriction base="s:ST_UnsignedDecimalNumber"/>
// </xsd:simpleType>
exports.eighthPointMeasureValue = exports.unsignedDecimalNumber;
// <xsd:simpleType name="ST_PointMeasure">
//     <xsd:restriction base="s:ST_UnsignedDecimalNumber"/>
// </xsd:simpleType>
exports.pointMeasureValue = exports.unsignedDecimalNumber;
// <xsd:simpleType name="ST_DateTime">
//     <xsd:restriction base="xsd:dateTime"/>
// </xsd:simpleType>
//
// http://www.datypic.com/sc/xsd/t-xsd_dateTime.html
// The type xsd:dateTime represents a specific date and time in the format
/* cspell:disable-next-line */
// CCYY-MM-DDThh:mm:ss.sss, which is a concatenation of the date and time forms,
// separated by a literal letter "T". All of the same rules that apply to the date
// and time types are applicable to xsd:dateTime as well.
//
// An optional time zone expression may be added at the end of the value.
// The letter Z is used to indicate Coordinated Universal Time (UTC). All other time
// zones are represented by their difference from Coordinated Universal Time in the
// format +hh:mm, or -hh:mm. These values may range from -14:00 to 14:00. For example,
// US Eastern Standard Time, which is five hours behind UTC, is represented as -05:00.
// If no time zone value is present, it is considered unknown; it is not assumed to be UTC.
//
// Luckily, js has this format built in already. See:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
var dateTimeValue = function (val) { return val.toISOString(); };
exports.dateTimeValue = dateTimeValue;
