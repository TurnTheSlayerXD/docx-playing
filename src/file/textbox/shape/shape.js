"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShape = void 0;
var xml_components_1 = require("@file/xml-components");
var vml_texbox_1 = require("../vml-textbox/vml-texbox");
var SHAPE_TYPE = "#_x0000_t202";
var styleToKeyMap = {
    flip: "flip",
    height: "height",
    left: "left",
    marginBottom: "margin-bottom",
    marginLeft: "margin-left",
    marginRight: "margin-right",
    marginTop: "margin-top",
    positionHorizontal: "mso-position-horizontal",
    positionHorizontalRelative: "mso-position-horizontal-relative",
    positionVertical: "mso-position-vertical",
    positionVerticalRelative: "mso-position-vertical-relative",
    wrapDistanceBottom: "mso-wrap-distance-bottom",
    wrapDistanceLeft: "mso-wrap-distance-left",
    wrapDistanceRight: "mso-wrap-distance-right",
    wrapDistanceTop: "mso-wrap-distance-top",
    wrapEdited: "mso-wrap-edited",
    wrapStyle: "mso-wrap-style",
    position: "position",
    rotation: "rotation",
    top: "top",
    visibility: "visibility",
    width: "width",
    zIndex: "z-index",
};
var formatShapeStyle = function (style) {
    return style
        ? Object.entries(style)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return "".concat(styleToKeyMap[key], ":").concat(value);
        })
            .join(";")
        : undefined;
};
var createShape = function (_a) {
    var id = _a.id, children = _a.children, _b = _a.type, type = _b === void 0 ? SHAPE_TYPE : _b, style = _a.style;
    return new xml_components_1.BuilderElement({
        name: "v:shape",
        attributes: {
            id: {
                key: "id",
                value: id,
            },
            type: {
                key: "type",
                value: type,
            },
            style: {
                key: "style",
                value: formatShapeStyle(style),
            },
        },
        children: [(0, vml_texbox_1.createVmlTextbox)({ style: "mso-fit-shape-to-text:t;", children: children })],
    });
};
exports.createShape = createShape;
