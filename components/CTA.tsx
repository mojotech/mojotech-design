/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import Link from "next/link";
import {
  Box,
  Wrap,
  Flex,
  Text,
  TextLink,
  Image,
  Button,
} from "@mojotech/mojo-ui";

type Job = "intern" | "designer";

interface BadgeProps {
  jobType?: Job;
}

interface Props {
  type: "badge" | "lifestyle";
  jobType?: Job;
}

const Lifestyle: React.FC = () => (
  <Wrap paddingY={5} gridColumn="1/-1">
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
        <Link scroll={false} passHref href="/hiring/">
          <TextLink
            textAlign="center"
            scheme="dark"
            fontSize={4}
            marginBottom={0}
            underline
          >
            Learn about our hiring process.
          </TextLink>
        </Link>
      </Flex>
    </Box>
  </Wrap>
);

const BadgeCTA: React.FC<BadgeProps> = () => (
  <Wrap mb={5}>
    <Box>
      <Text as="a" href="https://mojotech.bamboohr.com/jobs/view.php?id=34">
        <Button paddingX={4}>Apply now!</Button>
      </Text>
    </Box>
  </Wrap>
);

const CTA: React.FC<Props> = (props) => (
  <>
    {props.type === "badge" ? (
      <BadgeCTA jobType={props.jobType} />
    ) : (
      <Lifestyle />
    )}
  </>
);

export default CTA;
