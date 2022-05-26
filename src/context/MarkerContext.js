import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_MARKER":
      return [...state, action.payload];
    case "MODIFY_POSITION":
      return state.map((item) => {
        item.draggable = false;
        if (item.id === action.payload) {
          item.draggable = true;
        }
        return item;
      });
    case "FIXED_POSITION":
      return state.map((item) => {
        item.draggable = false;

        return item;
      });

    case "REMOVE_ONE_MARKER":
      return [...state.filter((item) => item.draggable !== true)];
    case "REMOVE_ALL_MARKERS":
      return [];
    default:
      return state;
  }
};

const initialState = [];

const MarkerContext = createContext();

export const MarkerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    localStorage.setItem("localState", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    JSON.parse(localStorage.getItem("localState"));
  }, []);

  return (
    <MarkerContext.Provider value={{ dispatch, state, select, setSelect }}>
      {children}
    </MarkerContext.Provider>
  );
};

export const useMarker = () => useContext(MarkerContext);
