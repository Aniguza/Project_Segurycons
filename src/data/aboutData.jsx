// src/data/aboutData.js
import nosotrosImg from "../assets/NosoDes.png"; // Asegúrate de tener una imagen en esta ruta
import { FaRegHandshake } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa6";

import foto from "../assets/Certificado1.jpg";
import foto1 from "../assets/Certificado2.jpg";

export const aboutData = {
  empresa: "Segurycons",
  titulo: "Nosotros",
  descripcion: `
    En Segurycons creemos que la seguridad no es un tramite sino un compromiso con la vida, el bienestar y la tranquilidad de nuestros clientes. Somos una empresa especializada en seguridad para edificaciones, dedicada a la gestión de Certificados de Seguridad, Licencias de Funcionamoiento y soluciones técnicas integrales. Nuestro equipo multidisciplinario de ingenieros, arquitectos y técnicos electricistas acreditados aporta experiencia, rigor técnico, visión proactiva para anticipar riesgos y garantizar procesos áfiles, transparentes y confiables. Trabajamos bajo las normativas vigetes y estándares internacionales (NFPA), ofreciendo soluciones innovadores que se adaptan a las necesidades de cada organización. Nuestro propósito es claro: proteger lo que construyes y respaldar lo que sueñas, siendo tu aliado estratégico en seguridad y cumplimiento normativo. 
  `,
  imgdescripcion: nosotrosImg,
  experiencia: `En Segurycons respaldamos nuestro compromiso con la seguridad a través de resultados. Nuestra experiencia en el sector nos permite ofrecer soluciones confiables, efectivas y adaptadas para cada actividad adaptadas para cada cliente.
  
  Cada proyecto representa un compromiso con la vida, la protección y el cumplimiento normativo.`,
  valores: [
    {
      icon: <FaRegHandshake />,
      title: "Compromiso",
      description:
        "En Segurycons, nuestro compromiso es con la seguridad y el bienestar de nuestros clientes. Nos dedicamos a proporcionar soluciones integrales y personalizadas que protejan vidas y propiedades.",
    },
    {
      icon: <TbTargetArrow />,
      title: "Misión",
      description:
        "Proteger la vida y el entorno mediante soluciones integrales y sostenibles en seguridad y salud ocupacional, garantizando el cumplimiento normativo y la satisfacción de nuestros clientes.",
    },
    {
      icon: <FaRegEye />,
      title: "Visión",
      description:
        "Ser líderes reconocidos en el sector de seguridad y salud ocupacional, innovando constantemente para ofrecer servicios de alta calidad que superen las expectativas de nuestros clientes.",
    },
  ],
  equipo: [
    {
      img: nosotrosImg,
      title: 'Ingeniería en Seguridad y Arquitectura: ',
      description: 'Diseño de seguridad a la medida.'
    },
    {
      img: nosotrosImg,
      title: 'Operaciones:',
      description: 'Resultados efectivos, en tiempo y forma.'
    },
    {
      img: nosotrosImg,
      title: 'Equipo de Mantenimiento: ',
      description: 'Capataces y Técnicos. Fiabilidad operativa a largo plazo.'
    },
  ],
  tituloCertificados: `Tu seguridad, respaldada por estándares que trascienden fronteras.`,
  descripcionCertificados: `
    En SEGURYCONS trabajamos bajo normativas nacionales e internacionales que garantizan la calidad y confiabilidad de cada servicio. 
    Nuestras certificaciones y acreditaciones son el respaldo de nuestro compromiso con la seguridad y el cumplimiento normativo.
  `,
  pdf: [
      {
          id: 1,
          imagen: foto,
      },
      {
          id: 2,
          imagen: foto1,
      },
      {
          id: 3,
          imagen: foto,
      },
      {
          id: 4,
          imagen: foto1,
      },
  ]
};
