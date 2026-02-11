import styles from "./ButtonsWrapper.module.css";

interface ButtonsWrapperProps {
  children: React.ReactNode;
}

export function ButtonsWrapper({ children }: ButtonsWrapperProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
