// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#30456F", // azul oscuro
    },
    secondary: {
      main: "#A30000", // rojo
    },
    background: {
      default: "#F5F5F5", // fondo gris claro
    },
    orange: {
      main: "#F28737", // naranja primario
    },
    common: {
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Century Gothic, Arial, sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 700 },
    h3: { fontSize: "1.5rem", fontWeight: 700 },
    hero: { fontSize: "3rem", fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', },
    subtitle1: { fontSize: "1.2rem", fontWeight: 400 },
    body1: { fontSize: "1rem", fontWeight: 400 },
  },
});

export default theme;
