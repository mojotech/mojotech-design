/** @jsx jsx */
import * as React from "react";
import { omit } from "onno-react";
import { jsx } from "@emotion/core";
import { Box } from "@mojotech/mojo-ui";

interface Props {
  aspectRatio: number[];
}

const omitProps = omit({
  propsKeys: ["aspectRatio"],
});

export const RatioBox: React.FC<Props> = props => {
  return (
    <Box
      css={{
        // ye olde padding hack:
        // https://css-tricks.com/aspect-ratio-boxes/#article-header-id-6
        "&::before": {
          content: "''",
          width: "1px",
          marginLeft: "-1px",
          float: "left",
          height: 0,
          paddingTop: `calc((${props.aspectRatio[1] /
            props.aspectRatio[0]}) * 100%)`,
        },
        "&::after": {
          content: "''",
          display: "table",
          clear: "both",
        },
      }}
      {...omitProps(props)}
    />
  );
};

export default RatioBox;
