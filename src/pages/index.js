import { useWeb3React } from "@web3-react/core";
import React from "react";
import AccountInformation from "../modules/AccountInfomation";
import ConnectWalletButton from "../modules/ConnectWalletButton";

export default function IndexPage() {
  const { active } = useWeb3React();

  return active ? <AccountInformation /> : <ConnectWalletButton />;
}
