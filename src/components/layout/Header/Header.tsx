import { Container } from "../../common/Container";
import DesktopHeader from "./components/DesktopHeader/DesktopHeader";
import { MobileHeader } from "./components/MobileHeader";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <DesktopHeader />
        <MobileHeader />
      </Container>
    </header>
  );
}
