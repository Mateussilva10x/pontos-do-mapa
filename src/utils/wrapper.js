import { reducer } from "./Reducer";

export const wrapper = (state, action) => {
  const wrapperState = reducer(state, action);
  console.log(wrapperState);
  localStorage.setItem("localState", JSON.stringify(wrapperState));

  return wrapperState;
};
