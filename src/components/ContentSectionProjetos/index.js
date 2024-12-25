import React from "react";
import { ContentSectionStyle } from "../ContentSectionStyle";
import { CenterDiv } from "../Divs/CenterDiv";
import { Title } from "../Texts/Title";
import CardProjetos from "../CardProjetos";
import RastreadorSolarFoto from '../../assets/images/RastreadorSolar.jpg';
import RastreadorSolarVideo from '../../assets/videos/SolarTrackerVideo.mp4';
import { FlexDiv } from '../Divs/FlexDiv';
import ModalProjeto from "../ModalProjeto";
import { useState } from "react";

function ContentSectionProjetos() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { image: RastreadorSolarFoto, title: 'Solar Tracker', video: RastreadorSolarVideo, text: 'Um rastreador solar de dois eixos feito com Arduino Uno é um dispositivo projetado para maximizar a captação de energia solar, ajustando a posição de um painel solar conforme a posição do sol. A programação é feita no Arduino IDE, que processa os dados dos LDRs e controla os servomotores. Este sistema aumenta a eficiência energética em comparação aos painéis fixos.' },
  ];

  projects.forEach(project => console.log("Imagem:", project.image));

  const openModalProjeto = (project) => {
    setSelectedProject(project);
  }

  const closeModalProjeto = (project) => {
    setSelectedProject(null);
  }

  return (
    <ContentSectionStyle id="projetos">
      <CenterDiv
        displayCenterDiv='flex'
        paddingCenterDiv='20px'
        gapCenterDiv='80px'
      >
        <Title
          titleFontSize='35px'
        >PROJETOS</Title>
        <FlexDiv>
          {projects.map((project, index) => (
            <CardProjetos
              key={index}
              image={project.image}
              title={project.title}
              onClick={() => openModalProjeto(project)}
            />
          ))}
        </FlexDiv>
      </CenterDiv>

      <ModalProjeto
        isOpen={!!selectedProject}
        onClose={closeModalProjeto}
        project={selectedProject}
      />
    </ContentSectionStyle >
  );
}

export default ContentSectionProjetos;