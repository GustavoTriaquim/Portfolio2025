import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  display: block;
  width: 500px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 8px #0a3d88;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1000px) {
    width: 95%;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  transition: filter 0.3s ease;

  ${CardContainer}: hover & {
    filter: brightness(0.5);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const CardProjetos = ({ image, title, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImage image={image} />
      <CardOverlay>{title}</CardOverlay>
    </CardContainer>
  )
}

export default CardProjetos;