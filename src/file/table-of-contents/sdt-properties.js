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
exports.StructuredDocumentTagProperties = void 0;
// http://www.datypic.com/sc/ooxml/e-w_sdtPr-1.html
var xml_components_1 = require("@file/xml-components");
var StructuredDocumentTagProperties = /** @class */ (function (_super) {
    __extends(StructuredDocumentTagProperties, _super);
    function StructuredDocumentTagProperties(alias) {
        var _this = _super.call(this, "w:sdtPr") || this;
        if (alias) {
            _this.root.push(new xml_components_1.StringValueElement("w:alias", alias));
        }
        return _this;
    }
    return StructuredDocumentTagProperties;
}(xml_components_1.XmlComponent));
exports.StructuredDocumentTagProperties = StructuredDocumentTagProperties;
