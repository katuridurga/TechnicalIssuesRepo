import {
    SELECTED_QUOTE
} from "../types.js";

export const selectedQuote = quote => ({
    type: SELECTED_QUOTE,
    payload: quote
});