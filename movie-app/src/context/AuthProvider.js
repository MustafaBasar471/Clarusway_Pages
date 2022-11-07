import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
