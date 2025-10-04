import React from 'react'
import { Box } from '@mui/material';


export const Clientes = () => {
    return (
        <Box sx={{ mt: { xs: '70px', md: '90px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Box sx={{ width: '80%', bgcolor: '#2f4169'}}>
                <marquee direction="left" sx={{ windth: '80%' }}>
                    <h1>Clientes</h1>
                </marquee>
            </Box>
        </Box>
    );
};
