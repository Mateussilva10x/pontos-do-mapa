import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";

import { wrapper, initialState } from "../utils/Reducer";

const MarkerContext = createContext();

export const MarkerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wrapper, initialState);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    dispatch({ type: "LOAD" });
  }, []);

  return (
    <MarkerContext.Provider value={{ dispatch, state, select, setSelect }}>
      {children}
    </MarkerContext.Provider>
  );
};

export const useMarker = () => useContext(MarkerContext);
