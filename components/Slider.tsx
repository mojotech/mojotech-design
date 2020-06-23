/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { Wrap, Flex, Section } from "@mojotech/mojo-ui";
import { motion, useSpring, useTransform } from "framer-motion";
import { clamp, mq } from "../lib/utils";

const Slider: React.FC = props => {
  const x = useSpring(0);
  const ref = React.createRef<HTMLDivElement>();

  const scrollValue = useTransform(x, value => {
    if (ref.current) {
      return clamp(value, ref.current.scrollWidth * -1 * 0.66 + 200, 0);
    }

    return clamp(value, 0, 0);
  });

  return (
    <Section marginBottom={4} css={{ overflow: "hidden" }}>
      <Wrap position="relative">
        <motion.div
          ref={ref}
          drag="x"
          dragMomentum={true}
          css={mq({
            minHeight: [400, 700],
            position: "relative",
            height: "100%",
            cursor: "grab",
          })}
          style={{
            x: scrollValue,
          }}
        >
          <Flex
            alignItems="center"
            flexDirection="row"
            flexWrap="nowrap"
            position="absolute"
            left="0px"
            height="100%"
            top="0px"
            width="100%"
          >
            {props.children}
          </Flex>
        </motion.div>
      </Wrap>
    </Section>
  );
};

export default Slider;
