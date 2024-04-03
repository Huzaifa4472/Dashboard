import React from "react";
import { HistoryData } from "../data/dataset";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const HeadArea = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0.9rem 0rem;
  border-bottom: 1px solid #e7e4e8cc;
`;
const Head = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #7b7b7b;
  padding: 10px;
`;

const History = () => {
  return (
    <Container>
      <InfoArea>
        {HistoryData.map((item) => (
          <HeadArea key={item.id}>
            <Head>{item.Ticket}</Head>
            <Head>{item.Open}</Head>
            <Head>{item.Close}</Head>
            <Head>{item.Action}</Head>
            <Head>{item.OpenPrice}</Head>
            <Head>{item.ClosePrice}</Head>
            <Head>{item.SL}</Head>
            <Head>{item.Result}</Head>
          </HeadArea>
        ))}
      </InfoArea>
    </Container>
  );
};

export default History;
