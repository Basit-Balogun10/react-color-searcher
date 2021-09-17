import Button from "./Button";
import React from "react";

const Color = ({ color, onDelete }) => {
    return (
        <div style={{ position: "relative" }}>
            <div
                className="color"
                style={{
                    background: color.name,
                    border: `1px solid ${
                        color.name === "white" ? "black" : color.name
                    }`,
                }}
            ></div>
            <div style={{ position: "absolute", top: 0, right: 0 }}>
                <Button
                    background="red"
                    border="1px solid white"
                    borderRadius="3px"
                    buttonText="Delete"
                    fontSize="13px"
                    padding="3px"
                    margin="2px"
                    onClick={() => onDelete(color.id)}
                />
            </div>
        </div>
    );
};

export default Color;
