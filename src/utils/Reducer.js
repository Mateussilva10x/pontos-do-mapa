const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MARKER":
      return [...state, action.payload];

    case "ENABLE_MARKER":
      return state.map((marker) => {
        marker.draggable = false;
        if (marker.id === action.payload) {
          marker.draggable = true;
        }
        return marker;
      });

    case "DISABLE_MARKER":
      return state.map((marker) => {
        marker.draggable = false;
        if (marker.id === action.payload.id) {
          marker.lat = action.payload.latMarker;
          marker.lng = action.payload.lngMarker;
        }
        return marker;
      });

    case "REMOVE_ONE_MARKER":
      return [...state.filter((marker) => marker.draggable !== true)];

    case "REMOVE_ALL_MARKERS":
      return [];
    case "LOAD":
      return JSON.parse(localStorage.getItem("localState")) || initialState;
    default:
      return state;
  }
};

export const initialState = [];

export const wrapper = (state, action) => {
  const wrapperState = reducer(state, action);
  console.log(wrapperState);
  localStorage.setItem("localState", JSON.stringify(wrapperState));

  return wrapperState;
};
