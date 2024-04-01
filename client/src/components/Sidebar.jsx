import React from "react";
import styled from "styled-components";
import List from "./List";
import SocialMedia from "./SocialMedia";
import Company from "./Company";
const Container = styled.div`
  background-color: #004d99;
  border-radius: 20px;
`;
const Section = styled.div`
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const EvaluateButton = styled.div`
  padding: 12px 24px;
  border-radius: 29px;
  color: #004d99;
  background-color: #e6f5ff;
  font-size: 16px;
  font-weight: 700;
  width: 202px;
`;
const Sidebar = () => {
  return (
    <Container>
      <Section>
        <EvaluateButton>BUY EVALUATION</EvaluateButton>
        <List />
        <SocialMedia />
        <Company />
      </Section>
    </Container>
  );
};

export default Sidebar;
