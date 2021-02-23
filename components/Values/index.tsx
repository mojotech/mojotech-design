/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { Wrap, AutoGrid, Text } from "@mojotech/mojo-ui";
import Value from "./Value";

export const valueData = [
  {
    title: "Work hard",
    copy:
      "We respect one another and pull our own weight, but are always ready to lend a hand.",
  },
  {
    title: "Have fun",
    copy: "It's important to stay fresh. We have a healthy work/life balance.",
  },
  {
    title: "Be professional",
    copy: "Show up on time. Don't have an ego. Over deliver.",
  },
  {
    title: "Keep learning",
    copy:
      "Don't let your skills go stale. Find time to grow and share what you learn.",
  },
];

const Values: React.FC = () => {
  return (
    <Wrap mb={5}>
      <Text as="h2" fontSize={4}>
        Our Values
      </Text>
      <AutoGrid
        pos="relative"
        gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gridGap={0}
      >
        {valueData.map((v) => (
          <Value title={v.title} copy={v.copy} />
        ))}
      </AutoGrid>
    </Wrap>
  );
};

export default Values;
