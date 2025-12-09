"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compiler = void 0;
var jszip_1 = require("jszip");
var xml_1 = require("xml");
var obfuscate_ttf_to_odttf_1 = require("@file/fonts/obfuscate-ttf-to-odttf");
var formatter_1 = require("../formatter");
var image_replacer_1 = require("./image-replacer");
var numbering_replacer_1 = require("./numbering-replacer");
var Compiler = /** @class */ (function () {
    function Compiler() {
        this.formatter = new formatter_1.Formatter();
        this.imageReplacer = new image_replacer_1.ImageReplacer();
        this.numberingReplacer = new numbering_replacer_1.NumberingReplacer();
    }
    Compiler.prototype.compile = function (file, prettifyXml, overrides) {
        if (overrides === void 0) { overrides = []; }
        var zip = new jszip_1.default();
        var xmlifiedFileMapping = this.xmlifyFile(file, prettifyXml);
        var map = new Map(Object.entries(xmlifiedFileMapping));
        for (var _i = 0, map_1 = map; _i < map_1.length; _i++) {
            var _a = map_1[_i], obj = _a[1];
            if (Array.isArray(obj)) {
                for (var _b = 0, _c = obj; _b < _c.length; _b++) {
                    var subFile = _c[_b];
                    zip.file(subFile.path, subFile.data);
                }
            }
            else {
                zip.file(obj.path, obj.data);
            }
        }
        for (var _d = 0, overrides_1 = overrides; _d < overrides_1.length; _d++) {
            var subFile = overrides_1[_d];
            zip.file(subFile.path, subFile.data);
        }
        for (var _e = 0, _f = file.Media.Array; _e < _f.length; _e++) {
            var data = _f[_e];
            if (data.type !== "svg") {
                zip.file("word/media/".concat(data.fileName), data.data);
            }
            else {
                zip.file("word/media/".concat(data.fileName), data.data);
                zip.file("word/media/".concat(data.fallback.fileName), data.fallback.data);
            }
        }
        for (var _g = 0, _h = file.FontTable.fontOptionsWithKey; _g < _h.length; _g++) {
            var _j = _h[_g], buffer = _j.data, name_1 = _j.name, fontKey = _j.fontKey;
            var nameWithoutExtension = name_1.split(".")[0];
            zip.file("word/fonts/".concat(nameWithoutExtension, ".odttf"), (0, obfuscate_ttf_to_odttf_1.obfuscate)(buffer, fontKey));
        }
        return zip;
    };
    Compiler.prototype.xmlifyFile = function (file, prettify) {
        var _this = this;
        var documentRelationshipCount = file.Document.Relationships.RelationshipCount + 1;
        var documentXmlData = (0, xml_1.default)(this.formatter.format(file.Document.View, {
            viewWrapper: file.Document,
            file: file,
            stack: [],
        }), {
            indent: prettify,
            declaration: {
                standalone: "yes",
                encoding: "UTF-8",
            },
        });
        var commentRelationshipCount = file.Comments.Relationships.RelationshipCount + 1;
        var commentXmlData = (0, xml_1.default)(this.formatter.format(file.Comments, {
            viewWrapper: {
                View: file.Comments,
                Relationships: file.Comments.Relationships,
            },
            file: file,
            stack: [],
        }), {
            indent: prettify,
            declaration: {
                standalone: "yes",
                encoding: "UTF-8",
            },
        });
        var documentMediaDatas = this.imageReplacer.getMediaData(documentXmlData, file.Media);
        var commentMediaDatas = this.imageReplacer.getMediaData(commentXmlData, file.Media);
        return {
            Relationships: {
                data: (function () {
                    documentMediaDatas.forEach(function (mediaData, i) {
                        file.Document.Relationships.createRelationship(documentRelationshipCount + i, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", "media/".concat(mediaData.fileName));
                    });
                    file.Document.Relationships.createRelationship(file.Document.Relationships.RelationshipCount + 1, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable", "fontTable.xml");
                    return (0, xml_1.default)(_this.formatter.format(file.Document.Relationships, {
                        viewWrapper: file.Document,
                        file: file,
                        stack: [],
                    }), {
                        indent: prettify,
                        declaration: {
                            encoding: "UTF-8",
                        },
                    });
                })(),
                path: "word/_rels/document.xml.rels",
            },
            Document: {
                data: (function () {
                    var xmlData = _this.imageReplacer.replace(documentXmlData, documentMediaDatas, documentRelationshipCount);
                    var referenedXmlData = _this.numberingReplacer.replace(xmlData, file.Numbering.ConcreteNumbering);
                    return referenedXmlData;
                })(),
                path: "word/document.xml",
            },
            Styles: {
                data: (function () {
                    var xmlStyles = (0, xml_1.default)(_this.formatter.format(file.Styles, {
                        viewWrapper: file.Document,
                        file: file,
                        stack: [],
                    }), {
                        indent: prettify,
                        declaration: {
                            standalone: "yes",
                            encoding: "UTF-8",
                        },
                    });
                    var referencedXmlStyles = _this.numberingReplacer.replace(xmlStyles, file.Numbering.ConcreteNumbering);
                    return referencedXmlStyles;
                })(),
                path: "word/styles.xml",
            },
            Properties: {
                data: (0, xml_1.default)(this.formatter.format(file.CoreProperties, {
                    viewWrapper: file.Document,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        standalone: "yes",
                        encoding: "UTF-8",
                    },
                }),
                path: "docProps/core.xml",
            },
            Numbering: {
                data: (0, xml_1.default)(this.formatter.format(file.Numbering, {
                    viewWrapper: file.Document,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        standalone: "yes",
                        encoding: "UTF-8",
                    },
                }),
                path: "word/numbering.xml",
            },
            FileRelationships: {
                data: (0, xml_1.default)(this.formatter.format(file.FileRelationships, {
                    viewWrapper: file.Document,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        encoding: "UTF-8",
                    },
                }),
                path: "_rels/.rels",
            },
            HeaderRelationships: file.Headers.map(function (headerWrapper, index) {
                var xmlData = (0, xml_1.default)(_this.formatter.format(headerWrapper.View, {
                    viewWrapper: headerWrapper,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        encoding: "UTF-8",
                    },
                });
                var mediaDatas = _this.imageReplacer.getMediaData(xmlData, file.Media);
                mediaDatas.forEach(function (mediaData, i) {
                    headerWrapper.Relationships.createRelationship(i, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", "media/".concat(mediaData.fileName));
                });
                return {
                    data: (0, xml_1.default)(_this.formatter.format(headerWrapper.Relationships, {
                        viewWrapper: headerWrapper,
                        file: file,
                        stack: [],
                    }), {
                        indent: prettify,
                        declaration: {
                            encoding: "UTF-8",
                        },
                    }),
                    path: "word/_rels/header".concat(index + 1, ".xml.rels"),
                };
            }),
            FooterRelationships: file.Footers.map(function (footerWrapper, index) {
                var xmlData = (0, xml_1.default)(_this.formatter.format(footerWrapper.View, {
                    viewWrapper: footerWrapper,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        encoding: "UTF-8",
                    },
                });
                var mediaDatas = _this.imageReplacer.getMediaData(xmlData, file.Media);
                mediaDatas.forEach(function (mediaData, i) {
                    footerWrapper.Relationships.createRelationship(i, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", "media/".concat(mediaData.fileName));
                });
                return {
                    data: (0, xml_1.default)(_this.formatter.format(footerWrapper.Relationships, {
                        viewWrapper: footerWrapper,
                        file: file,
                        stack: [],
                    }), {
                        indent: prettify,
                        declaration: {
                            encoding: "UTF-8",
                        },
                    }),
                    path: "word/_rels/footer".concat(index + 1, ".xml.rels"),
                };
            }),
            Headers: file.Headers.map(function (headerWrapper, index) {
                var tempXmlData = (0, xml_1.default)(_this.formatter.format(headerWrapper.View, {
                    viewWrapper: headerWrapper,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        encoding: "UTF-8",
                    },
                });
                var mediaDatas = _this.imageReplacer.getMediaData(tempXmlData, file.Media);
                // TODO: 0 needs to be changed when headers get relationships of their own
                var xmlData = _this.imageReplacer.replace(tempXmlData, mediaDatas, 0);
                var referenedXmlData = _this.numberingReplacer.replace(xmlData, file.Numbering.ConcreteNumbering);
                return {
                    data: referenedXmlData,
                    path: "word/header".concat(index + 1, ".xml"),
                };
            }),
            Footers: file.Footers.map(function (footerWrapper, index) {
                var tempXmlData = (0, xml_1.default)(_this.formatter.format(footerWrapper.View, {
                    viewWrapper: footerWrapper,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        encoding: "UTF-8",
                    },
                });
                var mediaDatas = _this.imageReplacer.getMediaData(tempXmlData, file.Media);
                // TODO: 0 needs to be changed when headers get relationships of their own
                var xmlData = _this.imageReplacer.replace(tempXmlData, mediaDatas, 0);
                var referenedXmlData = _this.numberingReplacer.replace(xmlData, file.Numbering.ConcreteNumbering);
                return {
                    data: referenedXmlData,
                    path: "word/footer".concat(index + 1, ".xml"),
                };
            }),
            ContentTypes: {
                data: (0, xml_1.default)(this.formatter.format(file.ContentTypes, {
                    viewWrapper: file.Document,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        encoding: "UTF-8",
                    },
                }),
                path: "[Content_Types].xml",
            },
            CustomProperties: {
                data: (0, xml_1.default)(this.formatter.format(file.CustomProperties, {
                    viewWrapper: file.Document,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        standalone: "yes",
                        encoding: "UTF-8",
                    },
                }),
                path: "docProps/custom.xml",
            },
            AppProperties: {
                data: (0, xml_1.default)(this.formatter.format(file.AppProperties, {
                    viewWrapper: file.Document,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        standalone: "yes",
                        encoding: "UTF-8",
                    },
                }),
                path: "docProps/app.xml",
            },
            FootNotes: {
                data: (0, xml_1.default)(this.formatter.format(file.FootNotes.View, {
                    viewWrapper: file.FootNotes,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        encoding: "UTF-8",
                    },
                }),
                path: "word/footnotes.xml",
            },
            FootNotesRelationships: {
                data: (0, xml_1.default)(this.formatter.format(file.FootNotes.Relationships, {
                    viewWrapper: file.FootNotes,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        encoding: "UTF-8",
                    },
                }),
                path: "word/_rels/footnotes.xml.rels",
            },
            Settings: {
                data: (0, xml_1.default)(this.formatter.format(file.Settings, {
                    viewWrapper: file.Document,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        standalone: "yes",
                        encoding: "UTF-8",
                    },
                }),
                path: "word/settings.xml",
            },
            Comments: {
                data: (function () {
                    var xmlData = _this.imageReplacer.replace(commentXmlData, commentMediaDatas, commentRelationshipCount);
                    var referenedXmlData = _this.numberingReplacer.replace(xmlData, file.Numbering.ConcreteNumbering);
                    return referenedXmlData;
                })(),
                path: "word/comments.xml",
            },
            CommentsRelationships: {
                data: (function () {
                    commentMediaDatas.forEach(function (mediaData, i) {
                        file.Comments.Relationships.createRelationship(commentRelationshipCount + i, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", "media/".concat(mediaData.fileName));
                    });
                    return (0, xml_1.default)(_this.formatter.format(file.Comments.Relationships, {
                        viewWrapper: {
                            View: file.Comments,
                            Relationships: file.Comments.Relationships,
                        },
                        file: file,
                        stack: [],
                    }), {
                        indent: prettify,
                        declaration: {
                            encoding: "UTF-8",
                        },
                    });
                })(),
                path: "word/_rels/comments.xml.rels",
            },
            FontTable: {
                data: (0, xml_1.default)(this.formatter.format(file.FontTable.View, {
                    viewWrapper: file.Document,
                    file: file,
                    stack: [],
                }), {
                    indent: prettify,
                    declaration: {
                        standalone: "yes",
                        encoding: "UTF-8",
                    },
                }),
                path: "word/fontTable.xml",
            },
            FontTableRelationships: {
                data: (function () {
                    return (0, xml_1.default)(_this.formatter.format(file.FontTable.Relationships, {
                        viewWrapper: file.Document,
                        file: file,
                        stack: [],
                    }), {
                        indent: prettify,
                        declaration: {
                            encoding: "UTF-8",
                        },
                    });
                })(),
                path: "word/_rels/fontTable.xml.rels",
            },
        };
    };
    return Compiler;
}());
exports.Compiler = Compiler;
