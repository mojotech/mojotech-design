import * as React from "react";

type Hook = any;

const useMousePosition: Hook = () => {
  const ref = React.useRef<HTMLElement>();
  const [hover, setHover] = React.useState<boolean>(false);

  let [windowMousePosition, setWindowMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: MouseEvent) => {
    setWindowMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const enter = () => {
    setHover(true);
    console.log("enter");
  };

  const leave = () => {
    setHover(false);
  };

  React.useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseenter", enter);
      ref.current.addEventListener("mouseleave", leave);
    }
    if (hover) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (ref.current) {
        ref.current.removeEventListener("mouseenter", enter);
        ref.current.removeEventListener("mouseleave", leave);
      }
    };
  });

  return [windowMousePosition, hover, ref];
};

export default useMousePosition;
