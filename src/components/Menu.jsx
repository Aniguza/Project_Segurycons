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
import { servicesData } from "../data/servicesData";

// Construir 3 columnas desde servicesData (4 grupos repartidos en 3 columnas)
const menuColumnas = [
  // Columna 1: CONSULTORÍA Y CUMPLIMIENTO
  [
    {
      titulo: "CONSULTORÍA Y CUMPLIMIENTO",
      items: servicesData.consultoria.map((s) => ({
        texto: s.subtitulo || s.titulo,
        to: `/consultoria/${s.slug}`,
      })),
    },
  ],
  // Columna 2: INGENIERÍA Y MANTENIMIENTO + SERVICE OPERATIVO Y SUBCONTRATACIÓN
  [
    {
      titulo: "INGENIERÍA Y MANTENIMIENTO",
      items: servicesData.mantenimiento.map((s) => ({
        texto: s.subtitulo || s.titulo,
        to: `/mantenimiento/${s.slug}`,
      })),
    },
    
  ],
  // Columna 3: GESTIONES MUNICIPALES Y ESTATALES
  [
    {
      titulo: "GESTIONES MUNICIPALES Y ESTATALES",
      items: servicesData.servicios.slice(5, 10).map((s) => ({
        texto: s.subtitulo || s.titulo,
        to: `/servicios/${s.slug}`,
      })),
    },
  ],
  [
    {
      titulo: "SERVICE OPERATIVO Y SUBCONTRATACIÓN",
      items: servicesData.servicios.slice(0, 5).map((s) => ({
        texto: s.subtitulo || s.titulo,
        to: `/servicios/${s.slug}`,
      })),
    },
  ]
];

// Bloque de una sección (título + lista de enlaces) para desktop
const ColumnBlock = ({ block }) => (
  <Box
    sx={{
      borderLeft: "3px solid",
      borderColor: "orange.main",
      pl: 2,
      pr: 1,
      mb: 3,
      "&:last-of-type": { mb: 0 },
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
      {block.titulo}
    </Typography>
    <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
      {block.items.map((item, j) => (
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

// Todos los bloques en orden (para móvil)
const todosLosBloques = menuColumnas.flat();

export const Menu = ({ isMobile = false }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  // Vista móvil: acordeones por categoría
  if (isMobile || isSmall) {
    return (
      <Box sx={{ width: "100%" }}>
        {todosLosBloques.map((block, i) => (
          <Accordion
            key={i}
            disableGutters
            elevation={0}
            sx={{
              bgcolor: "transparent",
              "&:before": { display: "none" },
              borderBottom:
                i < todosLosBloques.length - 1
                  ? "1px solid rgba(255,255,255,0.12)"
                  : "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "orange.main" }} />}
              sx={{ px: 0 }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: "primary.main",
                }}
              >
                {block.titulo}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0, pb: 0, px: 0 }}>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {block.items.map((item, j) => (
                  <Box component="li" key={j} sx={{ mb: 1 }}>
                    <MuiLink
                      component={RouterLink}
                      to={item.to}
                      sx={{
                        color: "primary.main",
                        textDecoration: "none",
                        fontSize: "0.7rem",
                        display: "block",
                        "&:hover": { color: "orange.main" },
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

  // Vista desktop: 4 columnas
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
        {menuColumnas.map((columna, i) => (
          <Box
            key={i}
            sx={{
              flex: "1 1 0",
              minWidth: 0,
            }}
          >
            {columna.map((block, j) => (
              <ColumnBlock key={j} block={block} />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
