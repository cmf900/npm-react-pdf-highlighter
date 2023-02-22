import React, { Component } from "react";
import "../style/Highlight.css";
export class Highlight extends Component {
    render() {
        const { position, onClick, onMouseOver, onMouseOut, comment, isScrolledTo, } = this.props;
        const { rects, boundingRect } = position;
        const highlightClass = comment ? `Highlight__part Label__${comment.emoji}` : null;
        return (React.createElement("div", { className: `Highlight ${isScrolledTo ? "Highlight--scrolledTo" : ""}` },
            comment ? (React.createElement("div", {
                className: "Highlight__emoji", style: {
                    left: 20,
                    top: boundingRect.top,
                }
            }, comment.emoji)) : null,
            React.createElement("div", { className: "Highlight__parts" }, rects.map((rect, index) => (React.createElement("div", { onMouseOver: onMouseOver, onMouseOut: onMouseOut, onClick: onClick, key: index, style: rect, className: highlightClass }))))));
    }
}
export default Highlight;
//# sourceMappingURL=Highlight.js.map