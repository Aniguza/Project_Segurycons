import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * Minimal Carousel wrapper that only handles functionality.
 * Provide the slide markup as children (one child per slide).
 * Props:
 * - settings: react-slick settings override
 * - sx: style object for outer Box
 */
const Carousel = ({ settings = {}, sx = {}, children }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    appendDots: (dots) => (
      <div style={{ textAlign: 'right' }}>
        <ul style={{ margin: 0 }}>{dots}</ul>
      </div>
    ),
  };

  const merged = { ...defaultSettings, ...settings };

  return (
    <Box sx={{ width: '100%', overflow: 'visible', '& .slick-slide': { overflow: 'visible' }, ...sx }}>
      <Slider {...merged}>{children}</Slider>
    </Box>
  );
};

export default Carousel;
