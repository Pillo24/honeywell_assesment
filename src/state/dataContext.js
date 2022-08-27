import React, {createContext, useState, useEffect} from 'react';
import validateInfo from '../state/validateInfo';
import useLocalStorage from '../resources/hooks/useLocalStorage';

const DataContext = createContext()

const initialState = {
    username: '',
    email: '',
    password: '',
    password2: ''
}; 

const DataProvider = ({children}) => {
    const {
        item, 
        saveUser, 
    } = useLocalStorage('USERS', []);

   const [values, setValues] = useState(initialState); 
   const [errors, setErrors] = useState({});
   const [onSubmit, setOnSubmit] = useState(false);
   const [onSuccess, setOnSuccess] = useState(false);


   const handleChange = (e)=> {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
      saveUser(values)
   };
   
      
    const handleSubmit = (e) => {
        e.preventDefault();

        const validate = validateInfo(values);
        setErrors(validate);

        setOnSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && onSubmit) {
            setOnSuccess(true);
        }
    },[errors]);

  return (
    <DataContext.Provider value={{
        onSuccess,
        setOnSuccess,
        handleChange, 
        handleSubmit, 
        values, 
        errors
    }}>
      {children}
    </DataContext.Provider>
  )
}

export {DataContext, DataProvider};
