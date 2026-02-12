import { useState } from "react";
import { Logo } from "../../../../common/Logo";
import { MobileMenu } from "./components/MobileMenu";
import { OpenButton } from "./components/OpenButton";
import styles from "./MobileHeader.module.css";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.wrapper}>
      <Logo />
      <OpenButton onClick={openMenu} />
      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </div>
  );
}
