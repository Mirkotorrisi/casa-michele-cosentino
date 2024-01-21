import { useEffect, useRef, useState } from "react";

const useScrollPosition = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const checkTargetPosition = () => {
    const rect = ref.current?.getBoundingClientRect();
    const fromTop = rect?.top || 1;
    const fraction = fromTop / window.innerHeight;
    const percentage = fraction * 100;
    setScrollPosition(percentage);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", checkTargetPosition, false);
    return () =>
      window.removeEventListener("scroll", checkTargetPosition, false);
  }, []);

  return { scrollPosition, ref };
};

export default useScrollPosition;
