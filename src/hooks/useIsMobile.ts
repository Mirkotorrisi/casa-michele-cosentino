import { useEffect, useState } from "react";

const useIsMobile = () => {
  if (typeof window === "undefined") return {};
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("resize", handleWindowSizeChange);
    setIsMounted(true);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return { isMobile, isMounted };
};

export default useIsMobile;
