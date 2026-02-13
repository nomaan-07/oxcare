import styles from "./FeaturesCards.module.css";

const features = [
  {
    id: 1,
    title: "Experience",
    description:
      "Our experienced professionals bring years of expertise and a strong understanding of the field to deliver reliable and effective results.",
  },
  {
    id: 2,
    title: "Commitment",
    description:
      "We are dedicated to our clients success, providing personalized solutions that meet their unique needs and expectations.",
  },
  {
    id: 3,
    title: "Facilities",
    description:
      "Our modern facilities create a comfortable and professional environment, equipped with the latest tools and amenities.",
  },
  {
    id: 4,
    title: "Relationships",
    description:
      "We build lasting relationships based on trust, communication, and genuine support throughout every step of the journey.",
  },
];

export function FeaturesCards() {
  return (
    <div className={styles.wrapper}>
      {features.map((feature) => (
        <div key={feature.id} className={styles.card}>
          <div className={styles.header}>
            <h4 className={styles.title}>{feature.title}</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <p className={styles.description}>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
