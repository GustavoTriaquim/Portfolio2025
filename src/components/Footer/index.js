import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContactButton from "../ContactButton";
import ContainerFooterSidebar from "../ContainerFooterSideBar";
import ImageLogo from "../ImageLogo";

const FooterContainer = styled.footer`
  background-color: #0a3d88;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-top: 3px solid #fff;
  box-shadow: 0px -5px 20px -8px #0c0c0c;
  width: 100%;

  @media (max-width: 1000px){
    display: none;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <ImageLogo />
      <ContainerFooterSidebar />
      <div>
        <Link to="/contato">
          <ContactButton>CONTATE-ME</ContactButton>
        </Link>
      </div>
    </FooterContainer>
  );
}

export default Footer;