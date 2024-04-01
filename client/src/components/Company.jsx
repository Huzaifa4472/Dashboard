import React from "react";
import styled from "styled-components";
import FlagOne from "../assets/SocialIcon/austria.png";
import FlagTwo from "../assets/SocialIcon/greek.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  color: white;
`;
const Text = styled.div`
  font-size: 14px;
`;
const Title = styled.div`
  font-weight: 700;
`;
const Heading = styled.div`
  font-weight: 400;
`;
const ParaFlag = styled.div``;
const Para = styled.p`
  font-size: 12px;
  color: #e6f5ff;
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
const Company = () => {
  return (
    <Container>
      <Text>
        <Title>AlpinEdge</Title>
        <Heading>Slope to Success</Heading>
      </Text>
      <ParaFlag>
        <Para>Technology built in-house in Austria</Para>
        <Icon src={FlagOne} /> <Icon src={FlagTwo} />
      </ParaFlag>
    </Container>
  );
};

export default Company;
