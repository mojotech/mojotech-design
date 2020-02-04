/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import Link from "next/link";
import {
  Box,
  Wrap,
  Flex,
  Button,
  Text,
  TextLink,
  Image,
} from "@mojotech/mojo-ui";

interface Props {
  type: "badge" | "lifestyle";
}

const Lifestyle: React.FC = () => (
  <Wrap maxWidth={[0, 3]} paddingY={5}>
    <Box position="relative">
      <Image display="block" height="auto" maxWidth="100%" mb={4} as="picture">
        <source
          srcSet="/img/webp/cta/cta-jobs@1x.webp 600w, /img/webp/cta/cta-jobs@2x.webp 800w"
          type="image/webp"
        />
        <img
          srcSet="/img/jpg/cta/cta-jobs@1x.jpg600w, /img/jpg/cta/cta-jobs@2x.jpg 800w"
          src="/img/jpg/cta/cta-jobs@2x.jpg"
        />
      </Image>
      <Flex flexDirection="column" alignItems="center">
        <Text marginBottom={0} opacity={0}>
          We are Hiring
        </Text>
        <Link scroll={true} passHref href="/hiring/">
          <TextLink
            textAlign="center"
            scheme="dark"
            fontSize={4}
            marginBottom={0}
            underline
          >
            Join our team in Providence, RI
          </TextLink>
        </Link>
      </Flex>
    </Box>
  </Wrap>
);

const BadgeCTA: React.FC = () => (
  <Wrap mb={5}>
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flexWrap="nowrap"
      minHeight={["auto", "40vh"]}
    >
      <Box>
        <Text mb={3} fontSize={4}>
          Join our team in Providence, RI
        </Text>
        <a
          href="https://mojotech.bamboohr.com/jobs/view.php?id=3"
          rel="noopener noreferrer"
          target="_blank"
          css={{ textDecoration: "none" }}
        >
          <Button paddingX={4}>Submit your application</Button>
        </a>
      </Box>
      <Box ml={3} display={["none", "block"]}>
        <Image
          css={{ height: "100%", width: "auto" }}
          src="/img/png/badge.png"
        />
      </Box>
    </Flex>
  </Wrap>
);

const CTA: React.FC<Props> = props => (
  <Box>{props.type === "badge" ? <BadgeCTA /> : <Lifestyle />}</Box>
);

export default CTA;
