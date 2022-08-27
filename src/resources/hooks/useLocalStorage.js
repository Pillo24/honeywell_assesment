import { useState, useEffect }  from 'react';

const useLocalStorage = (itemName, initialValue) => {
    const [item, setItem] = useState(initialValue);
  
    useEffect(()=>{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
        } else {
            parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
    }, []);
    
  
    const saveUser = (newItem) => {
        const stringifedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifedItem);
        setItem(newItem);
    }
  
    return{
      item, 
      saveUser,
    };
  }

  export default useLocalStorage;