import styled from "styled-components";

export const ContentSectionStyle = styled.section`
  padding: ${props => props.paddingBorderTop || '50px 5%'};
  border-top: ${props => props.styleBorderTop || '3px solid #fff'};

  @media (max-width: 1000px){
    height: ${props => props.heightSectionStyle};
  }
`;