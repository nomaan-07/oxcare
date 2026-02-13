import styles from "./Column.module.css";

interface ColumnProps {
  children: React.ReactNode;
  title?: string;
}

export function Column({ children, title }: ColumnProps) {
  return (
    <div className={styles.column}>
      {title && <h4 className={styles.title}>{title}</h4>}
      {children}
    </div>
  );
}
