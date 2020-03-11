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
    gif: ["https://media.giphy.com/media/J2BKcQ1xxkPrq/giphy.gif"],
  },
  {
    title: "Have fun",
    copy: "It's important to stay fresh. We have a healthy work/life balance.",
    gif: ["https://media.giphy.com/media/iOz3p2txHIo4U/source.gif"],
  },
  {
    title: "Be professional",
    copy: "Show up on time. Don't have an ego. Over deliver.",
    gif: ["https://media.giphy.com/media/9uIapz6tbMaxPAuqaM/giphy.gif"],
  },
  {
    title: "Keep learning",
    copy:
      "Don't let your skills go stale. Find time to grow and share what you learn.",
    gif: ["https://media.giphy.com/media/jilrDBUHd4V1e/source.gif"],
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
        {valueData.map((v, idx) => (
          <Value key={idx} title={v.title} copy={v.copy} gif={v.gif} />
        ))}
      </AutoGrid>
    </Wrap>
  );
};

export default Values;
