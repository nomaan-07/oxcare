import heroImage from "../../../assets/hero.png";
import { Button } from "../../common/Button";
import { ButtonsWrapper } from "../../common/Buttons";
import { Container } from "../../common/Container";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          <div>
            <h2 className={styles.title}>
              We will help you to improve your mental health
            </h2>
            <p className={styles.description}>
              Evidence-based support designed to strengthen your resilience and
              improve your daily well-being.
            </p>
            <ButtonsWrapper>
              <Button variant="primary">Get Appointment</Button>
              <Button variant="secondary" hasBorder>
                Find Specialist
              </Button>
            </ButtonsWrapper>
          </div>
          <img className={styles.image} src={heroImage} alt="Hero" />
        </div>
      </Container>
    </div>
  );
}
