import React, { useRef, useState } from "react";
import {
    Box,
    Typography,
    CardMedia,
    Grid,
} from "@mui/material";
import OrangeLine from "../../components/OrangeLine";
import MUICarousel from "../../components/MUICarousel";

import foto from '../../assets/Hero.png';
import '../../App.css'; // Importa el archivo CSS

const items = [
    {
        title: "Confiable",
        description:
            "Los profesionales acreditados brindan seguridad y confianza en cada asesoría y proyecto.",
        image: "https://res.cloudinary.com/douhx9fvy/image/upload/v1771912357/2_ov7efg.png",
    },
    {
        title: "Profesional",
        description:
            "Equipo especializado que garantiza calidad en la ejecución de cada trabajo.",
        image: "https://res.cloudinary.com/douhx9fvy/image/upload/v1771912280/3_p6rpnq.png",
    },
    {
        title: "Innovador",
        description:
            "Aplicamos soluciones modernas y efectivas adaptadas a cada necesidad.",
        image: "https://res.cloudinary.com/douhx9fvy/image/upload/v1771912437/1_ezffqn.png",
    },
];

// Componente para cada slide del carrusel - AQUÍ MANEJAS TODO EL DISEÑO
const CarouselSlide = ({ item }) => {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'stretch',
            p: { xs: 0, sm: 1, md: 2 },
        }}>
            <Box sx={{
                backgroundColor: 'primary.main',
                p: { xs: 3, sm: 3, md: 3 },
                height: '100%',
                minHeight: { md: 260 },
                width: '100%',
                display: 'flex',
                alignItems: { xs: 'stretch', md: 'center' },
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 1.5, md: 2 },
                overflow: 'hidden',
            }}>
                <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        height: { xs: 'auto', md: '100%' },
                        minHeight: { md: 220 },
                        maxHeight: { xs: 200, sm: 220, md: 'none' },
                        aspectRatio: { xs: '4/3', md: 'auto' },
                        objectFit: 'cover',
                        flexShrink: 0,
                        display: 'block',
                    }}
                />
                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                    minWidth: 0,
                    pl: { md: 3 },
                }}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white',
                            mb: 1,
                            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.5rem' },
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'white',
                            lineHeight: 1.5,
                            fontSize: { xs: '0.875rem', sm: '0.9rem', md: '0.95rem' },
                            mb: { xs: 0, md: 2 },
                            width: '100%',
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        {item.description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export const Descripcion = () => {
    const sliderWrapperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Función para cambiar slide desde los puntos de navegación
    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <Box
            component="section"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mx: 'auto',
                py: { xs: 3, md: 4 },
                width: '100%',
                bgcolor: 'common.white',
                position: 'relative',
                zIndex: 0,
            }}
        >
            <Grid container spacing={1} sx={{ flexGrow: 1, backgroundColor: '#fff', maxWidth: '1200px', height: 'auto' }}>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: "90%", textAlign: "justify", pl: { xs: 0, md: 0 } }}>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", color: "primary.main", mb: 1.5 }}
                        >
                            POSICIONAMIENTO
                        </Typography>
                        <Box
                            sx={{
                                width: 60,
                                height: 4,
                                bgcolor: 'secondary2.main',
                                borderRadius: 9999,
                                mb: 2,
                            }}
                        />
                        <Typography variant="body1" sx={{ color: "primary.main", lineHeight: 1.5, fontSize: { xs: '0.8rem', md: '1rem' } }}>
                            En Segurycons somos especialistas en seguridad en edificaciones. Te acompañamos en la obtención de Licencias de Funcionamiento y Certificados ITSE, SST, y levantamientos de observaciones. Con el respaldo de un equipo acreditado en normativas nacionales e internacionales.
                        </Typography>
                    </Box>

                </Grid>

                <Grid size={{ xs: 12, sm: 6 }} >{/* Línea naranja encima del carrusel */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%', pt: { xs: 0, md: 4 }, px: { xs: 5, sm: 3, md: 5 }, pb: { xs: 3, md: 4 }, position: 'relative' }}>

                        {/* Contenedor del carrusel con posición relativa */}
                        <Box sx={{ position: 'relative', width: '100%' }}>
                            <Box sx={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
                                <MUICarousel
                                    settings={{
                                        autoplay: true,
                                        autoplaySpeed: 3000,
                                        infinite: true
                                    }}
                                    sx={{
                                        width: '100%',
                                        minHeight: { md: 260 },
                                    }}
                                    controlledSlide={currentSlide}
                                    onSlideChange={setCurrentSlide}
                                >
                                    {items.map((item, index) => (
                                        <CarouselSlide key={index} item={item} />
                                    ))}
                                </MUICarousel>
                            </Box>

                            {/* Línea naranja por encima del carrusel */}
                            <Box sx={{
                                position: 'absolute',
                                top: '50.7%',
                                left: '52%',
                                transform: 'translate(-50%, -50%)',
                                display: { md: 'flex', xs: 'none' },
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '88%',
                                height: '115%',
                                overflow: 'visible',
                                pointerEvents: 'none',
                                zIndex: 5,
                            }}>
                                <OrangeLine
                                    strokeWidth={9}
                                    color="#F28737"
                                    height={373}
                                    scrub={30}
                                    scrollLength={100000}
                                />
                            </Box>

                            {/* Puntos de navegación */}
                            <Box sx={{
                                position: 'relative',
                                zIndex: 6,
                                display: 'flex',
                                justifyContent: 'flex-end',
                                gap: 1,
                                pr: 2,
                                mt: { xs: 2, md: 0 },
                            }}>
                                {items.map((_, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => handleSlideChange(index)}
                                        sx={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            backgroundColor: currentSlide === index ? 'primary.main' : '#cccccc',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: currentSlide === index ? 'primary.main' : '#999999',
                                                transform: 'scale(1.1)',
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}
