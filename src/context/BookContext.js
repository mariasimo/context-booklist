import React, { createContext, useReducer, useEffect } from "react";
import { v4 as uuid } from "uuid";

import {
  ADD_BOOK,
  REMOVE_BOOK,
  reducer,
  initialState,
} from "../reducer/BookReducer";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const storedBooks = JSON.parse(localStorage.getItem("books"));

  // Reducer uses a third parameter to overwrite initialState with an alt init state
  // In this case we use books from localstorage merged with books in initialState
  const [books, dispatch] = useReducer(reducer, initialState, () => [
    ...initialState,
    ...storedBooks,
  ]);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    const id = uuid();
    dispatch({ type: ADD_BOOK, payload: book, id });
  };

  const removeBook = (id) => {
    dispatch({ type: REMOVE_BOOK, payload: { id } });
  };

  const value = { books, addBook, removeBook };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export default BookContextProvider;
