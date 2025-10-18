// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import './App.css';  

// Páginas
import { Inicio } from "./pages/Inicio";
import { Nosotros } from "./pages/Nosotros";
import { Servicios } from "./pages/Servicios";
import { DetallesServicios } from "./pages/DetallesServicios";

export default function App() {
  return (
    <Router >
      <Navbar />
      <Routes >
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/:id" element={<DetallesServicios />} />
      </Routes>
      <Footer />
    </Router>
  );
}
