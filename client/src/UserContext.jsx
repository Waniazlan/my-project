import {createContext, useEffect, useState} from "react";
import axios from "axios"


export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
  const [ready, setReady] = useState(null);
 
 useEffect(() =>{
    if(!user){
      axios.get('/login').then(({data}) =>{
        setUser(data);
        setReady(true);
      });
    }
 },[])


  return (
    <UserContext.Provider value={{user, setUser,ready}}>
      {children}
    </UserContext.Provider>
  );
}