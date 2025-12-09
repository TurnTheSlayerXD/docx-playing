"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLanguageComponent = void 0;
var xml_components_1 = require("@file/xml-components");
var createLanguageComponent = function (options) {
    return new xml_components_1.BuilderElement({
        name: "w:lang",
        attributes: {
            value: {
                key: "w:val",
                value: options.value,
            },
            eastAsia: {
                key: "w:eastAsia",
                value: options.eastAsia,
            },
            bidirectional: {
                key: "w:bidi",
                value: options.bidirectional,
            },
        },
    });
};
exports.createLanguageComponent = createLanguageComponent;
