import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import heroImage from '../assets/BannerSection.jpeg';
import Recurso from '../assets/Recurso2.png';

export const BannerSections = ({ data }) => {
    return (
        <Box
            sx={{
                height: { xs: 170, sm: 300, md: 350 },
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
                        color: '#22346C',
                        maxWidth: 1900,
                        fontWeight: 700,
                        fontSize: { xs: 30, md: 40, lg: 45 },
                        textAlign: 'center',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    {data.titulo}
                </Typography>
            </Box>
            {/* Imagen decorativa izquierda */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '50%',
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
                        transform: 'scaleY(-1)',
                        pointerEvents: 'none',
                        userSelect: 'none',
                        
                    }}
                />
            </Box>
            {/* Imagen decorativa izquierda */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '50%',
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
                        transform: 'scaleX(-1)',
                        pointerEvents: 'none',
                        userSelect: 'none',
                        
                    }}
                />
            </Box>
        </Box>
    );
};
