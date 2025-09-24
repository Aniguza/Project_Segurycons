import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import heroImage from '../../assets/hero.png';
import Recurso from '../../assets/Recurso.png';

export const Hero = () => {
    return (
        <Box
            sx={{
                height: '87vh',
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
                    zIndex: 2,
                    flex: 1,
                    pl: { xs: 2, md: 10 },
                    pr: { xs: 2, md: 0 },
                    py: { xs: 8, md: 0 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <p>
                    <Typography variant="hero" sx={{ fontWeight: 700, color: 'orange.main', display: 'inline' }}>
                        Protegemos
                    </Typography>
                    <Typography
                        variant="hero"
                        sx={{ fontWeight: 700, color: '#22346C', display: 'inline', ml: 1 }}
                    >
                        lo que construyes,
                    </Typography>
                    <br />
                    <Typography variant="hero" sx={{ fontWeight: 700, color: 'orange.main', display: 'inline' }}>
                        respaldamos
                    </Typography>
                    <Typography
                        variant="hero"
                        sx={{ fontWeight: 700, color: '#22346C', display: 'inline', ml: 1 }}
                    >
                        lo que sueñas.
                    </Typography>
                </p>

                
                
                
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#22346C',
                        mt: 4,
                        maxWidth: 600,
                        fontWeight: 700,
                        
                        borderRadius: 2,
                        
                        fontSize: { xs: 14, md: 16 },
                        display: 'inline-block',
                    }}
                >
                    Expertos en seguridad para edificaciones, gestionamos tus certificados y licencias con respaldo profesional y cumplimiento normativo.
                </Typography>
            </Box>
            {/* Imagen decorativa derecha */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    height: '100%',
                    width: 'fit-content',
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
