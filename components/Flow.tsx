/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { BaseTheme } from "@mojotech/mojo-ui";

interface Props {
  space?: string;
}

const Flow: React.FC<Props> = ({ space = "2em", ...props }) => {
  return (
    <article
      css={{
        "& > *": {
          marginBottom: `0 !important`,
        },
        "& > * + h3, & > * + img": {
          marginTop: BaseTheme.spaces[5],
        },
        "& > * + p": {
          marginTop: BaseTheme.spaces[3],
        },
      }}
    >
      {props.children}
    </article>
  );
};

export default Flow;
