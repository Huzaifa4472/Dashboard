import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Details from "./Details";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 5rem;
`;
const RightSide = styled.div`
  flex: 1.5;
`;
const LeftSide = styled.div`
  flex: 1;
`;
const Right = () => {
  return (
    <>
      <Header />
      <Container>
        <RightSide>
          <Dashboard />
        </RightSide>
        <LeftSide>
          <Details />
        </LeftSide>
      </Container>
    </>
  );
};

export default Right;
