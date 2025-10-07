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
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <Grid
                    container
                    width="100%"
                    maxWidth='1200px'
                    spacing={3}
                    sx={{ px: 4, py: 6 }}
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* Logo */}
                    <Grid item size={{ xs: 12, sm: 3 }} sx={{display: { xs: "none", md: "block" }, }}  textAlign="center">
                        <img
                            src={logo}
                            alt="Segurycons Logo"
                            style={{ maxWidth: "150px" }}
                        />
                    </Grid>

                    {/* Contacto */}
                    <Grid item size={{ xs: 12, sm: 5 }} sx={{pl: { xs: 0, sm: 4 }, display:'flex', flexDirection:'column', gap: 0.5}} >
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
                            <b>📧 Correo:</b> operaciones@segurycons.com
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
                        <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "flex-start", md: "flex-start" } }}>
                            <IconButton
                                component="a"
                                href="#"
                                target="_blank"
                                sx={{
                                    border: "4px solid #f47b20",
                                    color: "white",
                                   
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
                                    
                                    
                                }}
                            >
                                <LinkedInIcon fontSize="large"/>
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
