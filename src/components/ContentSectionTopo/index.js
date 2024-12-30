import React from "react";
import { Title } from '../Texts/Title';
import styled from "styled-components";
import { Paragraph } from '../Texts/Paragraph';
import { CenterDiv } from '../Divs/CenterDiv';

const SectionContentTopo = styled.section`
  padding: 50px 21% 70px 21%;
  
  @media (max-width: 1000px){
    padding: 25px 8%;
  }
`;

const SectionContentTopoInterface = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

function ContentTopo() {
  return (
    <SectionContentTopo>
      <SectionContentTopoInterface>
        <CenterDiv
          paddingCenterDiv='0px'
        >
          <Title
            titleLineHeight='60px'
            titleFontSize='42px'
            titleFontSizeMedia='30px'
            titleLineHeightMedia='40px'
          >BEM-VINDO(A) AO PORTFOLIO DE</Title>
          <Title
            titleColor='#0a3b88'
            titleFontSize='42px'
            titleFontSizeMedia='30px'
          >GUSTAVO BRITTO TRIAQUIM</Title>
        </CenterDiv>
        <CenterDiv
          displayCenterDiv='flex'
        >
          <Paragraph
            paragraphWidth='100%'
            paragraphLineHeight='50px'
            paragraphFontSize='30px'
            paragraphFontWeight='500'
            paragraphFontSizeMedia='20px'
            paragraphLineHeightMedia='30px'
          >
            Formado pelo novo Ensino Medio Tecnico, sou apaixonado por tecnologia e inovação.
          </Paragraph>
          <Paragraph
            paragraphWidth='100%'
            paragraphLineHeight='50px'
            paragraphFontSize='30px'
            paragraphFontWeight='500'
            paragraphFontSizeMedia='20px'
            paragraphLineHeightMedia='30px'
          >
            Desde cedo, fui inspirado pelo universo tecnológico, mergulhando em projetos como jogos interativos, rastreadores solares e muito mais.
          </Paragraph>
          <Paragraph
            paragraphWidth='100%'
            paragraphLineHeight='50px'
            paragraphFontSize='30px'
            paragraphFontWeight='500'
            paragraphFontSizeMedia='20px'
            paragraphLineHeightMedia='30px'
          >
            Estou em constante busca por novas oportunidades para explorar minha criatividade, desenvolver projetos autorais e contribuir para o sucesso das empresas em que trabalho.
          </Paragraph>
          <Paragraph
            paragraphWidth='100%'
            paragraphLineHeight='50px'
            paragraphFontSize='30px'
            paragraphFontWeight='500'
            paragraphFontSizeMedia='20px'
            paragraphLineHeightMedia='30px'
          >
            Seja bem-vindo ao meu portfólio! Aqui você encontrará alguns dos meus trabalhos e ideias que refletem minha dedicação e paixão pela área.
          </Paragraph>
        </CenterDiv>
      </SectionContentTopoInterface>
    </SectionContentTopo>
  );
}

export default ContentTopo;