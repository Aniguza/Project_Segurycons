import { Box, Grid, Typography, Link as MuiLink } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router'

export const Menu = () => {
  const servicios = [
    {
      titulo: "Consultoría, expediente y trámite de LF + ITSE",
      descripcion: [
        { texto: "Gestionamos Licencias de Funcionamiento y Certificados ITSE", to: "/lf-itse/licencias" },
        { texto: "Consultorías de Seguridad en Edificaciones (ISO, NFPA, NTP, CNE...)", to: "/lf-itse/consultorias" },
        { texto: "Gestión de expediente ITSE hasta la obtención del certificado", to: "/lf-itse/expediente" }
      ]
    },
    {
      titulo: "Mantenimiento, Instalación y Levantamientos",
      descripcion: [
        { texto: "Venta e instalación de equipos extintores", to: "/mantenimiento/extintores" },
        { texto: "Instalación de sistemas DACI (Alarmas Contra Incendio)", to: "/mantenimiento/daci" },
        { texto: "Mantenimiento y certificación de sistemas ACI", to: "/mantenimiento/aci" },
        { texto: "Instalación de sistemas de puesta a tierra", to: "/mantenimiento/puesta-a-tierra" },
        { texto: "Mantenimiento de instalaciones eléctricas", to: "/mantenimiento/electricas" },
        { texto: "Levantamiento de Observaciones ITSE", to: "/mantenimiento/observaciones" }
      ]
    },
    {
      titulo: "Gestiones Municipales y Estatales Varias",
      descripcion: [
        { texto: "Autorizaciones Municipales Publicitarias", to: "/gestiones/publicitarias" },
        { texto: "Certificaciones Catastrales, Zonificación, Compatibilidad de uso, etc.", to: "/gestiones/certificaciones" },
        { texto: "Declaratorias de Fábrica", to: "/gestiones/declaratorias" }
      ]
    }
  ];
  return (
    <Box sx={{ bgcolor: '#2C3E5B', p: 6, width: '100%', color: 'common.white' }}>
      <Grid container spacing={4}>
        {servicios.map((servicio, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, fontSize: 16 }}>
              {servicio.titulo.toUpperCase()}
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {servicio.descripcion.map((item, j) => (
                <li key={j} style={{ marginBottom: '8px' }}>
                  <MuiLink
                    component={RouterLink}
                    to={item.to}
                    sx={{
                      color: 'common.white',
                      textDecoration: 'none',
                      fontSize: 14,
                      "&:hover": { textDecoration: 'underline', color: '' }
                    }}
                  >
                    {item.texto}
                  </MuiLink>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
