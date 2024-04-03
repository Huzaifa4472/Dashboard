import React from "react";
import styled from "styled-components";
import { DatasetOne, DatasetTwo } from "../data/dataset";
const Container = styled.div`
  width: 93%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const TextArea = styled.div`
  padding: 5px;
  width: calc(29%);
  color: black;
  border: 1px dashed #e1e5ea;
  font-size: 12px;
`;
const TextAreaTwo = styled.div`
  width: calc(22%);
  padding: 5px 2px;
  color: black;
  border: 1px dashed #e1e5ea;
  font-size: 12px;
`;
const Title = styled.div``;
const Amount = styled.div`
  color: #7b7b7b;
`;

export const StatesOne = () => {
  const inlineStyling = {
    width: "20%",
  };
  return (
    <Container>
      {DatasetOne.map((item) => (
        <TextArea key={item.id}>
          <Title>{item.title}</Title>
          <Amount>{item.amount}</Amount>
        </TextArea>
      ))}
    </Container>
  );
};
export const StatesTwo = () => {
  return (
    <Container>
      {DatasetTwo.map((item) => (
        <TextAreaTwo key={item.id}>
          <Title>{item.title}</Title>
          <Amount>{item.amount}</Amount>
        </TextAreaTwo>
      ))}
    </Container>
  );
};
