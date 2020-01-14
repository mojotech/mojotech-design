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

const Fasset: React.FC = () => {
  const [hover, toggleHover] = useCycle(false, true);

  return (
    <motion.div
      // @ts-ignore
      variants={workContainerVariants}
      animate={hover ? "open" : "closed"}
      onHoverStart={() => toggleHover()}
      onHoverEnd={() => toggleHover()}
      css={{
        background: "#162933",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box left={[4, 5, 6]} top={[4, 5, 6]} zIndex={1} position="absolute">
        <Text mb={3} fontSize={1}>
          Fasset
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
          width="586px"
          height="434px"
          x="0"
          y="140"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/fasset/laptop@1x.webp 600w, /img/webp/work/fasset/laptop@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/fasset/laptop@1x.png 600w, /img/png/work/fasset/laptop@2x.png 800w"
              src="/img/png/work/fasset/laptop@2x.png"
            />
          </Image>
        </motion.foreignObject>
      </svg>
    </motion.div>
  );
};

export default Fasset;
