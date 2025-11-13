import React from "react";
import { useParams } from 'react-router';
import { Detalle } from '../components/Detalle';
import { servicesData } from "../data/servicesData";
import foto from '../assets/Hero.png';

export const DetalleMantenimiento = () => {
    const { slug } = useParams();

    // Buscar el servicio específico por slug
    const mantenimiento = servicesData.mantenimiento?.find(s => s.slug === slug);

    // Texto final personalizado para mantenimiento
    const textoFinal = "En SEGURYCONS nos comprometemos a mantener sus instalaciones en perfectas condiciones operativas, garantizando la continuidad de su negocio con el más alto nivel de calidad y profesionalismo.";

    return (
        <Detalle
            servicio={mantenimiento}
            bannerData={mantenimiento}
            serviceType="mantenimiento"
            buttonText="SOLICITA TU COTIZACIÓN"
            buttonLink="/contacto"
            textoFinal={textoFinal}
        />
    )
}