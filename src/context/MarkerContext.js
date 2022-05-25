import { useContext, createContext, useReducer, useState } from "react";

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
    case "REMOVE_ALL":
      return [];
    default:
      return state;
  }
}

const initialState = [];

const MarkerContext = createContext();

export const MarkerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [select, setSelect] = useState(null);

  return (
    <MarkerContext.Provider value={{ dispatch, state, select, setSelect }}>
      {children}
    </MarkerContext.Provider>
  );
};

export const useMarker = () => useContext(MarkerContext);
