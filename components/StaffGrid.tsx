import * as React from "react";
import { AutoGrid, Box, Text, Wrap } from "@mojotech/mojo-ui";

const StaffGrid: React.FC = () => (
  <Wrap mb={5}>
    <Text fontSize={4} mb={3} as="h2">
      Meet the team
    </Text>
    <Text fontSize={2} mb={4}>
      Our backgrounds and passions make our approach to problem solving unique.
      Throughout the years we’ve had the pleasure of working with some of the
      world’s leading brands, bringing new ideas and products to market, and
      hopefully making people’s lives a little easier.
    </Text>
    <AutoGrid
      gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
      gridGap={2}
      gridRowGap={4}
    >
      <Box>
        <Box height="50vmin" mb={2} background="green" />
        <Text fontSize={2} mb={0}>
          Matt Rossi
        </Text>
        <Text color="mediumGray">Design Director</Text>
      </Box>
      <Box>
        <Box height="50vmin" mb={2} background="green" />
        <Text fontSize={2} mb={0}>
          Chapman Bettis
        </Text>
        <Text color="mediumGray">Designer</Text>
      </Box>
      <Box>
        <Box height="50vmin" mb={2} background="green" />
        <Text fontSize={2} mb={0}>
          Andy Birch
        </Text>
        <Text color="mediumGray">Designer</Text>
      </Box>
      <Box>
        <Box height="50vmin" mb={2} background="green" />
        <Text fontSize={2} mb={0}>
          Ivan Manolov
        </Text>
        <Text color="mediumGray">Designer</Text>
      </Box>
      <Box>
        <Box height="50vmin" mb={2} background="green" />
        <Text fontSize={2} mb={0}>
          Jesse Hoyos
        </Text>
        <Text color="mediumGray">Designer</Text>
      </Box>
      <Box>
        <Box height="50vmin" mb={2} background="green" />
        <Text fontSize={2} mb={0}>
          Chris Wynn
        </Text>
        <Text color="mediumGray">Developer</Text>
      </Box>
    </AutoGrid>
  </Wrap>
);

export default StaffGrid;
