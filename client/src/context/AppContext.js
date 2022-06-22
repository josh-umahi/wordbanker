import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import { getPosts } from '../actions/posts';
export const AppContext = createContext(null);
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <AppContext.Provider
      value={{
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
