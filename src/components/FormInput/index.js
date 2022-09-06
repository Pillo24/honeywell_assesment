import { useState } from "react";
import styles from "./FormInput.module.scss";

export default function FormInput({
  label,
  onChange,
  errMessage,
  ...inputProps
}) {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={styles.input_container}>
      <label htmlFor="">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errMessage}</span>
    </div>
  );
}
