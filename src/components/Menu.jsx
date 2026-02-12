import {
  Box,
  Typography,
  Link as MuiLink,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const servicios = [
  {
    titulo: "Consultoría, expediente y trámite de LF + ITSE",
    descripcion: [
      { texto: "Gestionamos Licencias de Funcionamiento y Certificados ITSE", to: "/lf-itse/licencias" },
      { texto: "Consultorías de Seguridad en Edificaciones (ISO, NFPA, NTP, CNE...)", to: "/lf-itse/consultorias" },
      { texto: "Gestión de expediente ITSE hasta la obtención del certificado", to: "/lf-itse/expediente" },
    ],
  },
  {
    titulo: "Mantenimiento, Instalación y Levantamientos",
    descripcion: [
      { texto: "Venta e instalación de equipos extintores", to: "/mantenimiento/extintores" },
      { texto: "Instalación de sistemas DACI (Alarmas Contra Incendio)", to: "/mantenimiento/daci" },
      { texto: "Mantenimiento y certificación de sistemas ACI", to: "/mantenimiento/aci" },
      { texto: "Instalación de sistemas de puesta a tierra", to: "/mantenimiento/puesta-a-tierra" },
      { texto: "Mantenimiento de instalaciones eléctricas", to: "/mantenimiento/electricas" },
      { texto: "Levantamiento de Observaciones ITSE", to: "/mantenimiento/observaciones" },
    ],
  },
  {
    titulo: "Gestiones Municipales y Estatales Varias",
    descripcion: [
      { texto: "Autorizaciones Municipales Publicitarias", to: "/gestiones/publicitarias" },
      { texto: "Certificaciones Catastrales, Zonificación, Compatibilidad de uso, etc.", to: "/gestiones/certificaciones" },
      { texto: "Declaratorias de Fábrica", to: "/gestiones/declaratorias" },
    ],
  },
];

// Bloque de una columna para desktop
const ColumnBlock = ({ servicio }) => (
  <Box
    sx={{
      borderLeft: "3px solid",
      borderColor: "orange.main",
      pl: 2,
      pr: 1,
      "&:hover": { borderColor: "rgba(242,135,55,0.9)" },
      borderRadius: "none !important",
    }}
  >
    <Typography
      variant="subtitle1"
      sx={{
        fontWeight: 700,
        mb: 1.6,
        fontSize: "0.9rem",
        letterSpacing: "0.08em",
        color: "rgba(255,255,255,0.95)",
        lineHeight: 1.3,
      }}
    >
      {servicio.titulo.toUpperCase()}
    </Typography>
    <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
      {servicio.descripcion.map((item, j) => (
        <Box component="li" key={j} sx={{ mb: 2 }}>
          <MuiLink
            component={RouterLink}
            to={item.to}
            sx={{
              color: "rgba(255,255,255,0.85)",
              textDecoration: "none",
              fontSize: "0.8rem",
              display: "block",

              transition: "color 0.2s ease",
              "&:hover": {
                color: "orange.main",
              },
            }}
          >
            {item.texto}
          </MuiLink>
        </Box>
      ))}
    </Box>
  </Box>
);

export const Menu = ({ isMobile = false }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  // Vista móvil: acordeones por categoría
  if (isMobile || isSmall) {
    return (
      <Box sx={{ width: "100%" }}>
        {servicios.map((servicio, i) => (
          <Accordion
            key={i}
            disableGutters
            elevation={0}
            sx={{
              bgcolor: "transparent",
              "&:before": { display: "none" },
              borderBottom: i < servicios.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "orange.main" }} />}
              sx={{
                px: 0,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: "primary.main",
                }}
              >
                {servicio.titulo}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0, pb: 0, px: 0 }}>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {servicio.descripcion.map((item, j) => (
                  <Box component="li" key={j} sx={{ mb: 1 }}>
                    <MuiLink
                      component={RouterLink}
                      to={item.to}
                      sx={{
                        color: "primary.main",
                        textDecoration: "none",
                        fontSize: "0.7rem",
                        display: "block",
                        "&:hover": { color: "orange.main" }
                      }}
                    >
                      {item.texto}
                    </MuiLink>
                  </Box>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    );
  }

  // Vista desktop: mega menú en una sola fila
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        background: "linear-gradient(180deg, #2d3a52 0%, #1e2a3a 100%)",
        p: { md: 4, lg: 5 },
        width: "100%",
        color: "common.white",
        boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
        borderRadius: "none !important",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          gap: { md: 3, lg: 4 },
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          borderRadius: "none !important",
        }}
      >
        {servicios.map((servicio, i) => (
          <Box
            key={i}
            sx={{
              flex: "1 1 0",
              minWidth: 0,
            }}
          >
            <ColumnBlock servicio={servicio} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
