import { useContext, createContext, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((item) => item.id !== state.id);
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
