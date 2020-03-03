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

const Dockwa: React.FC = () => {
  const [hover, toggleHover] = useCycle(false, true);

  return (
    <motion.div
      // @ts-ignore
      variants={workContainerVariants}
      animate={hover ? "open" : "closed"}
      onHoverStart={() => toggleHover()}
      onHoverEnd={() => toggleHover()}
      css={{
        backgroundColor: "#285AA6",
        backgroundImage: "url('/img/png/work/dockwa/background@2x.png')",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box left={[4, 5, 6]} top={[4, 5, 6]} zIndex={1} position="absolute">
        <Text mb={2} fontSize={3}>
          Dockwa
        </Text>
        <motion.div initial="closed" variants={workTextVariants}>
          <Text fontSize={1} opacity={0}>
            UI, UX, Concept
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
          width="318px"
          height="524px"
          x="130"
          y="140"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/dockwa/phone@1x.webp 600w, /img/webp/work/dockwa/phone@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/dockwa/phone@1x.png 600w, /img/png/work/dockwa/phone@2x.png 800w"
              src="/img/png/work/dockwa/phone@2x.png"
            />
          </Image>
        </motion.foreignObject>
      </svg>
    </motion.div>
  );
};

export default Dockwa;
