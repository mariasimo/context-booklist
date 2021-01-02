import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default class Booklist extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ backgroundColor: theme.bg, color: theme.content }}
      >
        <ul>
          <li style={{ backgroundColor: theme.ui }}>Wuthering Heights</li>
          <li style={{ backgroundColor: theme.ui }}>Little Women</li>
          <li style={{ backgroundColor: theme.ui }}>The Great Gatsby</li>
        </ul>
      </div>
    );
  }
}
