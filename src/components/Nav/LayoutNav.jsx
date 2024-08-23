import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Nav } from "./Nav";

export const LayoutNav = () => {
  return (
    <Router>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
