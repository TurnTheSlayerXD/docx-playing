"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberingReplacer = void 0;
var NumberingReplacer = /** @class */ (function () {
    function NumberingReplacer() {
    }
    NumberingReplacer.prototype.replace = function (xmlData, concreteNumberings) {
        var currentXmlData = xmlData;
        for (var _i = 0, concreteNumberings_1 = concreteNumberings; _i < concreteNumberings_1.length; _i++) {
            var concreteNumbering = concreteNumberings_1[_i];
            currentXmlData = currentXmlData.replace(new RegExp("{".concat(concreteNumbering.reference, "-").concat(concreteNumbering.instance, "}"), "g"), concreteNumbering.numId.toString());
        }
        return currentXmlData;
    };
    return NumberingReplacer;
}());
exports.NumberingReplacer = NumberingReplacer;
