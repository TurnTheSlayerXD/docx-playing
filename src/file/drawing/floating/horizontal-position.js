"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHorizontalPosition = void 0;
// http://officeopenxml.com/drwPicFloating-position.php
var xml_components_1 = require("@file/xml-components");
var align_1 = require("./align");
var floating_position_1 = require("./floating-position");
var position_offset_1 = require("./position-offset");
/**
 * Horizontal Positioning
 *
 * Reference: https://www.datypic.com/sc/ooxml/e-wp_positionH-1.html
 */
var createHorizontalPosition = function (_a) {
    var relative = _a.relative, align = _a.align, offset = _a.offset;
    return new xml_components_1.BuilderElement({
        name: "wp:positionH",
        attributes: {
            relativeFrom: { key: "relativeFrom", value: relative !== null && relative !== void 0 ? relative : floating_position_1.HorizontalPositionRelativeFrom.PAGE },
        },
        children: [
            (function () {
                if (align) {
                    return (0, align_1.createAlign)(align);
                }
                else if (offset !== undefined) {
                    return (0, position_offset_1.createPositionOffset)(offset);
                }
                else {
                    throw new Error("There is no configuration provided for floating position (Align or offset)");
                }
            })(),
        ],
    });
};
exports.createHorizontalPosition = createHorizontalPosition;
