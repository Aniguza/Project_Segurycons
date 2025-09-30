import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Carousel from '../../components/Carousel';

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      left: -32,
      top: '45%',
      bgcolor: 'transparent',
      border: '2px solid',
      borderColor: 'orange.main',
      color: 'orange.main',
      width: 40,
      height: 40,
      '&:hover': { bgcolor: 'transparent' },
       // hide arrows on small screens
    }}
    aria-label="prev"
  >
    <ArrowBackIosNewIcon fontSize="small" />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      right: -32,
      top: '45%',
      bgcolor: 'transparent',
      border: '2px solid',
      borderColor: 'orange.main',
      color: 'orange.main',
      width: 40,
      height: 40,
      '&:hover': { bgcolor: 'transparent' },
       // hide arrows on small screens
    }}
    aria-label="next"
  >
    <ArrowForwardIosIcon fontSize="small" />
  </IconButton>
);

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
    title: 'MANTENIMIENTO Y CERTIFICACION DE SISTEMAS DE AGUA CONTRA INCENDIOS',
    description: 'Mantenimiento y certificación profesional de todos los componentes del sistema.',
  },
];

export const ServiciosCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      // tablet
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      // small tablets / large phones
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      // phones
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , width: '100%', px: { xs: 2, md: 6 }, py: 6 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
        Nuestros servicios
      </Typography>

      <Box sx={{ display: 'flex', width: '85%' }}>
        <Carousel settings={settings}>
          {sampleItems.map((item, idx) => (
            <Box key={idx} sx={{ px: { xs: 1, md: 2 }, pb: 2 }}>
              <Box sx={{ bgcolor: '#e8e8e8', height: { xs: 120, md: 140 }, borderRadius: 1 }} />
              <Typography
                sx={{
                  mt: 2,
                  fontWeight: 700,
                  color: 'primary.main',
                  fontSize: { xs: 12, md: 14 },
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ mt: 1, color: '#666', fontSize: { xs: 12, md: 13 } }}>
                {item.description}
              </Typography>
              <Typography sx={{ mt: 1, color: 'error.main', fontSize: 13, fontWeight: 600 }}>
                Conocer más →
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

