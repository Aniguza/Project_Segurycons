import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import heroImage from '../assets/BannerSection.jpeg';
import Recurso from '../assets/RecursoDetalle.png';
import { useParams } from 'react-router'


export const BannerServices = ({ data, serviceType = "servicios" }) => {
    const { slug } = useParams();
    
    // Función para buscar el servicio según el tipo
    const findService = () => {
        if (!data) return null;
        
        // Si es un servicio normal
        if (serviceType === "servicios" && data.servicios) {
            return data.servicios.find(s => s.slug === slug);
        }
        
        // Si es mantenimiento
        if (serviceType === "mantenimiento" && data.mantenimiento) {
            return data.mantenimiento.find(s => s.slug === slug);
        }
        
        // Si es consultoría
        if (serviceType === "consultoria" && data.consultoria) {
            return data.consultoria.find(s => s.slug === slug);
        }
        
        // Fallback: buscar en servicios por defecto
        if (data.servicios) {
            return data.servicios.find(s => s.slug === slug);
        }
        
        return null;
    };
    
    const servicio = findService();
    
    // Función para obtener el título de la categoría
    const getCategoryTitle = () => {
        switch (serviceType) {
            case "mantenimiento":
                return "Mantenimiento";
            case "consultoria":
                return "Consultoría";
            case "servicios":
            default:
                return "Servicio";
        }
    };
    
    // Si no se encuentra el servicio, mostrar título genérico
    const serviceTitle = servicio?.titulo || data?.titulo || getCategoryTitle();

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
                        fontSize: { xs: 20, sm: 25, md: 30, lg: 40 },
                        textAlign: 'center',
                        
                    }}
                >
                    {getCategoryTitle()}
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: 'primary.main',
                        maxWidth: 680,

                        fontWeight: 700,
                        fontSize: { xs: 15, sm: 20, md: 25, lg: 30 },
                        textAlign: 'center',
                        
                    }}
                >
                    {serviceTitle}
                </Typography>
            </Box>
            {/* Imagen decorativa izquierda */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: { xs: -120, sm: -180, lg: 0 },
                    width: { xs: "80%", sm: "60%", lg: "40%" },
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
                    left: { xs: -120, sm: -180, lg: 0 },
                    width: { xs: '80%', sm: '60%', lg: '40%' },
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
