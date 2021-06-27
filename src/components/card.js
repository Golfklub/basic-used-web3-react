import React from "react";
import styled from "styled-components";

export default function Card({ onClick, children }) {
  return <StyledCard onClick={onClick}>{children}</StyledCard>;
}

export const StyledCard = styled.div`
  border: 0;
  padding: 10px 40px;
  text-align: left;
  vertical-align: center;
  border-radius: 5px;
  font-weight: 700;
  font-size: 20px;
  background: #e5e7eb;
`;
