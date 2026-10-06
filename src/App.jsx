import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";

import Home from "./routing/home";
import TentangSaya from "./routing/tentangsaya";
import Biodata from "./routing/biodata";
import Kontak from "./routing/kontak";

import Footer from "./components/Footer";

import "./Biodata.css";

const App = () => {
  return (
    <div className="page">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentangsaya" element={<TentangSaya />} />
        <Route path="/biodata" element={<Biodata />} />
        <Route path="/kontak" element={<Kontak />} />
        
      </Routes>

      <Footer />
    </div>
  );
};

export default App;