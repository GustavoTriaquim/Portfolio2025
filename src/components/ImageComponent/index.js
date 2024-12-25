import React from "react";
import styled from "styled-components";


const ImageStyle = styled.img`
  max-width: 75%;
  height: auto;
  box-shadow: 0px 0px 8px #0a3d88;
  border-radius: 15px;
  border: none;
  transition: 0.3s;

${({ disableHover }) =>
    !disableHover &&
    `
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px #0a3d88d9;
  }
  `}
`;

function ImageComponent({ src, alt, maxWidth, disableHover = false }) {
  return (
    <div>
      <ImageStyle src={src} alt={alt} maxWidth={maxWidth} disableHover={disableHover} />
    </div>
  )
}

export default ImageComponent;
