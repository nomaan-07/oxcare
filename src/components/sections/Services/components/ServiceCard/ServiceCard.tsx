import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export function ServiceCard({ image, title, description }: ServiceCardProps) {
  return (
    <div className={`${styles.card} gradient-border`}>
      <div className={styles.wrapper}>
        <img src={image} alt={title} className={styles.image} />
        <div>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
