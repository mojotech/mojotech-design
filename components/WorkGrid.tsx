/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { AutoGrid } from "@mojotech/mojo-ui";

import UA from "./WorkItems/UA";
import Countr from "./WorkItems/Countr";
import ETS from "./WorkItems/ETS";
import DayDream from "./WorkItems/DayDream";
import Fasset from "./WorkItems/Fasset";
import Sunrays from "./WorkItems/Sunrays";
import Amica from "./WorkItems/Amica";
import Dockwa from "./WorkItems/Dockwa";

const WorkGrid: React.FC = () => (
  <AutoGrid
    maxw={[0, 3]}
    px={3}
    mb={5}
    mx="auto"
    gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
    css={{
      "@media(max-width: 600px)": {
        "& *": {
          transform: "none !important",
        },
      },
    }}
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
);

export default WorkGrid;
