import React from "react";
import Layout from "../components/layout";
import theme from "../themes";
import { ThemeProvider } from "styled-components";
import MainBanner from "../components/MainBanner";
import Alternate from "../components/Alternate";
import { Link as ButtonLink } from "../components/Button";
import { GatsbyLink } from "../components/Link";
import { Flex } from "@rebass/grid";
import Heading from "../components/Heading";
import Speaker from "../components/Speaker";
import Text from "../components/Text";
import KenWheelerImage from "../components/Images/ken-wheeler-image";
import LaurieVossImage from "../components/Images/laurie-voss-image";
import JayPhelpsImage from "../components/Images/jay-phelps-image";
import { Link } from "../components/Button";
import styled from "styled-components";
import "../components/root.css";

const TextWrapper = styled.div`
  max-width: 1024px;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <MainBanner>
        <Flex flexDirection="row" alignItems="center">
          <ButtonLink
            href="https://www.papercall.io/magnoliajs"
            alignSelf="flex-start"
            mr={40}
            target="_blank"
          >
            Submit a talk
          </ButtonLink>
          <GatsbyLink to="speak" color="white">
            Learn more
          </GatsbyLink>
        </Flex>
      </MainBanner>
      <Alternate pb={100}>
        <Heading color="mainBackground" size={2} textAlign="center">
          Main Stage Speakers
        </Heading>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          style={{ padding: "2rem", width: "" }}
        >
          <Speaker
            name="Laurie Voss"
            Image={LaurieVossImage}
            talk={{
              title: "JavaScript: who, what, where, why and next",
              description: "npm has more data than anyone about who JavaScript developers are and what we’re up to. Using our unparalleled access to registry usage stats and the results of our 2019 ecosystem survey of over 33,000 developers, I break down the current state of JavaScript and where trends look like they’re headed, so you can make more informed technical choices."
            }}
            twitter="seldo"
          />
          <Speaker
            name="Ken Wheeler"
            Image={KenWheelerImage}
            talk={{
              title: "Renderless Components with Hooks",
              description: "This talk will explore using a renderless component pattern with React hooks to provide declarative interfaces to imperative and non-DOM based libraries/APIs."
            }}
            twitter="ken_wheeler"
          />
          <Speaker
            name="Jay Phelps"
            Image={JayPhelpsImage}
            talk={{
              title: "Whitty talk title",
              description: "Followed up with a killer talk description. that is very long, much longer than the rest, to show what a long one will look like. you know, in case one is really long or something. I don't know, whatever dude."
            }}
            twitter="_jayphelps"
          />
        </Flex>
        <Text pt={10} pb={30} textAlign="center">
          <Link href="/speakers">See all speakers</Link>
        </Text>
      </Alternate>
      <Alternate pb={100}>
        <Heading color="mainBackground" size={2}>
          Upcoming Dates
        </Heading>
        <TextWrapper>
          <Text pt={10} pb={30}>
            🔈 CFP Opens <strong>March 8, 2019</strong>
          </Text>
          <Text pt={10} pb={30}>
            🐦 Early Bird Tickets Available <strong>March 15, 2019</strong>
          </Text>
          <Text pt={10} pb={30}>
            🔐 CFP Closes <strong>March 22, 2019</strong>
          </Text>
          <Text pt={10} pb={30}>
            🗣️ Speakers Announced <strong>March 27, 2019</strong>
          </Text>
          <Text pt={10} pb={30}>
            🎟️ Regular Tickets Available <strong>April 3, 2019</strong>
          </Text>
          <Text pt={10} pb={30}>
            🤓 Workshop Day on <strong>April 17, 2019</strong>
          </Text>
          <Text pt={10} pb={30}>
            🎊 Party Time on <strong>April 18, 2019</strong>
          </Text>
        </TextWrapper>
      </Alternate>
      <Alternate pb={100}>
        <Heading color="alternateHeading" size={2}>
          Interested in sponsoring?
        </Heading>
        <TextWrapper>
          <Text pt={10} pb={30}>
            MagnoliaJS is Mississippi's{" "}
            <strong>first-ever developer conference</strong>. Our mission is to
            foster growth and opportunities for developers in the Southeast and
            be the launching point for greater things for the tech in
            Mississippi.
          </Text>
          <Text pt={10} pb={30}>
            We are aiming to bring together around 200 web developers and
            friends to learn new skills and concepts and to network and develop
            new relationships.
          </Text>
          <Text pb={40}>
            Here's your chance to contribute to that mission! We're looking for
            the best companies to partner with us and help to make the
            first-annual MagnoliaJS conference a success.
          </Text>
        </TextWrapper>
        <Link
          borderColor="alternateHeading"
          backgroundColor="rgba(0,0,0,0)"
          color="alternateHeading"
          href="/sponsor"
        >
          Learn More
        </Link>
      </Alternate>
    </Layout>
  </ThemeProvider>
);

export default Root;
