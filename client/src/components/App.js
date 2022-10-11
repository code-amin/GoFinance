import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile";
import Stock from "./Stock";
import Footer from "./Footer";
import Favourites from "./Favourites";
import styled from "styled-components";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/stock/:stock" element={<Stock />} />
        </Routes>
      </AppWrapper>
      <Footer />
    </Router>
  );
};

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
`;

export default App;
