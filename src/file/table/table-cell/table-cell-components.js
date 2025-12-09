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
exports.TDirection = exports.TextDirection = exports.VerticalMerge = exports.VerticalMergeType = exports.GridSpan = exports.TableCellBorders = void 0;
var border_1 = require("@file/border");
var xml_components_1 = require("@file/xml-components");
var values_1 = require("@util/values");
var TableCellBorders = /** @class */ (function (_super) {
    __extends(TableCellBorders, _super);
    function TableCellBorders(options) {
        var _this = _super.call(this, "w:tcBorders") || this;
        if (options.top) {
            _this.root.push(new border_1.BorderElement("w:top", options.top));
        }
        if (options.start) {
            _this.root.push(new border_1.BorderElement("w:start", options.start));
        }
        if (options.left) {
            _this.root.push(new border_1.BorderElement("w:left", options.left));
        }
        if (options.bottom) {
            _this.root.push(new border_1.BorderElement("w:bottom", options.bottom));
        }
        if (options.end) {
            _this.root.push(new border_1.BorderElement("w:end", options.end));
        }
        if (options.right) {
            _this.root.push(new border_1.BorderElement("w:right", options.right));
        }
        return _this;
    }
    return TableCellBorders;
}(xml_components_1.IgnoreIfEmptyXmlComponent));
exports.TableCellBorders = TableCellBorders;
/**
 * Attributes fot the GridSpan element.
 */
var GridSpanAttributes = /** @class */ (function (_super) {
    __extends(GridSpanAttributes, _super);
    function GridSpanAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { val: "w:val" };
        return _this;
    }
    return GridSpanAttributes;
}(xml_components_1.XmlAttributeComponent));
// <xsd:complexType name="CT_TcPrBase">
//   ...
//   <xsd:element name="gridSpan" type="CT_DecimalNumber" minOccurs="0"/>
// </xsd>
/**
 * GridSpan element. Should be used in a table cell. Pass the number of columns that this cell need to span.
 */
var GridSpan = /** @class */ (function (_super) {
    __extends(GridSpan, _super);
    function GridSpan(value) {
        var _this = _super.call(this, "w:gridSpan") || this;
        _this.root.push(new GridSpanAttributes({
            val: (0, values_1.decimalNumber)(value),
        }));
        return _this;
    }
    return GridSpan;
}(xml_components_1.XmlComponent));
exports.GridSpan = GridSpan;
/**
 * Vertical merge types.
 */
exports.VerticalMergeType = {
    /**
     * Cell that is merged with upper one.
     */
    CONTINUE: "continue",
    /**
     * Cell that is starting the vertical merge.
     */
    RESTART: "restart",
};
var VerticalMergeAttributes = /** @class */ (function (_super) {
    __extends(VerticalMergeAttributes, _super);
    function VerticalMergeAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { val: "w:val" };
        return _this;
    }
    return VerticalMergeAttributes;
}(xml_components_1.XmlAttributeComponent));
/**
 * Vertical merge element. Should be used in a table cell.
 */
var VerticalMerge = /** @class */ (function (_super) {
    __extends(VerticalMerge, _super);
    function VerticalMerge(value) {
        var _this = _super.call(this, "w:vMerge") || this;
        _this.root.push(new VerticalMergeAttributes({
            val: value,
        }));
        return _this;
    }
    return VerticalMerge;
}(xml_components_1.XmlComponent));
exports.VerticalMerge = VerticalMerge;
exports.TextDirection = {
    BOTTOM_TO_TOP_LEFT_TO_RIGHT: "btLr",
    LEFT_TO_RIGHT_TOP_TO_BOTTOM: "lrTb",
    TOP_TO_BOTTOM_RIGHT_TO_LEFT: "tbRl",
};
var TDirectionAttributes = /** @class */ (function (_super) {
    __extends(TDirectionAttributes, _super);
    function TDirectionAttributes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xmlKeys = { val: "w:val" };
        return _this;
    }
    return TDirectionAttributes;
}(xml_components_1.XmlAttributeComponent));
/**
 * Text Direction within a table cell
 */
var TDirection = /** @class */ (function (_super) {
    __extends(TDirection, _super);
    function TDirection(value) {
        var _this = _super.call(this, "w:textDirection") || this;
        _this.root.push(new TDirectionAttributes({
            val: value,
        }));
        return _this;
    }
    return TDirection;
}(xml_components_1.XmlComponent));
exports.TDirection = TDirection;
