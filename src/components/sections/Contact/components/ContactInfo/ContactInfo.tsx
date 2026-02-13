import styles from "./ContactInfo.module.css";

import avatar1 from "../../../../../assets/avatars/avatar-1.png";
import avatar2 from "../../../../../assets/avatars/avatar-2.png";
import avatar3 from "../../../../../assets/avatars/avatar-3.png";

export function ContactInfo() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Need a doctors counseling?</h3>
      <p className={styles.subtitle}>Request a Call Back Today Now</p>
      <p className={styles.description}>
        Our doctors are ready to help you unlock the clarity you deserve,
        offering professional counseling tailored to your unique needs.
      </p>

      <div className={styles.status}>
        <div className={styles.avatarsWrapper}>
          <img src={avatar1} alt="Doctor" className={styles.avatar} />
          <img src={avatar2} alt="Doctor" className={styles.avatar} />
          <img src={avatar3} alt="Doctor" className={styles.avatar} />
        </div>
        <p className={styles.statusText}>
          Our Doctors are waiting for your service.
        </p>
      </div>
    </div>
  );
}
