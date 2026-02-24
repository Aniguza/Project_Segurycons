// src/components/Navbar.jsx
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { useTheme, useMediaQuery } from "@mui/material";
import Popover from "@mui/material/Popover";
import Fade from "@mui/material/Fade";
import { Menu } from "../components/Menu";
import { Link, useLocation } from "react-router";

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
  Divider,
} from "@mui/material";
import { ChevronDown } from "lucide-react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/Logo.png";

// Función para crear estilos de link con estado activo
const getLinkStyles = (isActive) => ({
  color: isActive ? "orange.main" : "primary.main",
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
  // Línea naranja para item activo
  ...(isActive && {
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: "-4px",
      left: "0",
      backgroundColor: "orange.main",
    }
  })
});

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation();

  // Función para determinar si un link está activo
  const isLinkActive = (linkPath) => {
    return location.pathname === linkPath ||
      (linkPath !== "/" && location.pathname.startsWith(linkPath));
  };

  // Función para determinar si "Qué hacemos" está activo
  const isQueHacemosActive = () => {
    const queHacemosPaths = ["/servicios", "/mantenimiento", "/consultoria"];
    return queHacemosPaths.some(path => location.pathname.startsWith(path));
  };

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
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        zIndex: 1300,
        bgcolor: 'background.paper',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 }, py: { xs: 1, md: 3 } }}>
        {/* Logo */}
        <Box

          sx={{ display: "flex", alignItems: "center", ml: { xs: 0, md: 2 }, width: { xs: 120, sm: 140, md: 220 }, marginLeft: { xs: 2, sm: 5, md: 6 } }}
          component="a"
          href="/"
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100%", height: "auto" }}
          />
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
              <Typography
                sx={{
                  ...getLinkStyles(isQueHacemosActive()),
                  mb: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                Qué hacemos <ChevronDown size={18} style={{ flexShrink: 0 }} />
              </Typography>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                disableRestoreFocus
                TransitionComponent={Fade}
                transitionDuration={250}
                slotProps={{
                  paper: {
                    onMouseEnter: () => setHovered(true),
                    onMouseLeave: handlePopoverClose,
                    sx: {
                      mt: 4.5,
                      left: "0px !important",
                      right: "0px !important",
                      width: "100vw",
                      maxWidth: "100%",
                      marginLeft: "0 !important",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
                      overflow: "hidden",
                    },
                  },
                }}
              >
                <Menu />
              </Popover>
            </Box>

            {/* Resto de links */}
            {links.map((link) => (
              <MuiLink
                key={link.to}
                component={Link}
                to={link.to}
                sx={getLinkStyles(isLinkActive(link.to))}
              >
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
              <MenuIcon sx={{ width: { xs: 20, sm: 25, md: 40 }, height: { xs: 20, sm: 25, md: 40 } }} />
            </IconButton>

            {/* Drawer lateral */}
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              PaperProps={{
                sx: {
                  width: "min(100%, 320px)",
                  maxWidth: 320,
                  boxShadow: "-4px 0 24px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Box sx={{ height: "100%", display: "flex", flexDirection: "column", bgcolor: "background.paper" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2, py: 1.5, borderBottom: "1px solid", borderColor: "divider" }}>
                  <Typography variant="subtitle1" fontWeight={700} color="primary.main">
                    Menú
                  </Typography>
                  <IconButton onClick={() => setOpenDrawer(false)} size="small" sx={{ color: "primary.main" }} aria-label="Cerrar menú">
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Box sx={{ flex: 1, overflow: "auto", px: 2, py: 2 }}>
                  <Typography sx={{ color: "primary.main", fontWeight: 600, display: "block" }}>
                    Qué hacemos
                  </Typography>
                  <Box sx={{color: "primary.main", p: 2, }}>
                    <Menu isMobile />
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <List disablePadding>
                    {links.map((link) => (
                      <ListItem
                        key={link.to}
                        disablePadding
                        onClick={() => setOpenDrawer(false)}
                        sx={{ mb: 0.5 }}
                      >
                        <MuiLink
                          component={Link}
                          to={link.to}
                          sx={{
                            ...getLinkStyles(isLinkActive(link.to)),
                            py: 0.70,
                            px: 0,
                            width: "100%",
                            display: "block",
                          }}
                        >
                          <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600, fontSize: "1rem" }} />
                        </MuiLink>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
