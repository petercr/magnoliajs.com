import React from "react";
import { Link } from "gatsby";
import { Flex } from "@rebass/grid";
import { Box, Card, Button } from "rebass";

const WorkshopModal = ({
  name,
  talk,
  setOpen,
  twitter,
  Image,
  company,
  talkPage
}) => (
  <Box m="auto" width={[1, 0.9, 0.8]}>
    <Card
      borderRadius={12}
      p={[2, 4, 6]}
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
      <h4 style={{ fontSize: ".9rem" }}>Company: {company}</h4>
      <h3 style={{ fontSize: "1rem" }}>{talk.title}</h3>
      <p style={{ fontSize: "1rem" }}>{talk.description}</p>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        style={{ padding: "0.5rem", flexWrap: "wrap" }}
      >
        <Link to={talkPage}>Visit Talk Page</Link>
        <Button
          style={{ background: "#BF5272" }}
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

export default WorkshopModal;
