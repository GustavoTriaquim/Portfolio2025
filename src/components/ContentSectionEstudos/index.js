import React, { useEffect, useState } from "react";
import { ContentSectionStyle } from "../ContentSectionStyle";
import { CenterDiv } from "../Divs/CenterDiv";
import { Title } from "../Texts/Title";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen, faFigma, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChartDiagram } from "@fortawesome/free-solid-svg-icons";
import { MiniSubtitle, Subtitle } from "../Texts/Subtitle";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { FlexDiv } from '../Divs/FlexDiv';

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

  @media (max-width: 1000px) {
    justify-content: center;
    box-shadow: none;
    
    &:hover {
      transform: scale(1.00);
    }
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

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .stick-list {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .slick-slide {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .slick-slide > div {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
`;

const StyledSliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 15px;
`;

function ContentSectionEstudos() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1000);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ContentSectionStyle
      id='estudos'
      stylePadding='20px'
    >
      <CenterDiv
        displayCenterDiv='flex'
        paddingCenterDiv='0px 0px 0px 0px'
        gapCenterDivMedia='0px'
      >
        <Title
          titleFontSize='35px'
          titleMargin='0px 0px 80px 0px'
          titleMarginMedia='0px 0px 20px'
        >ESTUDOS</Title>
        {isMobile ? (
          <StyledSlider {...sliderSettings}>
            <StyledSliderContainer>
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
            </StyledSliderContainer>
            <StyledSliderContainer>
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
            </StyledSliderContainer>
            <StyledSliderContainer>
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
            </StyledSliderContainer>
            <StyledSliderContainer>
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
            </StyledSliderContainer>
            <StyledSliderContainer>
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
            </StyledSliderContainer>
          </StyledSlider>
        ) : (
          <>
            <FlexDiv
              gapFlexDiv='40px'
            >
              <div>
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
              </div>
              <div>
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
              </div>
            </FlexDiv>
            <FlexDiv
              gapFlexDiv='40px'
            >
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
            </FlexDiv>
          </>
        )}
      </CenterDiv>
    </ContentSectionStyle >
  );
}

export default ContentSectionEstudos;