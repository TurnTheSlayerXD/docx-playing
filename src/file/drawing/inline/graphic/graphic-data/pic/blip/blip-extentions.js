"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExtentionList = void 0;
var xml_components_1 = require("@file/xml-components");
var createSvgBlip = function (mediaData) {
    return new xml_components_1.BuilderElement({
        name: "asvg:svgBlip",
        attributes: {
            asvg: {
                key: "xmlns:asvg",
                value: "http://schemas.microsoft.com/office/drawing/2016/SVG/main",
            },
            embed: {
                key: "r:embed",
                value: "rId{".concat(mediaData.fileName, "}"),
            },
        },
    });
};
var createExtention = function (mediaData) {
    return new xml_components_1.BuilderElement({
        name: "a:ext",
        attributes: {
            uri: {
                key: "uri",
                value: "{96DAC541-7B7A-43D3-8B79-37D633B846F1}",
            },
        },
        children: [createSvgBlip(mediaData)],
    });
};
var createExtentionList = function (mediaData) {
    return new xml_components_1.BuilderElement({
        name: "a:extLst",
        children: [createExtention(mediaData)],
    });
};
exports.createExtentionList = createExtentionList;
