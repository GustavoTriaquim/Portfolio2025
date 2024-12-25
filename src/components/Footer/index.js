import React from "react";
import styled from "styled-components";
import Pato from '../../assets/images/pato.png';
import { SuperSubtitle, MiniSubtitle } from "../Texts/Subtitle";

const FooterContainer = styled.footer`
  background-color: #0a3d88;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-top: 3px solid #fff;
  box-shadow: 0px -5px 20px -8px #0c0c0c;
  width: 100%;
`;

const ContainerFooterImage = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 15px;
  padding: 5px 15px;
  background-color: #bd6d3c;
`;

const FooterImage = styled.img`
  width: 70px;
`;

const ContainerFooterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const FooterA = styled.a`
  color: #f1f1f1;
  text-decoration: underline;
`;

const FooterButton = styled.button`
  padding: 25px 50px;
  font-size: 20px;
  border-radius: 15px;
  border: none;
  background-color: #f1f1f1;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <ContainerFooterImage>
        <FooterImage src={Pato} alt='Pato' />
      </ContainerFooterImage>
      <ContainerFooterText>
        <SuperSubtitle
          superSubtitleColor='#f1f1f1'
        >SITE CRIADO COM REACT.JS</SuperSubtitle>
        <MiniSubtitle
          miniSubtitleColor='#f1f1f1'
        >Por Gustavo Triaquim</MiniSubtitle>
        <FooterA href="https://github.com/GustavoTriaquim/Portfolio2025">Ver codigo no Github</FooterA>
      </ContainerFooterText>
      <div>
        <a href="/">
          <FooterButton>CONTATE-ME</FooterButton>
        </a>
      </div>
    </FooterContainer>
  );
}

export default Footer;