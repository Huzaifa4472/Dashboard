import React from "react";
import styled from "styled-components";
import { StatesOne, StatesTwo } from "./States";
import Progressbar from "./Progressbar";
const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;
const Text = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #171717;
  font-family: "Poppins", sans-serif;
`;
const InfoArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0rem;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 8px 17px 0px #0000001a;
  gap: 1rem;
`;

const Statistics = () => {
  return (
    <Container>
      <Text>Performance Statistics</Text>
      <InfoArea>
        <StatesOne />
        <Progressbar />
        <StatesTwo />
      </InfoArea>
    </Container>
  );
};

export default Statistics;
