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
exports.DocumentAttributes = exports.DocumentAttributeNamespaces = void 0;
var xml_components_1 = require("@file/xml-components");
/* cSpell:disable */
exports.DocumentAttributeNamespaces = {
    wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
    mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
    o: "urn:schemas-microsoft-com:office:office",
    r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
    v: "urn:schemas-microsoft-com:vml",
    wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
    wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
    w10: "urn:schemas-microsoft-com:office:word",
    w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    w14: "http://schemas.microsoft.com/office/word/2010/wordml",
    w15: "http://schemas.microsoft.com/office/word/2012/wordml",
    wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
    wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
    wne: "http://schemas.microsoft.com/office/word/2006/wordml",
    wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
    cp: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
    dc: "http://purl.org/dc/elements/1.1/",
    dcterms: "http://purl.org/dc/terms/",
    dcmitype: "http://purl.org/dc/dcmitype/",
    xsi: "http://www.w3.org/2001/XMLSchema-instance",
    cx: "http://schemas.microsoft.com/office/drawing/2014/chartex",
    cx1: "http://schemas.microsoft.com/office/drawing/2015/9/8/chartex",
    cx2: "http://schemas.microsoft.com/office/drawing/2015/10/21/chartex",
    cx3: "http://schemas.microsoft.com/office/drawing/2016/5/9/chartex",
    cx4: "http://schemas.microsoft.com/office/drawing/2016/5/10/chartex",
    cx5: "http://schemas.microsoft.com/office/drawing/2016/5/11/chartex",
    cx6: "http://schemas.microsoft.com/office/drawing/2016/5/12/chartex",
    cx7: "http://schemas.microsoft.com/office/drawing/2016/5/13/chartex",
    cx8: "http://schemas.microsoft.com/office/drawing/2016/5/14/chartex",
    aink: "http://schemas.microsoft.com/office/drawing/2016/ink",
    am3d: "http://schemas.microsoft.com/office/drawing/2017/model3d",
    w16cex: "http://schemas.microsoft.com/office/word/2018/wordml/cex",
    w16cid: "http://schemas.microsoft.com/office/word/2016/wordml/cid",
    w16: "http://schemas.microsoft.com/office/word/2018/wordml",
    w16sdtdh: "http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash",
    w16se: "http://schemas.microsoft.com/office/word/2015/wordml/symex",
};
var DocumentAttributes = /** @class */ (function (_super) {
    __extends(DocumentAttributes, _super);
    function DocumentAttributes(ns, Ignorable) {
        var _this = _super.call(this, __assign({ Ignorable: Ignorable }, Object.fromEntries(ns.map(function (n) { return [n, exports.DocumentAttributeNamespaces[n]]; })))) || this;
        _this.xmlKeys = __assign({ Ignorable: "mc:Ignorable" }, Object.fromEntries(Object.keys(exports.DocumentAttributeNamespaces).map(function (key) { return [key, "xmlns:".concat(key)]; })));
        return _this;
    }
    return DocumentAttributes;
}(xml_components_1.XmlAttributeComponent));
exports.DocumentAttributes = DocumentAttributes;
