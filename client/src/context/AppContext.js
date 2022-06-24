import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import { getPosts } from '../actions/posts';
export const AppContext = createContext(null);
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();

  const handleSetUser = (value) => setUser(value)

  useEffect(() => {
    dispatch(getPosts());
  }, []);

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
