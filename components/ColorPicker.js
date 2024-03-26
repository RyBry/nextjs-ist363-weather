const colors = [
    {
        name: "red",
        value: "#ff0000",
    },
];

const ColorPicker = () => {
    return <div
        /* First curly bracket allows us to put code into style. Second bracket treats input as an object */
        style={{
            backgroundColor: colors[0].value,
        }}>Color picker</div>;
};

export default ColorPicker;