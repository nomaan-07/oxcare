import { forwardRef } from "react";
import styles from "./Input.module.css";

interface InputProps {
  type?: "text" | "date";
  name: string;
  placeholder: string;
  value?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add this
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", name, placeholder, value, onClick, onChange }, ref) => {
    return (
      <input
        ref={ref}
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        onChange={onChange} // 👈 Connect this here
        readOnly={type === "date"}
      />
    );
  },
);
