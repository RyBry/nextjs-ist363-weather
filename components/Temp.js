import classnames from "classnames/bind";

import styles from "./temp.module.scss";

const cx = classnames.bind(styles);

const Temp = ({ amount, size }) => {
    const tempClasses = cx({
        temp: true,
        [`temp_size-${size}`]: size,
    });
    const roundedTemp = Math.round(amount)
    return <span className={tempClasses}>{roundedTemp} &deg; F</span>
}

export default Temp;