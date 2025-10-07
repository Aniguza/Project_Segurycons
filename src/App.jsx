// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import './App.css';  

// Páginas
import { Inicio } from "./pages/Inicio";
import { Nosotros } from "./pages/Nosotros";

export default function App() {
  return (
    <Router >
      <Navbar />
      <Routes >
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </Router>
  );
}
