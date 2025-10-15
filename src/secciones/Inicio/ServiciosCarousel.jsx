import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MUICarousel from '../../components/MUICarousel';

// Componente para cada slide del carrusel de servicios
const ServiceSlide = ({ item }) => {
  return (
    <Box sx={{ 
      px: 1,
      height: '100%',
      display: 'flex',
      alignItems: 'stretch'
    }}>
      <Box
        sx={{
          p: 2.5,
          bgcolor: 'background.paper',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          width: '100%',
          
          position: 'relative',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }
        }}
      >
        <Box 
          sx={{
            bgcolor: '#e8e8e8',
            borderRadius: 1,
            width: '100%',
            paddingBottom: '60%',
            position: 'relative',
            mb: 2
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            fontSize: { xs: '0.875rem', md: '1rem' },
            lineHeight: 1.4,
            mb: 1.5,
            minHeight: { xs: 'auto', md: '3.2rem' },
          }}
        >
          {item.title}
        </Typography>
        <Typography 
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: 2,
            flex: 1,
          }}
        >
          {item.description}
        </Typography>
        <Typography
          component="span"
          sx={{
            color: 'error.main',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          Conocer más →
        </Typography>
      </Box>
    </Box>
  );
};

const sampleItems = [
  {
    title: 'INSTALACIÓN, MEDICIÓN Y CERTIFICACIÓN DE POZOS A TIERRA',
    description:
      'Instalación de un sistema de puesta a tierra, mediciones periódicas y protocolo de certificación profesional.',
  },
  {
    title: 'INSTALACIÓN DE SISTEMAS DE ALARMA Y DETECCIÓN DE INCENDIOS',
    description: 'Instalación de equipos certificados de detección y notificación rápida a usuarios.',
  },
  {
    title: 'MANTENIMIENTO Y CERTIFICACION DE SISTEMAS DE AGUA CONTRA INCENDIOS',
    description: 'Mantenimiento y certificación profesional de todos los componentes del sistema.',
  },
  {
    title: 'SERVICIO ADICIONAL DE SEGURIDAD',
    description: 'Mantenimiento y certificación profesional de todos los componentes del sistema.',
  },
];

export const ServiciosCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Hook para manejar resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive breakpoints
  const isDesktop = windowWidth >= 1200;
  const isTablet = windowWidth >= 768 && windowWidth < 1200;
  const isMobile = windowWidth < 768;

  // Calcular cuántos items mostrar por slide según el breakpoint
  const getItemsPerSlide = () => {
    if (isDesktop) return 3;
    if (isTablet) return 2;
    return 1;
  };

  const itemsPerSlide = getItemsPerSlide();

  // Crear grupos de items para cada slide
  const createSlideGroups = () => {
    const groups = [];
    for (let i = 0; i < sampleItems.length; i += itemsPerSlide) {
      groups.push(sampleItems.slice(i, i + itemsPerSlide));
    }
    return groups;
  };

  const slideGroups = createSlideGroups();

  // Resetear slide si excede el número disponible
  useEffect(() => {
    if (currentSlide >= slideGroups.length) {
      setCurrentSlide(0);
    }
  }, [slideGroups.length, currentSlide]);

  // Funciones de navegación
  const goToPrevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? slideGroups.length - 1 : prev - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(prev => prev === slideGroups.length - 1 ? 0 : prev + 1);
  };

  return (
    <Box 
      component="section"
      sx={{ 
        width: '100%',
        height: {xs:'560px',  md: '550px', lg: '500px'},
        py: 4,
        px: { xs: 3, sm: 10, md: 6 },
        bgcolor: 'common.white',
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
        Nuestros servicios
      </Typography>

      <Box 
        sx={{ 
          width: '95%',
          maxWidth: '1200px',
          height: { xs: '400px', md: 'auto' },
          mx: 'auto',
          position: 'relative',
          px: { xs: 0, md: 5 },
        }}
      >
        <MUICarousel
          settings={{
            autoplay: false, // Sin auto-slide
            infinite: true
          }}
          controlledSlide={currentSlide}
          onSlideChange={setCurrentSlide}
          sx={{
            height: {xs: '400px', lg: '430px', md: '400px' },
            '& > div': {
              height: '100%'
            }
          }}
        >
          {slideGroups.map((group, slideIndex) => (
            <Box 
              key={slideIndex}
              sx={{
                display: 'flex',
                gap: 1,
                height: '100%',
                px: { xs: 0, md: 2 }
              }}
            >
              {group.map((item, itemIndex) => (
                <Box 
                  key={itemIndex}
                  sx={{ 
                    flex: `1 1 ${100 / itemsPerSlide}%`,
                    maxWidth: `${100 / itemsPerSlide}%`,
                    height: '100%'
                  }}
                >
                  <ServiceSlide item={item} />
                </Box>
              ))}
            </Box>
          ))}
        </MUICarousel>

        {/* Flechas de navegación para todos los dispositivos */}
        {slideGroups.length > 1 && (
          <>
            <IconButton
              onClick={goToPrevSlide}
              sx={{
                position: 'absolute',
                left: { xs: -20, sm: -40, md: -25 },
                top: '50%',
                transform: 'translateY(-50%)',
                
                border: '2px solid',
                borderColor: 'orange.main',
                color: 'orange.main',
                width: { xs: 30, sm: 35, md: 40 },
                height: { xs: 30, sm: 35, md: 40 },
                zIndex: 3,
                '&:hover': { 
                  bgcolor: 'rgba(255, 107, 53, 0.1)',
                  borderColor: 'orange.dark'
                },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={goToNextSlide}
              sx={{
                position: 'absolute',
                right: { xs: -20, sm: -40, md: -25 },
                top: '50%',
                transform: 'translateY(-50%)',
                border: '2px solid',
                borderColor: 'orange.main',
                color: 'orange.main',
                width: { xs: 30, sm: 35, md: 40 },
                height: { xs: 30, sm: 35, md: 40 },
                zIndex: 3,
                '&:hover': { 
                  bgcolor: 'rgba(255, 107, 53, 0.1)',
                  borderColor: 'orange.dark'
                },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </>
        )}

        {/* Puntos de navegación adicionales para móvil y tablet */}
        {!isDesktop && slideGroups.length > 1 && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: 1,
            mt: 3
          }}>
            {slideGroups.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: 10,
                  height: 10,
                  
                  backgroundColor: currentSlide === index ? 'orange.main' : '#cccccc',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: currentSlide === index ? 'orange.main' : '#999999',
                    transform: 'scale(1.1)'
                  }
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};