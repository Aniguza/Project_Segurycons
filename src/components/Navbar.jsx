// src/components/Navbar.jsx
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { useTheme, useMediaQuery } from "@mui/material";
import Popover from "@mui/material/Popover";
import Collapse from '@mui/material/Collapse';
import { Menu } from "../components/Menu";

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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // --- Popover (desktop)
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setHovered(true);
  };

  const handlePopoverClose = () => {
    setHovered(false);
    setTimeout(() => {
      setAnchorEl(null);
    }, 100);
  };
  const open = hovered && Boolean(anchorEl);
  // Links después de "Qué hacemos"
  const links = [
    { to: "/nosotros", label: "Nosotros" },
    { to: "/consultoria", label: "Consultoría" },
    { to: "/mantenimiento", label: "Mantenimiento" },
    { to: "/servicios", label: "Servicios" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <AppBar position="fixed" color="inherit" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 }, py: 3 }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: "65px", marginLeft: "50px" }} />
        </Box>

        {/* Links en pantallas grandes */}
        {isDesktop && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 8, mr: 10 }}>
            {/* Primer item = Qué hacemos con Popover */}
            <Box
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              sx={{ display: "flex", alignItems: "center", cursor: "pointer", height: "100%" }}
            >
              <Typography sx={{ ...linkStyles, mb: 0 }}>Qué hacemos</Typography>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                disableRestoreFocus
                slot={Collapse}
                transitionDuration={350}
                slotProps={{
                  paper: {
                    onMouseEnter: () => setHovered(true),
                    onMouseLeave: handlePopoverClose,
                    sx: {
                      mt: "40px",
                      width: "100vw", // ancho grande (mega menú)
                      maxWidth: "100%",
                      borderRadius: 0,
                    },
                  },
                }}
              >
                <Menu />
              </Popover>
            </Box>

            {/* Resto de links */}
            {links.map((link) => (
              <MuiLink key={link.to} component={Link} to={link.to} sx={linkStyles}>
                {link.label}
              </MuiLink>
            ))}
          </Box>
        )}

        {/* Menú hamburguesa en móviles */}
        {!isDesktop && (
          <>
            <IconButton
              sx={{ color: "primary.main" }}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer lateral */}
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              PaperProps={{ sx: { width: "100%" } }}
            >
              <Box sx={{ width: "100%", p: 2 }}>
                <IconButton onClick={() => setOpenDrawer(false)} sx={{ mb: 2 }}>
                  <CloseIcon />
                </IconButton>
                <List>
                  {/* Primer item: Qué hacemos como Accordion */}
                  <Accordion sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                      aria-controls="menu-content"
                      id="menu-header"
                    >
                      <Typography variant="h6" >
                        Qué hacemos
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 0, mb: 2 }}>
                      <Menu />
                    </AccordionDetails>
                  </Accordion>

                  {/* Resto de links */}
                  {links.map((link) => (
                    <ListItem button key={link.to} onClick={() => setOpenDrawer(false)}>
                      <MuiLink
                        sx={{ marginRight: "50px" }}
                        component={Link}
                        to={link.to}
                      >
                        <ListItemText primary={link.label} />
                      </MuiLink>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
