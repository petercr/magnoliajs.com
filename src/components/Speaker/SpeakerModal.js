import React from "react";
import { Flex } from "@rebass/grid";
import { Box, Card, Button } from "rebass";

const SpeakerModal = ({ name, talk, setOpen, twitter, Image }) => (
  <Box m="auto" width={600}>
    <Card
      borderRadius={12}
      p={5}
      bg="white"
      boxShadow="0 0 16px rgba(0, 0, 0, .25)"
    >
      <div
        style={{
          borderRadius: "100%",
          overflow: "hidden",
          width: "125px",
          margin: "10px auto",
          boxShadow: "0px 3px 15px rgba(0,0,0,0.2)"
        }}
      >
        <Image />
      </div>
      <h1 style={{ textAlign: "center" }}>{name}</h1>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={{ margin: "10px", padding: "0.5rem", flexWrap: "wrap" }}
      >
        <a
          href={`https://twitter.com/${twitter}`}
          title={`Go to ${name}'s Twitter`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </Flex>
      <h3 style={{ fontSize: "1rem" }}>{talk.title}</h3>
      <p style={{ fontSize: "1rem" }}>{talk.description}</p>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={{ padding: "0.5rem", flexWrap: "wrap" }}
      >
        <Button
          onClick={e => {
            e.stopPropagation();
            setOpen(false);
          }}
        >
          Close Modal
        </Button>
      </Flex>
    </Card>
  </Box>
);

export default SpeakerModal;
