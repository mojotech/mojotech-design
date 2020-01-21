/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { Box,Text } from "@mojotech/mojo-ui";
import { motion } from "framer-motion";
import useMousePosition from "../../lib/use-mouse-pos";

interface Props {
  title: string;
  copy: string;
  gif: string[];
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

const Value: React.FC<Props> = props => {
  const [mousePos, active, ref] = useMousePosition();
  const imageRef = React.useRef<any>(null);
  const [gif, setGif] = React.useState(0)

  const variants = {
    active: {
      opacity: 0.6,
      transition: {
          duration: 0,
      },
    },
    disabled: {
      opacity: 0,
      transition: {
          duration: 0,
      },
    },
  };

  React.useEffect(() => {
    setGif(getRandomInt(0, props.gif.length))
  }, [active])

  return (
    <div css={{ position: "relative" }} ref={ref}>
      <Box paddingRight={4} paddingBottom={4} position="relative" zIndex={3}>
        <Text fontSize={3}>{props.title}</Text>
        <Text>{props.copy}</Text>
      </Box>
      <motion.img
        ref={imageRef}
        style={{
          x: mousePos.x - (ref.current?.getBoundingClientRect().left),
          y: mousePos.y - (ref.current?.getBoundingClientRect().top)}}
        initial={"disabled"}
        animate={active ? "active" : "disabled"}
        variants={variants}
        css={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
        src={props.gif[gif]}
      />
    </div>
  );
};

export default Value;
