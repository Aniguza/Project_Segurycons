import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { keyframes } from '@mui/material';
import foto from '../../assets/personaje.png';

const HERO_BG = 'https://res.cloudinary.com/douhx9fvy/image/upload/v1772993274/fondobanner_hl5lxj.png';
const HERO_PERSONAJE = foto;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(24px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const Hero = () => {
  const navigate = useNavigate();

  const handleCta = () => {
    const contact = document.getElementById('contacto') ?? document.querySelector('[data-section="contacto"]');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    else navigate('/contacto');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 320, sm: 420, md: '90vh' },
        minHeight: { xs: 360, md: 560 },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >

      {/* Zona inferior blanca con borde ondulado naranja (como referencia de diseño) */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: { xs: '34%', sm: '32%', md: '75%' },
          minHeight: { xs: 128, md: 168 },
          zIndex: 1,
          pointerEvents: 'none',
          lineHeight: 0,
          overflow: 'visible',
        }}
      >
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          sx={{
            display: 'block',
            width: '100%',
            height: '100%',
            overflow: 'visible',
          }}
        >
          <path
            fill="none"
            stroke="#F28737"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M0,26 C10,27 200,56 920,25 C1300,22 1200,56 2000,55 L1200"
          /> 
          <path
            fill="#ffffff"
            d="M0,27 C10,27 200,53 900,25 C1300,22 1200,56 2000,55 L1200, 100 L0,100 Z"
          />
          
        </Box>
      </Box>
      

      {/* Contenido: título + descripción + botón a la izquierda */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          flex: 1,
          pl: { xs: 3, sm: 6, md: 10 },
          pr: { xs: 2, sm: 4 },
          py: { xs: 6, md: 0 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          maxWidth: 780,
          height: '100%',
        }}
      >
      
        
        {/* Frase grande (título) - blanco, bold, varias líneas */}
        <Box
          component="h1"
          sx={{
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
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.75rem', lg: '3.5rem' },
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
            color: 'grey.800',
            mt: { xs: 2, md: 10},
            maxWidth: 560,
            fontWeight: 700,
            fontSize: { xs: '0.8rem', sm: '0.95rem', md: '1.05rem' },
            lineHeight: 1.65,
            animation: `${fadeInUp} 0.8s ease-out 0.2s forwards`,
            opacity: 0,
          }}
        >
          Garantizamos la seguridad y el cumplimiento legal que su negocio necesita para operar sin interrupciones. Consulta por nuestros paquetes corporativos SST + ITSE.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={handleCta}
          sx={{
            mt: { xs: 2.5, md: 3.5 },
            px: { xs: 2.5, md: 3.5 },
            py: { xs: 1.25, md: 1.5 },
            fontSize: { xs: '0.9rem', md: '1rem' },
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

  {/* Overlay: gradiente izquierda para legibilidad del título blanco */}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '30%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)',
          zIndex: 1,
        }}
      />
      {/* Personaje*/}
      <Box
        sx={{
          top: 0,
          right: 0,
          height: '100%',
          zIndex: 3,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <img
          src={HERO_PERSONAJE}
          alt=""
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom right',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />
      </Box> 
    </Box>
  );
};
