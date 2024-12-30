import styled from "styled-components";

export const ContentSectionStyle = styled.section`
  padding: ${props => props.stylePadding || '50px 5%'};
  border-top: ${props => props.styleBorderTop || '3px solid #fff'};
  margin: ${props => props.styleMargin || '0 auto'};

  @media (max-width: 1000px){
    height: ${props => props.heightSectionStyle};
  }
`;