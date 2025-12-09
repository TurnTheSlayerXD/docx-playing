"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceTokenInParagraphElement = void 0;
var util_1 = require("./util");
var ReplaceMode = {
    START: 0,
    MIDDLE: 1,
    END: 2,
};
var replaceTokenInParagraphElement = function (_a) {
    var paragraphElement = _a.paragraphElement, renderedParagraph = _a.renderedParagraph, originalText = _a.originalText, replacementText = _a.replacementText;
    var startIndex = renderedParagraph.text.indexOf(originalText);
    var endIndex = startIndex + originalText.length - 1;
    var replaceMode = ReplaceMode.START;
    for (var _i = 0, _b = renderedParagraph.runs; _i < _b.length; _i++) {
        var run = _b[_i];
        for (var _c = 0, _d = run.parts; _c < _d.length; _c++) {
            var _e = _d[_c], text = _e.text, index = _e.index, start = _e.start, end = _e.end;
            switch (replaceMode) {
                case ReplaceMode.START:
                    if (startIndex >= start) {
                        var offsetStartIndex = startIndex - start;
                        var offsetEndIndex = Math.min(endIndex, end) - start;
                        var partToReplace = run.text.substring(offsetStartIndex, offsetEndIndex + 1);
                        // We use a token to split the text if the replacement is within the same run
                        // If not, we just add text to the middle of the run later
                        if (partToReplace === "") {
                            continue;
                        }
                        var firstPart = text.replace(partToReplace, replacementText);
                        patchTextElement(paragraphElement.elements[run.index].elements[index], firstPart);
                        replaceMode = ReplaceMode.MIDDLE;
                        continue;
                        /* c8 ignore next 2 */
                    }
                    break;
                case ReplaceMode.MIDDLE:
                    if (endIndex <= end) {
                        var lastPart = text.substring(endIndex - start + 1);
                        patchTextElement(paragraphElement.elements[run.index].elements[index], lastPart);
                        var currentElement = paragraphElement.elements[run.index].elements[index];
                        // We need to add xml:space="preserve" to the last element to preserve the whitespace
                        // Otherwise, the text will be merged with the next element
                        // eslint-disable-next-line functional/immutable-data
                        paragraphElement.elements[run.index].elements[index] = (0, util_1.patchSpaceAttribute)(currentElement);
                        replaceMode = ReplaceMode.END;
                    }
                    else {
                        patchTextElement(paragraphElement.elements[run.index].elements[index], "");
                    }
                    break;
                /* c8 ignore next */
                default:
            }
        }
    }
    return paragraphElement;
};
exports.replaceTokenInParagraphElement = replaceTokenInParagraphElement;
var patchTextElement = function (element, text) {
    // eslint-disable-next-line functional/immutable-data
    element.elements = (0, util_1.createTextElementContents)(text);
    return element;
};
