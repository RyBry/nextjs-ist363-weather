import Homepage from "@/app/page";
import { useState } from "react"; /* Import core react functionality */
import Button from "../components/Button.js";


const ButtonDemo = () => {
    /* [State value, function to update state ] = useState(state starting value) */
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    return <div>
        <h2>Count: {count}</h2>
        <Button
            label="Increment"
            clickHandler={() => {
                setCount(count + 1);
            }}
        />

        <Button
            label="Decrement"
            clickHandler={() => {
                setCount(count - 1);
            }} />

        <Button label="Download" />
        <Button label="Register Now" />
        <Button label="Learn more" />

        {/* If this expression is true (&&) do this thing on the right of ampersand */}
        {count > 5 && <div>Special Message</div>}

        <br />
        <Button
            label={isVisible ? "Hide Message" : "Show Message"}
            clickHandler={() => {
                setIsVisible(!isVisible);
            }}
        />
        {isVisible && <p>Hello, world!</p>}
    </div>
}

export default ButtonDemo;