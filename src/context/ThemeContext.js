import React, { createContext, useReducer, useContext, useMemo } from "react";

export const ThemeContext = createContext();
const defaultTheme = {
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

const TOGGLE_THEME = "TOGGLE_THEME";

const reducer = (state = defaultTheme, action) => {
  if (action.type === TOGGLE_THEME) {
    return { ...state, isLightTheme: !state.isLightTheme };
  }
  return state;
};

const ThemeContextProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(reducer, defaultTheme);

  const value = useMemo(() => {
    return { ...theme, dispatch };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme must be used within a ThemeContextProvider");

  const { isLightTheme, dark, light, dispatch } = context;
  const theme = isLightTheme ? light : dark;

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  return { theme, toggleTheme };
};

export { ThemeContextProvider, useTheme };
