// src/App.jsx
import React from "react";
import { Box } from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import './App.css';

// Páginas
import { Inicio } from "./pages/Inicio";
import { Nosotros } from "./pages/Nosotros";
import { Servicios } from "./pages/Servicios";
import { DetallesServicios } from "./pages/DetallesServicios";
import { Mantenimiento } from "./pages/Mantenimiento";
import { DetalleMantenimiento } from "./pages/DetalleMantenimiento";
import { Consultoria } from "./pages/Consultoria";
import { DetalleConsultoria } from "./pages/DetalleConsultoria";
import { Contacto } from "./pages/Contacto";

export default function App() {
  return (
    <Router >
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <Routes sx={{ flex: 1 }}>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/:slug" element={<DetallesServicios />} />
            <Route path="/mantenimiento" element={<Mantenimiento />} />
            <Route path="/mantenimiento/:slug" element={<DetalleMantenimiento />} />
            <Route path="/consultoria" element={<Consultoria />} />
            <Route path="/consultoria/:slug" element={<DetalleConsultoria />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}
