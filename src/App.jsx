// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./Components/Navbar";
import './App.css';  

// Páginas
import { Inicio } from "./pages/Inicio";


export default function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </Router>
  );
}
