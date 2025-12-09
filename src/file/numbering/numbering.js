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
exports.Numbering = void 0;
// http://officeopenxml.com/WPnumbering.php
// https://stackoverflow.com/questions/58622437/purpose-of-abstractnum-and-numberinginstance
var paragraph_1 = require("@file/paragraph");
var xml_components_1 = require("@file/xml-components");
var convenience_functions_1 = require("@util/convenience-functions");
var abstract_numbering_1 = require("./abstract-numbering");
var level_1 = require("./level");
var num_1 = require("./num");
var document_attributes_1 = require("../document/document-attributes");
// <xsd:element name="numbering" type="CT_Numbering"/>
//
//     <xsd:complexType name="CT_Numbering">
//         <xsd:sequence>
//             <xsd:element name="numPicBullet" type="CT_NumPicBullet" minOccurs="0" maxOccurs="unbounded"/>
//             <xsd:element name="abstractNum" type="CT_AbstractNum" minOccurs="0" maxOccurs="unbounded"/>
//             <xsd:element name="num" type="CT_Num" minOccurs="0" maxOccurs="unbounded"/>
//             <xsd:element name="numIdMacAtCleanup" type="CT_DecimalNumber" minOccurs="0"/>
//         </xsd:sequence>
//     </xsd:complexType>
var Numbering = /** @class */ (function (_super) {
    __extends(Numbering, _super);
    function Numbering(options) {
        var _this = _super.call(this, "w:numbering") || this;
        _this.abstractNumberingMap = new Map();
        _this.concreteNumberingMap = new Map();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _this.referenceConfigMap = new Map();
        _this.abstractNumUniqueNumericId = (0, convenience_functions_1.abstractNumUniqueNumericIdGen)();
        _this.concreteNumUniqueNumericId = (0, convenience_functions_1.concreteNumUniqueNumericIdGen)();
        _this.root.push(new document_attributes_1.DocumentAttributes(["wpc", "mc", "o", "r", "m", "v", "wp14", "wp", "w10", "w", "w14", "w15", "wpg", "wpi", "wne", "wps"], "w14 w15 wp14"));
        var abstractNumbering = new abstract_numbering_1.AbstractNumbering(_this.abstractNumUniqueNumericId(), [
            {
                level: 0,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CF",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: (0, convenience_functions_1.convertInchesToTwip)(0.5), hanging: (0, convenience_functions_1.convertInchesToTwip)(0.25) },
                    },
                },
            },
            {
                level: 1,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CB",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: (0, convenience_functions_1.convertInchesToTwip)(1), hanging: (0, convenience_functions_1.convertInchesToTwip)(0.25) },
                    },
                },
            },
            {
                level: 2,
                format: level_1.LevelFormat.BULLET,
                text: "\u25A0",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 2160, hanging: (0, convenience_functions_1.convertInchesToTwip)(0.25) },
                    },
                },
            },
            {
                level: 3,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CF",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 2880, hanging: (0, convenience_functions_1.convertInchesToTwip)(0.25) },
                    },
                },
            },
            {
                level: 4,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CB",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 3600, hanging: (0, convenience_functions_1.convertInchesToTwip)(0.25) },
                    },
                },
            },
            {
                level: 5,
                format: level_1.LevelFormat.BULLET,
                text: "\u25A0",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 4320, hanging: (0, convenience_functions_1.convertInchesToTwip)(0.25) },
                    },
                },
            },
            {
                level: 6,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CF",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 5040, hanging: (0, convenience_functions_1.convertInchesToTwip)(0.25) },
                    },
                },
            },
            {
                level: 7,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CF",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 5760, hanging: (0, convenience_functions_1.convertInchesToTwip)(0.25) },
                    },
                },
            },
            {
                level: 8,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CF",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 6480, hanging: (0, convenience_functions_1.convertInchesToTwip)(0.25) },
                    },
                },
            },
        ]);
        _this.concreteNumberingMap.set("default-bullet-numbering", new num_1.ConcreteNumbering({
            numId: 1,
            abstractNumId: abstractNumbering.id,
            reference: "default-bullet-numbering",
            instance: 0,
            overrideLevels: [
                {
                    num: 0,
                    start: 1,
                },
            ],
        }));
        _this.abstractNumberingMap.set("default-bullet-numbering", abstractNumbering);
        for (var _i = 0, _a = options.config; _i < _a.length; _i++) {
            var con = _a[_i];
            _this.abstractNumberingMap.set(con.reference, new abstract_numbering_1.AbstractNumbering(_this.abstractNumUniqueNumericId(), con.levels));
            _this.referenceConfigMap.set(con.reference, con.levels);
        }
        return _this;
    }
    Numbering.prototype.prepForXml = function (context) {
        for (var _i = 0, _a = this.abstractNumberingMap.values(); _i < _a.length; _i++) {
            var numbering = _a[_i];
            this.root.push(numbering);
        }
        for (var _b = 0, _c = this.concreteNumberingMap.values(); _b < _c.length; _b++) {
            var numbering = _c[_b];
            this.root.push(numbering);
        }
        return _super.prototype.prepForXml.call(this, context);
    };
    Numbering.prototype.createConcreteNumberingInstance = function (reference, instance) {
        var abstractNumbering = this.abstractNumberingMap.get(reference);
        if (!abstractNumbering) {
            return;
        }
        var fullReference = "".concat(reference, "-").concat(instance);
        if (this.concreteNumberingMap.has(fullReference)) {
            return;
        }
        var referenceConfigLevels = this.referenceConfigMap.get(reference);
        var firstLevelStartNumber = referenceConfigLevels && referenceConfigLevels[0].start;
        var concreteNumberingSettings = {
            numId: this.concreteNumUniqueNumericId(),
            abstractNumId: abstractNumbering.id,
            reference: reference,
            instance: instance,
            overrideLevels: [
                firstLevelStartNumber && Number.isInteger(firstLevelStartNumber)
                    ? {
                        num: 0,
                        start: firstLevelStartNumber,
                    }
                    : {
                        num: 0,
                        start: 1,
                    },
            ],
        };
        this.concreteNumberingMap.set(fullReference, new num_1.ConcreteNumbering(concreteNumberingSettings));
    };
    Object.defineProperty(Numbering.prototype, "ConcreteNumbering", {
        get: function () {
            return Array.from(this.concreteNumberingMap.values());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Numbering.prototype, "ReferenceConfig", {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        get: function () {
            return Array.from(this.referenceConfigMap.values());
        },
        enumerable: false,
        configurable: true
    });
    return Numbering;
}(xml_components_1.XmlComponent));
exports.Numbering = Numbering;
