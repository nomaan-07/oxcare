import styles from "./Menu.module.css";

const items = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Appointment",
    link: "#appointment",
  },
  {
    name: "About US",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export function Menu() {
  return (
    <ul className={styles.menu}>
      {items.map((item) => (
        <li key={item.name}>
          <a href={item.link} className={styles.link}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
