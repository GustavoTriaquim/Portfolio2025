import React from "react";
import ContentTopo from "./components/ContentSectionTopo";
import Header from "./components/Header";
import ContentSectionSobre from "./components/ContentSectionSobre";
import styled from "styled-components";
import ContentSectionEstudos from "./components/ContentSectionEstudos";
import ContentSectionProjetos from "./components/ContentSectionProjetos";
import ContentSectionHobbie from "./components/ContentSectionHobbies";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PdfViewer from "./components/PdfViewer";
import ContatoPage from "./components/ContatoPage";
import ContainerBlue from "./components/ContainerBlue";

const Body = styled.body`
  background-color: #f1f1f1;

  main {
    padding-top: 100px;
  }
`;

function App() {
  return (
    <Router>
      <Body>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main>
                  <ContentTopo />
                  <ContentSectionSobre />
                  <ContentSectionEstudos />
                  <ContentSectionProjetos />
                  <ContentSectionHobbie />
                </main>
                <Footer />
              </>
            }
          ></Route>
          <Route path="/certificates/:id" element={
            <>
              <ContainerBlue />
              <main
                style={{ paddingTop: '0px' }}
              >
                <PdfViewer />
              </main>
              <Footer />
            </>
          } />
          <Route path="/contato" element={
            <>
              <ContainerBlue />
              <main>
                <ContatoPage />
              </main>
            </>
          } />
        </Routes>
      </Body >
    </Router>
  );
}

export default App;

