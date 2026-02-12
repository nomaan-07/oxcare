import { Button } from "../../../../common/Button";
import { ButtonsWrapper } from "../../../../common/Buttons";
import { Logo } from "../../../../common/Logo";
import { Menu } from "../Menu";
import styles from "./DesktopHeader.module.css";

function DesktopHeader() {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Menu />
      <ButtonsWrapper>
        <Button variant="secondary">Login</Button>
        <Button variant="primary">signup</Button>
      </ButtonsWrapper>
    </div>
  );
}

export default DesktopHeader;
