import styles from "./Links.module.css";

interface LinksProps {
  links: {
    title: string;
    href: string;
  }[];
}

export function Links({ links }: LinksProps) {
  return (
    <ul className={styles.links}>
      {links.map((link) => (
        <li key={link.title}>
          <a href={link.href} className={styles.link}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
