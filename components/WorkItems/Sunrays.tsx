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

const Sunrays: React.FC = () => {
  const [hover, toggleHover] = useCycle(false, true);

  return (
    <motion.div
      // @ts-ignore
      variants={workContainerVariants}
      animate={hover ? "open" : "closed"}
      onHoverStart={() => toggleHover()}
      onHoverEnd={() => toggleHover()}
      css={{
        background: "#961B91",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box left={[4, 5, 6]} top={[4, 5, 6]} zIndex={1} position="absolute">
        <Text mb={3} fontSize={1}>
          Sunrays
        </Text>
        <motion.div initial="closed" variants={workTextVariants}>
          <Text fontSize={3}>TAG LIST</Text>
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
          width="512px"
          height="355px"
          x="45"
          y="290"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/sunrays/landing@1x.webp 600w, /img/webp/work/sunrays/landing@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/sunrays/landing@1x.png 600w, /img/png/work/sunrays/landing@2x.png 800w"
              src="/img/png/work/sunrays/landing@2x.png"
            />
          </Image>
        </motion.foreignObject>
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          width="243px"
          height="211px"
          x="176"
          y="32"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/sunrays/logo@1x.webp 600w, /img/webp/work/sunrays/logo@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/sunrays/logo@1x.png 600w, /img/png/work/sunrays/logo@2x.png 800w"
              src="/img/png/work/sunrays/logo@2x.png"
            />
          </Image>
        </motion.foreignObject>
      </svg>
    </motion.div>
  );
};

export default Sunrays;
