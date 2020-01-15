/** @jsx jsx */
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { jsx } from "@emotion/core";
import { Flex } from "@mojotech/mojo-ui";

const Logo: React.FC = () => (
  <Link href="/" scroll={false}>
    <a>
      <Flex
        css={{ cursor: "pointer" }}
        height={"3.2em"}
        width={"3.2em"}
        top={[16, "initial"]}
        zIndex={7}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          viewBox="0 0 58 50"
        >
          <motion.g>
            <motion.polygon
              style={{ originY: "50%", originX: "50%" }}
              whileHover={{ rotate: "60deg" }}
              fill="#00BA40"
              points="14.4933433 -3.05533376e-13 1.42108547e-14 24.9870871 14.4868122 49.9865029 43.4704051 49.9981467 57.9579048 24.9983884 43.4704051 -3.05533376e-13"
            />
            <motion.polygon
              css={{ pointerEvents: "none" }}
              fill="#FFFFFF"
              points="37.1657681 14.6505433 41.2769648 14.6505433 41.2769648 35.3489732 34.4233662 35.3489732 34.4223349 26.5141272 35.688006 24.4562704 29.0526858 28.7216401 22.4170218 24.4562704 23.6820054 26.5141272 23.6820054 35.3489732 16.8284068 35.3489732 16.8284068 14.6505433 20.9385723 14.6505433 29.0526858 20.4871307"
            />
          </motion.g>
        </motion.svg>
      </Flex>
    </a>
  </Link>
);

export default Logo;
