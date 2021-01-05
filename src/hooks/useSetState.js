import { useReducer } from "react";

const reducer = (previousState, newState) => {
  return { ...previousState, ...newState };
};
const useSetState = (defaultState) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const setState = (newState) => dispatch(newState);
  return [state, setState];
};

export default useSetState;
