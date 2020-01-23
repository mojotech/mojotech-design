/** @jsx jsx */
import * as React from "react";
import Link from "next/link";
import { motion, useViewportScroll } from "framer-motion";
import { jsx } from "@emotion/core";
import { Box, Wrap, AutoGrid, Text } from "@mojotech/mojo-ui";

import Logo from "../components/Logo";
import { mq } from "../lib/utils";

const logoVariants = {
  bottom: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -1000 },
    },
  },
  top: {
    y: 75,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Footer: React.FunctionComponent = () => {
  const [bottom, setBottom] = React.useState(false);
  const { scrollYProgress } = useViewportScroll();

  React.useEffect(() => {
    scrollYProgress.onChange(y => {
      y > 0.95 ? setBottom(true) : setBottom(false);
    });
  });

  return (
    <Box as="footer" paddingY={5} position="relative">
      <Wrap position="relative" maxWidth={3}>
        <motion.div
          animate={bottom ? "bottom" : "top"}
          variants={logoVariants}
          css={mq({
            display: ["none", "block"],
            position: "absolute",
          })}
        >
          <Logo />
        </motion.div>
      </Wrap>
      <Wrap>
        <AutoGrid
          gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
          gridGap={[3, 4]}
          css={{
            lineHeight: 2.2,
          }}
        >
          <Box as="ul">
            <li>
              <Link scroll={false} href="/who-we-are/" passHref>
                <Text as="a">Internships</Text>
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/how-we-work/" passHref>
                <Text as="a">Learn About MojoTech</Text>
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/services/" passHref>
                <Text as="a">Check out or Dribbble</Text>
              </Link>
            </li>
          </Box>
        </AutoGrid>
      </Wrap>
    </Box>
  );
};

export default Footer;
