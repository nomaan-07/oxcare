import { Container } from "../../common/Container";
import { StatCard } from "./components/StatCard";
import styles from "./Stats.module.css";
import type { Stat } from "./types";

const stats: Stat[] = [
  { id: 1, title: "24/7", description: "Online Support", variant: "primary" },
  { id: 2, title: "100+", description: "Doctors", variant: "secondary" },
  { id: 3, title: "1M+", description: "Active Patients", variant: "primary" },
  { id: 4, title: "5M+", description: "interested", variant: "secondary" },
];

export function Stats() {
  return (
    <Container>
      <div className={styles.wrapper}>
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat}></StatCard>
        ))}
      </div>
    </Container>
  );
}
