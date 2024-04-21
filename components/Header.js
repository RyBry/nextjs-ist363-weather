import styles from "./Header.module.scss";
import Container from "./Container"
import Row from "./Row";
import Logo from "./Logo"

const Header = () => {
    return <header className={styles.header}>
        <Container>
            <Row alignItems="center">
                <Logo />
            </Row>
        </Container>
    </header>
}

export default Header;