import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const useUsers = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const [IsDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  
  useEffect(() => {
    console.log("Current Dark Mode State:", IsDarkMode);
  }, [IsDarkMode]);

  useEffect(()=>{
    console.log("Users List", users);
  },[users])
  return (
    <UserContext.Provider value={{ users, addUser, IsDarkMode, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
};
