import React from "react";
import styled from "styled-components";
import { SuperSubtitle } from "../Texts/Subtitle";
import { Paragraph } from '../Texts/Paragraph';
import { CenterDiv } from "../Divs/CenterDiv";

const ModalProjetoOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 70%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 8px #0c0c0c;
  box-sizing: border-box;
  overflow: auto;
  gap: 30px;
`;

const ImageModalProjeto = styled.img`
  max-width: 100%;
  max-height: 45%;
  object-fit: cover;
  border-radius: 15px;
  border: 1px solid #0a3d889d;
  box-shadow: 0px 0px 8px #0a3d88d9;
`;

const VideoModalProjeto = styled.video`
  max-width: 100%;
  max-height: 45%;
  object-fit: cover;
  border-radius: 15px;
  border: 1px solid #0a3d889d;
  box-shadow: 0px 0px 8px #0a3d88d9;
`;

const ButtonModalProjeto = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 400px;
  font-size: 20px;
  border: 1px solid #0a3d889d;
  box-shadow: 0px 0px 8px #0a3d88d9;

  &:hover {
    background-color: #0056b3;
  }
`;


function ModalProjeto({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <ModalProjetoOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <SuperSubtitle
          SuperSubtitleWidth='50%'
        >{project.title}</SuperSubtitle>
        <ImageModalProjeto src={project?.image} alt={project?.title} />
        <VideoModalProjeto src={project?.video} controls></VideoModalProjeto>
        <CenterDiv
          displayCenterDiv='flex'
          paddingCenterDiv='20px 25px'
          backgroundCenterDiv='#e7e7e7'
          widthCenterDiv='60%'
          borderCenterDiv='1px solid #0a3d889d'
          shadowBoxCenterDiv='0px 0px 8px #0a3d88d9'
          radiusCenterDiv='15px'
        >
          <Paragraph
            paragraphWidth='100%'
            paragraphLineHeight='35px'
          >
            {project?.text}
          </Paragraph>
        </CenterDiv>
        <ButtonModalProjeto onClick={onClose}>Fechar</ButtonModalProjeto>
      </ModalContent>
    </ModalProjetoOverlay >
  )
}

export default ModalProjeto;