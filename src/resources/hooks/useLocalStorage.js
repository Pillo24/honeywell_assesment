import { useState, useEffect }  from 'react';

const useLocalStorage = () => {
    const [item, setItem] = useState([]);
    const users = 'USERS';

    useEffect(()=>{
        const localStorageItem = localStorage.getItem(users);
        let parsedItem;
  
        if (!localStorageItem) {
            localStorage.setItem(users, JSON.stringify([]));
            parsedItem = [];
        } else {
            parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
    }, []);
    
  
    const saveUser = (newItem) => {
        const stringifedItem = JSON.stringify(newItem);
        localStorage.setItem(users, stringifedItem);
        setItem(newItem);
    }
  
    return{
      item, 
      saveUser,
    };
  }

  export default useLocalStorage;