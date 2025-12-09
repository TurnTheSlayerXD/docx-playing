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
exports.Relationships = void 0;
var xml_components_1 = require("@file/xml-components");
var attributes_1 = require("./attributes");
var relationship_1 = require("./relationship/relationship");
var Relationships = /** @class */ (function (_super) {
    __extends(Relationships, _super);
    function Relationships() {
        var _this = _super.call(this, "Relationships") || this;
        _this.root.push(new attributes_1.RelationshipsAttributes({
            xmlns: "http://schemas.openxmlformats.org/package/2006/relationships",
        }));
        return _this;
    }
    Relationships.prototype.createRelationship = function (id, type, target, targetMode) {
        var relationship = new relationship_1.Relationship("rId".concat(id), type, target, targetMode);
        this.root.push(relationship);
        return relationship;
    };
    Object.defineProperty(Relationships.prototype, "RelationshipCount", {
        get: function () {
            return this.root.length - 1;
        },
        enumerable: false,
        configurable: true
    });
    return Relationships;
}(xml_components_1.XmlComponent));
exports.Relationships = Relationships;
