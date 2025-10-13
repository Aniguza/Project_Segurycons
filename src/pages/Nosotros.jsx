import React from 'react'
import { Box } from '@mui/material';
import { Banner } from '../secciones/Nosotros/Banner';
import { Descripcion } from '../secciones/Nosotros/Descripcion';
import { Experiencia } from '../secciones/Nosotros/Experiencia';
import { Mivi } from '../secciones/Nosotros/Mivi';
import { Equipo } from '../secciones/Nosotros/Equipo';
import { Normativas } from '../secciones/Nosotros/Normativas';

export const Nosotros = () => {
  return (
    <Box sx={{ mt: { xs: '55px', md: '106px' } }}>
      <Banner />
      <Descripcion />
      <Experiencia />
      <Mivi />
      <Equipo />
      <Normativas />
    </Box>
  );
};
