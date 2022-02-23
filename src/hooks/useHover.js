import { useEffect, useState } from "react";

export const useHover = (ref) => {
  const [isHover, setIsHover] = useState(false);

  const onHover = () => setIsHover(true);
  const offHover = () => setIsHover(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const node = ref.current;

    node.addEventListener("mouseenter", onHover);
    node.addEventListener("mousemove", onHover);
    node.addEventListener("mouseleave", offHover);

    return () => {
      node.removeEventListener("mouseenter", onHover);
      node.removeEventListener("mousemove", onHover);
      node.removeEventListener("mouseleave", offHover);
    };
  }, []);

  return isHover;
};
