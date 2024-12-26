import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BackButton } from "../BackButton";

const ContainerBlueHeader = styled.header`
  background-color: #0a3d88;
  width: 100vw;
  position: fixed;
  border-bottom: 2px solid #fff;
  box-shadow: 0px 0px 8px gray;
  z-index: 999;
  max-width: 1920px;
  padding: 20px 150px;
`;

const ContainerBlueInterface = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

function ContainerBlue() {
  return (
    <ContainerBlueHeader >
      <ContainerBlueInterface>
        <Link to='/'>
          <BackButton >Voltar</BackButton>
        </Link>
      </ContainerBlueInterface>
    </ContainerBlueHeader>
  );
}

export default ContainerBlue;