import React from "react";
import styled from "styled-components";
import Pato from '../../assets/images/pato.png'

const ContainerFooterSidebarImage = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 15px;
  padding: 5px 15px;
  background-color: #bd6d3c;
`;

const FooterSidebarImage = styled.img`
  width: 70px;
`;

function ImageLogo() {
  return (
    <ContainerFooterSidebarImage>
      <FooterSidebarImage src={Pato} alt="Pato" />
    </ContainerFooterSidebarImage>
  );
}

export default ImageLogo;