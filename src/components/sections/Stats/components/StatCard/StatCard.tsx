import type { Stat } from "../../types";
import styles from "./StatCard.module.css";

type StatCardProps = Stat;

export function StatCard({ title, description, variant }: StatCardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
