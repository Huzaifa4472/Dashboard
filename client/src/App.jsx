import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mainpage from "./page/Mainpage";
// import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// const Container = styled.div`
//   background-color: #f5f5f5;
// `;
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5; /* Set your desired background color */
  }
`;
function App() {
  return (
    <>
      {" "}
      <GlobalStyle />
      {/* <Container> */}
      <BrowserRouter>
        <Navbar />
        <Mainpage />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      {/* </Container>{" "} */}
    </>
  );
}

export default App;
