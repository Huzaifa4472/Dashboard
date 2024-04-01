import React from "react";
import styled from "styled-components";

import ImageLogo from "../assets/images/logo.png";
import ProfileLogo from "../assets/images/profile.jpeg";
import FlagLogo from "../assets/images/flag.png";
import Bell from "../assets/images/bell.png";
import icon from "../assets/images/icon.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem 0rem;
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 90%;
  border-radius: 5px;
  box-shadow: 4px 8px 16px 0px #00000014;
  padding: 0rem 1rem;
`;
const NavLogo = styled.div`
  height: 100%;
  width: 100%;
`;
const Logo = styled.img`
  height: 73px;
  width: 119px;
  object-fit: cover;
`;
const ProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0rem 2rem;
  color: #646464;
  gap: 30px;
`;
const DetailSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const NotificationIcon = styled.div`
  background-color: #e7e7e7;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 1px solid #c5c5c5;
`;
const Notification = styled.img`
  height: 24px;
  width: 24px;
`;

const Flag = styled.img`
  width: 30px;
  height: 22px;
  border-radius: 3px;
`;
const Language = styled.div`
  font-size: 14px;
  weight: 600;
`;
const Icon = styled.img`
  width: 15px;
  height: 13px;
  cursor: pointer;
`;
const Underline = styled.div`
  background-color: #88888880;
  width: 2px;
  height: 34px;
  border-radius: 10px;
`;
const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
`;
const UserProfile = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 100%;
`;
const UserInfo = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Username = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #404040;
`;
const User = styled.div`
  font-size: 14px;
`;
const ProfileSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid #c5c5c5;
`;
const SwitchAccountIcon = styled.img`
  width: 15px;
  height: 13px;
`;

const Navbar = () => {
  return (
    <Container>
      <Section>
        <NavLogo>
          <Logo src={ImageLogo} />
        </NavLogo>
        <ProfileSection>
          <DetailSection>
            <NotificationIcon>
              <Notification src={Bell} />
            </NotificationIcon>
            <Flag src={FlagLogo} />
            <Language>English</Language>

            <Icon src={icon} />
          </DetailSection>
          <Underline></Underline>
          <UserSection>
            <UserProfile src={ProfileLogo} />
            <UserInfo>
              <Username>Thomas</Username>
              <User>User</User>
            </UserInfo>
            <ProfileSwitch>
              <SwitchAccountIcon src={icon} />
            </ProfileSwitch>
          </UserSection>
        </ProfileSection>
      </Section>
    </Container>
  );
};

export default Navbar;
