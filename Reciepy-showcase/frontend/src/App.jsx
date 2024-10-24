// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import RecipeDetail from "./RecipeDetail";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />{" "}
        {/* Updated path */}
      </Routes>
    </Router>
  );
};

export default App;
