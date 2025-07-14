import {
    SELECTED_TAB
} from "../types.js";

export const selectedTab = index => ({
    type: SELECTED_TAB,
    payload: index
});