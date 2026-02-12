import styles from "./CommentHeader.module.css";

import { Rating } from "../Rating";

interface CommentHeaderProps {
  image: string;
  author: string;
  date: string;
  rating: number;
}

export function CommentHeader({
  image,
  author,
  date,
  rating,
}: CommentHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <img src={image} alt={author} className={styles.avatar} />
        <div>
          <p className={styles.author}>{author}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>

      <Rating rating={rating} />
    </div>
  );
}
