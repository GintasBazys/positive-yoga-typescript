import { useMediaQuery } from "react-responsive";

export const smMobile = "(max-width: 24rem)"; //384px;
export const mobile = "(max-width: 30rem)";
export const tablet = "(max-width: 48rem)";

export const useQuery = () => ({
  isMobile: useMediaQuery({ query: mobile }),
  isTablet: useMediaQuery({ query: tablet }),
  issmMobile: useMediaQuery({ query: smMobile }),
});
