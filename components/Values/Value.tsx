/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { Box, Text } from "@mojotech/mojo-ui";

interface Props {
  title: string;
  copy: string;
}

const Value: React.FC<Props> = (props) => (
  <div css={{ position: "relative" }}>
    <Box paddingRight={4} paddingBottom={4}>
      <Text fontSize={3}>{props.title}</Text>
      <Text>{props.copy}</Text>
    </Box>
  </div>
);

export default Value;
