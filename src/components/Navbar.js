import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import Button from "./ThemedButton";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const { isAuthenticated, logIn, logOut } = useContext(AuthContext);

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: theme.ui, color: theme.content }}
    >
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <Button handleClick={toggleTheme}>Toggle theme</Button>
        </li>
        <li>
          {isAuthenticated ? (
            <Button handleClick={logOut}>Log Out</Button>
          ) : (
            <Button handleClick={logIn}>Log In</Button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
