import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext(undefined);

export const useAuthContext = () => {
  const user = useContext(AuthContext);

  if (user === undefined) throw new Error("useAuthContext must be used within an AuthContext!");

  return user;
}


const GlobalProvider = ({children}) => {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
      <AuthContext.Provider value={user}>
        {children}
      </AuthContext.Provider>
  )
}

export default GlobalProvider