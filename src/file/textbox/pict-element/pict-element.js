"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPictElement = void 0;
var xml_components_1 = require("@file/xml-components");
var createPictElement = function (_a) {
    var shape = _a.shape;
    return new xml_components_1.BuilderElement({
        name: "w:pict",
        children: [shape],
    });
};
exports.createPictElement = createPictElement;
