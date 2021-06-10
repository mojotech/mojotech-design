/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import {
  Box,
  AutoGrid,
  Wrap,
  Text,
  Image,
  Flex,
  TextLink,
} from "@mojotech/mojo-ui";

import Layout from "../components/Layout";
import Flow from "../components/Flow";
import Slider from "../components/Slider";
import CTA from "../components/CTA";
import Values from "../components/Values/";

function Hiring(): React.ReactElement {
  return (
    <Box overflowX="hidden">
      <Layout>
        <Wrap pt={6} mb={5}>
          <Text fontFamily="display" fontSize={5}>
            We're Hiring Product
            <br /> Designers
          </Text>
          <Flow>
            <Text fontSize={1}>
              Whatever your title’s been in the past, what’s important is you
              have experience designing thoughtful solutions for complex
              problems. You’re a team player who can work independently at any
              stage of a project. You can lead a discussion with clients and
              internal teams that push projects in the right direction.
            </Text>
            <Text fontSize={1}>
              You should have a solid background in graphic design, a portfolio
              to back it up, and knowledge of what it takes to actually ship a
              quality product. We all have interests and skills outside of
              product design, though—including illustration, engineering, public
              speaking, and writing. Ideally you do, too. Tell us about it!
            </Text>
            <Text fontSize={1}>
              We’re not machines. We work a 35-hour work week, with time left
              over to for internal projects or learning a new skill. You’ll only
              be on one project at a time, so you can hone in on the right
              problems and give them the attention and care they deserve.
            </Text>
          </Flow>
        </Wrap>
        <Slider>
          <Image flex="0 0 500px" marginRight={3} maxWidth="50%" as="picture">
            <source
              srcSet="/img/webp/slider/eddy@1x.webp 600w, /img/webp/slider/eddy@2x.webp 800w"
              type="image/webp"
            />
            <Image
              width="100%"
              srcSet="/img/jpg/slider/eddy@1x.jpg 600w, /img/jpg/slider/eddy@2x.jpg 800w"
            />
          </Image>
          <Image flex="0 0 500px" marginRight={3} maxWidth="50%" as="picture">
            <source
              srcSet="/img/webp/slider/bolt@1x.webp 600w, /img/webp/slider/bolt@2x.webp 800w"
              type="image/webp"
            />
            <Image
              width="100%"
              srcSet="/img/jpg/slider/bolt@1x.jpg 600w, /img/jpg/slider/bolt@2x.jpg 800w"
            />
          </Image>
          <Image flex="0 0 500px" marginRight={3} maxWidth="50%" as="picture">
            <source
              srcSet="/img/webp/slider/window@1x.webp 600w, /img/webp/slider/window@2x.webp 800w"
              type="image/webp"
            />
            <Image
              width="100%"
              srcSet="/img/jpg/slider/window@1x.jpg 600w, /img/jpg/slider/window@2x.jpg 800w"
            />
          </Image>
          <Image flex="0 0 700px" marginRight={3} maxWidth="50%" as="picture">
            <source
              srcSet="/img/webp/slider/donuts@1x.webp 600w, /img/webp/slider/donuts@2x.webp 800w"
              type="image/webp"
            />
            <Image
              width="100%"
              srcSet="/img/jpg/slider/donuts@1x.jpg 600w, /img/jpg/slider/donuts@2x.jpg 800w"
            />
          </Image>
          <Image flex="0 0 700px" marginRight={3} maxWidth="50%" as="picture">
            <source srcSet="/img/jpg/slider/jesse-talk@1x.jpg 600w, /img/jpg/slider/jesse-talk@2x.jpg 800w" />
            <Image
              width="100%"
              srcSet="/img/jpg/slider/jesse-talk@1x.jpg 600w, /img/jpg/slider/jesse-talk@2x.jpg 800w"
            />
          </Image>
        </Slider>
        <Wrap mb={5}>
          <Text fontSize={4}>Benefits</Text>
          <AutoGrid
            gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
            gridGap={[0, 4]}
          >
            <Box as="ul">
              <Text fontSize={1} as="li">
                Medical, Dental, & FSA
              </Text>
              <Text fontSize={1} as="li">
                Dedicated MojoTime
              </Text>
              <Text fontSize={1} as="li">
                Dog Friendly Offices
              </Text>
              <Text fontSize={1} as="li">
                401(k) With Match
              </Text>
            </Box>
            <Box as="ul">
              <Text fontSize={1} as="li">
                Trust-based Time Off
              </Text>
              <Text fontSize={1} as="li">
                Paid Family Leave
              </Text>
              <Text fontSize={1} as="li">
                Catered Lunches
              </Text>
              <Text fontSize={1} as="li">
                Paid Conference Attendance
              </Text>
            </Box>
          </AutoGrid>
        </Wrap>
        <Values />
        <Wrap mb={5}>
          <Text mb={3} fontSize={4}>
            Interview Process
          </Text>
          <Text mb={4} fontSize={2}>
            During interviews, we want to hear about your work as a whole: what
            you did, the thinking and research that went into it, and what you
            learned at the end. Then, tell us where you want to go. What do you
            want learn next? How do you want to grow?
          </Text>
          <Box
            as="ol"
            css={{
              listStyle: "none",
            }}
          >
            <Flex mb={3} alignItems="center" as="li">
              <Image width={40} mr={2} height={40} src="/img/svg/01.svg" />
              <Text mb="0px" fontSize={2}>
                Application
              </Text>
            </Flex>
            <Flex mb={3} alignItems="center" as="li">
              <Image width={40} mr={2} height={40} src="/img/svg/02.svg" />
              <Text mb="0px" fontSize={2}>
                Screener call &amp;{" "}
                <TextLink
                  underline
                  scheme="dark"
                  href="https://www.mojotech.com/blog/designing-a-better-portfolio/"
                  fontSize="inherit"
                >
                  Portfolio Review
                </TextLink>
              </Text>
            </Flex>
            <Flex mb={3} alignItems="center" as="li">
              <Image width={40} mr={2} height={40} src="/img/svg/03.svg" />
              <Text mb="0px" fontSize={2}>
                Design challenge
              </Text>
            </Flex>
            <Flex mb={3} alignItems="center" as="li">
              <Image width={40} mr={2} height={40} src="/img/svg/04.svg" />
              <Text mb="0px" fontSize={2}>
                Meet the team
              </Text>
            </Flex>
            <Flex alignItems="center" as="li">
              <Image mr={2} src="/img/svg/05.svg" />
              <Text mb="0px" fontSize={2}>
                &#129309;
              </Text>
            </Flex>
          </Box>
        </Wrap>
        <Wrap>
          <Box mt={5}>
            <Text mb={3} fontSize={4}>
              The Opportunity
            </Text>
            <Text mb={4} fontSize={2}>
              Being a designer at MojoTech means you’ll have the freedom and
              responsibility to influence teams, clients, and companies through
              research, creativity and collaboration. We’re looking for people
              who are ready to take charge, and ship quality products.
            </Text>
          </Box>
        </Wrap>
        <CTA type="badge" />
      </Layout>
    </Box>
  );
}

export default Hiring;
