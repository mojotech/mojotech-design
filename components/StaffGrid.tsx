import * as React from "react";
import { AutoGrid, Box, Text, Wrap, Image } from "@mojotech/mojo-ui";

const StaffGrid: React.FC = () => (
  <Wrap mb={5}>
    <Text mb={3} fontSize={4}>
      Meet the team
    </Text>
    <Text mb={4} fontSize={1}>
      Our backgrounds and passions make our approach to problem solving unique.
      Throughout the years we’ve had the pleasure of working with some of the
      world’s leading brands, bringing new ideas and products to market, and
      hopefully making people’s lives a little easier.
    </Text>
    <AutoGrid
      gridColumnGap={2}
      gridRowGap={4}
      gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
    >
      <Box>
        <Image mb={1} src="/img/jpg/rossi.jpg" />
        <Text>Matt Rossi</Text>
      </Box>
      <Box>
        <Image mb={1} src="/img/jpg/bettis.jpg" />
        <Text>Chapman Bettis</Text>
      </Box>
      <Box>
        <Image mb={1} src="/img/jpg/birch.jpg" />
        <Text>Andy Birch</Text>
      </Box>
      <Box>
        <Image mb={1} src="/img/jpg/manolov.jpg" />
        <Text>Ivan Manolov</Text>
      </Box>
      <Box>
        <Image mb={1} src="/img/jpg/hoyos.jpg" />
        <Text>Jesse Hoyos</Text>
      </Box>
      <Box>
        <Image mb={1} src="/img/jpg/wynn.jpg" />
        <Text>Chris Wynn</Text>
      </Box>
    </AutoGrid>
  </Wrap>
);

export default StaffGrid;
