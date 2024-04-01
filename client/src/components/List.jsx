import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Home from "../assets/List/home.svg";
import Platform from "../assets/List/platform.svg";
import Profile from "../assets/List/profile.svg";
import Affiliate from "../assets/List/affiliate.svg";
import Headphone from "../assets/List/headphone.svg";
import Billing from "../assets/List/bill.svg";
import Stock from "../assets/List/stock.svg";
import Certificate from "../assets/List/certificate.svg";
import Calender from "../assets/List/calender.svg";

const Container = styled.div`
  color: #004d99;
  background: transparent;
  width: 80%;
`;
const Ul = styled.ul`
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 10px;
  letter-spacing: 1px;
`;
const ListItem = styled(NavLink)`
  display: flex;
  text-decoration: none;
  align-items: center;
  background: transparent;
  color: white;
  gap: 15px;
  padding: 15px 20px;
  border-radius: 39px;
  font-family: sans-serif;
  font-size: 15px;
  list-style: none;
  &.active {
    background-color: #e6f5ff;
    color: #004d99;
  }
`;
const Icon = styled.img`
  width: 15px;
  height: 15px;
  fill: white;
  background: transparent;
`;
const List = () => {
  return (
    <Container>
      <Ul>
        <ListItem to={"/dashboard"}>
          <Icon src={Home} />
          Dashboard
        </ListItem>
        <ListItem to={"/home"}>
          <Icon src={Profile} />
          Profile
        </ListItem>
        <ListItem to={"/platform"}>
          <Icon src={Platform} />
          Platform
        </ListItem>
        <ListItem to={"/billing"}>
          <Icon src={Billing} />
          Billing
        </ListItem>
        <ListItem to={"/details"}>
          <Icon src={Stock} />
          AlpinEdge Champions
        </ListItem>
        <ListItem to={"/record"}>
          <Icon src={Headphone} />
          Mountain Rescue
        </ListItem>
        <ListItem to={"/certificate"}>
          <Icon src={Certificate} />
          Certificates
        </ListItem>
        <ListItem to={"/affiliates"}>
          <Icon src={Affiliate} />
          Affiliates
        </ListItem>
        <ListItem to={"/calender"}>
          <Icon src={Calender} />
          Economic Calender
        </ListItem>
      </Ul>
    </Container>
  );
};

export default List;
