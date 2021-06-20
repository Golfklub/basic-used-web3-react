import { InjectedConnector } from "@web3-react/injected-connector";
export const injected = new InjectedConnector({
  supportedChainIds: [4], // เลขในอาร์เรย์เป็นตัวแทนของnetworkต่าง ๆ ในที่นี้ของrinksbyคือ 4
});
