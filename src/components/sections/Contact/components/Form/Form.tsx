import { useState, type SyntheticEvent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Button } from "../../../../common/Button";
import { Input } from "../Input";
import styles from "./Form.module.css";

type DateType = Date | null;

export function Form() {
  const [startDate, setStartDate] = useState<DateType>(null);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.currentTarget;
    const formData = new FormData(target);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      date: startDate,
    };

    if (!data.name || !data.phone || !data.date) {
      Toast.fire({
        icon: "warning",
        title: "Please fill in all fields",
        color: "#000",
      });
      return;
    }

    console.log("form submitted", data);

    Toast.fire({
      title: "Request Sent!",
      text: `Thanks ${data.name}, we will call you shortly.`,
      icon: "success",
      color: "#000",
    });

    target.reset();
    setStartDate(null);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input placeholder="your name" name="name" />
      <Input placeholder="your phone number" name="phone" />

      <div className={styles.dateWrapper}>
        <DatePicker
          selected={startDate}
          onChange={(date: DateType) => setStartDate(date)}
          minDate={new Date()}
          placeholderText="Select a date"
          customInput={<Input name="date" placeholder="Select a date" />}
          dateFormat="dd/MM/yyyy"
          popperPlacement="bottom-start"
        />
      </div>

      <Button variant="primary" type="submit">
        Request now
      </Button>
    </form>
  );
}
