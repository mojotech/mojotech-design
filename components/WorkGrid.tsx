/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { AutoGrid, Wrap } from "@mojotech/mojo-ui";

import UA from "./WorkItems/UA";
import Countr from "./WorkItems/Countr";
import ETS from "./WorkItems/ETS";
import DayDream from "./WorkItems/DayDream";
import Fasset from "./WorkItems/Fasset";
import Sunrays from "./WorkItems/Sunrays";
import Amica from "./WorkItems/Amica";
import Dockwa from "./WorkItems/Dockwa";

const WorkGrid: React.FC = () => (
  <Wrap gridColumn="1 / -1">
    <AutoGrid
      mb={5}
      css={{
        "@media(max-width: 600px)": {
          "& *": {
            transform: "none !important",
          },
        },
      }}
      gridGap={[24, 48]}
    >
      <UA />
      <Countr />
      <ETS />
      <DayDream />
      <Fasset />
      <Sunrays />
      <Amica />
      <Dockwa />
    </AutoGrid>
  </Wrap>
);

export default WorkGrid;
