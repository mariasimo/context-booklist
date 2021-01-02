import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ backgroundColor: theme.ui, color: theme.content }}>
        <h1>Context</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
