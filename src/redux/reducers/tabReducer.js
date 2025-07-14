import {
    SELECTED_TAB
  } from "../types.js";
  
  const initialState = {
    selectedTab: 0
  };
  
  const tabReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SELECTED_TAB:
        return { ...state, selectedTab: payload };
      default:
        return state;
    }
  };
  
  export default tabReducer;