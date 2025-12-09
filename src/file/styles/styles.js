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
exports.Styles = void 0;
var xml_components_1 = require("@file/xml-components");
var style_1 = require("./style");
// <xsd:complexType name="CT_Styles">
// <xsd:sequence>
//   <xsd:element name="docDefaults" type="CT_DocDefaults" minOccurs="0"/>
//   <xsd:element name="latentStyles" type="CT_LatentStyles" minOccurs="0" maxOccurs="1"/>
//   <xsd:element name="style" type="CT_Style" minOccurs="0" maxOccurs="unbounded"/>
// </xsd:sequence>
// </xsd:complexType>
var Styles = /** @class */ (function (_super) {
    __extends(Styles, _super);
    function Styles(options) {
        var _this = _super.call(this, "w:styles") || this;
        if (options.initialStyles) {
            _this.root.push(options.initialStyles);
        }
        if (options.importedStyles) {
            for (var _i = 0, _a = options.importedStyles; _i < _a.length; _i++) {
                var style = _a[_i];
                _this.root.push(style);
            }
        }
        if (options.paragraphStyles) {
            for (var _b = 0, _c = options.paragraphStyles; _b < _c.length; _b++) {
                var style = _c[_b];
                _this.root.push(new style_1.StyleForParagraph(style));
            }
        }
        if (options.characterStyles) {
            for (var _d = 0, _e = options.characterStyles; _d < _e.length; _d++) {
                var style = _e[_d];
                _this.root.push(new style_1.StyleForCharacter(style));
            }
        }
        return _this;
    }
    return Styles;
}(xml_components_1.XmlComponent));
exports.Styles = Styles;
