import React from "react";
import { ContentSectionStyle } from "../ContentSectionStyle";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { useParams } from "react-router-dom";
import { CenterDiv } from "../Divs/CenterDiv";
import { Title } from "../Texts/Title";
import styled from "styled-components";
import HtmlCssJsPdf from '../../assets/certificates/html-css-js.pdf';
import ReactPdf from '../../assets/certificates/reactPDF.pdf';
import FigmaPdf from '../../assets/certificates/figma.pdf';
import GitPdf from '../../assets/certificates/git.pdf';
import AdsPdf from '../../assets/certificates/ads.pdf';

const FullPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f4f4f4;
`;

const ContainerPdf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 40px 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 800px;
`;

const ContainerPdfViewer = styled.div`
  width: 100%;
  height: 70vh;
  overflow: hidden;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const DownloadButton = styled.button`
  padding: 15px 12px;
  font-size: 20px;
  background-color: #ed4848;
  color: white;
  border-radius: 15px;
  border: none;
  box-shadow: 0px 0px 8px #0c0c0c9d;
  transition: 0.3s;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

function PdfViewer() {
  const { id } = useParams();

  const pdfFiles = {
    "html-css-js": {
      url: HtmlCssJsPdf,
      name: 'HTML CSS e JS - Certificado: Gustavo Triaquim',
    },
    cpp: {
      url: '/certificates/cpp.pdf',
      name: 'C++ - Certificado: Gustavo Triaquim',
    },
    figma: {
      url: FigmaPdf,
      name: 'FIGMA - Certificado: Gustavo Triaquim',
    },
    react: {
      url: ReactPdf,
      name: 'REACT JS - Certificado: Gustavo Triaquim',
    },
    ads: {
      url: AdsPdf,
      name: 'DESENVOLVIMENTO DE SISTEMAS',
    },
    git: {
      url: GitPdf,
      name: 'GIT e GITHUB',
    },
  };

  const certificates = pdfFiles[id];

  if (!certificates) {
    return (
      <ContentSectionStyle>
        <CenterDiv>
          <p>Certificado nao identificado</p>
        </CenterDiv>
      </ContentSectionStyle>
    );
  }

  return (
    <ContentSectionStyle>
      <FullPageContainer>
        <ContainerPdf>
          <CenterDiv
            displayCenterDiv='flex'
          >
            <Title
              titleFontSize='32px'
            >{certificates.name}</Title>
            <ContainerPdfViewer>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl={certificates.url} />
              </Worker>
            </ContainerPdfViewer>
          </CenterDiv>
          <a href={certificates.url} download={certificates.name}>
            <DownloadButton>BAIXAR PDF</DownloadButton>
          </a>
        </ContainerPdf>
      </FullPageContainer>
    </ContentSectionStyle>
  )
}

export default PdfViewer;