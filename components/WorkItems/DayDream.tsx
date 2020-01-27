/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { Box, Image, Text } from "@mojotech/mojo-ui";
import { motion, useCycle } from "framer-motion";

import { mq } from "../../lib/utils";

import {
  workContainerVariants,
  workTextVariants,
  workImageVariants,
} from "../../lib/animation-variants";

const DayDream: React.FC = () => {
  const [hover, toggleHover] = useCycle(false, true);

  return (
    <motion.div
      // @ts-ignore
      variants={workContainerVariants}
      animate={hover ? "open" : "closed"}
      onHoverStart={() => toggleHover()}
      onHoverEnd={() => toggleHover()}
      css={mq({
        background: "linear-gradient(15deg, #2453E7, #E0E6FD)",
        position: "relative",
        gridColumnStart: [1, 1],
        gridColumnEnd: [1, 3],
        overflow: "hidden",
        width: "100%",
      })}
    >
      <Box left={[4, 5, 6]} top={[4, 5, 6]} zIndex={1} position="absolute">
        <Text fontSize={1} mb={2}>
          DayDream
        </Text>
        <motion.div initial="closed" variants={workTextVariants}>
          <Text fontSize={3}>TAG LIST</Text>
        </motion.div>
      </Box>
      <svg
        width="100%"
        height="100%"
        css={{ "& img": { width: "100%", height: "100%" } }}
        viewBox="0 0 1200 661"
      >
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          width="837px"
          height="605px"
          x="420"
          y="55"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/daydream/abstract@1x.webp 600w, /img/webp/work/daydream/abstract@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/daydream/abstract@1x.png 600w, /img/png/work/daydream/abstract@2x.png 800w"
              src="/img/png/work/daydream/abstract@2x.png"
            />
          </Image>
        </motion.foreignObject>
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          width="307px"
          height="567px"
          x="20"
          y="90"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/daydream/phone-one@1x.webp 600w, /img/webp/work/daydream/phone-one@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/daydream/phone-one@1x.png 600w, /img/png/work/daydream/phone-one@2x.png 800w"
              src="/img/png/work/daydream/phone-one@2x.png"
            />
          </Image>
        </motion.foreignObject>
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          width="307px"
          height="567px"
          x="315"
          y="90"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/daydream/phone-two@1x.webp 600w, /img/webp/work/daydream/phone-two@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/daydream/phone-two@1x.png 600w, /img/png/work/daydream/phone-two@2x.png 800w"
              src="/img/png/work/daydream/phone-two@2x.png"
            />
          </Image>
        </motion.foreignObject>
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          width="307px"
          height="567px"
          x="610"
          y="90"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/daydream/phone-three@1x.webp 600w, /img/webp/work/daydream/phone-three@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/daydream/phone-three@1x.png 600w, /img/png/work/daydream/phone-three@2x.png 800w"
              src="/img/png/work/daydream/phone-three@2x.png"
            />
          </Image>
        </motion.foreignObject>
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          width="307px"
          height="567px"
          x="900"
          y="90"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/daydream/phone-four@1x.webp 600w, /img/webp/work/daydream/phone-four@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/daydream/phone-four@1x.png 600w, /img/png/work/daydream/phone-four@2x.png 800w"
              src="/img/png/work/daydream/phone-four@2x.png"
            />
          </Image>
        </motion.foreignObject>
      </svg>
    </motion.div>
  );
};

export default DayDream;
