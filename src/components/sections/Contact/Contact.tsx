import { Container } from "../../common/Container";
import { ContactInfo } from "./components/ContactInfo";
import { Form } from "./components/Form";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section>
      <Container>
        <div className={`${styles.wrapper} section`}>
          <ContactInfo />
          <Form />
        </div>
      </Container>
    </section>
  );
}
