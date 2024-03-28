import styles from "./Button.module.scss";

/* Every component in react is a function */
/* We pass deconstructed properties AKA "props" {aSingleProp} 
    into component declarations */
const Button = ({ backgroundColor, clickHandler, label }) => {
    return <button
        style={{ backgroundColor: backgroundColor }}
        className={styles.btn}
        onClick={clickHandler}
    >{label}</button>
}
/* Specify default element to pass through (Button function) */
export default Button;
