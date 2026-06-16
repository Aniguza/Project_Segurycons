import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { keyframes } from '@mui/material';
import foto from '../../assets/personaje.png';

const HERO_BG = 'https://res.cloudinary.com/douhx9fvy/image/upload/v1781575167/banner_xh8bpb.png';
const HERO_PERSONAJE = foto;
const GMAIL_LINK = (() => {
  const email = 'operaciones@segurycons.com';
  const subject = 'Consulta SEGURYCONS';
  const body = [
    'Hola, me gustaría recibir más información sobre los servicios de SEGURYCONS.',
    '',
    'Nombre:',
    'Empresa:',
    'Teléfono:',
    'servicio de interes:',
    'Mensaje:',
    '',
  ].join('\n');

  const params = [
    'view=cm',
    'fs=1',
    `to=${encodeURIComponent(email)}`,
    `su=${encodeURIComponent(subject)}`,
    `body=${encodeURIComponent(body)}`,
  ].join('&');

  return `https://mail.google.com/mail/?${params}`;
})();

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(24px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 320, sm: 420, md: '90vh' },
        minHeight: { xs: 360, md: 560 },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 5,
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'start',
        overflow: 'hidden',
      }}
    >      

      {/* Contenido: título + descripción + botón a la izquierda */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          pl: { xs: 3, sm: 6, md: 15},
          pr: { xs: 2, sm: 4 },
          py: { xs: 6, md: 0 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: { xs: 340, sm: 500, md: 700, lg: 900 },
          height: '100%',
          isolation: 'isolate',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: { xs: -12, sm: -24, md: -48 },
            right: { xs: -16, sm: -32, md: -64 },
            zIndex: -1,
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.42) 55%, transparent 100%)',
            pointerEvents: 'none',
          },
        }}
      >
        {/* Frase grande (título) - blanco, bold, varias líneas */}
        <Box
          component="h1"
          sx={{
            position: 'relative',
            zIndex: 1,
            m: 0,
            animation: `${fadeInUp} 0.8s ease-out forwards`,
            opacity: 0,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
          }}
        >
          <Typography
            variant="hero"
            component="span"
            sx={{
              display: 'block',
              fontSize: { xs: '1.63rem', sm: '2rem', md: '2.75rem', lg: '3.5rem' },
              fontWeight: 700,
              color: 'common.white',
              textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}
          >
            Expertos en Certificación ITSE para empresas. Tu <Box component="span" sx={{ color: 'orange.main' }}>aliado</Box>
            {' '}
            en el Norte
          </Typography>
        </Box>

        {/* Texto de abajo (descripción) - gris oscuro */}
        <Typography
          variant="subtitle1"
          sx={{
            position: 'relative',
            zIndex: 1,
            color: 'common.white',
            mt: { xs: 2, md: 5},
            maxWidth: 570,
            fontWeight: 700,
            fontSize: { xs: '0.65rem', sm: '0.95rem', md: '1.05rem' },
            lineHeight: 1.65,
            animation: `${fadeInUp} 0.8s ease-out 0.2s forwards`,
            opacity: 0,
          }}
        >
          Garantizamos la seguridad y el cumplimiento legal que su negocio necesita para operar sin interrupciones. Consulta por nuestros paquetes corporativos SST + ITSE.
        </Typography>

        <Button
          component="a"
          href={GMAIL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          size="large"
          sx={{
            position: 'relative',
            zIndex: 1,
            mt: { xs: 2, md: 3.5 },
            px: { xs: 2, md: 3.5 },
            py: { xs: 1, md: 1.5 },
            fontSize: { xs: '0.6rem', md: '0.9rem', md: '1rem' },
            fontWeight: 600,
            bgcolor: 'orange.main',
            color: 'common.white',
            borderRadius: 2,
            boxShadow: '0 6px 20px rgba(242, 135, 55, 0.45)',
            animation: `${fadeInUp} 0.8s ease-out 0.35s forwards`,
            opacity: 0,
            textTransform: 'none',
            '&:hover': {
              bgcolor: 'primary.main',
              boxShadow: '0 8px 28px rgba(48, 69, 111, 0.45)',
              transform: 'translateY(-1px)',
            },
            transition: 'all 0.25s ease',
          }}
        >
          Consultar ahora
        </Button>
      </Box>
      
    </Box>
  );
};
