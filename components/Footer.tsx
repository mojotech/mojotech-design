/** @jsx jsx */
import * as React from "react";
import { motion, useViewportScroll } from "framer-motion";
import { jsx } from "@emotion/core";
import { Box, Wrap, AutoGrid, TextLink, GridSystem } from "@mojotech/mojo-ui";

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
    scrollYProgress.onChange((y) => {
      y > 0.95 ? setBottom(true) : setBottom(false);
    });
  });

  return (
    <GridSystem paddingY={5} position="relative">
      <Wrap as="footer" position="relative" gridColumn="1/-1">
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
              <TextLink
                href="https://mojotech.com/"
                rel="noopener noreferrer"
                target="_blank"
                opacity={1}
              >
                Learn About MojoTech
              </TextLink>
            </li>
            <li>
              <TextLink
                href="https://dribbble.com/mojotech/"
                rel="noopener noreferrer"
                target="_blank"
                opacity={1}
              >
                Check out our Dribbble
              </TextLink>
            </li>
          </Box>
        </AutoGrid>
      </Wrap>
    </GridSystem>
  );
};

export default Footer;
