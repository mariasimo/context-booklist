import { v4 as uuid } from "uuid";

export const initialState = [
  { title: "La pequeña oruga glotona", author: "Lorem ipsum", id: uuid() },
  { title: "El hombre que calculaba", author: "Lorem ipsum", id: uuid() },
  {
    title: "Cómo cortar un pastel y otros rompecabezas matemáticos",
    author: "Lorem ipsum",
    id: uuid(),
  },
];

export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const reducer = (state, action) => {
  if (action.type === ADD_BOOK) {
    const storedBooks = state ? state : [];
    return [...storedBooks, { ...action.payload }];
  }
  if (action.type === REMOVE_BOOK) {
    return state.filter((book) => book.id !== action.payload.id);
  }
  return state;
};
