import React from "react";
import styled from "styled-components";
import { MiniSubtitle, SuperSubtitle } from "../Texts/Subtitle";

const ContainerFooterSidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const ContainerFooterSidebarLink = styled.a`
  width: 100%;
  color: #f1f1f1;
  text-decoration: underline;
  text-align: left;
`;

function ContainerFooterSidebar() {
  return (
    <ContainerFooterSidebarStyled>
      <SuperSubtitle
        superSubtitleColor='#f1f1f1'
        superSubtitleTextAlign='left'
      >SITE CRIADO COM REACT.JS</SuperSubtitle>
      <MiniSubtitle
        miniSubtitleColor='#f1f1f1'
        miniSubtitleTextAlign='left'
      >Por Gustavo Triaquim</MiniSubtitle>
      <ContainerFooterSidebarLink href="https://github.com/GustavoTriaquim/Portfolio2025">Ver codigo no Github</ContainerFooterSidebarLink>
    </ContainerFooterSidebarStyled>
  );
}

export default ContainerFooterSidebar;