import React from "react";
import { ContentSectionStyle } from '../ContentSectionStyle';
import { CenterDiv } from '../Divs/CenterDiv';
import { FlexDiv } from '../Divs/FlexDiv';
import { Title } from '../Texts/Title';
import { MiniSubtitle, SuperSubtitle } from "../Texts/Subtitle";
import styled from "styled-components";

const DivContatoPage = styled.div`
  width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border: 1px solid gray;
  padding: 30px 25px;
  background-color: #ededed;
  border-radius: 15px;
`;

function ContatoPage() {
  return (
    <ContentSectionStyle
      paddingBorderTop='64px 7%'
      styleBorderTop='none'
    >
      <CenterDiv
        displayCenterDiv='flex'
        heightCenterDiv='77vh'
        justifyCenterDiv='start'
        gapCenterDiv='180px'
        borderCenterDiv='2px solid #0a3d88'
        radiusCenterDiv='25px'
        shadowBoxCenterDiv='0px 0px 8px gray'
        backgroundCenterDiv='#e7e7e7'
      >
        <Title
          titleFontSize='50px'
        >CONTATE-ME</Title>
        <DivContatoPage>
          <FlexDiv
            gapFlexDiv='20px'
          >
            <SuperSubtitle
              superSubtitleTextAlign='left'
              superSubtitleFontSize='40px'
            >E-MAIL:</SuperSubtitle>
            <MiniSubtitle
              miniSubtitleFontSize='30px'
            >gustavotriaquim6@gmail.com</MiniSubtitle>
          </FlexDiv>
          <FlexDiv
            gapFlexDiv='20px'
          >
            <SuperSubtitle
              superSubtitleTextAlign='left'
              superSubtitleFontSize='40px'
            >WHATSAPP:</SuperSubtitle>
            <MiniSubtitle
              miniSubtitleFontSize='30px'
            >+55 (41) 9 99755-6917</MiniSubtitle>
          </FlexDiv>
        </DivContatoPage>
      </CenterDiv>
    </ContentSectionStyle>
  );
}

export default ContatoPage;