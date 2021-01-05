import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initState = { isAuthenticated: true };

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const reducer = (state = initState, action) => {
  if (action.type === LOGIN) {
    return { isAuthenticated: true };
  }
  if (action.type === LOGOUT) {
    return { isAuthenticated: false };
  }
  return state;
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const logIn = () =>
    dispatch({
      type: LOGIN,
    });

  const logOut = () =>
    dispatch({
      type: LOGOUT,
    });

  const value = { ...state, logIn, logOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
