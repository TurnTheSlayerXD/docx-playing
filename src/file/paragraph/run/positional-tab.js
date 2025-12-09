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
exports.PositionalTab = exports.PositionalTabLeader = exports.PositionalTabRelativeTo = exports.PositionalTabAlignment = void 0;
var xml_components_1 = require("@file/xml-components");
// <xsd:simpleType name="ST_PTabAlignment">
//     <xsd:restriction base="xsd:string">
//         <xsd:enumeration value="left" />
//         <xsd:enumeration value="center" />
//         <xsd:enumeration value="right" />
//     </xsd:restriction>
// </xsd:simpleType>
exports.PositionalTabAlignment = {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right",
};
// <xsd:simpleType name="ST_PTabRelativeTo">
//     <xsd:restriction base="xsd:string">
//         <xsd:enumeration value="margin" />
//         <xsd:enumeration value="indent" />
//     </xsd:restriction>
// </xsd:simpleType>
exports.PositionalTabRelativeTo = {
    MARGIN: "margin",
    INDENT: "indent",
};
// <xsd:simpleType name="ST_PTabLeader">
//     <xsd:restriction base="xsd:string">
//         <xsd:enumeration value="none" />
//         <xsd:enumeration value="dot" />
//         <xsd:enumeration value="hyphen" />
//         <xsd:enumeration value="underscore" />
//         <xsd:enumeration value="middleDot" />
//     </xsd:restriction>
// </xsd:simpleType>
exports.PositionalTabLeader = {
    NONE: "none",
    DOT: "dot",
    HYPHEN: "hyphen",
    UNDERSCORE: "underscore",
    MIDDLE_DOT: "middleDot",
};
// <xsd:complexType name="CT_PTab">
//     <xsd:attribute name="alignment" type="ST_PTabAlignment" use="required" />
//     <xsd:attribute name="relativeTo" type="ST_PTabRelativeTo" use="required" />
//     <xsd:attribute name="leader" type="ST_PTabLeader" use="required" />
// </xsd:complexType>
var PositionalTab = /** @class */ (function (_super) {
    __extends(PositionalTab, _super);
    function PositionalTab(options) {
        var _this = _super.call(this, "w:ptab") || this;
        _this.root.push(new xml_components_1.NextAttributeComponent({
            alignment: {
                key: "w:alignment",
                value: options.alignment,
            },
            relativeTo: {
                key: "w:relativeTo",
                value: options.relativeTo,
            },
            leader: {
                key: "w:leader",
                value: options.leader,
            },
        }));
        return _this;
    }
    return PositionalTab;
}(xml_components_1.XmlComponent));
exports.PositionalTab = PositionalTab;
