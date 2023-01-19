import * as React from "react";
import { Text, Wrap, GridSystem } from "@mojotech/mojo-ui";

import Layout from "../components/Layout";
import WorkGrid from "../components/WorkGrid";
import StaffGrid from "../components/StaffGrid";
import CTA from "../components/CTA";

const Index: React.FunctionComponent = () => (
  <Layout>
    <GridSystem>
      <Wrap pt={6} mb={5}>
        <Text mb={0} fontSize={5} fontFamily="display" as="h1">
          We're Mojotech's
          <br />
          design team.
        </Text>
      </Wrap>
      <Wrap mb={5}>
        <Text fontSize={3} as="h2">
          Since 2008, we’ve been building serious products for clients like
          UnderArmour, Shell, and Credit Karma. Our work is driven by what our
          clients need, not our egos—we’re here to build the right thing, not to
          be right.
        </Text>
      </Wrap>
      <WorkGrid />
      <StaffGrid />
      <CTA type="lifestyle" />
    </GridSystem>
  </Layout>
);

export default Index;
