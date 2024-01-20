import { useRef } from "react";

const NAVBAR_HEIGHT = 104;

const useScrollToRef = () => {
  const ref = useRef<HTMLElement | null>(null);

  const scrollToSection = () => {
    if (typeof window !== "undefined" && ref.current)
      window.scrollTo({
        top: ref.current.offsetTop - NAVBAR_HEIGHT,
        behavior: "smooth",
      });
  };
  return { ref, scrollToSection };
};

export default useScrollToRef;
