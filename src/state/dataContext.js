import React, {createContext, useState, useEffect} from 'react';
import validateInfo from '../state/validateInfo';
import useLocalStorage from '../resources/hooks/useLocalStorage';

const DataContext = createContext()

const userData = {
    username: '',
    email: '',
    password: '',
    password2: '',
}; 

const DataProvider = ({children}) => {
    const { item, saveUser } = useLocalStorage('USERS', []);

   const [newUser, setNewUser] = useState(userData); 
   const [values, setValues] = useState([]); 

   const [errors, setErrors] = useState({});
   const [onSubmit, setOnSubmit] = useState(false);
   const [onSuccess, setOnSuccess] = useState(false);

   const handleChange = (e)=> {
      const { name, value } = e.target;
      setNewUser({
        ...newUser,
        [name]: value
      });
   };
      
    const handleSubmit = (e) => {
        e.preventDefault();

        const validate = validateInfo(newUser);
        setErrors(validate);

        const newItem = [...item]
        !!item && setValues([...newItem, newUser]);

        setOnSubmit(true);
    };

    useEffect(()=> {
        console.log("LocalStorage",item);
    },[item]);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && onSubmit) {
            setOnSuccess(true);
            saveUser(values);
        }
    },[errors]);

  return (
    <DataContext.Provider value={{
        onSuccess,
        setOnSuccess,
        handleChange, 
        handleSubmit, 
        values, 
        errors,
        item
    }}>
      {children}
    </DataContext.Provider>
  )
}

export {DataContext, DataProvider};
