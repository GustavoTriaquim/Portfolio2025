import styled from "styled-components";

const ContactButton = styled.button`
  padding: 25px 50px;
  font-size: 20px;
  border-radius: 15px;
  border: none;
  background-color: #f1f1f1;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export default ContactButton;