import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemedButton = ({ handleClick, children }) => {
  const { theme } = useTheme();

  return (
    <button
      style={{ backgroundColor: theme.bg, color: theme.content }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ThemedButton;
