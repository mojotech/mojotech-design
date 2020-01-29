import * as React from "react";
import { useViewportScroll } from "framer-motion";

export const useScrollPos = () => {
  const [scrollPos, setScrollPos] = React.useState<string>("top");
  const { scrollYProgress } = useViewportScroll();

  React.useEffect(() => {
    scrollYProgress.onChange(y => {
      y <= 0.0
        ? setScrollPos("top")
        : y >= 0.95
        ? setScrollPos("bottom")
        : setScrollPos("middle");
    });
  });

  return scrollPos;
};
