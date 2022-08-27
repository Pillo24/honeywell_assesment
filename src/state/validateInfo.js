const validateInfo = (values) => {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
      errors.name = 'Enter a valid name';
    }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(values.password)) {
      errors.password = 'Password needs to be 8 characters or more, at least 8 characters, at least 1 numeric character, at least 1 lowercase letter, at least 1 uppercase letter, at least 1 special character';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }

  export default validateInfo;