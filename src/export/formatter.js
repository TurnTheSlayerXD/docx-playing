"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formatter = void 0;
var Formatter = /** @class */ (function () {
    function Formatter() {
    }
    Formatter.prototype.format = function (input, context) {
        if (context === void 0) { context = { stack: [] }; }
        var output = input.prepForXml(context);
        if (output) {
            return output;
        }
        else {
            throw Error("XMLComponent did not format correctly");
        }
    };
    return Formatter;
}());
exports.Formatter = Formatter;
