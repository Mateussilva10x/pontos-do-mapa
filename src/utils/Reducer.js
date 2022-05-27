export const reducer = (state, action) => {
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

export const initialState = [];
