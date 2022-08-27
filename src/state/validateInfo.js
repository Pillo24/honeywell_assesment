const validateInfo = (values) => {
    let errors = {};

    const username_RGX = /^[a-z]+$/i;
    const email_RGX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    const password_RGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/i;
    

    if (!values.username) {
      errors.username = 'Username required';
    } else if(!username_RGX.test(values.username)){
      console.log('Enter a valid name' ); //true
      errors.username = 'Enter a valid name';
    }

  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!email_RGX.test(values.email)) {
      errors.email = 'Email address is invalid';
    }


    if (!values.password) {
      errors.password = 'Password is required';
    } else if (!password_RGX.test(values.password)) {
      errors.password = 'Password needs to be min 8 characters characters, at least 1 numeric character, at least 1 lowercase letter, at least 1 uppercase letter, at least 1 special character';
    }
  

    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }

  export default validateInfo;