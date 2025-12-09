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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchDocument = exports.PatchType = void 0;
var jszip_1 = require("jszip");
var xml_js_1 = require("xml-js");
var image_replacer_1 = require("@export/packer/image-replacer");
var document_1 = require("@file/document");
var media_1 = require("@file/media");
var paragraph_1 = require("@file/paragraph");
var relationship_1 = require("@file/relationships/relationship/relationship");
var convenience_functions_1 = require("@util/convenience-functions");
var content_types_manager_1 = require("./content-types-manager");
var relationship_manager_1 = require("./relationship-manager");
var replacer_1 = require("./replacer");
var util_1 = require("./util");
exports.PatchType = {
    DOCUMENT: "file",
    PARAGRAPH: "paragraph",
};
var imageReplacer = new image_replacer_1.ImageReplacer();
var UTF16LE = new Uint8Array([0xff, 0xfe]);
var UTF16BE = new Uint8Array([0xfe, 0xff]);
var compareByteArrays = function (a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
};
var patchDocument = function (_a) {
    var outputType = _a.outputType, data = _a.data, patches = _a.patches, keepOriginalStyles = _a.keepOriginalStyles, _b = _a.placeholderDelimiters, placeholderDelimiters = _b === void 0 ? { start: "{{", end: "}}" } : _b, 
    /**
     * Search for occurrences over patched document
     */
    _c = _a.recursive, 
    /**
     * Search for occurrences over patched document
     */
    recursive = _c === void 0 ? true : _c;
    return __awaiter(void 0, void 0, void 0, function () {
        var zipContent, _d, contexts, file, map, imageRelationshipAdditions, hyperlinkRelationshipAdditions, hasMedia, binaryContentMap, _loop_1, _i, _e, _f, key, value, _g, imageRelationshipAdditions_1, _h, key, mediaDatas, relationshipKey, relationshipsJson, index, newJson, i, fileName, _j, hyperlinkRelationshipAdditions_1, _k, key, hyperlink, relationshipKey, relationshipsJson, contentTypesJson, zip, _l, map_1, _m, key, value, output, _o, binaryContentMap_1, _p, key, value, _q, _r, _s, stream, fileName;
        var _t, _u, _v;
        return __generator(this, function (_w) {
            switch (_w.label) {
                case 0:
                    if (!(data instanceof jszip_1.default)) return [3 /*break*/, 1];
                    _d = data;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, jszip_1.default.loadAsync(data)];
                case 2:
                    _d = _w.sent();
                    _w.label = 3;
                case 3:
                    zipContent = _d;
                    contexts = new Map();
                    file = {
                        Media: new media_1.Media(),
                    };
                    map = new Map();
                    imageRelationshipAdditions = [];
                    hyperlinkRelationshipAdditions = [];
                    hasMedia = false;
                    binaryContentMap = new Map();
                    _loop_1 = function (key, value) {
                        var binaryValue, startBytes, json, _x, document_2, _y, _z, ns, context, start, end, _0, _1, _2, patchKey, patchValue, patchText, didFindOccurrence, mediaDatas;
                        return __generator(this, function (_3) {
                            switch (_3.label) {
                                case 0: return [4 /*yield*/, value.async("uint8array")];
                                case 1:
                                    binaryValue = _3.sent();
                                    startBytes = binaryValue.slice(0, 2);
                                    if (compareByteArrays(startBytes, UTF16LE) || compareByteArrays(startBytes, UTF16BE)) {
                                        binaryContentMap.set(key, binaryValue);
                                        return [2 /*return*/, "continue"];
                                    }
                                    if (!key.endsWith(".xml") && !key.endsWith(".rels")) {
                                        binaryContentMap.set(key, binaryValue);
                                        return [2 /*return*/, "continue"];
                                    }
                                    _x = util_1.toJson;
                                    return [4 /*yield*/, value.async("text")];
                                case 2:
                                    json = _x.apply(void 0, [_3.sent()]);
                                    if (key === "word/document.xml") {
                                        document_2 = (_t = json.elements) === null || _t === void 0 ? void 0 : _t.find(function (i) { return i.name === "w:document"; });
                                        if (document_2 && document_2.attributes) {
                                            // We could check all namespaces from Document, but we'll instead
                                            // check only those that may be used by our element types.
                                            for (_y = 0, _z = ["mc", "wp", "r", "w15", "m"]; _y < _z.length; _y++) {
                                                ns = _z[_y];
                                                // eslint-disable-next-line functional/immutable-data
                                                document_2.attributes["xmlns:".concat(ns)] = document_1.DocumentAttributeNamespaces[ns];
                                            }
                                            // eslint-disable-next-line functional/immutable-data
                                            document_2.attributes["mc:Ignorable"] = "".concat(document_2.attributes["mc:Ignorable"] || "", " w15").trim();
                                        }
                                    }
                                    if (key.startsWith("word/") && !key.endsWith(".xml.rels")) {
                                        context = {
                                            file: file,
                                            viewWrapper: {
                                                Relationships: {
                                                    createRelationship: function (linkId, _, target, __) {
                                                        // eslint-disable-next-line functional/immutable-data
                                                        hyperlinkRelationshipAdditions.push({
                                                            key: key,
                                                            hyperlink: {
                                                                id: linkId,
                                                                link: target,
                                                            },
                                                        });
                                                    },
                                                },
                                            },
                                            stack: [],
                                        };
                                        contexts.set(key, context);
                                        if (!(placeholderDelimiters === null || placeholderDelimiters === void 0 ? void 0 : placeholderDelimiters.start.trim()) || !(placeholderDelimiters === null || placeholderDelimiters === void 0 ? void 0 : placeholderDelimiters.end.trim())) {
                                            throw new Error("Both start and end delimiters must be non-empty strings.");
                                        }
                                        start = placeholderDelimiters.start, end = placeholderDelimiters.end;
                                        for (_0 = 0, _1 = Object.entries(patches); _0 < _1.length; _0++) {
                                            _2 = _1[_0], patchKey = _2[0], patchValue = _2[1];
                                            patchText = "".concat(start).concat(patchKey).concat(end);
                                            // TODO: mutates json. Make it immutable
                                            // We need to loop through to catch every occurrence of the patch text
                                            // It is possible that the patch text is in the same run
                                            // This algorithm is limited to one patch per text run
                                            // We break out of the loop once it cannot find any more occurrences
                                            // https://github.com/dolanmiu/docx/issues/2267
                                            while (true) {
                                                didFindOccurrence = (0, replacer_1.replacer)({
                                                    json: json,
                                                    patch: __assign(__assign({}, patchValue), { children: patchValue.children.map(function (element) {
                                                            // We need to replace external hyperlinks with concrete hyperlinks
                                                            if (element instanceof paragraph_1.ExternalHyperlink) {
                                                                var concreteHyperlink = new paragraph_1.ConcreteHyperlink(element.options.children, (0, convenience_functions_1.uniqueId)());
                                                                // eslint-disable-next-line functional/immutable-data
                                                                hyperlinkRelationshipAdditions.push({
                                                                    key: key,
                                                                    hyperlink: {
                                                                        id: concreteHyperlink.linkId,
                                                                        link: element.options.link,
                                                                    },
                                                                });
                                                                return concreteHyperlink;
                                                            }
                                                            else {
                                                                return element;
                                                            }
                                                        }) }),
                                                    patchText: patchText,
                                                    context: context,
                                                    keepOriginalStyles: keepOriginalStyles,
                                                }).didFindOccurrence;
                                                // What the reason doing that? Once document is patched - it search over patched json again, that takes too long if patched document has big and deep structure.
                                                if (!recursive || !didFindOccurrence) {
                                                    break;
                                                }
                                            }
                                        }
                                        mediaDatas = imageReplacer.getMediaData(JSON.stringify(json), context.file.Media);
                                        if (mediaDatas.length > 0) {
                                            hasMedia = true;
                                            // eslint-disable-next-line functional/immutable-data
                                            imageRelationshipAdditions.push({
                                                key: key,
                                                mediaDatas: mediaDatas,
                                            });
                                        }
                                    }
                                    map.set(key, json);
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, _e = Object.entries(zipContent.files);
                    _w.label = 4;
                case 4:
                    if (!(_i < _e.length)) return [3 /*break*/, 7];
                    _f = _e[_i], key = _f[0], value = _f[1];
                    return [5 /*yield**/, _loop_1(key, value)];
                case 5:
                    _w.sent();
                    _w.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 4];
                case 7:
                    for (_g = 0, imageRelationshipAdditions_1 = imageRelationshipAdditions; _g < imageRelationshipAdditions_1.length; _g++) {
                        _h = imageRelationshipAdditions_1[_g], key = _h.key, mediaDatas = _h.mediaDatas;
                        relationshipKey = "word/_rels/".concat(key.split("/").pop(), ".rels");
                        relationshipsJson = (_u = map.get(relationshipKey)) !== null && _u !== void 0 ? _u : createRelationshipFile();
                        map.set(relationshipKey, relationshipsJson);
                        index = (0, relationship_manager_1.getNextRelationshipIndex)(relationshipsJson);
                        newJson = imageReplacer.replace(JSON.stringify(map.get(key)), mediaDatas, index);
                        map.set(key, JSON.parse(newJson));
                        for (i = 0; i < mediaDatas.length; i++) {
                            fileName = mediaDatas[i].fileName;
                            (0, relationship_manager_1.appendRelationship)(relationshipsJson, index + i, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", "media/".concat(fileName));
                        }
                    }
                    for (_j = 0, hyperlinkRelationshipAdditions_1 = hyperlinkRelationshipAdditions; _j < hyperlinkRelationshipAdditions_1.length; _j++) {
                        _k = hyperlinkRelationshipAdditions_1[_j], key = _k.key, hyperlink = _k.hyperlink;
                        relationshipKey = "word/_rels/".concat(key.split("/").pop(), ".rels");
                        relationshipsJson = (_v = map.get(relationshipKey)) !== null && _v !== void 0 ? _v : createRelationshipFile();
                        map.set(relationshipKey, relationshipsJson);
                        (0, relationship_manager_1.appendRelationship)(relationshipsJson, hyperlink.id, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", hyperlink.link, relationship_1.TargetModeType.EXTERNAL);
                    }
                    if (hasMedia) {
                        contentTypesJson = map.get("[Content_Types].xml");
                        if (!contentTypesJson) {
                            throw new Error("Could not find content types file");
                        }
                        (0, content_types_manager_1.appendContentType)(contentTypesJson, "image/png", "png");
                        (0, content_types_manager_1.appendContentType)(contentTypesJson, "image/jpeg", "jpeg");
                        (0, content_types_manager_1.appendContentType)(contentTypesJson, "image/jpeg", "jpg");
                        (0, content_types_manager_1.appendContentType)(contentTypesJson, "image/bmp", "bmp");
                        (0, content_types_manager_1.appendContentType)(contentTypesJson, "image/gif", "gif");
                        (0, content_types_manager_1.appendContentType)(contentTypesJson, "image/svg+xml", "svg");
                    }
                    zip = new jszip_1.default();
                    for (_l = 0, map_1 = map; _l < map_1.length; _l++) {
                        _m = map_1[_l], key = _m[0], value = _m[1];
                        output = toXml(value);
                        zip.file(key, output);
                    }
                    for (_o = 0, binaryContentMap_1 = binaryContentMap; _o < binaryContentMap_1.length; _o++) {
                        _p = binaryContentMap_1[_o], key = _p[0], value = _p[1];
                        zip.file(key, value);
                    }
                    for (_q = 0, _r = file.Media.Array; _q < _r.length; _q++) {
                        _s = _r[_q], stream = _s.data, fileName = _s.fileName;
                        zip.file("word/media/".concat(fileName), stream);
                    }
                    return [2 /*return*/, zip.generateAsync({
                            type: outputType,
                            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                            compression: "DEFLATE",
                        })];
            }
        });
    });
};
exports.patchDocument = patchDocument;
var toXml = function (jsonObj) {
    var output = (0, xml_js_1.js2xml)(jsonObj, {
        attributeValueFn: function (str) {
            return String(str)
                .replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&apos;");
        }, // cspell:words apos
    });
    return output;
};
var createRelationshipFile = function () { return ({
    declaration: {
        attributes: {
            version: "1.0",
            encoding: "UTF-8",
            standalone: "yes",
        },
    },
    elements: [
        {
            type: "element",
            name: "Relationships",
            attributes: {
                xmlns: "http://schemas.openxmlformats.org/package/2006/relationships",
            },
            elements: [],
        },
    ],
}); };
