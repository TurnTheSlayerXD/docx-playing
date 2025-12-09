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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = exports.Comment = exports.CommentReference = exports.CommentRangeEnd = exports.CommentRangeStart = void 0;
var relationships_1 = require("@file/relationships");
var xml_components_1 = require("@file/xml-components");
var CommentAttributes = /** @class */ (function (_super) {
    __extends(CommentAttributes, _super);
    function CommentAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { id: "w:id", initials: "w:initials", author: "w:author", date: "w:date" };
        return _this;
    }
    return CommentAttributes;
}(xml_components_1.XmlAttributeComponent));
var CommentRangeAttributes = /** @class */ (function (_super) {
    __extends(CommentRangeAttributes, _super);
    function CommentRangeAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { id: "w:id" };
        return _this;
    }
    return CommentRangeAttributes;
}(xml_components_1.XmlAttributeComponent));
var RootCommentsAttributes = /** @class */ (function (_super) {
    __extends(RootCommentsAttributes, _super);
    function RootCommentsAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = {
            "xmlns:cx": "xmlns:cx",
            "xmlns:cx1": "xmlns:cx1",
            "xmlns:cx2": "xmlns:cx2",
            "xmlns:cx3": "xmlns:cx3",
            "xmlns:cx4": "xmlns:cx4",
            "xmlns:cx5": "xmlns:cx5",
            "xmlns:cx6": "xmlns:cx6",
            "xmlns:cx7": "xmlns:cx7",
            "xmlns:cx8": "xmlns:cx8",
            "xmlns:mc": "xmlns:mc",
            "xmlns:aink": "xmlns:aink",
            "xmlns:am3d": "xmlns:am3d",
            "xmlns:o": "xmlns:o",
            "xmlns:r": "xmlns:r",
            "xmlns:m": "xmlns:m",
            "xmlns:v": "xmlns:v",
            "xmlns:wp14": "xmlns:wp14",
            "xmlns:wp": "xmlns:wp",
            "xmlns:w10": "xmlns:w10",
            "xmlns:w": "xmlns:w",
            "xmlns:w14": "xmlns:w14",
            "xmlns:w15": "xmlns:w15",
            "xmlns:w16cex": "xmlns:w16cex",
            "xmlns:w16cid": "xmlns:w16cid",
            "xmlns:w16": "xmlns:w16",
            "xmlns:w16sdtdh": "xmlns:w16sdtdh",
            "xmlns:w16se": "xmlns:w16se",
            "xmlns:wpg": "xmlns:wpg",
            "xmlns:wpi": "xmlns:wpi",
            "xmlns:wne": "xmlns:wne",
            "xmlns:wps": "xmlns:wps",
        };
        return _this;
    }
    return RootCommentsAttributes;
}(xml_components_1.XmlAttributeComponent));
var CommentRangeStart = /** @class */ (function (_super) {
    __extends(CommentRangeStart, _super);
    function CommentRangeStart(id) {
        var _this = _super.call(this, "w:commentRangeStart") || this;
        _this.root.push(new CommentRangeAttributes({ id: id }));
        return _this;
    }
    return CommentRangeStart;
}(xml_components_1.XmlComponent));
exports.CommentRangeStart = CommentRangeStart;
var CommentRangeEnd = /** @class */ (function (_super) {
    __extends(CommentRangeEnd, _super);
    function CommentRangeEnd(id) {
        var _this = _super.call(this, "w:commentRangeEnd") || this;
        _this.root.push(new CommentRangeAttributes({ id: id }));
        return _this;
    }
    return CommentRangeEnd;
}(xml_components_1.XmlComponent));
exports.CommentRangeEnd = CommentRangeEnd;
var CommentReference = /** @class */ (function (_super) {
    __extends(CommentReference, _super);
    function CommentReference(id) {
        var _this = _super.call(this, "w:commentReference") || this;
        _this.root.push(new CommentRangeAttributes({ id: id }));
        return _this;
    }
    return CommentReference;
}(xml_components_1.XmlComponent));
exports.CommentReference = CommentReference;
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment(_a) {
        var id = _a.id, initials = _a.initials, author = _a.author, _b = _a.date, date = _b === void 0 ? new Date() : _b, children = _a.children;
        var _this = _super.call(this, "w:comment") || this;
        _this.root.push(new CommentAttributes({
            id: id,
            initials: initials,
            author: author,
            date: date.toISOString(),
        }));
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            _this.root.push(child);
        }
        return _this;
    }
    return Comment;
}(xml_components_1.XmlComponent));
exports.Comment = Comment;
var Comments = /** @class */ (function (_super) {
    __extends(Comments, _super);
    function Comments(_a) {
        var children = _a.children;
        var _this = _super.call(this, "w:comments") || this;
        _this.root.push(new RootCommentsAttributes({
            "xmlns:cx": "http://schemas.microsoft.com/office/drawing/2014/chartex",
            "xmlns:cx1": "http://schemas.microsoft.com/office/drawing/2015/9/8/chartex",
            "xmlns:cx2": "http://schemas.microsoft.com/office/drawing/2015/10/21/chartex",
            "xmlns:cx3": "http://schemas.microsoft.com/office/drawing/2016/5/9/chartex",
            "xmlns:cx4": "http://schemas.microsoft.com/office/drawing/2016/5/10/chartex",
            "xmlns:cx5": "http://schemas.microsoft.com/office/drawing/2016/5/11/chartex",
            "xmlns:cx6": "http://schemas.microsoft.com/office/drawing/2016/5/12/chartex",
            "xmlns:cx7": "http://schemas.microsoft.com/office/drawing/2016/5/13/chartex",
            "xmlns:cx8": "http://schemas.microsoft.com/office/drawing/2016/5/14/chartex",
            "xmlns:mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
            "xmlns:aink": "http://schemas.microsoft.com/office/drawing/2016/ink",
            "xmlns:am3d": "http://schemas.microsoft.com/office/drawing/2017/model3d",
            "xmlns:o": "urn:schemas-microsoft-com:office:office",
            "xmlns:r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
            "xmlns:m": "http://schemas.openxmlformats.org/officeDocument/2006/math",
            "xmlns:v": "urn:schemas-microsoft-com:vml",
            "xmlns:wp14": "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
            "xmlns:wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
            "xmlns:w10": "urn:schemas-microsoft-com:office:word",
            "xmlns:w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
            "xmlns:w14": "http://schemas.microsoft.com/office/word/2010/wordml",
            "xmlns:w15": "http://schemas.microsoft.com/office/word/2012/wordml",
            "xmlns:w16cex": "http://schemas.microsoft.com/office/word/2018/wordml/cex",
            "xmlns:w16cid": "http://schemas.microsoft.com/office/word/2016/wordml/cid",
            "xmlns:w16": "http://schemas.microsoft.com/office/word/2018/wordml",
            "xmlns:w16sdtdh": "http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash",
            "xmlns:w16se": "http://schemas.microsoft.com/office/word/2015/wordml/symex",
            "xmlns:wpg": "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
            "xmlns:wpi": "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
            "xmlns:wne": "http://schemas.microsoft.com/office/word/2006/wordml",
            "xmlns:wps": "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
        }));
        for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
            var child = children_2[_i];
            _this.root.push(new Comment(child));
        }
        _this.relationships = new relationships_1.Relationships();
        return _this;
    }
    Object.defineProperty(Comments.prototype, "Relationships", {
        get: function () {
            return this.relationships;
        },
        enumerable: false,
        configurable: true
    });
    return Comments;
}(xml_components_1.XmlComponent));
exports.Comments = Comments;
