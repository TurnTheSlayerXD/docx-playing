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
exports.ImageRun = void 0;
var convenience_functions_1 = require("@util/convenience-functions");
var drawing_1 = require("../../drawing");
var run_1 = require("../run");
var convertDataURIToBinary = function (dataURI) {
    if (typeof atob === "function") {
        // https://gist.github.com/borismus/1032746
        // https://github.com/mafintosh/base64-to-uint8array
        var BASE64_MARKER = ";base64,";
        var base64Index = dataURI.indexOf(BASE64_MARKER);
        var base64IndexWithOffset = base64Index === -1 ? 0 : base64Index + BASE64_MARKER.length;
        return new Uint8Array(atob(dataURI.substring(base64IndexWithOffset))
            .split("")
            .map(function (c) { return c.charCodeAt(0); }));
        /* c8 ignore next 6 */
    }
    else {
        // Not possible to test this branch in NodeJS
        // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
        var b = require("buf" + "fer");
        return new b.Buffer(dataURI, "base64");
    }
};
var standardizeData = function (data) {
    return typeof data === "string" ? convertDataURIToBinary(data) : data;
};
var createImageData = function (options, key) { return ({
    data: standardizeData(options.data),
    fileName: key,
    transformation: {
        pixels: {
            x: Math.round(options.transformation.width),
            y: Math.round(options.transformation.height),
        },
        emus: {
            x: Math.round(options.transformation.width * 9525),
            y: Math.round(options.transformation.height * 9525),
        },
        flip: options.transformation.flip,
        rotation: options.transformation.rotation ? options.transformation.rotation * 60000 : undefined,
    },
}); };
var ImageRun = /** @class */ (function (_super) {
    __extends(ImageRun, _super);
    function ImageRun(options) {
        var _this = _super.call(this, {}) || this;
        var hash = (0, convenience_functions_1.hashedId)(options.data);
        var key = "".concat(hash, ".").concat(options.type);
        _this.imageData =
            options.type === "svg"
                ? __assign(__assign({ type: options.type }, createImageData(options, key)), { fallback: __assign({ type: options.fallback.type }, createImageData(__assign(__assign({}, options.fallback), { transformation: options.transformation }), "".concat((0, convenience_functions_1.hashedId)(options.fallback.data), ".").concat(options.fallback.type))) }) : __assign({ type: options.type }, createImageData(options, key));
        var drawing = new drawing_1.Drawing(_this.imageData, {
            floating: options.floating,
            docProperties: options.altText,
            outline: options.outline,
        });
        _this.root.push(drawing);
        return _this;
    }
    ImageRun.prototype.prepForXml = function (context) {
        context.file.Media.addImage(this.imageData.fileName, this.imageData);
        if (this.imageData.type === "svg") {
            context.file.Media.addImage(this.imageData.fallback.fileName, this.imageData.fallback);
        }
        return _super.prototype.prepForXml.call(this, context);
    };
    return ImageRun;
}(run_1.Run));
exports.ImageRun = ImageRun;
