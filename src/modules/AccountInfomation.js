import { useWeb3React } from "@web3-react/core";
import React from "react";
import styled from "styled-components";
import Card from "../components/card";

export default function AccountInformation() {
  const web3React = useWeb3React();

  return (
    <Card>
      <TextContainer style={{ display: "flex" }}>
        Account: <span>{web3React.account}</span>
      </TextContainer>
      <TextContainer>
        Chain Id: <span>{web3React.chainId}</span>
      </TextContainer>
    </Card>
  );
}

const TextContainer = styled.div`
  display: flex;
  span {
    padding-left: 8px;
  }
`;
