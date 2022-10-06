import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import Home from "./Home";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile";
import Stock from "./Stock";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<></>} />
        <Route path="/stock/:stock" element={<Stock />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
