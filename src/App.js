import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "./utils/getLibrary";
import IndexPage from "./pages/index";

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <IndexPage />
    </Web3ReactProvider>
  );
}

export default App;
