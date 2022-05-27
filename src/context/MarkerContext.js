import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MARKER":
      return [...state, action.payload];

    case "ENABLE_MARKER":
      return state.map((item) => {
        item.draggable = false;
        if (item.id === action.payload) {
          item.draggable = true;
        }
        return item;
      });

    case "DISABLE_MARKER":
      return state.map((item) => {
        item.draggable = false;
        if (item.id === action.payload.id) {
          item.lat = action.payload.latMarker;
          item.lng = action.payload.lngMarker;
        }
        return item;
      });

    case "REMOVE_ONE_MARKER":
      return [...state.filter((item) => item.draggable !== true)];

    case "REMOVE_ALL_MARKERS":
      return [];
    case "LOAD":
      return JSON.parse(localStorage.getItem("localState")) || initialState;
    default:
      return state;
  }
};
const wrapper = (state, action) => {
  const wrapperState = reducer(state, action);
  console.log(wrapperState);
  localStorage.setItem("localState", JSON.stringify(wrapperState));

  return wrapperState;
};

const initialState = [];

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
