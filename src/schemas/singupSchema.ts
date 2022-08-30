import * as Yup from "yup";

export const singUpSchema = Yup.object().shape({
  userName: Yup.string()
    .required("User Name is required")
    .min(6, "User Name must be at least 6 characters")
    .matches(
      /^[aA-zZ][0-9]+$/,
      "User Name should contain only alphabets or numbers without spaces."
    ),

  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])/,
      "Password should contain at least 1 lowercase and uppercase character, 1 numeric character and 1 speacial character"
    ),
  validation: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords does not match"),
});