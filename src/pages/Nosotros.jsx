import React from 'react'
import { Box } from '@mui/material';
import { Banner } from '../secciones/Nosotros/Banner';
import { Descripcion } from '../secciones/Nosotros/Descripcion';

export const Nosotros = () => {
  return (
    <Box sx={{ mt: { xs: '55px', md: '106px' } }}>
      <Banner />
      <Descripcion />
    </Box>
  );
};
