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

const athleteVariants = {
  open: {
    x: 75,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  closed: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 65,
      damping: 10,
    },
  },
};

const UA: React.FC = () => {
  const [hover, toggleHover] = useCycle(false, true);

  return (
    <motion.div
      // @ts-ignore
      variants={workContainerVariants}
      animate={hover ? "open" : "closed"}
      onHoverStart={() => toggleHover()}
      onHoverEnd={() => toggleHover()}
      css={mq({
        backgroundColor: "#D7F8EF",
        position: "relative",
        gridColumnStart: [1, 1],
        gridColumnEnd: [1, 3],
        overflow: "hidden",
        width: "100%",
      })}
    >
      <Box left={[4, 5, 6]} top={[4, 5, 6]} zIndex={1} position="absolute">
        <Text fontSize={1} color="dark" mb={3}>
          Under Armour
        </Text>
        <motion.div initial="closed" variants={workTextVariants}>
          <Text color="dark" fontSize={3}>
            UI, UX, Front-End Development
          </Text>
        </motion.div>
      </Box>
      <svg
        css={{ "& img": { width: "100%", height: "100%" } }}
        width="100%"
        height="100%"
        viewBox="0 0 1200 661"
      >
        <motion.foreignObject
          initial="closed"
          variants={athleteVariants}
          height="642px"
          width="692px"
          x="510"
          y="24"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/ua/athlete@1x.webp 600w, /img/webp/work/ua/athlete@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/ua/athlete@1x.png 600w, /img/png/work/ua/athlete@2x.png 800w"
              src="/img/png/work/ua/athlete@2x.png"
            />
          </Image>
        </motion.foreignObject>
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          height="524px"
          width="689px"
          y="143"
          x="56"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/ua/order-form@1x.webp 600w, /img/webp/work/ua/order-form@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/ua/order-form@1x.png 600w, /img/png/work/ua/order-form@2x.png 800w"
              src="/img/png/work/ua/order-form@2x.png"
            />
          </Image>
        </motion.foreignObject>
        <motion.foreignObject
          initial="closed"
          variants={workImageVariants}
          height="91px"
          width="614px"
          y="253"
          x="196"
        >
          <Image as="picture">
            <source
              srcSet="/img/webp/work/ua/add-to-cart@1x.webp 600w, /img/webp/work/ua/add-to-cart@2x.webp 800w"
              type="image/webp"
            />
            <img
              srcSet="/img/png/work/ua/add-to-cart@1x.png 600w, /img/png/work/ua/add-to-cart@2x.png 800w"
              src="/img/png/work/ua/order-form@2x.png"
            />
          </Image>
        </motion.foreignObject>
      </svg>
    </motion.div>
  );
};

export default UA;
