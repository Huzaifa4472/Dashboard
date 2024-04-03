import React from "react";
import styled from "styled-components";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import Track from "../assets/images/Track.svg";

const Container = styled.div`
  height: 8.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
`;
const Box = styled.div`
  width: calc(20%);
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 8px 17px 0px #0000001a;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Text = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #000000;
`;
const Underline = styled.div`
  background-color: #e7e4e8cc;
  height: 1px;
  width: 100%;
`;
const TextArea = styled.div`
  color: #025c99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const Title = styled.div`
  font-size: 9px;
  font-weight: 500;
  font-family: sans-serif;
`;
const Amount = styled.div`
  color: #025c99;
  font-size: 13px;
`;
const Guage = styled.div``;
const Para = styled.p`
  width: 70%;
  font-size: 9px;
  text-align: center;
  text-transform: uppercase;
  line-height: 13px;
`;
const GaugeClass = styled.div``;
const GaugeAmountClass = styled.div``;

const ButtonSymbolArea = styled.div`
  display: flex;
  flex-direction: row;
  color: #004d99;
  justify-content: space-around;
  width: 60%;
  gap: 10px;
`;
const SwitchText = styled.div`
  font-size: 9px;
  font-weight: 500;
  color: #004d99;
  font-family: sans-serif;
`;
const TextFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 17px;
`;
const Symbols = styled.div``;
const Button = styled.img``;

const settings = {
  width: 80,
  height: 80,
  value: 3,
};

const Objective = () => {
  return (
    <Container>
      <Box>
        <Text>Account</Text>
        <Underline></Underline>
        <TextArea>
          <Title>Equity</Title>
          <Amount>$50,000.00</Amount>
        </TextArea>
        <TextArea>
          <Title>Balance</Title>
          <Amount>$50,000.00</Amount>
        </TextArea>
      </Box>
      <Box>
        <Text>Virtual Daily Loss</Text>
        <Underline></Underline>
        <GaugeAmountClass>
          <Amount>$2,000.00</Amount>
          <Guage></Guage>
        </GaugeAmountClass>
        <Para>Rule Breach Level Today: $48,000.00</Para>
      </Box>
      <Box>
        <Text>Virtual Overall Loss</Text>
        <Underline></Underline>
        <GaugeAmountClass>
          <Amount>$3,500.00</Amount>
          <Guage></Guage>
        </GaugeAmountClass>
        <Para>Rule Breach Level: $46,500.00</Para>
      </Box>
      <Box>
        <Text>Virtual Profit Target</Text>
        <Underline></Underline>
        <GaugeAmountClass>
          <Amount>$3,500.00</Amount>
          <Guage></Guage>
        </GaugeAmountClass>
        <Para>Required Balance Level: $55,000.00</Para>
      </Box>

      <Box>
        <Text>Minimum Trading Days</Text>
        <Underline></Underline>
        <GaugeClass>
          <Gauge
            {...settings}
            cornerRadius="50%"
            sx={(theme) => ({
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 17,
                fontWeight: 700,
                fontFamily: "sans-serif",
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: "#013659",
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: "#B1DFFF",
              },
            })}
          />
        </GaugeClass>
      </Box>
      <Box>
        <Text>Customize</Text>
        <Underline></Underline>

        <TextFlex>
          <SwitchText>Switch Display</SwitchText>
          <ButtonSymbolArea>
            <Symbols>%</Symbols>
            <Button src={Track} />
            <Symbols>$</Symbols>
          </ButtonSymbolArea>
        </TextFlex>
      </Box>
    </Container>
  );
};

export default Objective;
