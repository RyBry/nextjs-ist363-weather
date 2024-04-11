import classnames from "classnames/bind"
import styles from "./Tabs.module.scss";

const cx = classnames.bind(styles);

const Tabs = ({ activeIndex, clickHandler, items }) => {
    return (
        <ul className={styles.tabs}>
            {items?.map((item, index) => {
                const itemClasses = cx({
                    tabs_item: true,
                    active: index === activeIndex,
                });
                return (
                    <li
                        className={itemClasses}
                        key={index}
                        onClick={() => {
                            clickHandler(index);
                        }}>{item}</li>);
            })}
        </ul>);
}

export default Tabs;