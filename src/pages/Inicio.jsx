import React from 'react'
import { Box } from '@mui/material';
import { Hero } from '../secciones/Inicio/Hero';
import { Descripcion } from '../secciones/Inicio/Descripcion';
import { ServiciosCarousel } from '../secciones/Inicio/ServiciosCarousel';
import { Clientes } from '../secciones/Inicio/Clientes';

export const Inicio = () => {
  return (
    <Box sx={{ mt: { xs: '70px', md: '90px' } }}>
      <Hero />
      <ServiciosCarousel />
      <Descripcion />
      <Clientes />
    </Box>
  );
};
