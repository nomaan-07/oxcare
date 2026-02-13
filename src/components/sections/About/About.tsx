import { Container } from "../../common/Container";
import { SectionHeader } from "../../common/sectionHeader";
import styles from "./About.module.css";

import aboutImage from "../../../assets/about.png";
import { FeaturesCards } from "./components/AboutCards/FeaturesCards";

export function About() {
  return (
    <section>
      <SectionHeader
        title="Why Should you take our services"
        description="Your well-being deserves thoughtful care, genuine understanding, and professional guidance tailored to your needs."
      />

      <Container>
        <div className={styles.wrapper}>
          <img className={styles.image} src={aboutImage} alt="About Us" />
          <FeaturesCards />
        </div>
      </Container>
    </section>
  );
}
