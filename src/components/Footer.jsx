// src/components/Footer.jsx
import React from "react";
import { Box, Grid, Typography, Button, Link, getAppBarUtilityClass } from "@mui/material";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";


import logo from "../assets/Logo-bn.png"; // Asegúrate de tener un logo en esta ruta
import { BorderAll } from "@mui/icons-material";

export const Footer = () => {
    return (
        <Box >

            <Box
                component="footer"
                sx={{
                    bgcolor: "#2f4169", // azul de tu footer
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    
                }}
            >
                <Grid
                    container
                    width="100%"
                    maxWidth='1200px'
                    rowSpacing={4}
                    columnSpacing={{ xs: 1, sm: 7, md: 10 }}
                    sx={{ px: 4, py: 6 }}
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* Logo */}
                    <Grid item size={{ xs: 12, sm: 3 }} sx={{ display: { xs: "none", md: "block" }, }} textAlign="center">
                        <img
                            src={logo}
                            alt="Segurycons Logo"
                            style={{ maxWidth: "150px" }}
                        />
                    </Grid>

                    {/* Contacto */}
                    <Grid item size={{ xs: 12, sm: 5 }} sx={{ pl: { xs: 0 }, display: 'flex', flexDirection: 'column', gap: 0.5, width: 'auto !important' }} >
                        <Typography variant="h6" gutterBottom>
                            Contacto
                        </Typography>
                        <Typography variant="body2">
                            <b>📍 Dirección:</b>  A.h once de abril MZ C4 lt 09
                        </Typography>
                        <Typography variant="body2">
                            <b>📞 Teléfono:</b>  905 767 434 – 977 652 430
                        </Typography>
                        <Typography variant="body2">
                            <b>📧 Correo:</b> ventas@segurycons.com
                        </Typography>
                        <Typography variant="body2">
                            <b>📱 WhatsApp:</b>  +51 987 654 321
                        </Typography>
                    </Grid>

                    {/* Redes sociales */}
                    <Grid item size={{ xs: 12, sm: 4 }} textAlign="left" >
                        <Typography variant="h6" gutterBottom mb={2}>
                            Nuestras redes sociales
                        </Typography>
                        <Box sx={{ 
                            display: "flex", 
                            gap: 2, 
                            justifyContent: { xs: "flex-start", md: "flex-start" },
                            '& svg': {
                                color: "#fff",
                                width: { xs: "20px", sm: "25px", md: "30px" },
                                height: { xs: "20px", sm: "25px", md: "30px" },
                                transition: "color 0.3s",
                            },
                            '& svg:hover': {
                                color: "#3b5998",
                            },
                            '& a': {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "auto",
                                height: "auto",
                                border: "4px solid #F28737",
                                borderRadius: "50%",
                                padding: "10px",
                            }
                        }}>
                            <Link 
                            href="https://www.facebook.com/segurycons" 
                            target="_blank" 
                            rel="noopener" 
                            aria-label="Facebook">
                                <FiFacebook />
                            </Link>
                            <Link 
                            href="https://www.instagram.com/segurycons.itse?igsh=eXdsbDNvdnNqOGRj" 
                            target="_blank" 
                            rel="noopener" 
                            aria-label="Instagram">
                                <FiInstagram />
                            </Link>
                            <Link 
                            href="https://www.linkedin.com/company/segurycons/" 
                            target="_blank" 
                            rel="noopener" 
                            aria-label="LinkedIn">
                                <FiLinkedin />
                            </Link>
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
                <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 700, fontSize: { xs: "12px" } }}>
                    © 2026 SEGURYCONS. Todos los derechos reservados.
                </Typography>
            </Box>
        </Box>
    );
}
