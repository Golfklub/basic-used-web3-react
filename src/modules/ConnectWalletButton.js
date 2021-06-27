import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "../utils/injected";
import styled from "styled-components";

export default function ConnectWalletButton() {
  const { activate } = useWeb3React();

  return <Button onClick={() => activate(injected)}>Connect MetaMask</Button>;
}

const Button = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
