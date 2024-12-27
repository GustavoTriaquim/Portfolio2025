import styled from "styled-components";

export const BackButton = styled.button`
  padding: 10px 25px;
  background-color: #bd6d3c;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 20px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px #0c0c0c9d;
    transform: scale(1.05);
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
      background-color: rgba(189, 109, 60, 0.9);
    }
  }
`;