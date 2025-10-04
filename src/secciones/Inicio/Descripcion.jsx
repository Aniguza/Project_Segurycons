import React, { useRef, useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
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

// Componente para cada slide del carrusel - AQUÍ MANEJAS TODO EL DISEÑO
const CarouselSlide = ({ item }) => {
    return (
        <Box sx={{ 
           
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2
        }}>
            <Box sx={{
                backgroundColor: 'primary.main',
                padding: 3,
                height: {xs: '100%'},
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
                        width: {xs: '100%', md: '40%'},
                        
                        objectFit: 'cover',
                        flexShrink: 0
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
                    pl: { xs: 1, md: 6 },
                    
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
        <Grid container spacing={2} sx={{ flexGrow: 1, backgroundColor: '#fff', }}>
            <Grid size={{ xs: 12, sm: 6 }} sx={{ p: 4,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: "90%", textAlign: "justify", pl: { xs: 0, md: 9 } }}>
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
            <Grid size={{ xs: 12, sm: 6 }} >
                <Box sx={{ width: "100%", height: '100%', pt: { xs: 0, md: 4 }, px:{ xs: 4, md: 10 }, pb:4 }}>
                    <MUICarousel
                        settings={{
                            autoplay: true,
                            autoplaySpeed: 3000,
                            infinite: true
                        }}
                        sx={{ 
                            height: { xs: '350px', md: '85%'},
                            
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
                        mt: 2,
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
                </Box>
            </Grid>
        </Grid>
    );
}
