import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Button({
    children = "",
    color = "var(--white-color)",
    bgColor = "var(--red-color)",
    hoverBgColor = "var(--red-color)", // Background color on hover
    hoverTextColor = "var(--red-color)", // Text color on hover
    outline = true, // Control to apply outline on hover
    outlineColor = "var(--red-color)", // Outline color on hover
    outlineWidth = "2px", // Outline width
    borderRadius = "30px",
    fontSize = "1.5rem",
    paddingX = "1rem",
    paddingY = "0.5rem",
    width = "150px",
    height = "50px",
    onClick,
    type = "button", // Default type is button, not submit
}) {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        color: isHovered ? hoverTextColor : color,
        backgroundColor: isHovered ? hoverBgColor : bgColor,
        borderRadius,
        fontSize,
        padding: `${paddingY} ${paddingX}`,
        width,
        height,
        outline: outline ? `${outlineWidth} solid ${outlineColor}` : "none",
        transition: "background-color 0.3s, outline 0.3s, color 0.3s", // Smooth transition for hover
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className="custom-button"
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    hoverBgColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
    outline: PropTypes.bool,
    outlineColor: PropTypes.string,
    outlineWidth: PropTypes.string,
    borderRadius: PropTypes.string,
    fontSize: PropTypes.string,
    paddingX: PropTypes.string,
    paddingY: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
};
