import styles from "./Col.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles)

const Col = ({ children, xs, sm, md, lg, xl }) => {
    const colClasses = cx({
        col: true,
        [`col_xs_${xs}`]: xs,
        [`col_sm_${sm}`]: sm,
        [`col_md_${md}`]: md,
        [`col_lg_${lg}`]: lg,
        [`col_xl_${xl}`]: xl,
    });
    return <div className={colClasses}>{children}</div>
};

export default Col;