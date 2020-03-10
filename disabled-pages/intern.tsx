/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { AutoGrid, Box, Wrap, Text, ListItem, Image } from "@mojotech/mojo-ui";

import Layout from "../components/Layout";
import Flow from "../components/Flow";
import CTA from "../components/CTA";

function Intern(): React.ReactElement {
  return (
    <Layout>
      <Wrap pt={6} mb={5}>
        <Text fontFamily="display" fontSize={5}>
          We're Hiring
          <br /> Design Interns
        </Text>
        <Flow>
          <Text fontSize={1}>
            Product design is a trade that’s hard to describe. It’s made up of a
            whole spectrum of disciplines, from qualitative research and product
            strategy, to visual design and front-end development. Nobody excels
            at all, or even most, of these, so it’s also a craft that requires
            collaboration, curiosity, and a ceaseless desire to learn.
          </Text>
          <Text fontSize={1}>
            As a Design Intern, that’s exactly what you’re here to do: learn.
            And not passively. We’re a small team, so you’ll be working with
            one-on-one with us through the day-to-day of client projects. You’ll
            help us make decisions, refine our work, and understand the impact
            and consequences of what we’re building. You’ll also be building
            your own projects—taking what you’re learning on a daily basis and
            applying it in a meaningful way.
          </Text>
          <Text fontSize={1}>
            You’ll be paid, too. This isn’t ‘exposure’ stuff—the work you’ll do
            is valuable, and you’ll be compensated accordingly.
          </Text>
        </Flow>
      </Wrap>
      <Wrap mb={5}>
        <Text fontSize={4}>Who Should Apply?</Text>
        <Text fontSize={1} mb={3}>
          Every designer starts out differently. We don’t require a specific
          background or experience level, but there’re a few things you should
          be be confident in:
        </Text>
        <Box as="ul">
          <ListItem fontSize={1}>
            Your graphic and visual design skills
          </ListItem>
          <ListItem fontSize={1}>
            Your ability to communicate or sell your process and ideas
          </ListItem>
          <ListItem fontSize={1}>Your portfolio</ListItem>
          <ListItem fontSize={1}>
            Your familiarity with common design tools—like Adobe CS, Sketch,
            Invision, and Figma.
          </ListItem>
        </Box>
      </Wrap>
      <Wrap mb={5}>
        <Text fontSize={4}>What our interns have built</Text>
      </Wrap>
      <Wrap mb={5}>
        <Text fontSize={4}>Who you'll be doing</Text>
        <Box as="ul">
          <ListItem fontSize={1}>Join design team critiques</ListItem>
          <ListItem fontSize={1}>
            Sit in on client standups and discussions
          </ListItem>
          <ListItem fontSize={1}>Identify and research problems</ListItem>
          <ListItem fontSize={1}>Explore, build, and test concepts</ListItem>
          <ListItem fontSize={1}>
            Present your ideas, get feedback, and iterate
          </ListItem>
          <ListItem fontSize={1}>
            Take an internal project from concept to completion
          </ListItem>
        </Box>
      </Wrap>
      <Wrap my={5}>
        <Text fontSize={4}>What we're learning from</Text>
        <AutoGrid
          gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
          gridGap={4}
        >
          <Box>
            <Box mb={4}>
              <Image
                mb={3}
                maxWidth="75%"
                src="/img/jpg/intern/atomic@2x.jpg"
              />
              <Text fontSize={2}>Atomic Design</Text>
              <Text>
                Written by Brad Frost, it’s a pretty comprehensive dive into
                design systems: what they are, how they work, and how to build
                and maintain them. It’s one of best things we’ve read for
                learning how to cultivate a more systems-aware mindset.
              </Text>
            </Box>
            <Box mb={4}>
              <Image mb={3} maxWidth="75%" src="/img/jpg/intern/lean@2x.jpg" />
              <Text fontSize={2}>Lean UX</Text>
              <Text>
                Short and snappy, it explores how to conduct iterative research
                and validation in a fast-paced development cycle.
              </Text>
            </Box>
            <Box mb={4}>
              <Image mb={3} maxWidth="75%" src="/img/jpg/intern/shape@2x.jpg" />
              <Text fontSize={2}>The Shape of Design</Text>
              <Text>
                Short and snappy, it explores how to conduct iterative research
                and validation in a fast-paced development cycle.
              </Text>
            </Box>
          </Box>
          <Box>
            <Box mb={4} mt={5}>
              <Image
                mb={3}
                maxWidth="75%"
                src="/img/jpg/intern/sprint@2x.jpg"
              />
              <Text fontSize={2}>Sprint</Text>
              <Text>
                Like ‘Lean UX,’ ‘Sprint’—developed by partners at Google
                Ventures for launching startups—explores how to design quickly,
                iteratively, and across jobs.
              </Text>
            </Box>
            <Box mb={4}>
              <Image mb={3} maxWidth="75%" src="/img/jpg/intern/apple@2x.jpg" />
              <Text fontSize={2}>Essential Design Principles</Text>
              <Text>
                An introduction to how Apple approaches interface design: from
                their broadest principles down to how to handle granular UI
                details and interactions.
              </Text>
            </Box>
            <Box mb={4}>
              <Image mb={3} maxWidth="75%" src="/img/jpg/intern/sheep@2x.jpg" />
              <Text fontSize={2}>
                Stop Stealing Sheep & Find Out How Type Works
              </Text>
              <Text>
                Short and snappy, it explores how to conduct iterative research
                and validation in a fast-paced development cycle.
              </Text>
            </Box>
          </Box>
        </AutoGrid>
      </Wrap>
      <Wrap>
        <Text fontSize={4}>Hey there.</Text>
        <Text fontSize={2}>
          We’re a small team by choice. We believe in quality over quantity:
          keeping things tight and close-knit means we’re all accountable, and
          ready to jump in when one of us need a hand. We’re looking for people
          who don’t just put in the hours—we want folks who support, teach, and
          learn from the designers around them.
        </Text>
      </Wrap>
      <CTA jobType="intern" type="badge" />
    </Layout>
  );
}

export default Intern;
