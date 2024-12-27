import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.div`
  background-color: #0a3d88;
  width: 100vw;
  height: 100px;
  position: fixed;
  border-bottom: 2px solid #fff;
  box-shadow: 0 8px 10px -2px gray;
  padding: 20px 0px;
  z-index: 999;

  @media (max-width: 1000px){
    height: 80px;
  }
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

  @media (max-width: 1000px){
    display: none;
  }
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

  @media (max-width: 1000px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    border-radius: 0px;
    z-index: 999;
    
    &:hover {
      transform: none;
      box-shadow: none;
      background-color:rgba(189, 109, 60, 0.9);
    }
  }
`;

const StyledLinkHover = styled(Link)`
  &:hover{
    cursor: pointer;
  }
`;

const MenuIcon = styled.div`
  display: none;
  padding: 0 5% 0 80%;

  @media (max-width: 1000px) {
    display: block;
    font-size: 28px;
    color: #f1f1f1;
    cursor: pointer;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-1000%")};
  width: 100vw;
  height: 100vh;
  background-color: #0a3d88;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  padding: 20px;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  margin: 20px 0;
  font-size: 20px;
  color: #f1f1f1;

  &:hover {
    color: #bd6d3c;
  }
`;

function Header() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const HeaderItems = [
    { label: 'Sobre', link: 'sobre' },
    { label: 'Estudos', link: 'estudos' },
    { label: 'Projetos', link: 'projetos' },
    { label: 'Hobbies', link: 'hobbies' },
  ];

  return (
    <>
      <HeaderContainer>
        <HeaderInterface>
          <MenuIcon onClick={() => setIsSideBarOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </MenuIcon>
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
      <Sidebar isOpen={isSideBarOpen}>
        <FontAwesomeIcon
          icon={faX}
          style={{ fontSize: '28px', color: '#f1f1f1', curosr: 'pointer' }}
          onClick={() => setIsSideBarOpen(false)}
        />
        <SidebarList>
          {HeaderItems.map((item, index) => (
            <SidebarItem key={index}>
              <StyledLinkHover
                to={item.link}
                spy={true}
                smoot={true}
                duration={500}
                offset={-100}
                onClick={() => setIsSideBarOpen(false)}
              >
                {item.label}
              </StyledLinkHover>
            </SidebarItem>
          ))}
        </SidebarList>
      </Sidebar>
    </>
  );
}

export default Header;