import React from 'react'
import { Box } from '@mui/material'
import { servicesData } from "../data/servicesData";
import { BannerSections } from '../components/BannerSections';
import { CardsServices } from '../components/CardsServices';

export const Consultoria = () => {
    return (
        <Box sx={{ mt: { xs: '55px', md: '106px' } }}>
            <BannerSections data={servicesData} serviceType="consultoria" />
            <CardsServices 
                servicios={servicesData.consultoria}
                linkPath="/consultoria"
                showImage={true}
                linkText="Conocer más →"
            />
        </Box>
    )
}
