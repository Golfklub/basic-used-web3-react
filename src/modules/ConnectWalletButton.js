import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "../utils/injected";
import Button from "../components/button";

export default function ConnectWalletButton() {
  const { activate } = useWeb3React();

  return <Button onClick={() => activate(injected)}>Connect MetaMask</Button>;
}
