// components/Footer.js

import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
  SocialIcon,
  SocialText
} from "./FooterStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "10px",
          fontFamily: 'Poppins', // Added font-family
          fontWeight: 'medium' // Added font-weight
        }}
      >
        E-Commerce Company Name
      </h1>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahmedabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <SocialIcon>
                <FontAwesomeIcon icon={faFacebookF} />
              </SocialIcon>
              <SocialText>Facebook</SocialText>
            </FooterLink>
            <FooterLink href="#">
              <SocialIcon>
                <FontAwesomeIcon icon={faInstagram} />
              </SocialIcon>
              <SocialText>Instagram</SocialText>
            </FooterLink>
            <FooterLink href="#">
              <SocialIcon>
                <FontAwesomeIcon icon={faTwitter} />
              </SocialIcon>
              <SocialText>Twitter</SocialText>
            </FooterLink>
            <FooterLink href="#">
              <SocialIcon>
                <FontAwesomeIcon icon={faYoutube} />
              </SocialIcon>
              <SocialText>Youtube</SocialText>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
