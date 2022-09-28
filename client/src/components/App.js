import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import styled from "styled-components";
import Home from "./Home";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Wrapper>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<></>} />
          <Route path="/favorites" element={<></>} />
          <Route path="/stocks" element={<></>} />
          <Route path="/:stock" element={<></>} />
        </Routes>
      </Router>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
`;
