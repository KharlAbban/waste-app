import { createContext, useContext, useEffect, useState } from "react";

const CLERK_PUB_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!CLERK_PUB_KEY) throw new Error("Missing Clerk publishable key!");

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