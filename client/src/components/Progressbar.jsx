import React from "react";
import styled from "styled-components";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

const Container = styled.div``;
const Title = styled.div`
  color: #004d99;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;
const PercentageGauge = styled.div`
  display: flex;
  justify-content: center;
`;

const settings = {
  width: 80,
  height: 80,
  value: "Long",
};

const Progressbar = () => {
  return (
    <Container>
      <Title>Win Rate</Title>
      <PercentageGauge>
        <Gauge
          {...settings}
          cornerRadius="50%"
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontWeight: 700,
              fontFamily: "sans-serif",
              fontSize: "13px",
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: "#013659",
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: "#B1DFFF",
            },
          })}
        />
        <Gauge
          {...settings}
          cornerRadius="50%"
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: "13px",
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
        <Gauge
          {...settings}
          cornerRadius="50%"
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: "13px",
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
      </PercentageGauge>
    </Container>
  );
};

export default Progressbar;
