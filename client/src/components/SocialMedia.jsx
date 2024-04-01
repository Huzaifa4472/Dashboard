import React from "react";
import styled from "styled-components";
import Facebook from "../assets/SocialIcon/facebook.svg";
import Instagram from "../assets/SocialIcon/instagram.svg";
import Tiktok from "../assets/SocialIcon/tiktok.svg";
import Github from "../assets/SocialIcon/github.svg";
import Youtube from "../assets/SocialIcon/youtube.svg";
import Return from "../assets/SocialIcon/return.png";
import Button from "../assets/SocialIcon/on-button.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;
const SocialIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e6f5ff;
  border-radius: 12px;
  width: 39px;
  height: 35px;
`;
const Icon = styled.img`
  padding: 5px;
  height: 20px;
  width: 20px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  gap: 25px;
  color: white;
`;
const Mode = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const ModeIcon = styled.img`
  width: 20px;
  height: 15px;
  object-fit: cover;
`;
const ModeText = styled.div``;
const Underline = styled.div`
  height: 2px;
  width: 90%;
  background-color: #b1dfff14;
`;
const Homepage = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const BackIcon = styled.img`
  width: 15px;
  height: 15px;
`;
const HomeText = styled.div``;
const SocialMedia = () => {
  return (
    <Container>
      <SocialIcon>
        <Icons>
          <Icon src={Instagram} />
        </Icons>
        <Icons>
          <Icon src={Tiktok} />
        </Icons>
        <Icons>
          <Icon src={Facebook} />
        </Icons>
        <Icons>
          <Icon src={Youtube} />
        </Icons>
        <Icons>
          <Icon src={Github} />
        </Icons>
      </SocialIcon>
      <Content>
        <Mode>
          <ModeIcon src={Button} />
          <ModeText>Light/Dark Mode</ModeText>
        </Mode>
        <Underline></Underline>
        <Homepage>
          <BackIcon src={Return} />
          <HomeText>Back to Homepage</HomeText>
        </Homepage>{" "}
        <Underline></Underline>
      </Content>
    </Container>
  );
};

export default SocialMedia;
