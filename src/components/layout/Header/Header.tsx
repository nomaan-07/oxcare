import { Button } from "../../common/Button";
import { ButtonsWrapper } from "../../common/Buttons";
import { Container } from "../../common/Container";
import { Logo } from "../../common/Logo";
import { Menu } from "./components/Menu";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Logo />
          <Menu />
          <ButtonsWrapper>
            <Button variant="secondary">Login</Button>
            <Button variant="primary">signup</Button>
          </ButtonsWrapper>
        </div>
      </Container>
    </header>
  );
}
