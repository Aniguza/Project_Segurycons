import React from "react";
import { Box, keyframes, Typography, Grid, Card, CardContent, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import logo1 from "../../assets/Logo.png";
import foto from "../../assets/Hero.png";
import { useRef, useState } from "react";

// Datos de testimonios
const testimonios = [
    {
        id: 1,
        nombre: "Juan Carlos Pérez",
        empresa: "Constructora ABC",
        testimonio: "Excelente servicio en la certificación ITSE. El equipo profesional y la rapidez en los procesos nos permitió abrir a tiempo.",
        imagen: foto,
    },
    {
        id: 2,
        nombre: "María García",
        empresa: "Edificios Modernos SAC",
        testimonio: "La asesoría en seguridad ha sido fundamental para nuestros proyectos. Profesionales altamente capacitados.",
        imagen: foto,
    },
    {
        id: 3,
        nombre: "Carlos Rodriguez",
        empresa: "Inversiones del Sur",
        testimonio: "Confiamos en Segurycons para todos nuestros certificados. Su experiencia y conocimiento nos da total tranquilidad.",
        imagen: foto,
    },
    {
        id: 4,
        nombre: "Ana López",
        empresa: "Retail Plaza",
        testimonio: "El acompañamiento durante todo el proceso de licencias ha sido excepcional. Recomiendo totalmente sus servicios.",
        imagen: foto,
    },
];

export const Clientes = () => {
    const sliderWrapperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array de logos (puedes agregar más logos diferentes aquí)
    const logos = [logo1, logo1, logo1, logo1, logo1, logo1];

    // 🔹 Animación continua suave
    const marquee = keyframes`
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    `;

    // Agrupar testimonios de 2 en 2
    const testimoniosPairs = [];
    for (let i = 0; i < testimonios.length; i += 2) {
        testimoniosPairs.push(testimonios.slice(i, i + 2));
    }

    // Función para navegar en el carrusel de testimonios
    const goToPrev = () => {
        setCurrentSlide(prev => prev === 0 ? testimoniosPairs.length - 1 : prev - 1);
    };

    const goToNext = () => {
        setCurrentSlide(prev => prev === testimoniosPairs.length - 1 ? 0 : prev + 1);
    };

    return (
        <Box
            component="section"
            sx={{
                mt: { xs: "70px", md: "90px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "1500px",
                backgroundColor: 'background.default',
                width: "100%",
                
                mb: 6,
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    fontSize: { xs: "1.3rem", md: "1.6rem" },
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 4,
                    textAlign: 'center',
                }}
            >
                Ellos ya confían en nosotros
            </Typography>
            <Box
                sx={{
                    width: { xs: '80%', xl: '100%' },
                    overflow: "hidden",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "100% 100%",
                    maskImage:
                        "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskRepeat: "no-repeat",
                    maskSize: "100% 100%",
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                {/* 🔹 Contenedor infinito sin cortes */}
                <Box
                    sx={{
                        display: "flex",
                        animation: `${marquee} 25s linear infinite`,
                        width: "fit-content",
                    }}
                >
                    {/* Renderizar múltiples sets para continuidad total */}
                    {[...Array(4)].map((_, setIndex) => (
                        <Box key={setIndex} sx={{ display: "flex", gap: 6, pr: 6 }}>
                            {logos.map((logo, logoIndex) => (
                                <Box
                                    key={`${setIndex}-${logoIndex}`}
                                    component="img"
                                    src={logo}
                                    sx={{
                                        width: { xs: 150, md: 200 },
                                        height: "auto",
                                        flexShrink: 0
                                    }}
                                />
                            ))}
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box
                component="section"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mx: 'auto',
                    width: '100%',

                }}
            >
                <Grid container spacing={2} sx={{ flexGrow: 1, maxWidth: '1200px', height: { xs: 'auto', sm: '450px' } }}>
                    <Grid size={{ xs: 12, sm: 6 }} sx={{ p: 4, pb: { xs: 0, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ width: "90%", textAlign: "center", pl: { xs: 0, md: 4 } }}>
                            <Typography
                                variant="h6"
                                sx={{ fontSize: { xs: "1.3rem", md: "1.6rem" }, fontWeight: "bold", color: "primary.main", mb: 2 }}
                            >
                                Testimonios
                            </Typography>
                            <Typography variant="body1" sx={{ color: "primary.main", lineHeight: 1.5 }}>
                                La confianza de nuestros clientes es nuestro mayor respaldo. Ellos ya comprobaron cómo en SEGURYCONS convertimos la seguridad y el cumplimiento en tranquilidad para sus proyectos.
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }} >
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'center', 
                            width: "100%", 
                            height: '100%', 
                            pt: { xs: 0, md: 4 }, 
                            pl: { xs: 4, md: 0 }, 
                            pr: { xs: 4, md: 5 }, 
                            pb: 4 
                        }}>
                            {/* Carrusel de testimonios */}
                            <Box sx={{ position: 'relative', width: '100%' }}>
                                {/* Container del carrusel */}
                                <Box sx={{ 
                                    overflow: 'hidden', 
                                    borderRadius: 2,
                                    height: { xs: '400px', md: '300px' }
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        transform: `translateX(-${currentSlide * 100}%)`,
                                        transition: 'transform 0.5s ease-in-out',
                                        width: `${testimoniosPairs.length * 50}%`
                                    }}>
                                        {testimoniosPairs.map((pair, pairIndex) => (
                                            <Box 
                                                key={pairIndex} 
                                                sx={{ 
                                                    width: '100%',
                                                    flexShrink: 0,
                                                    display: 'flex',
                                                    gap: 2,
                                                    flexDirection: { xs: 'column', md: 'row' }
                                                }}
                                            >
                                                {pair.map((testimonio, index) => (
                                                    <Card 
                                                        key={testimonio.id}
                                                        sx={{ 
                                                            flex: 1,
                                                            minHeight: { xs: '180px', md: '280px' },
                                                            backgroundColor: '#f8f9fa',
                                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                                            borderRadius: 2
                                                        }}
                                                    >
                                                        <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                                <Box
                                                                    component="img"
                                                                    src={testimonio.imagen}
                                                                    sx={{
                                                                        width: 50,
                                                                        height: 50,
                                                                        borderRadius: '50%',
                                                                        objectFit: 'cover',
                                                                        mr: 2
                                                                    }}
                                                                />
                                                                <Box>
                                                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                                                        {testimonio.nombre}
                                                                    </Typography>
                                                                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                                                        {testimonio.empresa}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                            <Typography 
                                                                variant="body2" 
                                                                sx={{ 
                                                                    flex: 1,
                                                                    fontStyle: 'italic',
                                                                    color: 'text.secondary',
                                                                    lineHeight: 1.5
                                                                }}
                                                            >
                                                                "{testimonio.testimonio}"
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>

                                {/* Flechas de navegación centradas abajo */}
                                <Box sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    mt: 3,
                                    gap: 2
                                }}>
                                    <IconButton
                                        onClick={goToPrev}
                                        sx={{
                                            backgroundColor: 'white',
                                            border: '2px solid',
                                            borderColor: 'primary.main',
                                            color: 'primary.main',
                                            width: 40,
                                            height: 40,
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                color: 'white'
                                            }
                                        }}
                                    >
                                        <ArrowBack fontSize="small" />
                                    </IconButton>

                                    <IconButton
                                        onClick={goToNext}
                                        sx={{
                                            backgroundColor: 'white',
                                            border: '2px solid',
                                            borderColor: 'primary.main',
                                            color: 'primary.main',
                                            width: 40,
                                            height: 40,
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                color: 'white'
                                            }
                                        }}
                                    >
                                        <ArrowForward fontSize="small" />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
