// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./Components/Navbar";
import './App.css';  // debe estar aquí


// Páginas


export default function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        
      </Routes>
    </Router>
  );
}
