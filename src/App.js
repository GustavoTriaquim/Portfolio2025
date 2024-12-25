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
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ContentTopo />
                  <ContentSectionSobre />
                  <ContentSectionEstudos />
                  <ContentSectionProjetos />
                  <ContentSectionHobbie />
                </>
              }
            ></Route>
            <Route path="/certificates/:id" element={<PdfViewer />} />
          </Routes>
        </main>
        <Footer />
      </Body >
    </Router>
  );
}

export default App;

