/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { Box, Image, Text } from "@mojotech/mojo-ui";
import { motion, useCycle } from "framer-motion";

import {
  workContainerVariants,
  workTextVariants,
  workImageVariants,
} from "../../lib/animation-variants";

const Amica: React.FC = () => {
  const [hover, toggleHover] = useCycle(false, true);

  return (
    <motion.div
      // @ts-ignore
      variants={workContainerVariants}
      animate={hover ? "open" : "closed"}
      onHoverStart={() => toggleHover()}
      onHoverEnd={() => toggleHover()}
      css={{
        background: "#19B4A1",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Box left={[4, 5, 6]} top={[3, 5, 6]} zIndex={1} position="absolute">
        <Text fontSize={3} mb={2}>
          Amica
        </Text>
        <motion.div initial="closed" variants={workTextVariants}>
          <Text display={["none", "block"]} fontSize={1} opacity={0}>
            UI, UX, Front-End Development
          </Text>
        </motion.div>
      </Box>
      <svg
        width="100%"
        height="100%"
        css={{ "& img": { width: "100%", height: "100%" } }}
        viewBox="0 0 600 645"
      >
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          width="516px"
          height="538px"
          x="47"
          y="120"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/amica/dashboard@1x.webp 600w, /img/webp/work/amica/dashboard@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/amica/dashboard@1x.png 600w, /img/png/work/amica/dashboard@2x.png 800w"
              src="/img/png/work/amica/dashboard@2x.png"
            />
          </Image>
        </motion.foreignObject>
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          width="120px"
          height="241px"
          x="406"
          y="27"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/amica/landing@1x.webp 600w, /img/webp/work/amica/landing@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/amica/landing@1x.png 600w, /img/png/work/amica/landing@2x.png 800w"
              src="/img/png/work/amica/landing@2x.png"
            />
          </Image>
        </motion.foreignObject>
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          width="119px"
          height="239px"
          x="19"
          y="330"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/amica/pay@1x.webp 600w, /img/webp/work/amica/pay@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/amica/pay@1x.png 600w, /img/png/work/amica/pay@2x.png 800w"
              src="/img/png/work/amica/pay@2x.png"
            />
          </Image>
        </motion.foreignObject>
      </svg>
    </motion.div>
  );
};

export default Amica;
