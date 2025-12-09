"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
// Internally, the wrapper is a 'File', but export to the end user as a 'Document'
// Use of 'File' also works
var file_1 = require("./file");
Object.defineProperty(exports, "Document", { enumerable: true, get: function () { return file_1.File; } });
__exportStar(require("./file"), exports);
__exportStar(require("./export"), exports);
__exportStar(require("./util"), exports);
__exportStar(require("./patcher"), exports);
