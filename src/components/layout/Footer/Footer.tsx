import { Container } from "../../common/Container";
import { Logo } from "../../common/Logo";
import { Column } from "./components/Column";
import { Links } from "./components/Links";
import { Socials } from "./components/Socials";
import styles from "./Footer.module.css";

const quickLinks = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Doctors",
    href: "#",
  },
  {
    title: "Services",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];

const servicesLinks = [
  {
    title: "Vaccination",
    href: "#",
  },
  {
    title: "NDD",
    href: "#",
  },
  {
    title: "Prescription",
    href: "#",
  },
  {
    title: "Patient Referral",
    href: "#",
  },
  {
    title: "Other roofing",
    href: "#",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} section`}>
      <Container>
        <div className={styles.wrapper}>
          <Column>
            <Logo />
            <div>
              <p className={styles.description}>
                Providing expert medical counseling and professional healthcare
                services to help you lead a healthier life.
              </p>
              <Socials />
            </div>
          </Column>

          <Column title="Quick Links">
            <Links links={quickLinks} />
          </Column>

          <Column title="Services">
            <Links links={servicesLinks} />
          </Column>

          <Column title="location">
            <p className={styles.locationText}>
              2972 Westheimer Rd.
              <br />
              Santa Ana, Illinois
              <br />
              85486
            </p>
          </Column>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {currentYear} All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
}
