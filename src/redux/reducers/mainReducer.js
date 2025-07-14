import {
  IS_MOBILE_CHECK
} from "../types.js";

const initialState = {
  isMobile: false
};

const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_MOBILE_CHECK:
      return { ...state, isMobile: payload };
    default:
      return state;
  }
};

export default mainReducer;
