import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Details from "./Details";
import Objectives from "./Objectives";
import Statistics from "./Statistics";
import Summary from "./Summary";
import Footer from "../components/Footer";
import TradeHistory from "./TradeHistory";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const SectionOne = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
`;
const DashboardSide = styled.div`
  flex: 1.5;
`;
const DetailSide = styled.div`
  flex: 1;
`;
const SectionTwo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 1rem;
  gap: 2rem;
`;

const SummarySide = styled.div`
  flex: 1;
`;
const StatisticSide = styled.div`
  flex: 1;
  height: 5rem;
`;
const FooterSide = styled.div`
  margin: 3rem 0rem;
`;
const TradeSection = styled.div``;
const Right = () => {
  return (
    <Container>
      <Header />
      <SectionOne>
        <DashboardSide>
          <Dashboard />
        </DashboardSide>
        <DetailSide>
          <Details />
        </DetailSide>
      </SectionOne>
      <Objectives />
      <SectionTwo>
        <StatisticSide>
          <Statistics />
        </StatisticSide>
        <SummarySide>
          <Summary />
        </SummarySide>
      </SectionTwo>
      <TradeSection>
        <TradeHistory />
      </TradeSection>
      <FooterSide>
        <Footer />
      </FooterSide>
    </Container>
  );
};

export default Right;
