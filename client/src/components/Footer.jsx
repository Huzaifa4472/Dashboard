import React from "react";
import styled from "styled-components";
import FlagOne from "../assets/SocialIcon/austria.png";
import FlagTwo from "../assets/SocialIcon/greek.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  gap: 2rem;
`;
const Paragraph = styled.p`
  line-height: 20px;
  letter-spacing: 0px;
  color: #333333;
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 13px;
  font-weight: 600;
`;
const CopyText = styled.div``;
const SocialSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Text = styled.div``;
const Flag = styled.img`
  height: 30px;
  width: 30px;
`;
const TermsSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  text-decoration: underline;
  color: #025c99;
`;
const TermsAndCondi = styled.a``;
const Cookies = styled.a``;
const Privacy = styled.a``;

const Footer = () => {
  return (
    <Container>
      <Paragraph>
        All information provided on this site is intended solely for educational
        purposes related to trading on financial markets and does not serve in
        any way as a specific investment recommendation, business
        recommendation, investment opportunity analysis or similar. AlpinEdge
        only provides services of simulated trading and educational tools for
        traders. AlpinEdge does not act as a broker and does not accept any
        deposits. The offered technical solution for the AlpinEdge platforms and
        data feed is powered by third-party liquidity providers. The information
        on this site is not directed at residents in any country or jurisdiction
        where such distribution or use would be contrary to local laws or
        regulations.
        <br />
        All trading accounts are live accounts on live servers funded with
        virtual capital and simulated real-market execution (STP/DMA).
      </Paragraph>
      <Section>
        <CopyText>Copyright - AlpinEdge</CopyText>
        <SocialSection>
          <Text>Technology built in-house in Austria</Text>
          <Flag src={FlagOne} />
          <Flag src={FlagTwo} />
        </SocialSection>
        <TermsSection>
          <TermsAndCondi>Terms & Conditions</TermsAndCondi>
          <Cookies>Cookies Settings</Cookies>
          <Privacy>Privacy Policy</Privacy>
        </TermsSection>
      </Section>
    </Container>
  );
};

export default Footer;
