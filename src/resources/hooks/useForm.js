import { useState, useEffect } from 'react';

const useForm = (callback, validateInfo) => {
  
  const initialState = {
    username: '',
    email: '',
    password: '',
    password2: ''
  };

  const [values, setValues] = useState(initialState); 
  const [errors, setErrors] = useState({});
  const [onSubmit, setOnSubmit] = useState(false);

  const handleChange = (e)=> {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateInfo(values));
    setOnSubmit(true);
  };

  useEffect(() => {
      if (Object.keys(errors).length === 0 && onSubmit) {
        callback();
      }
    },[errors]);

  return { 
        handleChange, 
        handleSubmit, 
        values, 
        errors 
    };
};

export default useForm;