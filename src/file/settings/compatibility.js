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
exports.Compatibility = void 0;
// http://www.datypic.com/sc/ooxml/e-w_compat-1.html
var xml_components_1 = require("@file/xml-components");
var compatibility_setting_1 = require("./compatibility-setting/compatibility-setting");
var Compatibility = /** @class */ (function (_super) {
    __extends(Compatibility, _super);
    function Compatibility(options) {
        var _this = _super.call(this, "w:compat") || this;
        if (options.version) {
            _this.root.push(new compatibility_setting_1.CompatibilitySetting(options.version));
        }
        if (options.useSingleBorderforContiguousCells) {
            _this.root.push(new xml_components_1.OnOffElement("w:useSingleBorderforContiguousCells", options.useSingleBorderforContiguousCells));
        }
        if (options.wordPerfectJustification) {
            _this.root.push(new xml_components_1.OnOffElement("w:wpJustification", options.wordPerfectJustification));
        }
        if (options.noTabStopForHangingIndent) {
            _this.root.push(new xml_components_1.OnOffElement("w:noTabHangInd", options.noTabStopForHangingIndent));
        }
        if (options.noLeading) {
            _this.root.push(new xml_components_1.OnOffElement("w:noLeading", options.noLeading));
        }
        if (options.spaceForUnderline) {
            _this.root.push(new xml_components_1.OnOffElement("w:spaceForUL", options.spaceForUnderline));
        }
        if (options.noColumnBalance) {
            _this.root.push(new xml_components_1.OnOffElement("w:noColumnBalance", options.noColumnBalance));
        }
        if (options.balanceSingleByteDoubleByteWidth) {
            _this.root.push(new xml_components_1.OnOffElement("w:balanceSingleByteDoubleByteWidth", options.balanceSingleByteDoubleByteWidth));
        }
        if (options.noExtraLineSpacing) {
            _this.root.push(new xml_components_1.OnOffElement("w:noExtraLineSpacing", options.noExtraLineSpacing));
        }
        if (options.doNotLeaveBackslashAlone) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotLeaveBackslashAlone", options.doNotLeaveBackslashAlone));
        }
        if (options.underlineTrailingSpaces) {
            _this.root.push(new xml_components_1.OnOffElement("w:ulTrailSpace", options.underlineTrailingSpaces));
        }
        if (options.doNotExpandShiftReturn) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotExpandShiftReturn", options.doNotExpandShiftReturn));
        }
        if (options.spacingInWholePoints) {
            _this.root.push(new xml_components_1.OnOffElement("w:spacingInWholePoints", options.spacingInWholePoints));
        }
        if (options.lineWrapLikeWord6) {
            _this.root.push(new xml_components_1.OnOffElement("w:lineWrapLikeWord6", options.lineWrapLikeWord6));
        }
        if (options.printBodyTextBeforeHeader) {
            _this.root.push(new xml_components_1.OnOffElement("w:printBodyTextBeforeHeader", options.printBodyTextBeforeHeader));
        }
        if (options.printColorsBlack) {
            _this.root.push(new xml_components_1.OnOffElement("w:printColBlack", options.printColorsBlack));
        }
        if (options.spaceWidth) {
            _this.root.push(new xml_components_1.OnOffElement("w:wpSpaceWidth", options.spaceWidth));
        }
        if (options.showBreaksInFrames) {
            _this.root.push(new xml_components_1.OnOffElement("w:showBreaksInFrames", options.showBreaksInFrames));
        }
        if (options.subFontBySize) {
            _this.root.push(new xml_components_1.OnOffElement("w:subFontBySize", options.subFontBySize));
        }
        if (options.suppressBottomSpacing) {
            _this.root.push(new xml_components_1.OnOffElement("w:suppressBottomSpacing", options.suppressBottomSpacing));
        }
        if (options.suppressTopSpacing) {
            _this.root.push(new xml_components_1.OnOffElement("w:suppressTopSpacing", options.suppressTopSpacing));
        }
        if (options.suppressSpacingAtTopOfPage) {
            _this.root.push(new xml_components_1.OnOffElement("w:suppressSpacingAtTopOfPage", options.suppressSpacingAtTopOfPage));
        }
        if (options.suppressTopSpacingWP) {
            _this.root.push(new xml_components_1.OnOffElement("w:suppressTopSpacingWP", options.suppressTopSpacingWP));
        }
        if (options.suppressSpBfAfterPgBrk) {
            _this.root.push(new xml_components_1.OnOffElement("w:suppressSpBfAfterPgBrk", options.suppressSpBfAfterPgBrk));
        }
        if (options.swapBordersFacingPages) {
            _this.root.push(new xml_components_1.OnOffElement("w:swapBordersFacingPages", options.swapBordersFacingPages));
        }
        if (options.convertMailMergeEsc) {
            _this.root.push(new xml_components_1.OnOffElement("w:convMailMergeEsc", options.convertMailMergeEsc));
        }
        if (options.truncateFontHeightsLikeWP6) {
            _this.root.push(new xml_components_1.OnOffElement("w:truncateFontHeightsLikeWP6", options.truncateFontHeightsLikeWP6));
        }
        if (options.macWordSmallCaps) {
            _this.root.push(new xml_components_1.OnOffElement("w:mwSmallCaps", options.macWordSmallCaps));
        }
        if (options.usePrinterMetrics) {
            _this.root.push(new xml_components_1.OnOffElement("w:usePrinterMetrics", options.usePrinterMetrics));
        }
        if (options.doNotSuppressParagraphBorders) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotSuppressParagraphBorders", options.doNotSuppressParagraphBorders));
        }
        if (options.wrapTrailSpaces) {
            _this.root.push(new xml_components_1.OnOffElement("w:wrapTrailSpaces", options.wrapTrailSpaces));
        }
        if (options.footnoteLayoutLikeWW8) {
            _this.root.push(new xml_components_1.OnOffElement("w:footnoteLayoutLikeWW8", options.footnoteLayoutLikeWW8));
        }
        if (options.shapeLayoutLikeWW8) {
            _this.root.push(new xml_components_1.OnOffElement("w:shapeLayoutLikeWW8", options.shapeLayoutLikeWW8));
        }
        if (options.alignTablesRowByRow) {
            _this.root.push(new xml_components_1.OnOffElement("w:alignTablesRowByRow", options.alignTablesRowByRow));
        }
        if (options.forgetLastTabAlignment) {
            _this.root.push(new xml_components_1.OnOffElement("w:forgetLastTabAlignment", options.forgetLastTabAlignment));
        }
        if (options.adjustLineHeightInTable) {
            _this.root.push(new xml_components_1.OnOffElement("w:adjustLineHeightInTable", options.adjustLineHeightInTable));
        }
        if (options.autoSpaceLikeWord95) {
            _this.root.push(new xml_components_1.OnOffElement("w:autoSpaceLikeWord95", options.autoSpaceLikeWord95));
        }
        if (options.noSpaceRaiseLower) {
            _this.root.push(new xml_components_1.OnOffElement("w:noSpaceRaiseLower", options.noSpaceRaiseLower));
        }
        if (options.doNotUseHTMLParagraphAutoSpacing) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotUseHTMLParagraphAutoSpacing", options.doNotUseHTMLParagraphAutoSpacing));
        }
        if (options.layoutRawTableWidth) {
            _this.root.push(new xml_components_1.OnOffElement("w:layoutRawTableWidth", options.layoutRawTableWidth));
        }
        if (options.layoutTableRowsApart) {
            _this.root.push(new xml_components_1.OnOffElement("w:layoutTableRowsApart", options.layoutTableRowsApart));
        }
        if (options.useWord97LineBreakRules) {
            _this.root.push(new xml_components_1.OnOffElement("w:useWord97LineBreakRules", options.useWord97LineBreakRules));
        }
        if (options.doNotBreakWrappedTables) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotBreakWrappedTables", options.doNotBreakWrappedTables));
        }
        if (options.doNotSnapToGridInCell) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotSnapToGridInCell", options.doNotSnapToGridInCell));
        }
        if (options.selectFieldWithFirstOrLastCharacter) {
            _this.root.push(new xml_components_1.OnOffElement("w:selectFldWithFirstOrLastChar", options.selectFieldWithFirstOrLastCharacter));
        }
        if (options.applyBreakingRules) {
            _this.root.push(new xml_components_1.OnOffElement("w:applyBreakingRules", options.applyBreakingRules));
        }
        if (options.doNotWrapTextWithPunctuation) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotWrapTextWithPunct", options.doNotWrapTextWithPunctuation));
        }
        if (options.doNotUseEastAsianBreakRules) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotUseEastAsianBreakRules", options.doNotUseEastAsianBreakRules));
        }
        if (options.useWord2002TableStyleRules) {
            _this.root.push(new xml_components_1.OnOffElement("w:useWord2002TableStyleRules", options.useWord2002TableStyleRules));
        }
        if (options.growAutofit) {
            _this.root.push(new xml_components_1.OnOffElement("w:growAutofit", options.growAutofit));
        }
        if (options.useFELayout) {
            _this.root.push(new xml_components_1.OnOffElement("w:useFELayout", options.useFELayout));
        }
        if (options.useNormalStyleForList) {
            _this.root.push(new xml_components_1.OnOffElement("w:useNormalStyleForList", options.useNormalStyleForList));
        }
        if (options.doNotUseIndentAsNumberingTabStop) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotUseIndentAsNumberingTabStop", options.doNotUseIndentAsNumberingTabStop));
        }
        if (options.useAlternateEastAsianLineBreakRules) {
            _this.root.push(new xml_components_1.OnOffElement("w:useAltKinsokuLineBreakRules", options.useAlternateEastAsianLineBreakRules));
        }
        if (options.allowSpaceOfSameStyleInTable) {
            _this.root.push(new xml_components_1.OnOffElement("w:allowSpaceOfSameStyleInTable", options.allowSpaceOfSameStyleInTable));
        }
        if (options.doNotSuppressIndentation) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotSuppressIndentation", options.doNotSuppressIndentation));
        }
        if (options.doNotAutofitConstrainedTables) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotAutofitConstrainedTables", options.doNotAutofitConstrainedTables));
        }
        if (options.autofitToFirstFixedWidthCell) {
            _this.root.push(new xml_components_1.OnOffElement("w:autofitToFirstFixedWidthCell", options.autofitToFirstFixedWidthCell));
        }
        if (options.underlineTabInNumberingList) {
            _this.root.push(new xml_components_1.OnOffElement("w:underlineTabInNumList", options.underlineTabInNumberingList));
        }
        if (options.displayHangulFixedWidth) {
            _this.root.push(new xml_components_1.OnOffElement("w:displayHangulFixedWidth", options.displayHangulFixedWidth));
        }
        if (options.splitPgBreakAndParaMark) {
            _this.root.push(new xml_components_1.OnOffElement("w:splitPgBreakAndParaMark", options.splitPgBreakAndParaMark));
        }
        if (options.doNotVerticallyAlignCellWithSp) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotVertAlignCellWithSp", options.doNotVerticallyAlignCellWithSp));
        }
        if (options.doNotBreakConstrainedForcedTable) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotBreakConstrainedForcedTable", options.doNotBreakConstrainedForcedTable));
        }
        if (options.ignoreVerticalAlignmentInTextboxes) {
            _this.root.push(new xml_components_1.OnOffElement("w:doNotVertAlignInTxbx", options.ignoreVerticalAlignmentInTextboxes));
        }
        if (options.useAnsiKerningPairs) {
            _this.root.push(new xml_components_1.OnOffElement("w:useAnsiKerningPairs", options.useAnsiKerningPairs));
        }
        if (options.cachedColumnBalance) {
            _this.root.push(new xml_components_1.OnOffElement("w:cachedColBalance", options.cachedColumnBalance));
        }
        return _this;
    }
    return Compatibility;
}(xml_components_1.XmlComponent));
exports.Compatibility = Compatibility;
