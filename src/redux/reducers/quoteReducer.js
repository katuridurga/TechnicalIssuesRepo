import {
    SELECTED_QUOTE
  } from "../types.js";
  
  const initialState = {
    selectedQuote: null
  };
  
  const quoteReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SELECTED_QUOTE:
        return { ...state, selectedQuote: payload };
      default:
        return state;
    }
  };
  
  export default quoteReducer;