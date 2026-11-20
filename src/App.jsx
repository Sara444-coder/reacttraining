
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
