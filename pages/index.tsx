import * as React from "react";
import { Text, Wrap } from "@mojotech/mojo-ui";

import Layout from "../components/Layout";
import RatioBox from "../components/RatioBox";
import WorkGrid from "../components/WorkGrid";
import CTA from "../components/CTA";
import StaffGrid from "../components/StaffGrid";

const Index: React.FunctionComponent = () => (
  <Layout>
    <Wrap pt={6}>
      <RatioBox aspectRatio={[21, 9]}>
        <Text mb={0} fontSize={5} fontFamily="display" as="h1">
          We're Mojotech's
          <br />
          design team.
        </Text>
      </RatioBox>
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
  </Layout>
);

export default Index;
