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
exports.ImportedRootElementAttributes = exports.ImportedXmlComponent = exports.convertToXmlComponent = void 0;
var xml_js_1 = require("xml-js");
var xml_components_1 = require("@file/xml-components");
/**
 * Converts the given xml element (in json format) into XmlComponent.
 *
 * @param element the xml element in json presentation
 */
var convertToXmlComponent = function (element) {
    switch (element.type) {
        case undefined:
        case "element":
            // eslint-disable-next-line no-case-declarations
            var xmlComponent = new ImportedXmlComponent(element.name, element.attributes);
            // eslint-disable-next-line no-case-declarations
            var childElements = element.elements || [];
            for (var _i = 0, childElements_1 = childElements; _i < childElements_1.length; _i++) {
                var childElm = childElements_1[_i];
                var child = (0, exports.convertToXmlComponent)(childElm);
                if (child !== undefined) {
                    xmlComponent.push(child);
                }
            }
            return xmlComponent;
        case "text":
            return element.text;
        default:
            return undefined;
        /* c8 ignore next 2 */
    }
};
exports.convertToXmlComponent = convertToXmlComponent;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var ImportedXmlComponentAttributes = /** @class */ (function (_super) {
    __extends(ImportedXmlComponentAttributes, _super);
    function ImportedXmlComponentAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ImportedXmlComponentAttributes;
}(xml_components_1.XmlAttributeComponent));
/**
 * Represents imported xml component from xml file.
 */
var ImportedXmlComponent = /** @class */ (function (_super) {
    __extends(ImportedXmlComponent, _super);
    /**
     * Converts the xml string to a XmlComponent tree.
     *
     * @param importedContent xml content of the imported component
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ImportedXmlComponent(rootKey, _attr) {
        var _this = _super.call(this, rootKey) || this;
        if (_attr) {
            _this.root.push(new ImportedXmlComponentAttributes(_attr));
        }
        return _this;
    }
    /**
     * Converts the xml string to a XmlComponent tree.
     *
     * @param importedContent xml content of the imported component
     */
    ImportedXmlComponent.fromXmlString = function (importedContent) {
        var xmlObj = (0, xml_js_1.xml2js)(importedContent, { compact: false });
        return (0, exports.convertToXmlComponent)(xmlObj);
    };
    ImportedXmlComponent.prototype.push = function (xmlComponent) {
        this.root.push(xmlComponent);
    };
    return ImportedXmlComponent;
}(xml_components_1.XmlComponent));
exports.ImportedXmlComponent = ImportedXmlComponent;
/**
 * Used for the attributes of root element that is being imported.
 */
var ImportedRootElementAttributes = /** @class */ (function (_super) {
    __extends(ImportedRootElementAttributes, _super);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ImportedRootElementAttributes(_attr) {
        var _this = _super.call(this, "") || this;
        _this._attr = _attr;
        return _this;
    }
    ImportedRootElementAttributes.prototype.prepForXml = function (_) {
        return {
            _attr: this._attr,
        };
    };
    return ImportedRootElementAttributes;
}(xml_components_1.XmlComponent));
exports.ImportedRootElementAttributes = ImportedRootElementAttributes;
