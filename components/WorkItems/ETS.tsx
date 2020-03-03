/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { Box, Text, Image } from "@mojotech/mojo-ui";
import { motion, useCycle } from "framer-motion";

import {
  workContainerVariants,
  workTextVariants,
  workImageVariants,
} from "../../lib/animation-variants";

const ETS: React.FC = () => {
  const [hover, toggleHover] = useCycle(false, true);

  return (
    <motion.div
      // @ts-ignore
      variants={workContainerVariants}
      animate={hover ? "open" : "closed"}
      onHoverStart={() => toggleHover()}
      onHoverEnd={() => toggleHover()}
      css={{
        background: "linear-gradient(#CFB895,#9B6E4E)",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Box left={[4, 5, 6]} top={[4, 5, 6]} zIndex={1} position="absolute">
        <Text fontSize={3} mb={2}>
          ETS
        </Text>
        <motion.div initial="closed" variants={workTextVariants}>
          <Text fontSize={1} opacity={0}>
            UI, UX, Front-End Development, Branding
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
          width="384px"
          height="505px"
          x="50"
          y="143"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/ets/landing@1x.webp 600w, /img/webp/work/ets/landing@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/ets/landing@1x.png 600w, /img/png/work/ets/landing@2x.png 800w"
              src="/img/png/work/ets/landing@2x.png"
            />
          </Image>
        </motion.foreignObject>
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          width="119px"
          height="505px"
          x="481"
          y="143"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/ets/contact@1x.webp 600w, /img/webp/work/ets/contact@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/ets/contact@1x.png 600w, /img/png/work/ets/contact@2x.png 800w"
              src="/img/png/work/ets/contact@2x.png"
            />
          </Image>
        </motion.foreignObject>
      </svg>
    </motion.div>
  );
};
export default ETS;
