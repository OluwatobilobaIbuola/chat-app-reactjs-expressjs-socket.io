import React, { useContext, useEffect } from "react";
import { Pages } from "./Layout";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyled } from "./Components/styles/GlobalStyled";
import { EventValues } from "./context/context";
import { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const { setMode, mode } = useContext(EventValues);
  const theme = {
    primary: "#702963",
    themeMode: mode === true || mode === "true" ? "#0d1117" : "#c9d1d9",
    themeModeTwo: mode === true || mode === "true" ? "#27272a" : "#e0e0e0",
    themeModeThree: mode === true || mode === "true" ? "#111" : "#d4d4d8",
    modeReverse: mode === true || mode === "true" ? "#c9d1d9" : "#0d1117",
    modeReverseTwo: mode === true || mode === "true" ? "#e0e0e0" : "#4a5964",
    modeReverseThree: mode === true || mode === "true" ? "#d4d4d8" : "#111",
    textMain: mode === true || mode === "true" ? "#c9d1d9" : "#24292f",
    secondary: "#18615b",
  };

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode) {
      setMode(mode.toLowerCase());
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyled />
        <Pages />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
