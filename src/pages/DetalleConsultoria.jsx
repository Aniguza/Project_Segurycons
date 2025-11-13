import React from "react";
import { useParams } from 'react-router';
import { Detalle } from '../components/Detalle';
import { servicesData } from "../data/servicesData";
import foto from '../assets/Hero.png';

export const DetalleConsultoria = () => {
    const { slug } = useParams();

    // Buscar el servicio específico por slug
    const consultoria = servicesData.consultoria?.find(s => s.slug === slug);



    // Texto final personalizado para consultoría
    const textoFinal = "En SEGURYCONS transformamos desafíos en oportunidades, brindando consultoría técnica de clase mundial que impulsa el éxito y crecimiento sostenible de su organización.";

    return (
        <Detalle
            servicio={consultoria}
            bannerData={consultoria}
            buttonText="AGENDA TU CONSULTA"
            buttonLink="/contacto"
            textoFinal={textoFinal}
        />
    )
}