import { useEffect, useState } from "react";

const useScrollStatus = () => {
  const [isScrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollStatus = window.scrollY > 10;
      setScrolling(scrollStatus);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return isScrolling
};

export default useScrollStatus;
