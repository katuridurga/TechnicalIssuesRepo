import {
  IS_MOBILE_CHECK
} from "../types.js";

export const handleMobileOrDesktop = isMobile => ({
  type: IS_MOBILE_CHECK,
  payload: isMobile
});
