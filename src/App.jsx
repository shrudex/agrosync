import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";
import { AnimatePresence } from "framer-motion";

import About from "./components/pages/about/About";
import Classify from "./components/pages/classify/Classify";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/home/Home";
import Information from "./components/pages/Information";
import Market from "./components/pages/Market";
import Weather from "./components/pages/Weather";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="info" element={<Information />} />
        <Route path="classify" element={<Classify />} />
        <Route path="weather" element={<Weather />} />
        <Route path="market-analysis" element={<Market />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
