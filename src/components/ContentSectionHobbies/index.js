import React from "react";
import { ContentSectionStyle } from "../ContentSectionStyle";
import { CenterDiv } from '../Divs/CenterDiv';
import { Title } from '../Texts/Title';
import { FlexDiv } from '../Divs/FlexDiv';
import Futsal from '../../assets/images/HobbieFutsal.jpg';
import Musica from '../../assets/images/HobbieViolao.jpg';
import ImageComponent from "../ImageComponent";
import styled from "styled-components";
import { Paragraph } from '../Texts/Paragraph';

const ContainerSectionHobbies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

function ContentSectionHobbie() {
  return (
    <ContentSectionStyle id="hobbies">
      <CenterDiv
        paddingCenterDiv='0px'
        display='flex'
        gapCenterDiv='70px'
      >
        <Title
          titleFontSize='35px'
          style={{ marginBottom: '70px' }}
        >HOBBIES</Title>
        <ContainerSectionHobbies>
          <FlexDiv
            backgroundFlexDiv='#e7e7e7'
            paddingFlexDiv='30px 15px'
            borderFlexDiv='1px solid #4370b4'
            radiusFlexDiv='25px'
          >
            <ImageComponent
              src={Futsal} alt='futsal' maxWidth='100%' disableHover={true} />
            <Paragraph
              paragraphWidth='50%'
              paragraphLineHeight='50px'
              paragraphFontSize='22px'
            >
              Para mim, futsal é uma forma de escapar um pouco da rotina e curtir o momento. Os treinos são uma maneira de liberar a cabeça e, claro, melhorar minhas habilidades, mas é dentro de campo, com os amigos, que o esporte realmente ganha sentido. Aquela vibe de equipe, o apoio dos colegas e a vontade de ganhar juntos tornam tudo ainda mais especial. No fim, o futsal é meu jeito de fazer o que amo, com muita diversão.
            </Paragraph>
          </FlexDiv>
          <FlexDiv
            backgroundFlexDiv='#e7e7e7'
            paddingFlexDiv='30px 15px'
            borderFlexDiv='1px solid #4370b4'
            radiusFlexDiv='25px'
          >
            <Paragraph
              paragraphWidth='50%'
              paragraphLineHeight='50px'
              paragraphFontSize='22px'
            >
              Cada instrumento tem sua magia: a energia da bateria, a harmonia do teclado e a leveza do violão me permitem criar e me conectar com diferentes estilos e emoções.

              Tocar música é como entrar em um universo onde tudo faz sentido. É incrível como as melodias têm o poder de transformar o humor e trazer novas perspectivas. Além disso, a música me ajuda a relaxar, a me desafiar e a compartilhar momentos especiais com outras pessoas. Seja sozinho ou com amigos, tocar um instrumento sempre traz uma sensação única de liberdade e realização.
            </Paragraph>
            <ImageComponent src={Musica} alt='musica' maxWidth='100%' disableHover={true} />
          </FlexDiv>

        </ContainerSectionHobbies>
      </CenterDiv>
    </ContentSectionStyle>
  )
}

export default ContentSectionHobbie;