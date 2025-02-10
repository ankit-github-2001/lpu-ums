import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // localStorage.clear()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  },[]); 

  // console.log(data.employees)
  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
