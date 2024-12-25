import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const HeaderContainer = styled.div`
  background-color: #0a3d88;
  width: 100vw;
  height: 100px;
  position: fixed;
  border-bottom: 2px solid #fff;
  box-shadow: 0 8px 10px -2px gray;
  padding: 20px 0px;
  z-index: 999;
`;

const HeaderInterface = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const HeaderDesktop = styled.ul`
  display: flex;
  gap: 50px;
`;

const HeaderList = styled.li`
  color: #f1f1f1;
  font-size: 20px;
`;

const HeaderButton = styled.button`
  padding: 10px 15px;
  font-size: 22px;
  background-color: #bd6d3c; 
  border: none;
  border-radius: 15px;
  color: #f1f1f1;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 8px #0c0c0c9d;
    cursor: pointer;
  }
`;

const StyledLinkHover = styled(Link)`
  &:hover{
    cursor: pointer;
  }
`;

function Header() {
  const HeaderItems = [
    { label: 'Sobre', link: 'sobre' },
    { label: 'Estudos', link: 'estudos' },
    { label: 'Projetos', link: 'projetos' },
    { label: 'Hobbies', link: 'hobbies' },
  ];

  return (
    <HeaderContainer>
      <HeaderInterface>
        <nav>
          <HeaderDesktop>
            <HeaderList>
              <HeaderDesktop>
                {HeaderItems.map((item, index) => (
                  <HeaderList
                    key={index}
                  >
                    <StyledLinkHover
                      to={item.link}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-100}
                    >
                      {item.label}
                    </StyledLinkHover>
                  </HeaderList>
                ))}
              </HeaderDesktop>
            </HeaderList>
          </HeaderDesktop>
        </nav>
        <a href="https://www.linkedin.com/in/gustavo-triaquim-08bb60333/">
          <HeaderButton>LINKEDIN</HeaderButton>
        </a>
      </HeaderInterface>
    </HeaderContainer >
  );
}

export default Header;