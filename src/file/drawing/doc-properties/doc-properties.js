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
exports.DocProperties = void 0;
// https://c-rex.net/projects/samples/ooxml/e1/Part4/OOXML_P4_DOCX_docPr_topic_ID0ES32OB.html
var paragraph_1 = require("@file/paragraph");
var xml_components_1 = require("@file/xml-components");
var convenience_functions_1 = require("@util/convenience-functions");
var doc_properties_children_1 = require("./doc-properties-children");
var DocProperties = /** @class */ (function (_super) {
    __extends(DocProperties, _super);
    function DocProperties(_a) {
        var _b = _a === void 0 ? { name: "", description: "", title: "" } : _a, name = _b.name, description = _b.description, title = _b.title;
        var _this = _super.call(this, "wp:docPr") || this;
        _this.docPropertiesUniqueNumericId = (0, convenience_functions_1.docPropertiesUniqueNumericIdGen)();
        var attributes = {
            id: {
                key: "id",
                value: _this.docPropertiesUniqueNumericId(),
            },
            name: {
                key: "name",
                value: name,
            },
        };
        if (description !== null && description !== undefined) {
            attributes.description = {
                key: "descr",
                value: description,
            };
        }
        if (title !== null && title !== undefined) {
            attributes.title = {
                key: "title",
                value: title,
            };
        }
        _this.root.push(new xml_components_1.NextAttributeComponent(attributes));
        return _this;
    }
    DocProperties.prototype.prepForXml = function (context) {
        for (var i = context.stack.length - 1; i >= 0; i--) {
            var element = context.stack[i];
            if (!(element instanceof paragraph_1.ConcreteHyperlink)) {
                continue;
            }
            this.root.push((0, doc_properties_children_1.createHyperlinkClick)(element.linkId, true));
            break;
        }
        return _super.prototype.prepForXml.call(this, context);
    };
    return DocProperties;
}(xml_components_1.XmlComponent));
exports.DocProperties = DocProperties;
