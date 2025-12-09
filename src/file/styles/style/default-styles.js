"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperlinkStyle = exports.FootnoteTextChar = exports.FootnoteReferenceStyle = exports.FootnoteText = exports.ListParagraph = exports.StrongStyle = exports.Heading6Style = exports.Heading5Style = exports.Heading4Style = exports.Heading3Style = exports.Heading2Style = exports.Heading1Style = exports.TitleStyle = exports.HeadingStyle = void 0;
var paragraph_1 = require("@file/paragraph");
var underline_1 = require("@file/paragraph/run/underline");
var character_style_1 = require("./character-style");
var paragraph_style_1 = require("./paragraph-style");
var HeadingStyle = /** @class */ (function (_super) {
    __extends(HeadingStyle, _super);
    function HeadingStyle(options) {
        return _super.call(this, __assign({ basedOn: "Normal", next: "Normal", quickFormat: true }, options)) || this;
    }
    return HeadingStyle;
}(paragraph_style_1.StyleForParagraph));
exports.HeadingStyle = HeadingStyle;
var TitleStyle = /** @class */ (function (_super) {
    __extends(TitleStyle, _super);
    function TitleStyle(options) {
        return _super.call(this, __assign({ id: "Title", name: "Title" }, options)) || this;
    }
    return TitleStyle;
}(HeadingStyle));
exports.TitleStyle = TitleStyle;
var Heading1Style = /** @class */ (function (_super) {
    __extends(Heading1Style, _super);
    function Heading1Style(options) {
        return _super.call(this, __assign({ id: "Heading1", name: "Heading 1" }, options)) || this;
    }
    return Heading1Style;
}(HeadingStyle));
exports.Heading1Style = Heading1Style;
var Heading2Style = /** @class */ (function (_super) {
    __extends(Heading2Style, _super);
    function Heading2Style(options) {
        return _super.call(this, __assign({ id: "Heading2", name: "Heading 2" }, options)) || this;
    }
    return Heading2Style;
}(HeadingStyle));
exports.Heading2Style = Heading2Style;
var Heading3Style = /** @class */ (function (_super) {
    __extends(Heading3Style, _super);
    function Heading3Style(options) {
        return _super.call(this, __assign({ id: "Heading3", name: "Heading 3" }, options)) || this;
    }
    return Heading3Style;
}(HeadingStyle));
exports.Heading3Style = Heading3Style;
var Heading4Style = /** @class */ (function (_super) {
    __extends(Heading4Style, _super);
    function Heading4Style(options) {
        return _super.call(this, __assign({ id: "Heading4", name: "Heading 4" }, options)) || this;
    }
    return Heading4Style;
}(HeadingStyle));
exports.Heading4Style = Heading4Style;
var Heading5Style = /** @class */ (function (_super) {
    __extends(Heading5Style, _super);
    function Heading5Style(options) {
        return _super.call(this, __assign({ id: "Heading5", name: "Heading 5" }, options)) || this;
    }
    return Heading5Style;
}(HeadingStyle));
exports.Heading5Style = Heading5Style;
var Heading6Style = /** @class */ (function (_super) {
    __extends(Heading6Style, _super);
    function Heading6Style(options) {
        return _super.call(this, __assign({ id: "Heading6", name: "Heading 6" }, options)) || this;
    }
    return Heading6Style;
}(HeadingStyle));
exports.Heading6Style = Heading6Style;
var StrongStyle = /** @class */ (function (_super) {
    __extends(StrongStyle, _super);
    function StrongStyle(options) {
        return _super.call(this, __assign({ id: "Strong", name: "Strong" }, options)) || this;
    }
    return StrongStyle;
}(HeadingStyle));
exports.StrongStyle = StrongStyle;
var ListParagraph = /** @class */ (function (_super) {
    __extends(ListParagraph, _super);
    function ListParagraph(options) {
        return _super.call(this, __assign({ id: "ListParagraph", name: "List Paragraph", basedOn: "Normal", quickFormat: true }, options)) || this;
    }
    return ListParagraph;
}(paragraph_style_1.StyleForParagraph));
exports.ListParagraph = ListParagraph;
var FootnoteText = /** @class */ (function (_super) {
    __extends(FootnoteText, _super);
    function FootnoteText(options) {
        return _super.call(this, __assign({ id: "FootnoteText", name: "footnote text", link: "FootnoteTextChar", basedOn: "Normal", uiPriority: 99, semiHidden: true, unhideWhenUsed: true, paragraph: {
                spacing: {
                    after: 0,
                    line: 240,
                    lineRule: paragraph_1.LineRuleType.AUTO,
                },
            }, run: {
                size: 20,
            } }, options)) || this;
    }
    return FootnoteText;
}(paragraph_style_1.StyleForParagraph));
exports.FootnoteText = FootnoteText;
var FootnoteReferenceStyle = /** @class */ (function (_super) {
    __extends(FootnoteReferenceStyle, _super);
    function FootnoteReferenceStyle(options) {
        return _super.call(this, __assign({ id: "FootnoteReference", name: "footnote reference", basedOn: "DefaultParagraphFont", semiHidden: true, run: {
                superScript: true,
            } }, options)) || this;
    }
    return FootnoteReferenceStyle;
}(character_style_1.StyleForCharacter));
exports.FootnoteReferenceStyle = FootnoteReferenceStyle;
var FootnoteTextChar = /** @class */ (function (_super) {
    __extends(FootnoteTextChar, _super);
    function FootnoteTextChar(options) {
        return _super.call(this, __assign({ id: "FootnoteTextChar", name: "Footnote Text Char", basedOn: "DefaultParagraphFont", link: "FootnoteText", semiHidden: true, run: {
                size: 20,
            } }, options)) || this;
    }
    return FootnoteTextChar;
}(character_style_1.StyleForCharacter));
exports.FootnoteTextChar = FootnoteTextChar;
var HyperlinkStyle = /** @class */ (function (_super) {
    __extends(HyperlinkStyle, _super);
    function HyperlinkStyle(options) {
        return _super.call(this, __assign({ id: "Hyperlink", name: "Hyperlink", basedOn: "DefaultParagraphFont", run: {
                color: "0563C1",
                underline: {
                    type: underline_1.UnderlineType.SINGLE,
                },
            } }, options)) || this;
    }
    return HyperlinkStyle;
}(character_style_1.StyleForCharacter));
exports.HyperlinkStyle = HyperlinkStyle;
