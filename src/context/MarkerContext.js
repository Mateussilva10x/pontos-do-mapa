import { useContext, createContext, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "MODIFY":
      return state.map((item) => {
        item.draggable = false;
        if (item.id === action.payload) {
          item.draggable = true;
        }
        return item;
      });
    case "REMOVE":
      return [...state.filter((item) => item.draggable !== true)];
    case "REMOVE ALL":
      return [];
    default:
      return state;
  }
}

const initialState = [];

const MarkerContext = createContext();

export const MarkerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MarkerContext.Provider value={{ dispatch, state }}>
      {children}
    </MarkerContext.Provider>
  );
};

export const useMarker = () => useContext(MarkerContext);
