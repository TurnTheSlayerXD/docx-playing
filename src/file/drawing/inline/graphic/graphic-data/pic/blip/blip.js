"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlip = void 0;
var xml_components_1 = require("@file/xml-components");
var blip_extentions_1 = require("./blip-extentions");
var createBlip = function (mediaData) {
    return new xml_components_1.BuilderElement({
        name: "a:blip",
        attributes: {
            embed: {
                key: "r:embed",
                value: "rId{".concat(mediaData.type === "svg" ? mediaData.fallback.fileName : mediaData.fileName, "}"),
            },
            cstate: {
                key: "cstate",
                value: "none",
            },
        },
        children: mediaData.type === "svg" ? [(0, blip_extentions_1.createExtentionList)(mediaData)] : [],
    });
};
exports.createBlip = createBlip;
