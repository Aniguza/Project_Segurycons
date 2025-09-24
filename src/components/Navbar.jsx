// src/components/Navbar.jsx
import React, { useState } from "react";
import Typography from '@mui/material/Typography';

import {
  AppBar,
  Toolbar,
  Box,
  Link as MuiLink,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.png";

// Estilos compartidos
const linkStyles = {
  color: "primary.main",
  fontWeight: "700",
  fontSize: "1.1rem",
  textDecoration: "none",
  position: "relative",
  "&:hover": {
    color: "orange.main",
  },
  "&:hover::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: "-4px",
    left: "0",
    backgroundColor: "orange.main",
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const links = [
    { to: "/que-hacemos", label: "¿Qué hacemos?" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/consultoria", label: "Consultoría" },
    { to: "/mantenimiento", label: "Mantenimiento" },
    { to: "/servicios", label: "Servicios" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 }, py: 3 }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: "45px", marginRight: "8px" }} />
        </Box>

        {/* Links en pantallas grandes */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 5 }}>
          {links.map((link) => (
            <MuiLink key={link.to} component={Link} to={link.to} sx={linkStyles}>
              {link.label}
            </MuiLink>
          ))}
        </Box>

        {/* Menú hamburguesa en móviles */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "primary.main" }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer lateral */}
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} PaperProps={{sx: { width: "100%" }}}>
          <Box sx={{ width: "100%", p: 2 }}>
            <IconButton onClick={toggleDrawer(false)} sx={{ mb: 2 }}>
              <CloseIcon />
            </IconButton>
            <List>
              {links.map((link) => (
                <ListItem button key={link.to} onClick={toggleDrawer(false)}>
                  <MuiLink
                    component={Link}
                    to={link.to}
                    sx={{ ...linkStyles,  mx: 0 }}
                  >
                    <ListItemText  primary={link.label} />
                  </MuiLink>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
