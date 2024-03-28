import { useState } from "react";
import Button from "./Button";

import styles from "./ColorPicker.module.scss";

const colors = [
    {
        name: "red",
        value: "#ff0000",
    },
    {
        name: "green",
        value: "#00FF00",
    },
    {
        name: "blue",
        value: "#0000FF",
    },
    {
        name: "yellow",
        value: "#FFFF00",
    },
    {
        name: "teal",
        value: "#008080",
    },
    {
        name: "orange",
        value: "#FFa500",
    },
];

const ColorPicker = () => {
    /* [State value, access function to update state ] = useState(state starting value) */
    const [activeIndex, setActiveIndex] = useState(1);
    return (
        <div className={styles.colorpicker}>
            <div className={styles.colorpicker_block}
                /* First curly bracket allows us to put code into style. Second bracket treats input as an object */
                style={{
                    backgroundColor: colors[activeIndex].value,
                }}>
                <h2 className={styles.colorpicker_name}>{colors[activeIndex].name}</h2>
            </div>
            {/* map loops through every element, giving element and index. */}
            {colors.map((color, index) => {
                return <Button
                    key={index}
                    backgroundColor={color.value}
                    label={color.name}
                    clickHandler={() => {
                        setActiveIndex(index);
                    }} />
            })}
        </div >
    );
};

export default ColorPicker;