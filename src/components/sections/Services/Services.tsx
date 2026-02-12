import brainSimulationImage from "../../../assets/services/brain-simulation.png";
import counselingImage from "../../../assets/services/counseling.png";
import eyeMovementImage from "../../../assets/services/eye-movement.png";
import prescriptionMedicineImage from "../../../assets/services/prescription-medicine.png";
import supportGroupsImage from "../../../assets/services/support-groups.png";
import therapiesImage from "../../../assets/services/therapies.png";
import { Container } from "../../common/Container";
import { SectionHeader } from "../../common/sectionHeader";
import { ServiceCard } from "./components/ServiceCard";
import styles from "./Service.module.css";

const services = [
  {
    id: 1,
    image: counselingImage,
    title: "Counseling",
    description: "Personal guidance to help you manage stress and emotions.",
  },
  {
    id: 2,
    image: supportGroupsImage,
    title: "Support groups",
    description: "Connect with others and share experiences in a safe space.",
  },
  {
    id: 3,
    image: prescriptionMedicineImage,
    title: "Prescription medicine",
    description:
      "Medications prescribed by professionals for mental health care.",
  },
  {
    id: 4,
    image: therapiesImage,
    title: "Therapies",
    description: "Evidence-based approaches to improve mental well-being.",
  },
  {
    id: 5,
    image: brainSimulationImage,
    title: "Brain stimulation",
    description: "Advanced techniques to support recovery and brain function.",
  },
  {
    id: 6,
    image: eyeMovementImage,
    title: "Eye Movement",
    description: "Specialized therapy for trauma and emotional regulation.",
  },
];

export function Services() {
  return (
    <>
      <SectionHeader
        title="our services"
        description="Comprehensive care, compassionate support, and proven treatments. all designed to help you feel your best."
      />
      <Container>
        <div className={styles.wrapper}>
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Container>
    </>
  );
}
