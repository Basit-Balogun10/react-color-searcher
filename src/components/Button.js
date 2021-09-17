import React from "react";

const Button = ({
    background,
    border,
    borderRadius,
    buttonText,
    color,
    cursor,
    fontSize,
    padding,
    margin,
    notFound,
    onClick,
}) => {
    return (
        <button
            style={{
                background: background,
                border: border,
                borderRadius: borderRadius,
                color: color,
                cursor: cursor,
                fontSize: fontSize,
                padding: padding,
                margin: margin,
            }}
            className="btn"
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
};

Button.defaultProps = {
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    fontSize: "15px",
    padding: "9px 9px",
    margin: "5px",
};

export default Button;
