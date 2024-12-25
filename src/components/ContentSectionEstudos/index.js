import React from "react";
import { ContentSectionStyle } from "../ContentSectionStyle";
import { CenterDiv } from "../Divs/CenterDiv";
import { Title } from "../Texts/Title";
import { FlexDiv } from "../Divs/FlexDiv";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen, faFigma, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChartDiagram } from "@fortawesome/free-solid-svg-icons";
import { MiniSubtitle, Subtitle } from "../Texts/Subtitle";

const ContainerContentSectionEstudos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const CardEstudos = styled.div`
  background-color: #e7e7e7;
  border: 1px solid #0a3d889d;
  border-radius: 15px;
  box-shadow: 0px 0px 8px #0a3d88;
  padding: 25px 32px;
  height: 300px;
  width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #0c0c0c;
  font-size: 40px;
  margin: 40px 10px;
`;

const EstudosButton = styled.button`
  background-color: #0a3d88;
  border: none;
  border-radius: 15px;
  padding: 15px 20px;
  font-size: 18px;
  color: #f1f1f1;
  transition: 0.3s;

  &:hover{
    transform: scale(1.05);
    cursor: pointer;
  }
`;

function ContentSectionEstudos() {
  return (
    <ContentSectionStyle id='estudos'>
      <CenterDiv
        displayCenterDiv='flex'
        paddingCenterDiv='0px 0px 0px 0px'
      >
        <Title
          titleFontSize='35px'
          titleMargin='0px 0px 80px 0px'
        >ESTUDOS</Title>
        <ContainerContentSectionEstudos>
          <FlexDiv
            gapFlexDiv='100px'
          >
            <CardEstudos>
              <Subtitle
                subtitleFontSize='23px'
              >HTML, CSS and JS</Subtitle>
              <MiniSubtitle>(Alura)</MiniSubtitle>
              <StyledIcon icon={faCodepen} />
              <a href="/certificates/html-css-js">
                <EstudosButton>Documents</EstudosButton>
              </a>
            </CardEstudos>
            <CardEstudos>
              <Subtitle
                subtitleFontSize='23px'
              >Figma</Subtitle>
              <MiniSubtitle>(Alura)</MiniSubtitle>
              <StyledIcon icon={faFigma} />
              <a href="/certificates/figma">
                <EstudosButton>Documents</EstudosButton>
              </a>
            </CardEstudos>
          </FlexDiv>
          <FlexDiv
            gapFlexDiv='100px'
          >
            <CardEstudos>
              <Subtitle
                subtitleFontSize='23px'
              >React.js</Subtitle>
              <MiniSubtitle>(Alura)</MiniSubtitle>
              <StyledIcon icon={faReact} />
              <a href="/certificates/react">
                <EstudosButton>Documents</EstudosButton>
              </a>
            </CardEstudos>
            <CardEstudos>
              <Subtitle
                subtitleFontSize='23px'
              >Desenvolvimento de Sistemas</Subtitle>
              <MiniSubtitle>(SENAI)</MiniSubtitle>
              <StyledIcon icon={faChartDiagram} />
              <a href="/certificates/ads">
                <EstudosButton>Documents</EstudosButton>
              </a>
            </CardEstudos>
            <CardEstudos>
              <Subtitle
                subtitleFontSize='23px'
              >Git and Github</Subtitle>
              <MiniSubtitle>(Alura)</MiniSubtitle>
              <StyledIcon icon={faGithub} />
              <a href="/certificates/git">
                <EstudosButton>Documents</EstudosButton>
              </a>
            </CardEstudos>
          </FlexDiv>
        </ContainerContentSectionEstudos>
      </CenterDiv>
    </ContentSectionStyle>
  )
}

export default ContentSectionEstudos;