import React, { useEffect, useState } from "react";

const useIsMobile = () => {
  if (typeof window === "undefined") return;
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return isMobile;
};

export default useIsMobile;
