/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { GridSystem, Wrap, zStack, Flex } from "@mojotech/mojo-ui";
import { motion } from "framer-motion";

import { useScrollPos } from "../lib/use-scroll-pos";

import Logo from "./Logo";

const headerVariants = {
  bottom: {
    translateY: -50,
    opacity: 0,
    transition: {
      translateY: { stiffness: 1000, velocity: -100 },
    },
  },
  top: {
    translateY: 0,
    opacity: 1,
    transition: {
      translateY: { stiffness: 1000 },
    },
  },
};

const Header: React.FC = () => {
  const scrollPos = useScrollPos();

  return (
    <Flex position="fixed" top={[24, "8vh"]} width="100%" zIndex={zStack.toast}>
      <GridSystem
        css={{
          pointerEvents: scrollPos === "bottom" ? "none" : "auto",
        }}
      >
        <Wrap gridColumn="1/-1" position="relative">
          <motion.div
            animate={scrollPos === "bottom" ? "bottom" : "top"}
            variants={headerVariants}
            css={{
              position: "absolute",
              left: 0,
              top: 0,
            }}
          >
            <Logo />
          </motion.div>
        </Wrap>
      </GridSystem>
    </Flex>
  );
};

export default Header;
