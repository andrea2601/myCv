import { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducer";
import {
  EDIT_SIDEBAR_ACTIVE,
} from "./constants";

const defaultState = {
  sidebarIsActive: "about",
};

const Context = createContext(defaultState);

export const useCVContext = () => useContext(Context);

export default ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, defaultState);


  const editSidebarActive = async (value) => {
    dispatch({ type: EDIT_SIDEBAR_ACTIVE, payload: value });
  };

  const value = { state, editSidebarActive };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
