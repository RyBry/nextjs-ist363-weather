import Button from "../components/Button.js";

const Homepage = () => {
  return (
    <div>
      <h1>Weather app</h1>
      {/* Labels stand for "property" */}
      <Button label="Download" />
      <Button label="Register Now" />
      <Button label="Learn more" />
    </div >
  );
};

export default Homepage;