import styles from "./Header.module.scss";
import Container from "./Container"
import Row from "./Row";

const Header = () => {
    return <header className={styles.header}>
        <Container>
            <Row justifyContent="center" alignItems="center">
                <p>logo</p>
                <p>Nav</p>
            </Row>
        </Container>
    </header>
}

export default Header;