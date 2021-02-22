/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import Link from "next/link";
import { Flex, Button } from "@mojotech/mojo-ui";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

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
  const { pathname } = useRouter();

  return (
    <Flex
      pos="fixed"
      jfc="space-between"
      top={[16, "8vh"]}
      px={3}
      left="50%"
      transform="translateX(-50%)"
      maxw={[0, 3]}
      w="100%"
      zIndex={1}
      css={{
        pointerEvents: scrollPos === "bottom" ? "none" : "auto",
      }}
    >
      <motion.div
        animate={scrollPos === "bottom" ? "bottom" : "top"}
        variants={headerVariants}
      >
        <Logo />
      </motion.div>
      <motion.div
        animate={scrollPos === "bottom" ? "bottom" : "top"}
        variants={headerVariants}
      >
        <Link href="/hiring/">
          <Button paddingX={4} css={{ opacity: pathname === "/" ? 1 : 0 }}>
            Join the team
          </Button>
        </Link>
      </motion.div>
    </Flex>
  );
};

export default Header;
