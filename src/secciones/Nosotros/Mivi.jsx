import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Mivi = ({data}) => {
    return (
        <Box sx={{
            padding: { xs: '40px 20px', md: '80px 20px' },
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 3, lg: 6 },
                width: { xs: '90%', sm: '95%', lg: '95%' },
                maxWidth: '1300px',
                mx: 'auto',
            }}>
                {data.valores.map((item, i) => (
                    <Box 
                        key={i}
                        sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 2, lg: 4 }, backgroundColor: 'secondary.main', padding: { xs: 3, md: 4 }, minHeight: { xs: '250px', sm: '290px', lg: '400px' }, height: '100%', minWidth: { xs: '200px', md: '270px', lg: '300px' }, width: '100%', color: 'white', border: '7px solid #F28737',
                            position: 'relative', '&::before': { content: "''", position: 'absolute', top: -2, right: -2, bottom: -2, left: -2, border: '5px solid' }, 
                            '& svg': { width: { xs: '40px', md: '50px' }, height: { xs: '40px', md: '50px' } }
                         }}
                        
                    >
                        {item.icon}
                        <Typography variant="h3" sx={{fontSize: {xs: '1rem', lg: '1.5rem'}}}>{item.title}</Typography>
                        <Typography variant="body2" sx={{fontSize: {xs: '0.7rem', lg: '1rem'}}}>{item.description}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    
    );
};
