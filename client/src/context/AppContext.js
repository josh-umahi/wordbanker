import React, { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext(null);
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const handleSetUser = (value) => setUser(value)

  return (
    <AppContext.Provider
      value={{
        user,
        handleSetUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
