/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import Link from "next/link";
import { Text, Flex } from "@mojotech/mojo-ui";

import Logo from "./Logo";

const Header: React.FC = () => (
  <Flex
    pos="absolute"
    jfc="space-between"
    top={[16, "8vh"]}
    px={3}
    left="50%"
    transform="translateX(-50%)"
    maxw={[0, 3]}
    w="100%"
  >
    <Logo />
    <Link href="/">
      <Flex ali="center" jfc="center" as="a" px={4} py={2} bgc="mojogreen">
        <Text as="span">Apply</Text>
      </Flex>
    </Link>
  </Flex>
);

export default Header;
