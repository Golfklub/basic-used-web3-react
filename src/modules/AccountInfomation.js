import { useWeb3React } from "@web3-react/core";
import React from "react";
import styled from "styled-components";
import Card from "../components/card";

export default function AccountInformation() {
  const { account, chainId } = useWeb3React();

  return (
    <Card>
      <TextContainer style={{ display: "flex" }}>
        Account: <span>{account}</span>
      </TextContainer>
      <TextContainer>
        Chain Id: <span>{chainId}</span>
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
