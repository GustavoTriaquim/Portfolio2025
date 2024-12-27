import styled from "styled-components";

export const Paragraph = styled.p`
  width: ${props => props.paragraphWidth || '70%'};
  line-height: ${props => props.paragraphLineHeight || '70px'};
  background-color: ${props => props.paragraphBackgroundColor || 'transparent'};
  color: ${props => props.paragraphColor || '#0c0c0c'};
  font-size: ${props => props.paragraphFontSize || '20px'};
  text-align: ${props => props.paragraphTextAlign || 'justify'};
  font-weight: ${props => props.paragraphFontWeight || '400'};

  @media (max-width: 1000px){
    font-size: ${props => props.paragraphFontSizeMedia};
    line-height: ${props => props.paragraphLineHeightMedia};
    width: ${props => props.paragraphWidthMedia};
  }
`;

export const StrongParagraph = styled.strong`
  color: ${props => props.strongColor || '#0a3d88'};
`;