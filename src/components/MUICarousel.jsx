import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

/**
 * Componente carrusel reutilizable - SOLO FUNCIONALIDAD
 * El diseño se maneja completamente mediante children
 * 
 * Props:
 * @param {React.ReactNode} children - Los slides como children
 * @param {Object} settings - Configuraciones del carrusel
 * @param {Object} sx - Estilos personalizados para el container principal
 * @param {Function} onSlideChange - Callback cuando cambia el slide (opcional)
 * @param {number} controlledSlide - Slide controlado externamente (opcional)
 */
const MUICarousel = ({ 
    children, 
    settings = {}, 
    sx = {},
    onSlideChange,
    controlledSlide
}) => {
    const [internalSlide, setInternalSlide] = useState(0);
    
    // Usar slide controlado externamente o interno
    const currentSlide = controlledSlide !== undefined ? controlledSlide : internalSlide;
    
    // Convertir children a array para manejar tanto un solo hijo como múltiples
    const slides = React.Children.toArray(children);
    const slideCount = slides.length;

    // Configuraciones por defecto
    const defaultSettings = {
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        transition: 'transform 0.5s ease-in-out'
    };

    const config = { ...defaultSettings, ...settings };

    // Auto-slide functionality
    useEffect(() => {
        if (!config.autoplay || slideCount <= 1) return;

        const interval = setInterval(() => {
            if (controlledSlide !== undefined) {
                // Si está controlado externamente, notificar el siguiente slide
                const newSlide = config.infinite 
                    ? (currentSlide + 1) % slideCount 
                    : currentSlide < slideCount - 1 ? currentSlide + 1 : 0;
                
                if (onSlideChange) {
                    onSlideChange(newSlide);
                }
            } else {
                // Si no está controlado externamente, cambiar estado interno
                setInternalSlide((prev) => {
                    const newSlide = config.infinite 
                        ? (prev + 1) % slideCount 
                        : prev < slideCount - 1 ? prev + 1 : 0;
                    
                    // Notificar cambio si hay callback
                    if (onSlideChange) {
                        onSlideChange(newSlide);
                    }
                    
                    return newSlide;
                });
            }
        }, config.autoplaySpeed);

        return () => clearInterval(interval);
    }, [config.autoplay, config.autoplaySpeed, config.infinite, slideCount, controlledSlide, onSlideChange, currentSlide]);

    // Callback cuando cambia el slide (solo para slide interno)
    useEffect(() => {
        if (onSlideChange && controlledSlide === undefined) {
            onSlideChange(currentSlide);
        }
    }, [currentSlide, onSlideChange, controlledSlide]);

    // Funciones de navegación para usar desde el exterior
    const goToSlide = (index) => {
        if (index >= 0 && index < slideCount) {
            if (controlledSlide !== undefined) {
                // Si está controlado externamente, solo notificar
                if (onSlideChange) {
                    onSlideChange(index);
                }
            } else {
                // Si no está controlado externamente, cambiar estado interno
                setInternalSlide(index);
            }
        }
    };

    const goToPrevSlide = () => {
        const newSlide = config.infinite 
            ? (currentSlide - 1 + slideCount) % slideCount
            : currentSlide > 0 ? currentSlide - 1 : slideCount - 1;
        
        goToSlide(newSlide);
    };

    const goToNextSlide = () => {
        const newSlide = config.infinite 
            ? (currentSlide + 1) % slideCount
            : currentSlide < slideCount - 1 ? currentSlide + 1 : 0;
        
        goToSlide(newSlide);
    };

    // Proporcionar funciones de control a los children mediante React.cloneElement
    const enhancedChildren = slides.map((child, index) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                key: index,
                carouselControls: {
                    currentSlide,
                    slideCount,
                    goToSlide,
                    goToPrevSlide,
                    goToNextSlide,
                    isActive: index === currentSlide
                }
            });
        }
        return child;
    });

    if (slideCount === 0) return null;

    return (
        <Box sx={{ width: '100%', position: 'relative', ...sx }}>
            {/* Container principal del carrusel */}
            <Box 
                sx={{ 
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Slides container */}
                <Box
                    sx={{
                        display: 'flex',
                        transition: config.transition,
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {enhancedChildren.map((child, index) => (
                        <Box
                            key={index}
                            sx={{
                                minWidth: '100%',
                                width: '100%',
                                flexShrink: 0
                            }}
                        >
                            {child}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default MUICarousel;