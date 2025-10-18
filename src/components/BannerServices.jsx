import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import heroImage from '../assets/BannerSection.jpeg';
import Recurso from '../assets/RecursoDetalle.png';
import { useParams } from 'react-router'


export const BannerServices = ({ data }) => {
    const { id } = useParams();
    const servicio = data.servicios.find(s => s.id === parseInt(id));

    return (
        <Box
            sx={{
                height: { xs: 170, sm: 300, md: 300 },
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Capa oscura */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(255, 255, 255,0.65)',
                    zIndex: 1,
                }}
            />
            {/* Contenido principal */}
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    zIndex: 2,
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: 'secondary.main',
                        maxWidth: 1900,
                        fontWeight: 700,
                        fontSize: { xs: 30, md: 40, lg: 25 },
                        textAlign: 'center',
                        
                    }}
                >
                    Servicio
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: 'primary.main',
                        maxWidth: 650,

                        fontWeight: 700,
                        fontSize: { xs: 30, md: 40, lg: 30 },
                        textAlign: 'center',
                        
                    }}
                >
                    {servicio.titulo}
                </Typography>
            </Box>
            {/* Imagen decorativa izquierda */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: { xs: -170, sm: -100, lg: 0 },
                    width: { xs: "100%", sm: "70%", lg: "40%" },
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >

                <img
                    src={Recurso}
                    alt="Decoración izquierda"
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain',
                        transform: 'scale(-1)',
                        
                        pointerEvents: 'none',
                        userSelect: 'none',
                        
                    }}
                />
            </Box>
            {/* Imagen decorativa derecha */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: { xs: -170, sm: -100, lg: 0 },
                    width: { xs: '100%', sm: '70%', lg: '40%' },
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >

                <img
                    src={Recurso}
                    alt="Decoración izquierda"
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain',
                        transform: 'scaleX(1)',
                        pointerEvents: 'none',
                        userSelect: 'none',
                        
                    }}
                />
            </Box>
        </Box>
    );
};
