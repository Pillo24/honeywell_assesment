import { useState } from "react";
import "./App.scss";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      errMessage:
        "Username should be 3-16 characters and should't include any special character",
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
      pattern: "^[A-Za-z0-9]{3,16}$",
      errMessage:
        "Password should contain at least 1 letter, 1 number and 1 special character",
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
    console.log("paso");
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
      <div className="box">
        <div className="form_container">
          <div className="form_container_title">Register</div>
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
        <div className="content_container">hola</div>
      </div>
    </div>
  );
}

export default App;
