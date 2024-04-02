import React from "react";
import styled from "styled-components";
import { SummaryData } from "../data/Data";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

const Container = styled.div`
  width: 100%;
`;
const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0rem;
  gap: 1.7rem;
`;
const HeadArea = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 3px 0px;
  border-bottom: 1px solid #e7e4e8cc;
`;
const Head = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #7b7b7b;
`;

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={0} fill="#004D99" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="#004D99"
        strokeWidth={2}
      />
    </g>
  );
}

const Record = ({ value }) => {
  const inlineStyling = {
    margin: "-25px 0px",
    padding: "0px",
  };
  const color = value >= 0 ? "#059669" : "#EF4444";
  return (
    <Container>
      <InfoArea>
        {SummaryData.map((item) => (
          <HeadArea key={item.id}>
            <Head>{item.Date}</Head>
            <Head>{item.Trades}</Head>
            <Head>{item.Lots}</Head>
            <Head style={inlineStyling}>
              <GaugeContainer
                width={60}
                height={60}
                startAngle={-100}
                endAngle={100}
                value={80}
                sx={{ p: 0 }}
              >
                <GaugeReferenceArc />
                <GaugeValueArc />
                <GaugePointer />
              </GaugeContainer>
            </Head>

            <Head style={{ color }}>
              {item.Result}
              {value}
            </Head>
          </HeadArea>
        ))}
      </InfoArea>
    </Container>
  );
};

export default Record;
