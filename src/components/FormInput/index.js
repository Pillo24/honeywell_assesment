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
  const [passwordHidden, setPasswordHidden] = useState(true);

  const handleFocus = (e) => {
    setFocused(true);
  };

  const handleEyeClick = () => {
    setPasswordHidden(!passwordHidden);
  };
  return (
    <div className={styles.input_container}>
      <label htmlFor={inputProps.name} className="label-name">
        {label}
        {inputProps.name === "password" ? (
          <img
            onClick={handleEyeClick}
            className={styles.icono_ocultar_password}
            src="./static/images/eye.png"
            alt="eye"
          />
        ) : null}
      </label>
      <input
        {...inputProps}
        type={passwordHidden ? inputProps.type : "text"}
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
