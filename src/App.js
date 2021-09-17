import { useState, useEffect } from "react";
import Colors from "./components/Colors";
import SearchBar from "./components/SearchBar";
import React from "react";

function App() {
    const [colors, setColors] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [info, setInfo] = useState("Loading colors...");

    useEffect(() => {
        const getColors = async () => {
            console.log("e call me");
            const colorsFromServer = await fetchColors();
            setColors(colorsFromServer);
        };
        getColors();
    }, []);

    // Delete Color
    const deleteColor = async (id) => {
        const confirmDelete = window.confirm(
            "The selected color will be deleted and can't be recovered, Are you sure you want to continue?"
        );
        if (confirmDelete) {
            await fetch(`http://localhost:5000/colors/${id}`, {
                method: "DELETE",
            });
            setColors(colors.filter((color) => color.id !== id));
        }
    };

    // Fetch color
    const fetchColor = async (id) => {
        const res = await fetch(`http://localhost:5000/colors/${id}`);
        const data = await res.json();

        return data;
    };

    // Add color
    const addColor = async (color) => {
        if (notFound) {
            const res = await fetch("http://localhost:5000/colors", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(color),
            });

            const data = await res.json();

            setColors([...colors, data]);
            alert("Color added successfully");
        }
    };

    // Find Colors
    const findColors = async (searchText) => {
        const fetchedColors = await fetchColors();
        const foundColors = fetchedColors.filter((color) =>
            color.name.startsWith(searchText.toLowerCase())
        );

        setColors([...foundColors]);
        if (foundColors.length === 0) {
            setNotFound(true);
            setInfo(
                "No colour found, please click the 'Add Color' button if you would like to add the color you searched for"
            );
        } else {
            setNotFound(false);
        }
    };

    // Fetch Colors
    const fetchColors = async () => {
        const res = await fetch("http://localhost:5000/colors");
        const data = await res.json();

        return data;
    };

    return (
        <div className="App">
            <h1>React Color Searcher</h1>
            <SearchBar
                findColors={findColors}
                notFound={notFound}
                onAdd={addColor}
            />
            {colors.length > 0 ? (
                <Colors colors={colors} onDelete={deleteColor} />
            ) : (
                info
            )}
        </div>
    );
}

export default App;
