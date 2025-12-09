"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalStylesFactory = void 0;
var xml_js_1 = require("xml-js");
var xml_components_1 = require("@file/xml-components");
var _1 = require("./");
var ExternalStylesFactory = /** @class */ (function () {
    function ExternalStylesFactory() {
    }
    /**
     * Creates new Style based on the given styles.
     * Parses the styles and convert them to XmlComponent.
     * Example content from styles.xml:
     * <?xml version="1.0">
     * <w:styles xmlns:mc="some schema" ...>
     *
     *   <w:style w:type="paragraph" w:styleId="Heading1">
     *           <w:name w:val="heading 1"/>
     *           .....
     *   </w:style>
     *
     *   <w:style w:type="paragraph" w:styleId="Heading2">
     *           <w:name w:val="heading 2"/>
     *           .....
     *   </w:style>
     *
     *   <w:docDefaults>Or any other element will be parsed to</w:docDefaults>
     *
     * </w:styles>
     *
     * @param externalStyles context from styles.xml
     */
    ExternalStylesFactory.prototype.newInstance = function (xmlData) {
        var xmlObj = (0, xml_js_1.xml2js)(xmlData, { compact: false });
        var stylesXmlElement;
        for (var _i = 0, _a = xmlObj.elements || []; _i < _a.length; _i++) {
            var xmlElm = _a[_i];
            if (xmlElm.name === "w:styles") {
                stylesXmlElement = xmlElm;
            }
        }
        if (stylesXmlElement === undefined) {
            throw new Error("can not find styles element");
        }
        var stylesElements = stylesXmlElement.elements || [];
        var importedStyle = new _1.Styles({
            initialStyles: new xml_components_1.ImportedRootElementAttributes(stylesXmlElement.attributes),
            importedStyles: stylesElements.map(function (childElm) { return (0, xml_components_1.convertToXmlComponent)(childElm); }),
        });
        return importedStyle;
    };
    return ExternalStylesFactory;
}());
exports.ExternalStylesFactory = ExternalStylesFactory;
