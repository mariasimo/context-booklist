import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { useTheme } from "../context/ThemeContext";
import AddBook from "./AddBook";

function Booklist() {
  const { theme } = useTheme();
  const { books, removeBook } = useContext(BookContext);

  return (
    <section
      className="book-list"
      style={{ backgroundColor: theme.bg, color: theme.content }}
    >
      {books.length ? (
        <ul>
          {books.map((book) => (
            <li key={book.id} style={{ backgroundColor: theme.ui }}>
              {book.title} - {book.author}
              <button onClick={() => removeBook(book.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : null}

      <AddBook />
    </section>
  );
}

export default Booklist;
