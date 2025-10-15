import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import nosotrosImg from "../../assets/NosoDes.png"; // Asegúrate de tener una imagen en esta ruta

export const Descripcion = ({ data }) => {
    return (
        <Box sx={{ width: '100%', padding: { xs: 3, sm: 5 }, display: 'flex', justifyContent: 'center', bgcolor: 'common.white' }}>
            <Grid container spacing={2} sx={{ bgcolor: 'background.default', maxWidth: 1200 }}> 
                <Grid size={{ xs: 12, sm: 7 }} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ textAlign: 'justify', color: 'primary.main', padding: { xs: 3, sm: 5 }, fontSize: { xs: '10px', sm: '12px', md: '16px' } }}>
                        {data.descripcion}
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 5}}>
                    <Box component='img' src={data.imgdescripcion} alt='Nosotros' sx={{ width: '100%', height: '100%', objectFit: 'cover' }}>

                    </Box>
                </Grid>
                
            </Grid>
        </Box>
    )
}
