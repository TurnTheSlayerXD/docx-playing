"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTextboxContent = void 0;
var xml_components_1 = require("@file/xml-components");
var createTextboxContent = function (_a) {
    var _b = _a.children, children = _b === void 0 ? [] : _b;
    return new xml_components_1.BuilderElement({
        name: "w:txbxContent",
        children: children,
    });
};
exports.createTextboxContent = createTextboxContent;
