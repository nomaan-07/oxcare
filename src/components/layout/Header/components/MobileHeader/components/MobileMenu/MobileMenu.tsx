import { Button } from "../../../../../../common/Button";
import { ButtonsWrapper } from "../../../../../../common/Buttons";
import { Logo } from "../../../../../../common/Logo";
import { Menu } from "../../../Menu";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      <div
        className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}
        onClick={onClose}
      >
        <header className={styles.header}>
          <Logo />
          <div className={styles.icon} onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </header>

        <Menu />
        <ButtonsWrapper>
          <Button variant="secondary" hasBorder>
            Login
          </Button>
          <Button variant="primary">signup</Button>
        </ButtonsWrapper>
      </div>

      {isOpen && (
        <div
          className={`${styles.overlay} ${styles.overlayOpen}`}
          onClick={onClose}
        ></div>
      )}
    </>
  );
}
