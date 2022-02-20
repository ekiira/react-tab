import styled from "styled-components";

// import Basic from "./components/Basic";
import Header from "./components/Header";

import { Button, ButtonWrapper } from "./styles/global";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #3a3d3b;
`;

const AppContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <AppContainer>
        <Header />
        <ButtonWrapper>
          <Button>View demo</Button>
        </ButtonWrapper>
        {/* <Basic /> */}
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
