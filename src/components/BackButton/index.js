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
`;