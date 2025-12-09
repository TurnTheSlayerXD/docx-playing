"use strict";
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
exports.patchDetector = void 0;
var jszip_1 = require("jszip");
var traverser_1 = require("./traverser");
var util_1 = require("./util");
/** Detects which patches are needed/present in a template */
var patchDetector = function (_a) {
    var data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        var zipContent, _b, patches, _i, _c, _d, key, value, json, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (!(data instanceof jszip_1.default)) return [3 /*break*/, 1];
                    _b = data;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, jszip_1.default.loadAsync(data)];
                case 2:
                    _b = _f.sent();
                    _f.label = 3;
                case 3:
                    zipContent = _b;
                    patches = new Set();
                    _i = 0, _c = Object.entries(zipContent.files);
                    _f.label = 4;
                case 4:
                    if (!(_i < _c.length)) return [3 /*break*/, 7];
                    _d = _c[_i], key = _d[0], value = _d[1];
                    if (!key.endsWith(".xml") && !key.endsWith(".rels")) {
                        return [3 /*break*/, 6];
                    }
                    if (!(key.startsWith("word/") && !key.endsWith(".xml.rels"))) return [3 /*break*/, 6];
                    _e = util_1.toJson;
                    return [4 /*yield*/, value.async("text")];
                case 5:
                    json = _e.apply(void 0, [_f.sent()]);
                    (0, traverser_1.traverse)(json).forEach(function (p) { return findPatchKeys(p.text).forEach(function (patch) { return patches.add(patch); }); });
                    _f.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 4];
                case 7: return [2 /*return*/, Array.from(patches)];
            }
        });
    });
};
exports.patchDetector = patchDetector;
var findPatchKeys = function (text) {
    var _a;
    var pattern = /(?<=\{\{).+?(?=\}\})/gs;
    return (_a = text.match(pattern)) !== null && _a !== void 0 ? _a : [];
};
