import React from "react";
import styled from "styled-components";
import Record from "./Record";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Text = styled.div`
  font-size: 22px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;

  color: #171717;
`;
const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0rem;
  width: 100%;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 8px 17px 0px #0000001a;
  gap: 5px;
`;
const HeadArea = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const Head = styled.div`
  font-weight: 500;
  font-size: 14px;
`;
const Underline = styled.div`
  background-color: #e7e4e8cc;
  height: 1px;
  width: 90%;
`;
const Summary = () => {
  return (
    <Container>
      <Text>Daily Summary</Text>
      <InfoArea>
        <HeadArea>
          <Head>Date</Head>
          <Head>Trades</Head>
          <Head>Lots</Head>
          <Head>Max Daily Loss</Head>
          <Head>Result</Head>
        </HeadArea>
        <Underline></Underline>
        <Record />
      </InfoArea>
    </Container>
  );
};

export default Summary;
