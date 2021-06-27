import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "./utils/getLibrary";
import IndexPage from "./pages/index";
import TodoListProvider from "./context/TodoListProvider";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Web3ReactProvider getLibrary={getLibrary}>
        <TodoListProvider>
          <IndexPage />
        </TodoListProvider>
      </Web3ReactProvider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: #e5e7eb;
  width: 100vw;
  min-height: 100vh;
`;
