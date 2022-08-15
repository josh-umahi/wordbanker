import React, { createContext, PropsWithChildren, useContext, useState } from "react";
import { User } from "../../types/User";
import { getLocalStorageProfile } from "../utils/localStorage";

type AppContextType = {
  user: User| null;
  //React.Dispatch<React.SetStateAction<User>>??
  handleSetUser: (user: User | null) => void;
} | null;
export const AppContext = createContext<AppContextType>(null);
export const useAppContext = () => useContext(AppContext);


// React.FC<PropsWithChildren> = React.FunctionComponent
// Using so we can access the children prop without any TS complaints
export const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const initialState = getLocalStorageProfile() as User | null;
  const [user, setUser] = useState(initialState);

  const handleSetUser = (value: User | null) => setUser(value);

  return (
    <AppContext.Provider
      value={{
        user,
        handleSetUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
