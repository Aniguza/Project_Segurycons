import React from 'react'
import { Box } from '@mui/material';
import { Banner } from '../secciones/Nosotros/Banner';
import { Descripcion } from '../secciones/Nosotros/Descripcion';
import { Experiencia } from '../secciones/Nosotros/Experiencia';
import { Mivi } from '../secciones/Nosotros/Mivi';
import { Equipo } from '../secciones/Nosotros/Equipo';
import { Normativas } from '../secciones/Nosotros/Normativas';

import { aboutData } from "../data/aboutData";

export const Nosotros = () => {
  return (
    <Box sx={{ mt: { xs: '55px', md: '106px' } }}>
      <Banner data={aboutData} />
      <Descripcion data={aboutData}/>
      <Experiencia data={aboutData}/>
      <Mivi data={aboutData}/>
      <Equipo data={aboutData}/>
      <Normativas data={aboutData}/>
    </Box>
  );
};
