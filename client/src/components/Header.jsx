import React from "react";
import styled from "styled-components";
import Home from "../assets/images/home.svg";
import Arrow from "../assets/images/icon.png";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const SectionOne = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const IconRoot = styled.div`
  display: flex;
  gap: 5px;
  color: #7b7b7b;
  font-weight: 700;
  font-size: 15px;
`;
const HomeIcon = styled.img``;
const Trader = styled.div``;
const Slash = styled.div``;
const ClientArea = styled.div``;
const Name = styled.div`
  color: #004d99;
`;
const Greeting = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const SectionTwo = styled.div`
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  color: white;
`;
const Ride = styled.div`
  color: #7b7b7b;
  font-size: 15px;
  font-weight: 600;
`;
const RideInfo = styled.div`
  height: 75%;
  justify-content: center;
  padding: 0rem 1rem;
  background-color: #024573;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 4px;
`;
const RideNumber = styled.div``;
const ArrowIcon = styled.img`
  height: 25px;
  width: 25px;
`;
const Header = () => {
  return (
    <Container>
      <SectionOne>
        <IconRoot>
          <HomeIcon src={Home} />
          <Trader>Trader</Trader>
          <Slash>/</Slash>
          <ClientArea>Client Area</ClientArea>
          <Slash>/</Slash>
          <Name>XXX</Name>
        </IconRoot>
        <Greeting>Good Morning, Thomas!</Greeting>
      </SectionOne>
      <SectionTwo>
        <Ride>Select Your Ride:</Ride>
        <RideInfo>
          <RideNumber>#1234324535 - INTERIM 1</RideNumber>
          <ArrowIcon src={Arrow} />
        </RideInfo>
      </SectionTwo>
    </Container>
  );
};

export default Header;
