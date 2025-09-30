import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import heroImage from '../../assets/Hero.png';
import Recurso from '../../assets/Recurso.png';
import gsap from 'gsap';

export const Hero = () => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        // small delay so the animation is visible after mount
        const t = setTimeout(() => setExpanded(true), 120);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        // Animación de texto con GSAP
        // split chars without paid SplitText: wrap cada caracter en un <span> y animar
        const elements = document.querySelectorAll('.hero-split');
        const timelines = [];

        elements.forEach((el, idx) => {
            const text = el.textContent || '';
            // keep accessibility: preserve original text for screen readers
            el.setAttribute('aria-label', text);
            el.setAttribute('role', 'text');
            // clear existing visual content
            el.innerHTML = '';
            // create span per char
            Array.from(text).forEach((ch) => {
                const span = document.createElement('span');
                span.className = 'char';
                // inline styles to allow transforms and preserve spacing
                span.style.display = 'inline-block';
                span.style.whiteSpace = 'pre';
                if (ch === ' ') {
                    span.innerHTML = '&nbsp;';
                    // optional small spacing class
                } else {
                    span.textContent = ch;
                }
                el.appendChild(span);
            });

            const chars = el.querySelectorAll('.char');
            // animate using gsap.from on the created char spans (equivalent to split.chars)
            const tween = gsap.from(chars, {
                duration: 1,
                y: 100, // animate from 100px below
                autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
                stagger: 0.02, // 0.05 seconds between each
                ease: 'power3.out',
            });

            timelines.push(tween);
        });

        // crear un timeline maestro que encadene las líneas hero
        const master = gsap.timeline();
        timelines.forEach((t, i) => {
            // overlap para que no sea tan rígido
            master.add(t, i === 0 ? 0 : '-=0.45');
        });

        return () => {
            // cleanup
            try {
                master.kill();
                timelines.forEach((t) => t.kill());
            } catch (e) {}
        };
    }, []);

    
    return (
        <Box
            sx={{
                height: '87vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Capa oscura */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(255, 255, 255,0.65)',
                    zIndex: 1,
                }}
            />
            {/* Contenido principal */}
            <Box
                sx={{
                    position: 'relative',
                    maxWidth: 900,
                    zIndex: 2,
                    flex: 1,
                    pl: { xs: 2, md: 10 },
                    pr: { xs: 2, md: 0 },
                    py: { xs: 8, md: 0 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <p>
                    <Typography className="hero-split" variant="hero" sx={{ fontWeight: 700, color: 'orange.main', display: 'inline' }}>
                        Expertos
                    </Typography>
                    <Typography className="hero-split" variant="hero" sx={{ fontWeight: 700, color: '#22346C', display: 'inline', ml: 1.5 }}
                    >
                        en Certificación ITSE para empresas. Tu
                    </Typography>
                    <Typography className="hero-split" variant="hero" sx={{ fontWeight: 700, color: 'orange.main', display: 'inline', ml: 1.4 }}>
                        aliado
                    </Typography>
                    <Typography
                        className="hero-split"
                        variant="hero"
                        sx={{ fontWeight: 700, color: '#22346C', display: 'inline', ml: 1 }}
                    >
                        en el Norte
                    </Typography>
                </p>




                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#22346C',
                        mt: 7,
                        maxWidth: 900,
                        fontWeight: 700,
                        borderRadius: 2,
                        fontSize: { xs: 14, md: 18 },
                        display: 'inline-block',
                    }}
                >
                    Garantizamos la seguridad y el cumplimiento legal que su negocio necesita para operar sin interrupciones. Consulta por nuestros paquetes corporativos SST + ITSE.
                </Typography>
            </Box>
            {/* Imagen decorativa derecha */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    height: '100%',
                    width: '34%',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                }}
            >
                <Collapse
                    in={expanded}
                    timeout={3000}
                    orientation="vertical"
                    sx={{
                        transformOrigin: 'top center',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                    }}
                >
                    <img
                        src={Recurso}
                        alt="Decoración derecha"
                        style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'fill',
                            pointerEvents: 'none',
                            userSelect: 'none',
                        }}
                    />

                </Collapse>


            </Box>
        </Box>
    );
};
