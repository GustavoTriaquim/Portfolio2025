import styled from "styled-components";

export const Title = styled.h1`
  width: ${props => props.titleWidth || '100%'};
  line-height: ${props => props.titleLineHeight || 'normal'};
  background-color: ${props => props.titleBackgroundColor || 'transparent'};
  color: ${props => props.titleColor || '#0c0c0c'};
  font-size: ${props => props.titleFontSize || '25px'};
  text-align: ${props => props.titleTextAlign || 'center'};
  margin: ${props => props.titleMargin || '0'};

  @media (max-width: 1000px) {
    font-size: ${props => props.titleFontSizeMedia};
    line-height: ${props => props.titleLineHeightMedia};
  }
`;