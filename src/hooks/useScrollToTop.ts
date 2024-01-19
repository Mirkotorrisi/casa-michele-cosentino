import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, []);
};

export default useScrollToTop;
