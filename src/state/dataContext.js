import React, {createContext, useState, useEffect} from 'react';
import validateInfo from '../state/validateInfo';
import useLocalStorage from '../resources/hooks/useLocalStorage';

const DataContext = createContext()

const DataProvider = ({children}) => {
   const { item, saveUser } = useLocalStorage('USERS', []);

   const [newUser, setNewUser] = useState({}); 
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

        if (Object.keys(newUser).length === 4) {
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
    const [access, setAccess] = useState({});

      const checkLoginPass = (value) => {     
        if(isLogged === value){    
          delete logginErrors.password;
          setAccess({...access,password: true});
        } else {
          setAccess({...access,password: false});
          setLogginErrors({
            ...logginErrors,
            password:'Incorrect password, try again'
          });
        }
      };

    const checkLoginMail = (value) => {
        const emailCheck = item.find(element => element.email === value);

        if(!!emailCheck){
          setIsLogged(emailCheck.password); 
          setAccess({...access,name: true});
          delete logginErrors.email;
        } else {
          setAccess({...access,name: false});
          setLogginErrors({
            ...logginErrors,
            email:'This email does not exist'
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

      if(access.name === true && access.password === true){
        setOnSubmit(true);
      }
   };

    useEffect(() => {
      if (Object.keys(errors).length === 0 && onSubmit) {
          console.log("SUCESS PAGE!!!")
          setOnSuccess(true);
      }
  },[errors]);

  const [view, setView] = useState(false);

  const [palette, setPalette] = useState(true);

  return (
    <DataContext.Provider value={{
      setOnSuccess,
      handleChange, 
      handleSubmit,
      submitleLogin,
      validateLogin, 
      setView,
      setPalette,
      view, 
      onSuccess,
      values, 
      errors,
      item,
      palette
    }}>
      {children}
    </DataContext.Provider>
  )
}

export {DataContext, DataProvider};
