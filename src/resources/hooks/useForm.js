import { useState } from 'react';

const useForm = () => {
  
  const initialState = {
    username: '',
    email: '',
    password: '',
    password2: ''
  };

  const [values, setValues] = useState(initialState); 
  const [errors, setErrors] = useState({});

  const handleChange = (e)=> {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

  return { 
        handleChange, 
        handleSubmit, 
        values, 
        errors 
    };
};

export default useForm;