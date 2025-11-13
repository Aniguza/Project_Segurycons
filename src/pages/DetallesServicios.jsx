import React from "react";
import { useParams } from 'react-router'
import { servicesData } from "../data/servicesData";
import { Detalle } from '../components/Detalle';

export const DetallesServicios = () => {
    const { slug } = useParams();

    // Buscar el servicio específico por slug
    const servicio = servicesData.servicios.find(s => s.slug === slug);

    // Texto final personalizado
    const textoFinal = servicio ? 
        `En SEGURYCONS combinamos experiencia, tecnología y rigor técnico para brindarte ${servicio.titulo.toLowerCase()} con la máxima calidad y certificación profesional.` 
        : '';

    return (
        <Detalle
            servicio={servicio}
            bannerData={servicio}
            serviceType="servicios"
            buttonText="COTIZA TU INSTALACIÓN"
            buttonLink="/contacto"
            textoFinal={textoFinal}
        />
    )
}
