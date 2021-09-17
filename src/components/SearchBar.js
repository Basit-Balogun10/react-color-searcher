import React from "react";
import Button from "./Button";
import { useState } from "react";

const SearchBar = ({ findColors, notFound, onAdd }) => {
    const [text, setText] = useState("");
    return (
        <div id="header">
            <div id="search-bar">
                <form id="search-form">
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter Color Name"
                            value={text}
                            onChange={(e) => {
                                setText(e.target.value);
                                findColors(e.target.value);
                            }}
                        />
                    </div>
                </form>
            </div>
            <div className="add-color">
                <Button
                    background={`${notFound ? "green" : "grey"}`}
                    border={`1px solid ${notFound ? "green" : "grey"}`}
                    buttonText="Add Color"
                    cursor={`${notFound ? "pointer" : "not-allowed"}`}
                    notFound={notFound}
                    onClick={() => onAdd({ name: text })}
                />
            </div>
        </div>
    );
};

export default SearchBar;
