import * as React from "react";

type Hook = any;

const useMousePosition: Hook = () => {
  const ref = React.useRef<HTMLElement>();
  const [hover, setHover] = React.useState<boolean>(false);

  const [windowMousePosition, setWindowMousePosition] = React.useState({
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
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", enter);
      node.addEventListener("mouseleave", leave);
    }
    if (hover) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (node) {
        node.removeEventListener("mouseenter", enter);
        node.removeEventListener("mouseleave", leave);
      }
    };
  });

  return [windowMousePosition, hover, ref];
};

export default useMousePosition;
