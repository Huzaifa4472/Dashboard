import React from "react";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import RightSide from "../components/Right";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;
const Section = styled.div`
  display: flex;
  justify-content: space-around;
  width: 93%;
  gap: 2rem;
`;
const Left = styled.div`
  flex: 1;
  height: 100%;
`;
const Right = styled.div`
  flex: 3;
  height: 100px;
`;
const Mainpage = () => {
  return (
    <Container>
      <Section>
        <Left>
          <Sidebar />
        </Left>
        <Right>
          <RightSide />
        </Right>
      </Section>
    </Container>
  );
};

export default Mainpage;
