"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFrameProperties = exports.FrameWrap = exports.FrameAnchorType = exports.DropCapType = void 0;
var xml_components_1 = require("@file/xml-components");
exports.DropCapType = {
    NONE: "none",
    DROP: "drop",
    MARGIN: "margin",
};
exports.FrameAnchorType = {
    MARGIN: "margin",
    PAGE: "page",
    TEXT: "text",
};
exports.FrameWrap = {
    AROUND: "around",
    AUTO: "auto",
    NONE: "none",
    NOT_BESIDE: "notBeside",
    THROUGH: "through",
    TIGHT: "tight",
};
var createFrameProperties = function (options) {
    var _a, _b;
    return new xml_components_1.BuilderElement({
        name: "w:framePr",
        attributes: {
            anchorLock: {
                key: "w:anchorLock",
                value: options.anchorLock,
            },
            dropCap: {
                key: "w:dropCap",
                value: options.dropCap,
            },
            width: {
                key: "w:w",
                value: options.width,
            },
            height: {
                key: "w:h",
                value: options.height,
            },
            x: {
                key: "w:x",
                value: options.position ? options.position.x : undefined,
            },
            y: {
                key: "w:y",
                value: options.position ? options.position.y : undefined,
            },
            anchorHorizontal: {
                key: "w:hAnchor",
                value: options.anchor.horizontal,
            },
            anchorVertical: {
                key: "w:vAnchor",
                value: options.anchor.vertical,
            },
            spaceHorizontal: {
                key: "w:hSpace",
                value: (_a = options.space) === null || _a === void 0 ? void 0 : _a.horizontal,
            },
            spaceVertical: {
                key: "w:vSpace",
                value: (_b = options.space) === null || _b === void 0 ? void 0 : _b.vertical,
            },
            rule: {
                key: "w:hRule",
                value: options.rule,
            },
            alignmentX: {
                key: "w:xAlign",
                value: options.alignment ? options.alignment.x : undefined,
            },
            alignmentY: {
                key: "w:yAlign",
                value: options.alignment ? options.alignment.y : undefined,
            },
            lines: {
                key: "w:lines",
                value: options.lines,
            },
            wrap: {
                key: "w:wrap",
                value: options.wrap,
            },
        },
    });
};
exports.createFrameProperties = createFrameProperties;
