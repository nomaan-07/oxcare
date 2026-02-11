import { Container } from "../../common/Container";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>header</Container>
    </header>
  );
}
