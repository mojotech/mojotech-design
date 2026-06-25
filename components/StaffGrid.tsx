/** @jsx jsx */
import * as React from "react";
import { AutoGrid, Text, Wrap } from "@mojotech/mojo-ui";
import { jsx, keyframes } from "@emotion/core";
import Link from "next/link";

import RatioBox from "./RatioBox";

const sparkleAnim = keyframes`
  0%   { opacity: 0; transform: scale(0) rotate(0deg); }
  40%  { opacity: 1; transform: scale(1) rotate(15deg); }
  100% { opacity: 0; transform: scale(0.3) rotate(40deg); }
`;

const SPARKLES = [
  { top: "10%", left: "16%",  fontSize: 12, delay: "0s",     duration: "1.1s" },
  { top: "7%",  left: "72%",  fontSize: 9,  delay: "0.18s",  duration: "1.0s" },
  { top: "40%", left: "91%",  fontSize: 11, delay: "0.08s",  duration: "1.25s" },
  { top: "74%", left: "82%",  fontSize: 8,  delay: "0.30s",  duration: "1.0s" },
  { top: "63%", left: "7%",   fontSize: 10, delay: "0.12s",  duration: "1.15s" },
  { top: "23%", left: "3%",   fontSize: 7,  delay: "0.38s",  duration: "0.95s" },
];

interface StaffCardProps {
  src: string;
  name: string;
}

const StaffCard: React.FC<StaffCardProps> = ({ src, name }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div>
      <div
        css={{ position: "relative", overflow: "hidden" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={src}
          css={{
            display: "block",
            width: "100%",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />
        {hovered &&
          SPARKLES.map((s, i) => (
            <span
              key={i}
              css={{
                position: "absolute",
                top: s.top,
                left: s.left,
                fontSize: s.fontSize,
                color: "#fff",
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
                textShadow: "0 0 6px rgba(255,255,255,0.9)",
                animation: `${sparkleAnim} ${s.duration} ${s.delay} ease forwards`,
              }}
            >
              ✦
            </span>
          ))}
      </div>
      <Text mt={1}>{name}</Text>
    </div>
  );
};

const StaffGrid: React.FC = () => (
  <Wrap mb={5}>
    <Text mb={3} fontSize={4} fontFamily="regular">
      Meet the team
    </Text>
    <Text mb={4} fontSize={1}>
      Our backgrounds and passions make our approach to problem solving unique.
      Throughout the years we've had the pleasure of working with some of the
      world's leading brands, bringing new ideas and products to market, and
      hopefully making people's lives a little easier.
    </Text>
    <AutoGrid
      gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
      gridGap={[24, 48]}
    >
      <StaffCard src="/img/jpg/rossi.jpg" name="Matt Rossi" />
      <StaffCard src="/img/jpg/bettis.jpg" name="Chapman Bettis" />
      <StaffCard src="/img/jpg/griswold.jpg" name="Katy Griswold" />
      <StaffCard src="/img/jpg/matuscak.jpg" name="Olesya Matuscak" />
      <StaffCard src="/img/jpg/clary.jpg" name="Linzi Clary" />
      <Link scroll={false} href="/hiring/" style={{ textDecoration: "none", color: "inherit" }}>
        <RatioBox
          aspectRatio={[400, 400]}
          css={{
            alignItems: "center",
            backgroundColor: "#2b2836",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text paddingX={3} textAlign="center" color="mediumGray">
            If this bothers you, fix it by joining the team.
            <br />
            <Text as="span" fontSize={3}>
              &#129309;
            </Text>
          </Text>
        </RatioBox>
      </Link>
    </AutoGrid>
  </Wrap>
);

export default StaffGrid;
