import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Home from "./Home";
import Navbar from "./Navbar/Navbar";
import Stock from "./Stock";
import Stocks from "./Stocks";
import Footer from "./Footer";

const App = () => {
  return (
    <Wrapper>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<></>} />
          <Route path="/favorites" element={<></>} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/:stock" element={<Stock />} />
        </Routes>
      </Router>
      <Footer />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div``;
