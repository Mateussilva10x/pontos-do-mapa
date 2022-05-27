import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { initialState } from "../utils/Reducer";
import { wrapper } from "../utils/wrapper";

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
