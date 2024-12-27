import React from "react";
import { ContentSectionStyle } from "../ContentSectionStyle";
import { CenterDiv } from "../Divs/CenterDiv";
import { Title } from "../Texts/Title";
import { FlexDiv } from "../Divs/FlexDiv";
import { Paragraph, StrongParagraph } from '../Texts/Paragraph';
import ImageComponent from '../ImageComponent';
import GustavoImage from '../../assets/images/SobrePic.jpg';

function ContentSectionSobre() {
  return (
    <ContentSectionStyle id="sobre">
      <CenterDiv
        displayCenterDiv='flex'
        widthCenterDiv='100%'
        paddingCenterDiv='0'
        gapCenterDiv='50px'
      >
        <Title
          titleFontSize='35px'
        >SOBRE</Title>
        <FlexDiv
          justifyFlexDiv='space-between'
        >
          <CenterDiv
            displayCenterDiv='flex'
            widthCenterDiv='45%'
            gapCenterDiv='60px'
            paddingCenterDiv='15px 10px'
            shadowBoxCenterDiv='0px 0px 16px rgba(10, 60, 136, 0.18)'
            radiusCenterDiv='15px'
            widthCenterDivMedia='100%'
            gapCenterDivMedia='30px'
          >
            <Paragraph
              paragraphWidth='100%'
              paragraphLineHeight='35px'
              paragraphFontSize='23px'
            >
              Formado em dezembro de 2024 pelo <StrongParagraph>SESI/SENAI</StrongParagraph> em <StrongParagraph>Desenvolvimento de Sistemas</StrongParagraph>, minha paixão por tecnologia começou ainda na infância, inspirada pelo meu avô, que trabalha com a montagem de caixas eletrônicos. Desde cedo, fiquei fascinado pelo impacto prático e inovador que a tecnologia pode ter na vida das pessoas, e isso despertou em mim o desejo de seguir nessa área.
            </Paragraph>
            <Paragraph
              paragraphWidth='100%'
              paragraphLineHeight='35px'
              paragraphFontSize='23px'
            >
              Minha jornada começou no <StrongParagraph>ensino fundamental</StrongParagraph>, com aulas de <StrongParagraph>robótica</StrongParagraph> que despertaram minha curiosidade sobre programação e automação. Mais tarde, tive a oportunidade de estudar <StrongParagraph>Informática</StrongParagraph> no colégio técnico da <StrongParagraph>PUCPR</StrongParagraph>, onde ampliei meus conhecimentos e desenvolvi uma base sólida para minha formação no ensino técnico.
            </Paragraph>
            <Paragraph
              paragraphWidth='100%'
              paragraphLineHeight='35px'
              paragraphFontSize='23px'
            >
              Hoje, levo comigo essa inspiração familiar e a experiência adquirida ao longo do caminho para criar projetos que combinam criatividade, funcionalidade e impacto real.
            </Paragraph>
          </CenterDiv>
          <CenterDiv
            widthCenterDiv='50%'
            displayCenterDiv='flex'
            paddingCenterDiv='0px 0px 0px 150px'
            widthCenterDivMedia='100%'
            gapCenterDivMedia='30px'
            paddingCenterDivMedia='0px'
          >
            <ImageComponent
              src={GustavoImage} alt='Gustavo' maxWidth='100%' />
          </CenterDiv>
        </FlexDiv>
      </CenterDiv>
    </ContentSectionStyle >
  )
}

export default ContentSectionSobre;

