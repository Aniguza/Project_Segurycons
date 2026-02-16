import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


export const Equipo = ({data}) => {
    
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: { xs: '40px 20px', md: '30px 20px' }, gap: 6
        }}>
            <Typography variant="h3" sx={{ textAlign: 'center', color: 'primary.main', fontWeight: 700, fontSize: { xs: '20px', sm: '25px', md: '30px' } }}>
                Nuestro equipo
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: { xs: 3, lg: 6 },
                    width: { xs: '90%', sm: '95%', lg: '95%' },
                    maxWidth: '1300px',
                    mx: 'auto',
                }}>
                {data.equipo.map((item, i) => (
                    <Box
                        key={i}
                        sx={{
                            position: 'relative',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: { xs: 2, lg: 4 },
                            height: '100%',
                            minWidth: { xs: '160px', md: '200px', lg: '300px' },
                            width: '100%',
                            borderRadius: 2,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                transition: 'all 0.3s ease-in-out',
                            },
                            '&:hover .overlay': {
                                opacity: 1,
                            }
                        }}
                    >
                        {/* Imagen */}
                        <Box
                            component='img'
                            src={item.img}
                            alt={item.title}
                            sx={{
                                width: '450px',
                                height: '280px',
                                objectFit: 'cover',
                                borderRadius: 2,
                            }}
                        />
                        
                        {/* Overlay con título y descripción */}
                        <Box
                            className="overlay"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: { xs: 2, md: 3 },
                                textAlign: 'center',
                                opacity: 0,
                                transition: 'opacity 0.3s ease-in-out',
                                borderRadius: 2,
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '18px', sm: '17px', md: '23px' },
                                    mb: 1,                     
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: { xs: '16px', sm: '13px', md: '20px' },
                                    lineHeight: 1.4
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
