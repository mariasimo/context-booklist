import React, { createContext } from "react";

export const ThemeContext = createContext();
const theme = {
  isLightTheme: true,
  light: {
    content: "#555",
    ui: "#ddd",
    bg: "#eee",
  },
  dark: {
    content: "#ddd",
    ui: "#333",
    bg: "#555",
  },
};

const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ ...theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
