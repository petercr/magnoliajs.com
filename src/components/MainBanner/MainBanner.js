import React, { Component } from "react";
import styled from "styled-components";
import bannerImg from "./homepage-image.png";
import { Flex, Box } from "@rebass/grid";
import Heading from "../Heading";
import Text from "../Text";

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

function MainBanner({ children }) {
  return (
    <Flex
      flexDirection={["column", "row-reverse"]}
      my={[48, 0]}
      alignItems="center"
    >
      <Box
        width={[1, 1 / 2]}
        alignSelf={["flex-start", "center"]}
        justifyContent={["flex-start", "center"]}
        px={30}
      >
 
          <Flex justifyContent="center" flexDirection="column">
            <Text color="white" my={30}>
              Early Bird tickets on sale now!
              <br />
              <a
                href="https://ti.to/magnoliajs/magnoliajs-2019"
                title="Click here to purchase tickets to MagnoliaJS"
                style={{ color: "yellow" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Purchase your ticket!
              </a>
            </Text>
          </Flex>
        
  );
}

export default MainBanner;
