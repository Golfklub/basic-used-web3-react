import React from "react";
import styled from "styled-components";

export default function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export const StyledButton = styled.button`
  background-color: #ff3369;
  border: 0;
  color: white;
  cursor: pointer;
  padding: 10px 40px;
  text-align: center;
  vertical-align: center;
  border-radius: 5px;
  font-weight: 700;
  font-size: 20px;
`;
