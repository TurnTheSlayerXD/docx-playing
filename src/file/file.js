"use strict";
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
exports.File = void 0;
var app_properties_1 = require("./app-properties/app-properties");
var content_types_1 = require("./content-types/content-types");
var core_properties_1 = require("./core-properties");
var custom_properties_1 = require("./custom-properties");
var section_properties_1 = require("./document/body/section-properties");
var document_wrapper_1 = require("./document-wrapper");
var font_wrapper_1 = require("./fonts/font-wrapper");
var footer_wrapper_1 = require("./footer-wrapper");
var footnotes_wrapper_1 = require("./footnotes-wrapper");
var header_wrapper_1 = require("./header-wrapper");
var media_1 = require("./media");
var numbering_1 = require("./numbering");
var comment_run_1 = require("./paragraph/run/comment-run");
var relationships_1 = require("./relationships");
var settings_1 = require("./settings");
var styles_1 = require("./styles");
var external_styles_factory_1 = require("./styles/external-styles-factory");
var factory_1 = require("./styles/factory");
var File = /** @class */ (function () {
    function File(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        // eslint-disable-next-line functional/prefer-readonly-type
        this.currentRelationshipId = 1;
        // eslint-disable-next-line functional/prefer-readonly-type
        this.headers = [];
        // eslint-disable-next-line functional/prefer-readonly-type
        this.footers = [];
        this.coreProperties = new core_properties_1.CoreProperties(__assign(__assign({}, options), { creator: (_a = options.creator) !== null && _a !== void 0 ? _a : "Un-named", revision: (_b = options.revision) !== null && _b !== void 0 ? _b : 1, lastModifiedBy: (_c = options.lastModifiedBy) !== null && _c !== void 0 ? _c : "Un-named" }));
        this.numbering = new numbering_1.Numbering(options.numbering ? options.numbering : { config: [] });
        this.comments = new comment_run_1.Comments((_d = options.comments) !== null && _d !== void 0 ? _d : { children: [] });
        this.fileRelationships = new relationships_1.Relationships();
        this.customProperties = new custom_properties_1.CustomProperties((_e = options.customProperties) !== null && _e !== void 0 ? _e : []);
        this.appProperties = new app_properties_1.AppProperties();
        this.footnotesWrapper = new footnotes_wrapper_1.FootnotesWrapper();
        this.contentTypes = new content_types_1.ContentTypes();
        this.documentWrapper = new document_wrapper_1.DocumentWrapper({ background: options.background });
        this.settings = new settings_1.Settings({
            compatibilityModeVersion: options.compatabilityModeVersion,
            compatibility: options.compatibility,
            evenAndOddHeaders: options.evenAndOddHeaderAndFooters ? true : false,
            trackRevisions: (_f = options.features) === null || _f === void 0 ? void 0 : _f.trackRevisions,
            updateFields: (_g = options.features) === null || _g === void 0 ? void 0 : _g.updateFields,
            defaultTabStop: options.defaultTabStop,
            hyphenation: {
                autoHyphenation: (_h = options.hyphenation) === null || _h === void 0 ? void 0 : _h.autoHyphenation,
                hyphenationZone: (_j = options.hyphenation) === null || _j === void 0 ? void 0 : _j.hyphenationZone,
                consecutiveHyphenLimit: (_k = options.hyphenation) === null || _k === void 0 ? void 0 : _k.consecutiveHyphenLimit,
                doNotHyphenateCaps: (_l = options.hyphenation) === null || _l === void 0 ? void 0 : _l.doNotHyphenateCaps,
            },
        });
        this.media = new media_1.Media();
        if (options.externalStyles !== undefined) {
            var stylesFactory = new external_styles_factory_1.ExternalStylesFactory();
            this.styles = stylesFactory.newInstance(options.externalStyles);
        }
        else if (options.styles) {
            var stylesFactory = new factory_1.DefaultStylesFactory();
            var defaultStyles = stylesFactory.newInstance(options.styles.default);
            this.styles = new styles_1.Styles(__assign(__assign({}, defaultStyles), options.styles));
        }
        else {
            var stylesFactory = new factory_1.DefaultStylesFactory();
            this.styles = new styles_1.Styles(stylesFactory.newInstance());
        }
        this.addDefaultRelationships();
        for (var _i = 0, _o = options.sections; _i < _o.length; _i++) {
            var section = _o[_i];
            this.addSection(section);
        }
        if (options.footnotes) {
            // eslint-disable-next-line guard-for-in
            for (var key in options.footnotes) {
                this.footnotesWrapper.View.createFootNote(parseFloat(key), options.footnotes[key].children);
            }
        }
        this.fontWrapper = new font_wrapper_1.FontWrapper((_m = options.fonts) !== null && _m !== void 0 ? _m : []);
    }
    File.prototype.addSection = function (_a) {
        var _b = _a.headers, headers = _b === void 0 ? {} : _b, _c = _a.footers, footers = _c === void 0 ? {} : _c, children = _a.children, properties = _a.properties;
        this.documentWrapper.View.Body.addSection(__assign(__assign({}, properties), { headerWrapperGroup: {
                default: headers.default ? this.createHeader(headers.default) : undefined,
                first: headers.first ? this.createHeader(headers.first) : undefined,
                even: headers.even ? this.createHeader(headers.even) : undefined,
            }, footerWrapperGroup: {
                default: footers.default ? this.createFooter(footers.default) : undefined,
                first: footers.first ? this.createFooter(footers.first) : undefined,
                even: footers.even ? this.createFooter(footers.even) : undefined,
            } }));
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            this.documentWrapper.View.add(child);
        }
    };
    File.prototype.createHeader = function (header) {
        // eslint-disable-next-line functional/immutable-data
        var wrapper = new header_wrapper_1.HeaderWrapper(this.media, this.currentRelationshipId++);
        for (var _i = 0, _a = header.options.children; _i < _a.length; _i++) {
            var child = _a[_i];
            wrapper.add(child);
        }
        this.addHeaderToDocument(wrapper);
        return wrapper;
    };
    File.prototype.createFooter = function (footer) {
        // eslint-disable-next-line functional/immutable-data
        var wrapper = new footer_wrapper_1.FooterWrapper(this.media, this.currentRelationshipId++);
        for (var _i = 0, _a = footer.options.children; _i < _a.length; _i++) {
            var child = _a[_i];
            wrapper.add(child);
        }
        this.addFooterToDocument(wrapper);
        return wrapper;
    };
    File.prototype.addHeaderToDocument = function (header, type) {
        if (type === void 0) { type = section_properties_1.HeaderFooterReferenceType.DEFAULT; }
        // eslint-disable-next-line functional/immutable-data
        this.headers.push({ header: header, type: type });
        this.documentWrapper.Relationships.createRelationship(header.View.ReferenceId, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header", "header".concat(this.headers.length, ".xml"));
        this.contentTypes.addHeader(this.headers.length);
    };
    File.prototype.addFooterToDocument = function (footer, type) {
        if (type === void 0) { type = section_properties_1.HeaderFooterReferenceType.DEFAULT; }
        // eslint-disable-next-line functional/immutable-data
        this.footers.push({ footer: footer, type: type });
        this.documentWrapper.Relationships.createRelationship(footer.View.ReferenceId, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer", "footer".concat(this.footers.length, ".xml"));
        this.contentTypes.addFooter(this.footers.length);
    };
    File.prototype.addDefaultRelationships = function () {
        this.fileRelationships.createRelationship(1, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", "word/document.xml");
        this.fileRelationships.createRelationship(2, "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", "docProps/core.xml");
        this.fileRelationships.createRelationship(3, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", "docProps/app.xml");
        this.fileRelationships.createRelationship(4, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties", "docProps/custom.xml");
        this.documentWrapper.Relationships.createRelationship(
        // eslint-disable-next-line functional/immutable-data
        this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", "styles.xml");
        this.documentWrapper.Relationships.createRelationship(
        // eslint-disable-next-line functional/immutable-data
        this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering", "numbering.xml");
        this.documentWrapper.Relationships.createRelationship(
        // eslint-disable-next-line functional/immutable-data
        this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes", "footnotes.xml");
        this.documentWrapper.Relationships.createRelationship(
        // eslint-disable-next-line functional/immutable-data
        this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings", "settings.xml");
        this.documentWrapper.Relationships.createRelationship(
        // eslint-disable-next-line functional/immutable-data
        this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", "comments.xml");
    };
    Object.defineProperty(File.prototype, "Document", {
        get: function () {
            return this.documentWrapper;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "Styles", {
        get: function () {
            return this.styles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "CoreProperties", {
        get: function () {
            return this.coreProperties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "Numbering", {
        get: function () {
            return this.numbering;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "Media", {
        get: function () {
            return this.media;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "FileRelationships", {
        get: function () {
            return this.fileRelationships;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "Headers", {
        get: function () {
            return this.headers.map(function (item) { return item.header; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "Footers", {
        get: function () {
            return this.footers.map(function (item) { return item.footer; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "ContentTypes", {
        get: function () {
            return this.contentTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "CustomProperties", {
        get: function () {
            return this.customProperties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "AppProperties", {
        get: function () {
            return this.appProperties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "FootNotes", {
        get: function () {
            return this.footnotesWrapper;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "Settings", {
        get: function () {
            return this.settings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "Comments", {
        get: function () {
            return this.comments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "FontTable", {
        get: function () {
            return this.fontWrapper;
        },
        enumerable: false,
        configurable: true
    });
    return File;
}());
exports.File = File;
