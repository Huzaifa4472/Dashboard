import React from "react";
import styled from "styled-components";
import History from "./History";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Text = styled.div`
  font-size: 22px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  height: 100%;
`;
const TradeSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0rem;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 8px 17px 0px #0000001a;
  border: 1px solid #e7e7e7;
  background-color: #e6f5ff;
`;
const HeadArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.7rem 0rem;
`;
const Head = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

const TradeHistory = () => {
  return (
    <Container>
      <Text>Trade History</Text>
      <TradeSection>
        <HeadArea>
          <Head>Ticket</Head>
          <Head>Open</Head>
          <Head>Close</Head>
          <Head>Action</Head>
          <Head>Open Price</Head>
          <Head>Close Price</Head>
          <Head>SL</Head>
          <Head>Record</Head>
        </HeadArea>
        <History />
      </TradeSection>
    </Container>
  );
};

export default TradeHistory;
