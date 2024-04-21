import Image from "next/image";

import styles from "./logo.module.scss";
import Row from "./Row";

const Logo = () => {
    return (
        <Row alignItems="center">
            <Image
                /* curly braces for dynamic info, but you can use direct quotes if vaules don't change */
                src="logo-weather.svg"
                alt="Weather app logo"
                width={162.1}
                height={148.5}
                className={styles.branding_logo}
            />
            <h1 className={styles.branding_wordmark}>IST 363 Weather App</h1>
        </Row>
    );
}
export default Logo;