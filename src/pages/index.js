import { useWeb3React } from "@web3-react/core";
import React from "react";
import styled from "styled-components";
import AccountInformation from "../modules/AccountInfomation";
import ConnectWalletButton from "../modules/ConnectWalletButton";
import TodoList from "../modules/TodoList";

export default function IndexPage() {
  const { active } = useWeb3React();

  return active ? (
    <Container>
      <AccountInformation />
      <TodoList />
    </Container>
  ) : (
    <ConnectWalletButton />
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: #fff;
  width: fit-content;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
