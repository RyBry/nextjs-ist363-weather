"use client"; /* Puts load on client side, not server side. */

import { useState } from "react"; /* Import core react functionality */

import Button from "../components/Button.js";
import ColorPicker from "../components/ColorPicker";

const Homepage = () => {
  /* [State value, function to update state ] = useState(state starting value) */
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h1>Weather app</h1>
      {/* Labels stand for "property" */}
      <h1>Weather app</h1>
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
      <ColorPicker />
    </div >
  );
};

export default Homepage;