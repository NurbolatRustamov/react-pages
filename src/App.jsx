import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Menu from "./menu/menu";
import Layot from "./layot/layot";
import Additional from "./additional/additional";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/layot" element={<Layot />} />
        <Route path="/Additional" element={<Additional />} />
      </Routes>
    </div>
  );
}

export default App;
