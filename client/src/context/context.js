import { createContext, useState } from "react";

export const EventValues = createContext();

export const EventValuesContext = ({ children }) => {
  const [mode, setMode] = useState(false);
  const toggleTheme = (mode) => {
    if (mode === "false") {
      setMode(true);
      localStorage.setItem("mode", true);
    }
    if (mode === "true") {
      setMode(false);
      localStorage.setItem("mode", false);
    }
    if (mode === true || mode === false) {
      setMode(!mode);
      localStorage.setItem("mode", !mode);
    }
  };

  return (
    <EventValues.Provider value={{ toggleTheme, mode, setMode }}>
      {children}
    </EventValues.Provider>
  );
};
