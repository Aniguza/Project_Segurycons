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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            height: { xs: '100%', sm: '95%', md: '260px' }
        }}>
            <Box sx={{
                backgroundColor: 'primary.main',
                padding: 3,
                
                height: { xs: '100%' },
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2
            }}>
                <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                        width: { xs: '80%',  md: '50%' },
                        height: '100%',
                        objectFit: 'cover',
                        flexShrink: 0,
                        p: 1,
                    }}
                />
                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    height: '100%',
                    pl: { xs: 1, md: 3 },

                }}>
                    <Typography
                        variant="body2"

                        sx={{
                            fontWeight: 'bold',
                            color: 'white',
                            mb: 1,
                            fontSize: { xs: '1.2rem', md: '1.5rem' },
                            textAlign: 'center',
                        }}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'white',
                            lineHeight: 1.4,
                            fontSize: { xs: '0.8rem', md: '0.9rem' },
                            mb: 2,
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
                            sx={{ fontWeight: "bold", color: "primary.main", mb: 2 }}
                        >
                            POSICIONAMIENTO
                        </Typography>
                        <Typography variant="body1" sx={{ color: "primary.main", lineHeight: 1.5 }}>
                            En Segurycons somos especialistas en seguridad en edificaciones. Te acompañamos en la obtención de Licencias de Funcionamiento y Certificados ITSE, SST, y levantamientos de observaciones. Con el respaldo de un equipo acreditado en normativas nacionales e internacionales.
                        </Typography>
                    </Box>

                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} >{/* Línea naranja encima del carrusel */}

                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: "100%", height: '100%', pt: { xs: 0, md: 4 }, px: { xs: 4, md: 5 }, pb: 4, position: 'relative' }}>

                        {/* Contenedor del carrusel con posición relativa */}
                        <Box sx={{ position: 'relative' }}>
                            <MUICarousel
                            settings={{
                                autoplay: true,
                                autoplaySpeed: 3000,
                                infinite: true
                            }}
                            sx={{
                                height: { xs: '350px', sm: '370px', md: 'auto' },

                            }}
                            controlledSlide={currentSlide}
                            onSlideChange={setCurrentSlide}
                        >
                            {items.map((item, index) => (
                                <CarouselSlide key={index} item={item} />
                            ))}
                        </MUICarousel>

                        {/* Puntos de navegación fuera del carrusel */}
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: 1,
                            pr: 2
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
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                />
                            ))}
                        </Box>

                            {/* Línea naranja centrada específicamente en el carrusel */}
                            <Box sx={{ 
                                position: 'absolute',
                                top: '50.5%',
                                left: '52.3%',
                                transform: 'translate(-50%, -50%)',
                                display: { md: 'flex', xs: 'none' },
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '80%',
                                height: '80%',
                                pointerEvents: 'none', // Para que no interfiera con la interacción del carrusel
                                zIndex: 2
                            }}>
                                <OrangeLine 
                                    strokeWidth={9}      // Grosor de la línea (puedes cambiarlo: 2, 4, 6, 8, etc.)
                                    stroke="primary.main"
                                         // Ancho del SVG en píxeles
                                    height={315}         // Altura del SVG en píxeles (más corto)
                                    scrub={30}           // Velocidad de animación (más alto = más lento)
                                    scrollLength={100000}  // Longitud del scroll para completar la animación (más alto = más lento)
                                    
                                />
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}
