"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMathNAryProperties = void 0;
// http://www.datypic.com/sc/ooxml/e-m_naryPr-1.html
var xml_components_1 = require("@file/xml-components");
var math_accent_character_1 = require("./math-accent-character");
var math_limit_location_1 = require("./math-limit-location");
var math_sub_script_hide_1 = require("./math-sub-script-hide");
var math_super_script_hide_1 = require("./math-super-script-hide");
var createMathNAryProperties = function (_a) {
    var accent = _a.accent, hasSuperScript = _a.hasSuperScript, hasSubScript = _a.hasSubScript, limitLocationVal = _a.limitLocationVal;
    return new xml_components_1.BuilderElement({
        name: "m:naryPr",
        children: __spreadArray(__spreadArray(__spreadArray(__spreadArray([], (!!accent ? [(0, math_accent_character_1.createMathAccentCharacter)({ accent: accent })] : []), true), [
            (0, math_limit_location_1.createMathLimitLocation)({ value: limitLocationVal })
        ], false), (!hasSuperScript ? [(0, math_super_script_hide_1.createMathSuperScriptHide)()] : []), true), (!hasSubScript ? [(0, math_sub_script_hide_1.createMathSubScriptHide)()] : []), true),
    });
};
exports.createMathNAryProperties = createMathNAryProperties;
