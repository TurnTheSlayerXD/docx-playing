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
exports.IgnoreIfEmptyXmlComponent = exports.XmlComponent = exports.EMPTY_OBJECT = void 0;
var base_1 = require("./base");
exports.EMPTY_OBJECT = Object.seal({});
var XmlComponent = /** @class */ (function (_super) {
    __extends(XmlComponent, _super);
    function XmlComponent(rootKey) {
        var _this = _super.call(this, rootKey) || this;
        _this.root = new Array();
        return _this;
    }
    // This method is called by the formatter to get the XML representation of this component.
    // It is called recursively for all child components.
    // It is a serializer to be used in the xml library.
    // https://www.npmjs.com/package/xml
    // Child components can override this method to customize the XML representation, or execute side effects.
    XmlComponent.prototype.prepForXml = function (context) {
        var _a;
        var _b;
        // Mutating the stack is required for performance reasons
        // eslint-disable-next-line functional/immutable-data
        context.stack.push(this);
        var children = this.root
            .map(function (comp) {
            if (comp instanceof base_1.BaseXmlComponent) {
                return comp.prepForXml(context);
            }
            return comp;
        })
            .filter(function (comp) { return comp !== undefined; }); // Exclude undefined
        // eslint-disable-next-line functional/immutable-data
        context.stack.pop();
        // If we only have a single IXmlableObject in our children array and it
        // represents our attributes, use the object itself as our children to
        // avoid an unneeded XML close element.
        // Additionally, if the array is empty, use an empty object as our
        // children in order to get an empty XML element generated.
        return _a = {},
            _a[this.rootKey] = children.length ? (children.length === 1 && ((_b = children[0]) === null || _b === void 0 ? void 0 : _b._attr) ? children[0] : children) : exports.EMPTY_OBJECT,
            _a;
    };
    /**
     * @deprecated Do not use this method. It is only used internally by the library. It will be removed in a future version.
     */
    XmlComponent.prototype.addChildElement = function (child) {
        this.root.push(child);
        return this;
    };
    return XmlComponent;
}(base_1.BaseXmlComponent));
exports.XmlComponent = XmlComponent;
var IgnoreIfEmptyXmlComponent = /** @class */ (function (_super) {
    __extends(IgnoreIfEmptyXmlComponent, _super);
    function IgnoreIfEmptyXmlComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IgnoreIfEmptyXmlComponent.prototype.prepForXml = function (context) {
        var result = _super.prototype.prepForXml.call(this, context);
        // Ignore the object if its falsey or is an empty object (would produce
        // an empty XML element if allowed to be included in the output).
        if (result && (typeof result[this.rootKey] !== "object" || Object.keys(result[this.rootKey]).length)) {
            return result;
        }
        return undefined;
    };
    return IgnoreIfEmptyXmlComponent;
}(XmlComponent));
exports.IgnoreIfEmptyXmlComponent = IgnoreIfEmptyXmlComponent;
