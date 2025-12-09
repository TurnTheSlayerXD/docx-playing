"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerticalPositionRelativeFrom = exports.HorizontalPositionRelativeFrom = void 0;
/**
 * Horizontal Relative Positioning
 *
 * Reference: https://www.datypic.com/sc/ooxml/t-wp_ST_RelFromH.html
 */
exports.HorizontalPositionRelativeFrom = {
    /**
     * ## Character
     *
     * Specifies that the horizontal positioning shall be relative to the position of the anchor within its run content.
     */
    CHARACTER: "character",
    /**
     * ## Column
     *
     * Specifies that the horizontal positioning shall be relative to the extents of the column which contains its anchor.
     */
    COLUMN: "column",
    /**
     * ## Inside Margin
     *
     * Specifies that the horizontal positioning shall be relative to the inside margin of the current page (the left margin on odd pages, right on even pages).
     */
    INSIDE_MARGIN: "insideMargin",
    /**
     * ## Left Margin
     *
     * Specifies that the horizontal positioning shall be relative to the left margin of the page.
     */
    LEFT_MARGIN: "leftMargin",
    /**
     * ## Page Margin
     *
     * Specifies that the horizontal positioning shall be relative to the page margins.
     */
    MARGIN: "margin",
    /**
     * ## Outside Margin
     *
     * Specifies that the horizontal positioning shall be relative to the outside margin of the current page (the right margin on odd pages, left on even pages).
     */
    OUTSIDE_MARGIN: "outsideMargin",
    /**
     * ## Page Edge
     *
     * Specifies that the horizontal positioning shall be relative to the edge of the page.
     */
    PAGE: "page",
    /**
     * ## Right Margin
     *
     * Specifies that the horizontal positioning shall be relative to the right margin of the page.
     */
    RIGHT_MARGIN: "rightMargin",
};
/**
 * Vertical Relative Positioning
 *
 * Reference: https://www.datypic.com/sc/ooxml/t-wp_ST_RelFromV.html
 */
exports.VerticalPositionRelativeFrom = {
    /**
     * ## Bottom Margin
     *
     * Specifies that the vertical positioning shall be relative to the bottom margin of the current page.
     */
    BOTTOM_MARGIN: "bottomMargin",
    /**
     * ## Inside Margin
     *
     * Specifies that the vertical positioning shall be relative to the inside margin of the current page.
     */
    INSIDE_MARGIN: "insideMargin",
    /**
     * ## Line
     *
     * Specifies that the vertical positioning shall be relative to the line containing the anchor character.
     */
    LINE: "line",
    /**
     * ## Page Margin
     *
     * Specifies that the vertical positioning shall be relative to the page margins.
     */
    MARGIN: "margin",
    /**
     * ## Outside Margin
     *
     * Specifies that the vertical positioning shall be relative to the outside margin of the current page.
     */
    OUTSIDE_MARGIN: "outsideMargin",
    /**
     * ## Page Edge
     *
     * Specifies that the vertical positioning shall be relative to the edge of the page.
     */
    PAGE: "page",
    /**
     * ## Paragraph
     *
     * Specifies that the vertical positioning shall be relative to the paragraph which contains the drawing anchor.
     */
    PARAGRAPH: "paragraph",
    /**
     * ## Top Margin
     *
     * Specifies that the vertical positioning shall be relative to the top margin of the current page.
     */
    TOP_MARGIN: "topMargin",
};
