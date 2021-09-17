import Color from "./Color";
import React from "react";

const Colors = ({ colors, onDelete }) => {
    return (
        <div className="colors">
            {colors.map((color) => {
                return <Color key={color.id} color={color} onDelete={onDelete} />;
            })}
        </div>
    );
};

export default Colors;
