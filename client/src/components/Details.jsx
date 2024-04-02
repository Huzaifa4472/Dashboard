import React from "react";
import styled from "styled-components";
import Login from "../assets/images/login.png";
import support from "../assets/images/support.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Text = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #171717;
  font-family: "Poppins", sans-serif;
`;
const DetailSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0rem;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 8px 17px 0px #0000001a;
  gap: 2rem;
`;
const TextArea = styled.div`
  width: 90%;
  color: #666666;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
`;
const TextField = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
`;
const HeadText = styled.div`
  font-weight: 700;
`;
const FieldText = styled.div``;
const Underline = styled.div`
  background-color: #8888883d;
  height: 1px;
  width: 85%;
`;
const ButtonSection = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 14px;
  font-weight: 400;
  font-family: sans-serif;
`;
const Buttons = styled.div`
  background-color: trasnparent;
  color: #024573;

  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 13px;
  border-radius: 42px;
  border: 1px solid #004d99;
  &.active {
    background-color: #024573;
    color: white;
  }
`;
const ButtonIcon = styled.img`
  height: 18px;
  width: 18px;
`;
const Button = styled.div``;
const Details = () => {
  return (
    <Container>
      <Text>Details</Text>
      <DetailSection>
        <TextArea>
          <TextField>
            <HeadText>Status:</HeadText>
            <FieldText>Ongoing</FieldText>
          </TextField>
          <Underline></Underline>
          <TextField>
            <HeadText>Start:</HeadText>
            <FieldText>12 March 2024 08:50:0</FieldText>
          </TextField>
          <Underline></Underline>
          <TextField>
            <HeadText>End:</HeadText>
            <FieldText>02 April 2024 08:50:02</FieldText>
          </TextField>
          <Underline></Underline>
          <TextField>
            <HeadText>Platform:</HeadText>
            <FieldText>MT5+ | JFD Brokers</FieldText>
          </TextField>
          <Underline></Underline>
          <TextField>
            <HeadText>Last Updated:</HeadText>
            <FieldText>12 March 2024 08:50:02</FieldText>
          </TextField>{" "}
        </TextArea>

        <ButtonSection>
          <Buttons>
            <ButtonIcon src={Login} />
            <Button>Login credentials</Button>
          </Buttons>
          <Buttons>
            <ButtonIcon src={support} />
            <Button>Get Support</Button>
          </Buttons>
        </ButtonSection>
      </DetailSection>
    </Container>
  );
};

export default Details;
