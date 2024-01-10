"use client"
import React, { createContext, useState, useContext } from "react";

type userContextType = {
  user:string,
  setUser:React.Dispatch<React.SetStateAction<string>>
}|undefined

export const UserContext = createContext<userContextType>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string>("");


  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;


export function useUserContext(){
  const context =useContext(UserContext);
  if(!context){
    throw new Error(
      "un auth"
    )
  }
  return context
}
