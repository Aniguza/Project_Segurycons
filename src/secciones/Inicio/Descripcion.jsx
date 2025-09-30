import React, { useRef } from "react";
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Grid,
} from "@mui/material";
// carousel settings are handled by the reusable Carousel component
import OrangeLine from "../../components/OrangeLine";
import Carousel from "../../components/Carousel";

import foto from '../../assets/Hero.png';

const items = [
    {
        title: "Confiable",
        description:
            "Los profesionales acreditados brindan seguridad y confianza en cada asesoría y proyecto.",
        image: foto,
    },
    {
        title: "Profesional",
        description:
            "Equipo especializado que garantiza calidad en la ejecución de cada trabajo.",
        image: foto,
    },
    {
        title: "Innovador",
        description:
            "Aplicamos soluciones modernas y efectivas adaptadas a cada necesidad.",
        image: foto,
    },
];

export const Descripcion = () => {
    const sliderWrapperRef = useRef(null);

    // carousel settings are provided by src/components/Carousel.jsx by default

    return (
        <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{ px: { xs: 2, md: 8 }, py: 10 }}
        >
            {/* Texto lado izquierdo */}
            <Grid size={6} >
                <Box sx={{ width: "80%", textAlign: "justify", pl: { xs: 0, md: 9 } }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "primary.main", mb: 2 }}
                    >
                        POSICIONAMIENTO
                    </Typography>
                    <Typography variant="body1" sx={{ color: "primary.main", lineHeight: 1.5 }}>
                        En Segurycons somos especialistas en seguridad en edificaciones. Te acompañamos en la obtención de Licencias de Funcionamiento y Certificados ITSE, SST, y levantamientos de observaciones. Con el respaldo de un equipo acreditado en normativas nacionales e internacionales.
                    </Typography>
                </Box>
            </Grid>

            {/* Carrusel lado derecho */}
            <Grid size={6}>
                <Box
                    ref={sliderWrapperRef}
                    sx={{
                        position: "relative",
                        width: "100%",
                        overflow: 'visible',
                        '& .slick-slide': {
                            overflow: 'visible'
                        }
                    }}
                >
                    <Carousel>
                        {items.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: "column", md: "row" },
                                        bgcolor: "primary.main",
                                        color: "common.blan",
                                        borderRadius: 0,
                                        overflow: "hidden",
                                        width: "100%",
                                        minHeight: "250px",
                                        position: "relative",
                                        zIndex: 0, // OrangeLine (higher zIndex) will overlay
                                    }}
                                >
                                    {/* Imagen */}
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: { xs: "100%", md: "50%" },
                                            objectFit: "cover",
                                            padding: 5,
                                        }}
                                        image={item.image}
                                        alt={item.title}
                                    />

                                    {/* Texto */}
                                    <CardContent
                                        sx={{
                                            width: { xs: "100%", md: "50%" },
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            p: 4,
                                        }}
                                    >
                                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body1">{item.description}</Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Carousel>

                    {/* Overlay para la línea: absolute y zIndex alto */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: -45, // ajusta
                            left: 170, // ajusta
                            height: "100%",
                            zIndex: 3,
                            pointerEvents: "none",
                        }}
                    >
                        {/* Slow the line draw by increasing scrollLength (px) and smoothing with scrub */}
                        <OrangeLine
                            strokeWidth={9}
                            triggerRef={sliderWrapperRef}
                            scrollLength={3000}   // más px → más lento
                            scrub={1.5}           // suavizado más grande
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
