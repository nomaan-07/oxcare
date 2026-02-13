import { Button } from "../../common/Button";
import { Container } from "../../common/Container";
import styles from "./Appointment.module.css";

export function Appointment() {
  return (
    <section>
      <Container>
        <div className={`${styles.wrapper} section`}>
          <h3 className={styles.title}>Need a doctor&apos;s counseling?</h3>
          <p className={styles.description}>
            Just make an appointment and motivated
          </p>
          <Button variant="black">Get Appointment</Button>
        </div>
      </Container>
    </section>
  );
}
