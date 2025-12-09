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
exports.Body = void 0;
var paragraph_1 = require("@file/paragraph");
var xml_components_1 = require("@file/xml-components");
var section_properties_1 = require("./section-properties/section-properties");
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body() {
        var _this = _super.call(this, "w:body") || this;
        // eslint-disable-next-line functional/prefer-readonly-type
        _this.sections = [];
        return _this;
    }
    /**
     * Adds new section properties.
     * Note: Previous section is created in paragraph after the current element, and then new section will be added.
     * The spec says:
     *  - section element should be in the last paragraph of the section
     *  - last section should be direct child of body
     *
     * @param options new section options
     */
    Body.prototype.addSection = function (options) {
        var currentSection = this.sections.pop();
        this.root.push(this.createSectionParagraph(currentSection));
        this.sections.push(new section_properties_1.SectionProperties(options));
    };
    Body.prototype.prepForXml = function (context) {
        if (this.sections.length === 1) {
            this.root.splice(0, 1);
            this.root.push(this.sections.pop());
        }
        return _super.prototype.prepForXml.call(this, context);
    };
    Body.prototype.push = function (component) {
        this.root.push(component);
    };
    Body.prototype.createSectionParagraph = function (section) {
        var paragraph = new paragraph_1.Paragraph({});
        var properties = new paragraph_1.ParagraphProperties({});
        properties.push(section);
        paragraph.addChildElement(properties);
        return paragraph;
    };
    return Body;
}(xml_components_1.XmlComponent));
exports.Body = Body;
