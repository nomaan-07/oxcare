import styles from "./Button.module.css";

interface ButtonProps {
  variant: "primary" | "secondary" | "black";
  hasBorder?: boolean;
  children: React.ReactNode;
}

export function Button({ variant, hasBorder = false, children }: ButtonProps) {
  const classNames = `${styles.button} ${styles[variant]} ${hasBorder ? styles.border : ""}`;

  return <button className={classNames}>{children}</button>;
}
