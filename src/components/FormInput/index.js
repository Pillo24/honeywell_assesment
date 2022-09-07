import { useState } from "react";
import styles from "./FormInput.module.scss";
import { motion } from "framer-motion";

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
      <label htmlFor={inputProps.name} className="label-name">
        {label}
      </label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />

      <motion.span
        animate={{
          x: [0, 5, -5, 5, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        {errMessage}
      </motion.span>
    </div>
  );
}
