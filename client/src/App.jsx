import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mainpage from "./page/Mainpage";
import styled from "styled-components";
const Container = styled.div`
  background-color: #f5f5f5;
`;
function App() {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />
        <Mainpage />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
