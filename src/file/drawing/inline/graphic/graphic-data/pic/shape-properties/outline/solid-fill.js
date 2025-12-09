"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSolidFill = void 0;
var xml_components_1 = require("@file/xml-components");
var rgb_color_1 = require("./rgb-color");
var scheme_color_1 = require("./scheme-color");
var createSolidFill = function (options) {
    return new xml_components_1.BuilderElement({
        name: "a:solidFill",
        children: [options.type === "rgb" ? (0, rgb_color_1.createSolidRgbColor)(options) : (0, scheme_color_1.createSchemeColor)(options)],
    });
};
exports.createSolidFill = createSolidFill;
