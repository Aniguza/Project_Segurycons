import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { servicesData } from "../data/servicesData";
import { BannerSections } from '../components/BannerSections';

export const Servicios = () => {
    return (
        <Box sx={{ mt: { xs: '55px', md: '106px' } }}>
            <BannerSections data={servicesData} />
            <Box sx={{ flexGrow: 1, p: 2, my: { xs: 2, md: 5 }, maxWidth: '1500px', width: { xs: '95%', sm: '90%', md: '100%' }, mx: 'auto', display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {servicesData.servicios.map((servicio) => (
                        <Grid item xs={12} sm={4} md={4} key={servicio.id} >
                            <Box
                                sx={{
                                    p: 2.5,
                                    bgcolor: 'background.paper',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease',
                                    width: { xs: '100%', sm: '300px', md: '400px' },
                                    position: 'relative',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: '#e8e8e8',
                                        borderRadius: 1,
                                        width: '100%',
                                        paddingBottom: '60%',
                                        position: 'relative',
                                        mb: 2
                                    }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontWeight: 700,
                                        color: 'primary.main',
                                        fontSize: { xs: '0.875rem', md: '1rem' },
                                        lineHeight: 1.4,
                                        mb: 1.5,
                                        minHeight: 'auto',
                                    }}
                                >
                                    {servicio.titulo}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        mb: 2,
                                        flex: 1,
                                    }}
                                >
                                    {servicio.descripcion}
                                </Typography>
                                <Typography
                                    component="span"
                                    sx={{
                                        color: 'error.main',
                                        fontSize: '0.875rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        '&:hover': {
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    Conocer más →
                                </Typography>
                            </Box>
                            
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}
