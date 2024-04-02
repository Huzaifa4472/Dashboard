import React from "react";
import styled from "styled-components";
import Objective from "./Objective";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
`;
const Text = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #171717;
`;
const Objectives = () => {
  return (
    <Container>
      <Text>Evaluation Objectives</Text>
      <Objective />
    </Container>
  );
};

export default Objectives;
