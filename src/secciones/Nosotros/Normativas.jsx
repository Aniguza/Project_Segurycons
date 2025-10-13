import React from "react";
import { Box, keyframes, Typography, Grid, Card, CardContent, IconButton, Modal, Backdrop, Fade } from "@mui/material";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";
import logo1 from "../../assets/Logo.png";
import foto from "../../assets/Certificado1.jpg";
import foto1 from "../../assets/Certificado2.jpg";
import { useRef, useState } from "react";

// Datos de testimonios
const pdf = [
    {
        id: 1,
        imagen: foto,
    },
    {
        id: 2,
        imagen: foto1,
    },
    {
        id: 3,
        imagen: foto,
    },
    {
        id: 4,
        imagen: foto1,
    },
];

export const Normativas = () => {
    const sliderWrapperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // 🔹 Animación continua suave
    const marquee = keyframes`
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    `;

    // Agrupar pdf de 2 en 2
    const pdfPairs = [];
    for (let i = 0; i < pdf.length; i += 2) {
        pdfPairs.push(pdf.slice(i, i + 2));
    }

    // Función para navegar en el carrusel de pdf
    const goToPrev = () => {
        setCurrentSlide(prev => prev === 0 ? pdfPairs.length - 1 : prev - 1);
    };

    const goToNext = () => {
        setCurrentSlide(prev => prev === pdfPairs.length - 1 ? 0 : prev + 1);
    };

    // Funciones para el modal
    const handleOpenModal = (imagen) => {
        setSelectedImage(imagen);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedImage(null);
    };

    return (
        <Box
            component="section"
            sx={{

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "1500px",
                backgroundColor: 'common.white',
                width: "100%",
            }}
        >

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
                <Grid container spacing={2} sx={{ flexGrow: 1, maxWidth: '1200px', my: 4 }}>
                    <Grid size={{ xs: 12, sm: 6 }} sx={{ p: 4, pb: { xs: 0, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ width: "90%" }}>
                            <Typography
                                variant="h2"
                                sx={{ fontSize: { xs: "1rem", md: "1.8rem" }, fontWeight: "bold", color: "primary.main", mb: 2, textAlign: { xs: 'center', md: 'justify' }, lineHeight: 1.3 }}
                            >
                                Tu seguridad, respaldada por estándares que trascienden fronteras.
                            </Typography>
                            <Typography variant="body1" sx={{ color: "primary.main", lineHeight: 1.5, textAlign: 'justify', fontSize: { xs: '0.8rem', md: '1.1rem' } }}>
                                En SEGURYCONS trabajamos bajo normativas nacionales e internacionales que garantizan la calidad y confiabilidad de cada servicio. <br />
                                Nuestras certificaciones y acreditaciones son el respaldo de nuestro compromiso con la seguridad y el cumplimiento normativo.
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

                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        transform: `translateX(-${currentSlide * 100}%)`,
                                        transition: 'transform 0.5s ease-in-out',
                                        width: `${pdfPairs.length * 50}%`
                                    }}>
                                        {pdfPairs.map((pair, pairIndex) => (
                                            <Box
                                                key={pairIndex}
                                                sx={{
                                                    width: '100%',
                                                    flexShrink: 0,
                                                    display: 'flex',
                                                    gap: 2,
                                                    flexDirection: 'row'
                                                }}
                                            >
                                                {pair.map((pdf, index) => (
                                                    <Box 
                                                        key={pdf.id}
                                                        sx={{ 
                                                            display: 'flex', 
                                                            alignItems: 'center', 
                                                            mb: 2,
                                                            cursor: 'pointer',
                                                            transition: 'transform 0.2s ease-in-out',
                                                            '&:hover': {
                                                                transform: 'scale(1.02)',
                                                            }
                                                        }}
                                                        onClick={() => handleOpenModal(pdf.imagen)}
                                                    >
                                                        <Box
                                                            component="img"
                                                            src={pdf.imagen}
                                                            sx={{
                                                                width: '100%',
                                                                height: '100%',
                                                                borderRadius: 1,
                                                                boxShadow: 1,
                                                            }}
                                                        />
                                                    </Box>
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

            {/* Modal para mostrar imagen en grande */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    sx: { backgroundColor: 'rgba(0, 0, 0, 0.8)' }
                }}
            >
                <Fade in={openModal}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: {xs: '70%', sm: '70%', lg: '50%'},
                        height: '90vh',
                        outline: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        {/* Botón cerrar */}
                        <IconButton
                            onClick={handleCloseModal}
                            sx={{
                                position: 'absolute',
                                top: -10,
                                right: {xs: -15, sm: -50},
                                backgroundColor: 'white',
                                color: 'primary.main',
                                zIndex: 1,
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'white'
                                }
                            }}
                        >
                            <Close />
                        </IconButton>
                        
                        {/* Container scrolleable para la imagen */}
                        {selectedImage && (
                            <Box sx={{
                                width: '100%',
                                height: '100%',
                                overflow: 'auto',
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                '&::-webkit-scrollbar': {
                                    width: '8px',
                                    height: '8px'
                                },
                                '&::-webkit-scrollbar-track': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '4px'
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                    borderRadius: '4px',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.7)'
                                    }
                                }
                            }}>
                                <Box
                                    component="img"
                                    src={selectedImage}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        maxWidth: 'none',
                                        maxHeight: 'none',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                                    }}
                                />
                            </Box>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
};
