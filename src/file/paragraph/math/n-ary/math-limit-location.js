"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathLimitLocation = void 0;
// http://www.datypic.com/sc/ooxml/e-m_limLoc-1.html
var xml_components_1 = require("@file/xml-components");
var createMathLimitLocation = function (_a) {
    var value = _a.value;
    return new xml_components_1.BuilderElement({
        name: "m:limLoc",
        attributes: {
            value: { key: "m:val", value: value || "undOvr" },
        },
    });
};
exports.createMathLimitLocation = createMathLimitLocation;
