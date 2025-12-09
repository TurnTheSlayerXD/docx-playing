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
exports.ExternalHyperlink = exports.InternalHyperlink = exports.ConcreteHyperlink = exports.HyperlinkType = void 0;
// http://officeopenxml.com/WPhyperlink.php
var xml_components_1 = require("@file/xml-components");
var convenience_functions_1 = require("@util/convenience-functions");
var hyperlink_attributes_1 = require("./hyperlink-attributes");
exports.HyperlinkType = {
    INTERNAL: "INTERNAL",
    EXTERNAL: "EXTERNAL",
};
var ConcreteHyperlink = /** @class */ (function (_super) {
    __extends(ConcreteHyperlink, _super);
    function ConcreteHyperlink(children, relationshipId, anchor) {
        var _this = _super.call(this, "w:hyperlink") || this;
        _this.linkId = relationshipId;
        var props = {
            history: 1,
            anchor: anchor ? anchor : undefined,
            id: !anchor ? "rId".concat(_this.linkId) : undefined,
        };
        var attributes = new hyperlink_attributes_1.HyperlinkAttributes(props);
        _this.root.push(attributes);
        children.forEach(function (child) {
            _this.root.push(child);
        });
        return _this;
    }
    return ConcreteHyperlink;
}(xml_components_1.XmlComponent));
exports.ConcreteHyperlink = ConcreteHyperlink;
var InternalHyperlink = /** @class */ (function (_super) {
    __extends(InternalHyperlink, _super);
    function InternalHyperlink(options) {
        return _super.call(this, options.children, (0, convenience_functions_1.uniqueId)(), options.anchor) || this;
    }
    return InternalHyperlink;
}(ConcreteHyperlink));
exports.InternalHyperlink = InternalHyperlink;
var ExternalHyperlink = /** @class */ (function (_super) {
    __extends(ExternalHyperlink, _super);
    function ExternalHyperlink(options) {
        var _this = _super.call(this, "w:externalHyperlink") || this;
        _this.options = options;
        return _this;
    }
    return ExternalHyperlink;
}(xml_components_1.XmlComponent));
exports.ExternalHyperlink = ExternalHyperlink;
