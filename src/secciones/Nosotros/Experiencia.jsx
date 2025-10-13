import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import nosotrosImg from "../../assets/NosoDes.png"; // Asegúrate de tener una imagen en esta ruta

export const Experiencia = () => {
    return (
        <Box sx={{ width: '100%', height: { xs: '500px', sm: '400px' }, px: { xs: 1, sm: 5 }, justifyContent: 'center', bgcolor: 'common.white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Typography variant="h3" sx={{ textAlign: 'center', color: 'primary.main', fontWeight: 700, fontSize: { xs: '20px', sm: '25px', md: '30px' } }}>
                Nuestra Experiencia
            </Typography>
            <Grid container spacing={2} sx={{ maxWidth: 1200, color: 'primary.main' }}>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ textAlign: 'justify', padding: { xs: 2, sm: 5 }, fontSize: { xs: '10px', sm: '12px', md: '16px' } }}>
                        En Segurycons respaldamos nuestro compromiso con la seguridad a través de resultados. Nuestra experiencia en el sector nos permite ofrecer soluciones confiables, efectivas y adaptadas para cada actividad adaptadas para cada cliente.
                        <br /><br />
                        Cada proyecto representa un compromiso con la vida, la protección y el cumplimiento normativo
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} >
                    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: '100%', textAlign: 'center', alignContent: 'center', justifyContent: 'center' }}>
                        <Grid size={6}>
                            <Typography variant='h2'>
                                +20
                            </Typography>
                            <Typography variant='body2' sx={{ fontWeight: 700, mb: 1 }}>
                                Años de experiencia
                            </Typography>
                        </Grid>

                        <Grid size={6}>
                            <Typography variant='h2'>
                                +
                            </Typography>
                            <Typography variant='body2' sx={{ fontWeight: 700, mb: 1 }}>
                                Certificados ITSE obtenidos
                            </Typography>
                        </Grid>
                        <Grid size={6}>
                            <Typography variant='h2'>
                                +
                            </Typography>
                            <Typography variant='body2' sx={{ fontWeight: 700, mb: 1 }}>
                                Licencias de funcionamiento
                            </Typography>
                        </Grid>
                        <Grid size={6}>
                            <Typography variant='h2'>
                                99%
                            </Typography>
                            <Typography variant='body2' sx={{ fontWeight: 700, mb: 1 }}>
                                de efectividad
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}
