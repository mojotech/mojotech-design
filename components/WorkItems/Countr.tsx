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

const Countr: React.FC = () => {
  const [hover, toggleHover] = useCycle(false, true);

  return (
    <motion.div
      // @ts-ignore
      variants={workContainerVariants}
      animate={hover ? "open" : "closed"}
      onHoverStart={() => toggleHover()}
      onHoverEnd={() => toggleHover()}
      css={{
        background: "linear-gradient(#EC6080,#ED635A)",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Box left={[4, 5, 6]} top={[4, 5, 6]} zIndex={1} position="absolute">
        <Text fontSize={3} mb={2}>
          Countr
        </Text>
        <motion.div initial="closed" variants={workTextVariants}>
          <Text opacity={0} fontSize={1}>
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
          width="559px"
          height="504px"
          x="20"
          y="143"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/countr/feed@1x.webp 600w, /img/webp/work/countr/feed@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/countr/feed@1x.png 600w, /img/png/work/countr/feed@2x.png 800w"
              src="/img/png/work/countr/feed@2x.png"
            />
          </Image>
        </motion.foreignObject>
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          width="113px"
          height="226px"
          x="260"
          y="60"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/countr/phone-one@1x.webp 600w, /img/webp/work/countr/phone-one@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/countr/phone-one@1x.png 600w, /img/png/work/countr/phone-one@2x.png 800w"
              src="/img/png/work/countr/phone-one@2x.png"
            />
          </Image>
        </motion.foreignObject>
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          width="111px"
          height="226px"
          x="410"
          y="115"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/countr/phone-two@1x.webp 600w, /img/webp/work/countr/phone-two@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/countr/phone-two@1x.png 600w, /img/png/work/countr/phone-two@2x.png 800w"
              src="/img/png/work/countr/phone-two@2x.png"
            />
          </Image>
        </motion.foreignObject>
      </svg>
    </motion.div>
  );
};

export default Countr;
