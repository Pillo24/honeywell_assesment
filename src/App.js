import { useState } from "react";
import "./App.scss";
import FormInput from "./components/FormInput";
import CanvasContainer from "./components/CanvasContainer";
import CompleteBox from "./components/CompleteBox";
import { motion } from "framer-motion";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [complete, setComplete] = useState(false);
  console.log(values);
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      errMessage:
        "Username should be 3-16 characters and should't include any special character or blank space",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errMessage: "Enter a valid email address",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errMessage:
        "Password should be 8 characters minimum and at least 1 capital letter, 1 number and 1 special character",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errMessage: "Password don't match",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setComplete(true);
  };

  const handleChange = (e) => {
    console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <div className="title">
        <strong>Sing up</strong> form
      </div>
      <motion.div
        className="box"
        initial={{ x: 200, rotate: [45] }}
        animate={{ x: 0, rotate: 0 }}
      >
        <div className="form_container">
          {/*<div className="form_container_title">Register</div>*/}
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                name={input.name}
                placeholder={input.placeholder}
                label={input.label}
                type={input.type}
                value={values[input.name]}
                onChange={handleChange}
                pattern={input.pattern}
                errMessage={input.errMessage}
                required={input.required}
              />
            ))}
            <button>Submit</button>
          </form>
        </div>
        <div className="right_site_container">
          <div className="quote_container">
            Register and meet with a product consultant to see how we can solve
            your exact needs
          </div>
          <CanvasContainer />
        </div>
      </motion.div>
      {complete ? <CompleteBox /> : null}
    </div>
  );
}

export default App;
