import React from "react";
import "./App.css";
import Home from "./Home";
import AlleProjekte from "./AlleProjekte";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Digitale-Wertpapiere" element={<AlleProjekte />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
