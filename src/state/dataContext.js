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

        if (Object.keys(validate).length === 0 && newItem > 4) {
          setOnSubmit(true);
        }
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

    const [isLogged, setIsLogged] = useState('');
    const [logginErrors, setLogginErrors] = useState({});

      const checkLoginPass = (value) => {     
        if(isLogged === value){    
          delete logginErrors.password
        } else {
          setLogginErrors({
            ...logginErrors,
            password:'This password does not match, try again'
          });
        }
      };

    const checkLoginMail = (value) => {
        const emailCheck = item.find(element => element.email === value);
        
        if(!!emailCheck){
          setIsLogged(emailCheck.password); 
          delete logginErrors.email;
        } else {
          setLogginErrors({
            ...logginErrors,
            email:'This email does not exist, register'
          });
        }
    };
  

    const validateLogin = (e)=> {
      const { name, value } = e.target;

      if( name === 'email') {
        checkLoginMail(value);
      }else if ( name === 'password') {
        checkLoginPass(value);
      }
    };

    const submitleLogin = (e)=> {
      e.preventDefault();

      setErrors(logginErrors);
      
      Object.keys(logginErrors).length === 0 && setOnSubmit(true);
   };

    useEffect(() => {
      if (Object.keys(errors).length === 0 && onSubmit) {
          console.log("SUCESS PAGE!!!")
      }
  },[errors]);

  return (
    <DataContext.Provider value={{
      setOnSuccess,
      handleChange, 
      handleSubmit,
      submitleLogin,
      validateLogin, 
      onSuccess,
      values, 
      errors,
      item
    }}>
      {children}
    </DataContext.Provider>
  )
}

export {DataContext, DataProvider};
