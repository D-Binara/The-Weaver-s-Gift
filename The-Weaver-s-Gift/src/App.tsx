import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contributors from "./pages/Contributors";
import Profile from "./pages/Profile";
import Story from "./pages/Story";
import Gods from "./pages/Gods";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/story" element={<Story />} />
          <Route path="/gods" element={<Gods />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
