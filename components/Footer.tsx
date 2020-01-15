/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { Box, Flex, TextLink } from "@mojotech/mojo-ui";
import Logo from "./Logo";

const Footer: React.FC = () => (
  <Box background="#1A1723" as="footer">
    <Flex
      flexDirection={["column", "row"]}
      m="0 auto"
      py={4}
      px={3}
      maxw={[0, 3]}
      w="100%"
    >
      <Logo />
      <TextLink
        href="https://dribbble.com/mojotech/"
        rel="noopener noreferrer"
        target="_blank"
        scheme="dark"
        fontSize={3}
        mx={[0, 4]}
        underline
      >
        Check out our Dribbble
      </TextLink>
      <TextLink
        href="https://mojotech.com/"
        rel="noopener noreferrer"
        target="_blank"
        scheme="dark"
        fontSize={3}
        underline
      >
        Learn about MojoTech
      </TextLink>
    </Flex>
  </Box>
);

export default Footer;
