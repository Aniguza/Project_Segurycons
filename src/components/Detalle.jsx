import React, { useRef, useState } from "react";
import { Box, Grid, Typography, CardMedia, Button } from '@mui/material'
import { BannerServices } from './BannerServices';
import MUICarousel from "./MUICarousel";
import foto from '../assets/Hero.png';
import { Link } from "react-router";
import { MdMailOutline } from "react-icons/md";

// Componente para mostrar solo la imagen en el carrusel
const CarouselSlide = ({ item }) => {
    return (
        <Box sx={{
            width: '100%',
            maxHeight: '450px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            <CardMedia
                component="img"
                image={item.image}
                alt="Imagen del carrusel"
                sx={{
                    width: '100%',
                    objectFit: 'cover'
                }}
            />
        </Box>
    );
};

export const Detalle = ({
    servicio,
    bannerData,
    serviceType = "servicios",
    buttonText = "COTIZA TU INSTALACIÓN",
    buttonLink = "/contacto",
    textoFinal
}) => {
    const sliderWrapperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Si no se encuentra el servicio, mostrar mensaje de error
    if (!servicio) {
        return (
            <Box sx={{ mt: { xs: '55px', md: '106px' }, height: '100%', p: 4, textAlign: 'center' }}>
                <Typography variant="h4" color="error">
                    Servicio no encontrado
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    El servicio que buscas no existe.
                </Typography>
                <Button component={Link} to="/servicios" sx={{ mt: 2 }}>
                    Volver a servicios
                </Button>
            </Box>
        );
    }

    // Crear items del carrusel con las imágenes del servicio
    const items = servicio.imagen?.map(img => ({ image: img })) || [
        { image: foto },
        { image: foto },
        { image: foto }
    ];

    // Función para cambiar slide desde los puntos de navegación
    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <Box sx={{ mt: { xs: '55px', md: '106px' }, bgcolor: 'common.white' }}>
            {bannerData && <BannerServices data={bannerData} serviceType={serviceType} />}
            <Box sx={{ height: 'auto', color: 'primary.main', maxWidth: '1300px', alignContent: 'center', mx: 'auto' }}>
                {/* Descripción del servicio ----------------------*/}
                <Box
                    component="section"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mx: 'auto',
                        pt: 7,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Grid container spacing={2} sx={{ flexGrow: 1, backgroundColor: '#fff', height: { xs: 'auto', sm: '90%' } }}>
                        <Grid size={{ xs: 12, sm: 7 }} sx={{ p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ width: "100%", textAlign: "justify", mb: 2 }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 'bold', fontSize: '1.1rem', mb: 2, lineHeight: 1.4 }}
                                >
                                    {servicio.subtitulo}
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
                                    {servicio.descripcion_larga}
                                </Typography>
                            </Box>
                            {servicio.normativa && (
                                <Box sx={{ width: "100%", textAlign: "justify", pb: 2 }}>
                                    <Typography variant="body1" sx={{ color: "primary.main", lineHeight: 1.4 }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>
                                            Normativa:
                                        </Typography>
                                        <Typography sx={{ whiteSpace: "pre-line" }} >
                                            {servicio.normativa}
                                        </Typography>
                                    </Typography>
                                </Box>
                            )}
                            <Box sx={{ width: "100%" }}>
                                <Button component={Link} to={buttonLink} sx={{ mt: 2, px: 4, py: 1.5, fontWeight: 'bold', bgcolor: 'secondary.main', color: 'white', borderRadius: 0, '&:hover': { bgcolor: 'secondary.dark' } }}>
                                    <Typography sx={{ display: "flex", gap: 1, fontWeight: 700 }}>
                                        <MdMailOutline size={25} /> {buttonText}
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>

                        {/* ------Carrusel ---------------- */}
                        <Grid size={{ xs: 12, sm: 5 }} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: "100%", height: '100%', pt: { xs: 0, md: 4 }, px: { xs: 4, md: 5 }, pb: 4, gap: 3 }}>
                                <MUICarousel
                                    settings={{
                                        autoplay: true,
                                        autoplaySpeed: 3000,
                                        infinite: true
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
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* -----------------seccion 2---------------------------- */}
                <Box
                    component="section"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        pt: 4,
                        px: 4,
                        width: '100%',
                        gap: 4,
                    }}
                >
                    <Box
                        sx={{
                            width: '50%',
                            bgcolor: 'background.default',
                            p: 4,
                            alignContent: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <b>¿Qué ofrecemos?</b>
                        <Typography
                            variant="body1"
                            sx={{ textAlign: 'justify' }}
                            dangerouslySetInnerHTML={{
                                __html: servicio.ofrecemos
                            }}
                        >
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: '50%',
                            bgcolor: 'background.default',
                            p: 4,
                            alignContent: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <b>Beneficios del servicio</b>
                        <Typography
                            variant="body1"
                            sx={{ textAlign: 'justify' }}
                            dangerouslySetInnerHTML={{
                                __html: servicio.beneficios
                            }}
                        >
                        </Typography>
                    </Box>
                </Box>

                {/* --------- Sección 3 ----------------------------- */}
                {textoFinal && (
                    <Box component="section" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mx: 'auto', p: 5, width: '100%', height: '100%', gap: 4 }}>
                        <Box sx={{ width: '80%', bgcolor: 'primary.main', p: 3 }}>
                            <Typography variant="body1" sx={{ fontWeight: 700, color: 'common.white', textAlign: 'center' }} >
                                {textoFinal}
                            </Typography>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
}