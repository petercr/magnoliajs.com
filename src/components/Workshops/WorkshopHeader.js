import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
  padding-bottom: 1.5rem;
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const WorkshopHeader = ({ heading, Image }) => {
  return (
    <MainDiv>
      <h1>{heading}</h1>
      <Image />
    </MainDiv>
  );
};

export default WorkshopHeader;
