import React from "react";
import styled from "styled-components";

export default function Card({ onClick, children }) {
  return <StyledCard onClick={onClick}>{children}</StyledCard>;
}

export const StyledCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0;
  padding: 10px 40px;
  text-align: left;
  vertical-align: center;
  border-radius: 5px;
  font-weight: 700;
  font-size: 20px;
  border: 1px solid;
`;
