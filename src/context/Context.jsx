import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [choice, setChoice] = useState("");

  return (
    <Context.Provider value={{ count, setCount, choice, setChoice }}>
      {children}
    </Context.Provider>
  );
};
