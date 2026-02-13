import styles from "./Button.module.css";

interface ButtonProps {
  variant: "primary" | "secondary" | "black";
  hasBorder?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit";
}

export function Button({
  variant,
  hasBorder = false,
  children,
  type = "button",
}: ButtonProps) {
  const classNames = `${styles.button} ${styles[variant]} ${hasBorder ? styles.border : ""}`;

  return (
    <button className={classNames} type={type}>
      {children}
    </button>
  );
}
