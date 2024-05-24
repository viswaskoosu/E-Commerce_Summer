// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
  padding-top: 2.5%;
  background-color: rgb(30, 23, 16);
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;

  &:hover {
    color: #FFAD33;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 500; /* Medium */
  font-family: 'Poppins', sans-serif;
`;

export const SocialIcon = styled.i`
  font-size: 24px;
  color: #fff;
  margin-right: 10px;
`;

export const SocialText = styled.span`
  font-size: 18px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
`;
