import { useState } from "react";

import Image from "next/image";
import styles from "./PeoplePicker.module.scss";
import ButtonUI from "./ButtonUI.js"

const PeoplePicker = ({ people }) => {
    const [activePersonIndex, setActivePersonIndex] = useState(0);
    return (
        <section>
            <h2>Team</h2>
            <div className={styles.card_container}>
                <ButtonUI
                    className={styles.card_arrow_left}
                    icon="faAngleLeft"
                    clickHandler={() => {
                        const newIndex = activePersonIndex <= 0 ? people.length - 1 : activePersonIndex - 1;
                        setActivePersonIndex(newIndex);
                    }}
                />
                <ButtonUI
                    className={styles.card_arrow_right}
                    icon="faAngleRight"
                    clickHandler={() => {
                        const newIndex = activePersonIndex >= people.length - 1 ? 0 : activePersonIndex + 1;
                        setActivePersonIndex(newIndex);
                    }}
                />
                <div className={styles.card}>
                    <Image
                        src={`/headshots/${people[activePersonIndex].slug}.jpg`}
                        alt={`${people[activePersonIndex].name.first}${" "}
                    ${people[activePersonIndex].name.last}`}
                        width={200}
                        height={200}
                        className={styles.card_headshot}
                    />
                    <h3 className={styles.card_name}>
                        {people[activePersonIndex].name.first}{" "}
                        {people[activePersonIndex].name.last}
                    </h3>
                    <h4 className={styles.card_job}>
                        <em>{people[activePersonIndex].jobTitle}</em>
                        <br />
                        {people[activePersonIndex].company}
                    </h4>
                </div>
            </div>
        </section>
    );
}

export default PeoplePicker;