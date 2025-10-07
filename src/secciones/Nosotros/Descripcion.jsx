import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import nosotrosImg from "../../assets/NosoDes.png"; // Asegúrate de tener una imagen en esta ruta

export const Descripcion = () => {
    return (
        <Box sx={{ width: '100%', padding: { xs: 3, sm: 5 }, display: 'flex', justifyContent: 'center', bgcolor: 'common.white' }}>
            <Grid container spacing={2} sx={{ bgcolor: 'background.default', maxWidth: 1200 }}> 
                <Grid size={{ xs: 12, sm: 7 }} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ textAlign: 'justify', color: 'primary.main', padding: { xs: 3, sm: 5 }, fontSize: { xs: '10px', sm: '12px', md: '14px' } }}>
                        En Segurycons creemos que la seguridad no es un tramite sino un compromiso con la vida, el bienestar y la tranquilidad de nuestros clientes. Somos una empresa especializada en seguridad para edificaciones, dedicada a la gestión de Certificados de Seguridad, Licencias de Funcionamoiento y soluciones técnicas integrales. Nuestro equipo multidisciplinario de ingenieros, arquitectos y técnicos electricistas acreditados aporta experiencia, rigor técnico, visión proactiva para anticipar riesgos y garantizar procesos áfiles, transparentes y confiables. Trabajamos bajo las normativas vigetes y estándares internacionales (NFPA), ofreciendo soluciones innovadores que se adaptan a las necesidades de cada organización. Nuestro propósito es claro: proteger lo que construyes y respaldar lo que sueñas, siendo tu aliado estratégico en seguridad y cumplimiento normativo. 
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 5}}>
                    <Box component='img' src={nosotrosImg} alt='Nosotros' sx={{ width: '100%', height: '100%', objectFit: 'cover' }}>

                    </Box>
                </Grid>
                
            </Grid>
        </Box>
    )
}
