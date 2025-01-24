"use client";

import { me } from "@/actions/auth";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginContext = (user) => {
      setUser(user)
      console.log(user);
  }

  useEffect(()=>{
    const checkLoginUser = async ()=> {
        const data = await me()
        if(data?.error){
            setUser(null)
        }else{
            setUser(data.user)
        }

    } 

    checkLoginUser()
  },[])



  return ( <AuthContext.Provider value={{user,loginContext}}>
              {children}
            </AuthContext.Provider>
  )
};

export default AuthContext