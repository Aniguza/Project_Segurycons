
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import heroImage from '../../assets/Hero.png';
import Recurso from '../../assets/Recurso.png';

export const Hero = () => {
 
    return (
        <Box
            sx={{
                height: { xs: 250, sm: 350, md: '90vh' },
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Capa oscura */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(255, 255, 255,0.65)',
                    zIndex: 1,
                }}
            />
            {/* Contenido principal */}
            <Box
                sx={{
                    position: 'relative',
                    maxWidth: 1100,
                    zIndex: 2,
                    flex: 1,
                    pl: { xs: 2, sm: 7, md: 10 },
                    pr: { xs: 12, sm: 24, md: 22, lg: 0 },
                    py: { xs: 8, md: 0 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <p>
                    <Typography  variant="hero" sx={{fontSize: { sm: '1.7rem', md: '2.5rem', lg: '3.5rem' }, fontWeight: 700, color: 'orange.main', display: 'inline' }}>
                        Expertos
                    </Typography>
                    <Typography  variant="hero" sx={{fontSize: { sm: '1.7rem', md: '2.5rem', lg: '3.5rem' }, fontWeight: 700, color: '#22346C', display: 'inline', ml: 1.5 }}
                    >
                        en Certificación ITSE para empresas. Tu
                    </Typography>
                    <Typography  variant="hero" sx={{fontSize: { sm: '1.7rem', md: '2.5rem',lg: '3.5rem' }, fontWeight: 700, color: 'orange.main', display: 'inline', ml: 1.4 }}>
                        aliado
                    </Typography>
                    <Typography
                      
                        variant="hero"
                        sx={{ fontSize: { sm: '1.7rem', md: '2.5rem', lg: '3.5rem' }, fontWeight: 700, color: '#22346C', display: 'inline', ml: 1 }}
                    >
                        en el Norte
                    </Typography>
                </p>

                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#22346C',
                        mt: {   xs: 2, md: 7 },
                        maxWidth:1900,
                        fontWeight: 700,
                        fontSize: { xs: 10, sm: 12, md: 18, lg: 21 },
                        
                    }}
                >
                    Garantizamos la seguridad y el cumplimiento legal que su negocio necesita para operar sin interrupciones. Consulta por nuestros paquetes corporativos SST + ITSE.
                </Typography>
            </Box>
            {/* Imagen decorativa derecha */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    height: '100%',
                    width: '34%',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                }}
            >
               
                    <img
                        src={Recurso}
                        alt="Decoración derecha"
                        style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'fill',
                            pointerEvents: 'none',
                            userSelect: 'none',
                        }}
                    />
            </Box>
        </Box>
    );
};
