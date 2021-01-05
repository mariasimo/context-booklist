import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import useSetState from "../hooks/useSetState";

const defaultState = {
  author: "",
  title: "",
};
const AddBook = () => {
  const { addBook } = useContext(BookContext);
  const [book, setBook] = useSetState(defaultState);

  const handleChange = (e) => {
    setBook({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
    addBook(book);
    setBook(defaultState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={book.title}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Author
        <input
          type="text"
          name="author"
          value={book.author}
          required
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Add book" />
    </form>
  );
};

export default AddBook;
