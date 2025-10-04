// src/components/Footer.jsx
import React from "react";
import { Box, Grid, Typography, IconButton, Link, getAppBarUtilityClass } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import logo from "../assets/Logo-bn.png"; // Asegúrate de tener un logo en esta ruta

export const Footer = () => {
    return (
        <>
            <Box
                component="footer"
                sx={{
                    bgcolor: "#2f4169", // azul de tu footer
                    color: "white",
                    mt: 4,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Grid
                    container
                    width={{xs: "95%", md: "90%"} }
                    spacing={{ xs: 10, md: 30 }}
                    sx={{ px: { xs: 2, md: 8 }, py: 6 }}
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* Logo */}
                    <Grid item sx={{display: { xs: "none", md: "block" }, }} md={4} textAlign={{ xs: "center", md: "left" }}>
                        <img
                            src={logo}
                            alt="Segurycons Logo"
                            style={{ maxWidth: "150px" }}
                        />
                    </Grid>

                    {/* Contacto */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Contacto
                        </Typography>
                        <Typography variant="body2">
                            <RoomIcon fontSize="small" sx={{ mr: 1 }} />
                            <b> Dirección:</b>  A.h once de abril MZ C4 lt 09
                        </Typography>
                        <Typography variant="body2">
                            <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                            <b> Teléfono:</b>  905 767 434 – 977 652 430
                        </Typography>
                        <Typography variant="body2">
                            <EmailIcon fontSize="small" sx={{ mr: 1 }} />
                            <b>Correo:</b> operaciones@segurycons.com
                        </Typography>
                        <Typography variant="body2">
                            <WhatsAppIcon fontSize="small" sx={{ mr: 1 }} />
                            <b> WhatsApp:</b>  +51 987 654 321
                        </Typography>
                    </Grid>

                    {/* Redes sociales */}
                    <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }} >
                        <Typography variant="h6" gutterBottom mb={2}>
                            Nuestras redes sociales
                        </Typography>
                        <Box>
                            <IconButton
                                component="a"
                                href="#"
                                target="_blank"
                                sx={{
                                    border: "4px solid #f47b20",
                                    color: "white",
                                    mx: 2,
                                }}
                            >
                                <FacebookIcon fontSize="large"/>
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://www.instagram.com/segurycons.itse?igsh=eXdsbDNvdnNqOGRj"
                                target="_blank"
                                sx={{
                                    border: "4px solid #f47b20",
                                    color: "white",
                                    mx: 2,
                                }}
                            >
                                <InstagramIcon fontSize="large"/>
                            </IconButton>
                            <IconButton
                                component="a"
                                href=""
                                target="_blank"
                                sx={{
                                    border: "4px solid #f47b20",
                                    color: "white",
                                    mx: 2,
                                    
                                }}
                            >
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>


            </Box>
            {/* Copyright */}
            <Box
                sx={{
                    bgcolor: "orange.main", 
                    textAlign: "center",
                    py: 1,
                }}
            >
                <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 700, fontSize:{xs:"12px"} }}>
                    © 2025 SEGURYCONS. Todos los derechos reservados.
                </Typography>
            </Box>
        </>
    );
}
