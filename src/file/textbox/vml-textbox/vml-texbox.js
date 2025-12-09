"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVmlTextbox = void 0;
var xml_components_1 = require("@file/xml-components");
var textbox_content_1 = require("../texbox-content/textbox-content");
var createVmlTextbox = function (_a) {
    var style = _a.style, children = _a.children, inset = _a.inset;
    return new xml_components_1.BuilderElement({
        name: "v:textbox",
        attributes: {
            style: {
                key: "style",
                value: style,
            },
            insetMode: {
                key: "insetmode",
                value: inset ? "custom" : "auto",
            },
            inset: {
                key: "inset",
                value: inset ? "".concat(inset.left, ", ").concat(inset.top, ", ").concat(inset.right, ", ").concat(inset.bottom) : undefined,
            },
        },
        children: [(0, textbox_content_1.createTextboxContent)({ children: children })],
    });
};
exports.createVmlTextbox = createVmlTextbox;
