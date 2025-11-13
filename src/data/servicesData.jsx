import { BeefIcon } from 'lucide-react';
import foto1 from '../assets/NosoDes.png';

export const servicesData = {
    titulo: "Servicios",
    servicios: [
        {
            id: 1,
            slug: "pintura-industrial-comercial",
            titulo: "SERVICIOS DE PINTURA INDUSTRIAL Y COMERCIAL",
            subtitulo: "Servicios de pintura industrial y comercial",
            descripcion: "Servicios especializados de pintura con materiales de alta resistencia para el mantenimiento estético y estructural de sus plantas y oficinas.",
            imagen: [foto1],
            descripcion_larga: "Ejecutamos proyectos de pintura interior y exterior con materiales industriales y de alta resistencia. Mantenemos la imagen corporativa de sus instalaciones y protegemos sus estructuras contra la corrosión y el desgaste ambiental.",
            normativa: `Estándares de seguridad industrial y calidad de materiales (NTP) (ISO)`,
            ofrecemos: `<ul>
                <li>Aplicación de pintura epóxica, poliuretano o tráfico.</li>
                <li>Pintado de estructuras y tanques en altura.</li>
                <li>Preparación de superficies anti-corrosivas.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Durabilidad:</b> Uso de materiales industriales que reducen la frecuencia de mantenimiento.</li>
                <li><b>Subcontratación Ágil:</b> Ejecución con equipo especializado.</li>
            </ul>`
        },
        {
            id: 2,
            slug: "drywall-construccion-ligera",
            titulo: "SERVICIOS DE DRYWALL Y CONSTRUCCIÓN LIGERA",
            subtitulo: "Servicios de drywall y construcción ligera",
            descripcion: "Implementación y modificación rápida de paredes, techos y divisiones en drywall para optimizar la distribución de áreas operativas.",
            imagen: [foto1],
            descripcion_larga: "Una solución ágil y limpia para optimizar la distribución de sus oficinas o almacenes. Creamos divisiones, falsos techos y elementos decorativos, asegurando la continuidad de sus operaciones con mínima interferencia.",
            normativa: "RNE (Norma E.070, Norma A.120).",
            ofrecemos: `<ul>
                <li>Diseño de planos de distribución interna.</li>
                <li>Instalación de paredes y techos termoacústicos.</li>
                <li>Refuerzo estructural ligero.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Flexibilidad:</b> Modificación rápida de espacios corporativos.</li>
                <li><b>Mínima Interrupción:</b> Trabajos rápidos que no detienen la operación.</li>
            </ul>`
        },
        {
            id: 3,
            slug: "estructuras-metalicas",
            titulo: "INSTALACIÓN Y MANTENIMIENTO DE ESTRUCTURAS METÁLICAS",
            subtitulo: "Instalación y mantenimiento de estructuras metálicas",
            descripcion: "Diseño, fabricación e instalación de estructuras metálicas con trabajos de soldadura especializada y certificada.",
            imagen: [foto1],
            descripcion_larga: "Fabricamos e instalamos techos, mezzanines, soportes industriales y escaleras. Garantizamos la seguridad estructural y el cumplimiento de las normas de calidad, ofreciendo servicios de subcontratación confiables para grandes proyectos.",
            normativa: "RNE (Norma E.090), Códigos de Soldadura AWS.",
            ofrecemos: `<ul>
                <li>Diseño y cálculo de estructuras.</li>
                <li>Trabajos de soldadura certificados.</li>
                <li>Mantenimiento y refuerzo de estructuras existentes.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Seguridad Garantizada:</b> Estructuras diseñadas y ejecutadas por especialistas.</li>
                <li><b>Cumplimiento:</b> Trabajos bajo códigos de soldadura.</li>
            </ul>`
        },
        {
            id: 4,
            slug: "albanileria-acabados-mantenimiento",
            titulo: "ALBAÑILERÍA Y ACABADOS DE MANTENIMIENTO",
            subtitulo: "Albañilería y acabados de mantenimiento",
            descripcion: "Servicios de albañilería general para reparaciones, modificaciones y acabados, manteniendo la infraestructura en óptimas condiciones.",
            imagen: [foto1],
            descripcion_larga: "Solucionamos desperfectos en muros, pisos, cimentaciones menores y áreas comunes. Proporcionamos un servicio integral de mantenimiento correctivo y preventivo de infraestructura civil. Ideal para mantener la funcionalidad y seguridad de sus sedes corporativas y almacenes.",
            normativa: "RNE (Norma E.020 - Cargas, E.050 - Suelos), normas de seguridad en construcción.",
            ofrecemos: `<ul>
                <li>Reparación y modificación de muros y pisos.</li>
                <li>Tarrajeo, enchapes y acabados.</li>
                <li>Refacciones estructurales menores.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Funcionalidad:</b> Mantenimiento de la infraestructura en condiciones óptimas.</li>
                <li><b>Soluciones Rápidas:</b> Ejecución eficiente de reparaciones urgentes.</li>
            </ul>`
        },
        {
            id: 5,
            slug: "saneamiento-ambiental-control-plagas",
            titulo: "SANEAMIENTO AMBIENTAL Y CONTROL DE PLAGAS",
            subtitulo: "Saneamiento ambiental y control de plagas",
            descripcion: "Programas de saneamiento y control de plagas certificados para garantizar un entorno industrial y corporativo seguro e higiénico.",
            imagen: [foto1],
            descripcion_larga: "Implementamos planes de desinfección, desratización y fumigación periódica con certificación oficial. Aseguramos que sus áreas de producción y oficinas cumplan con los más altos estándares de salud y sanidad requeridos por normativas internas y externas.",
            normativa: "MINSA (Ministerio de Salud), DGESA (Dirección General de Salud Ambiental).",
            ofrecemos: `<ul>
                <li>Diagnóstico y elaboración de Plan de Saneamiento.</li>
                <li>Desinfección de áreas críticas y control microbiológico.</li>
                <li>Emisión de Certificados de Saneamiento para el expediente de Licencia.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Riesgo Sanitario Cero:</b> Protección de sus productos y personal.</li>
                <li><b>Documentación Legal:</b> Certificados válidos para inspecciones de sanidad y licencias.</li>
            </ul>`
        },
        {
            id: 6,
            slug: "licencias-de-obra-y-habilitaciones-urbanas",
            titulo: "LICENCIAS DE OBRA Y HABILITACIONES URBANAS",
            subtitulo: "Licencias de obra y habilitaciones urbanas",
            descripcion: "Gestión integral de su Licencia de Edificación y Habilitación Urbana para que sus proyectos de inversión inicien bajo el marco legal vigente.",
            imagen: [foto1],
            descripcion_larga: "Asesoramos y gestionamos todos los permisos necesarios para la construcción o modificación de sus activos inmobiliarios. Nos encargamos del expediente técnico y el seguimiento municipal para que su inversión se ejecute bajo el marco legal vigente, evitando paralizaciones y multas.",
            normativa: "Ley N° 29090 (Regulación de Habilitaciones Urbanas y de Edificaciones), RNE.",
            ofrecemos: `<ul>
                <li>Elaboración del expediente técnico y planos visados.</li>
                <li>Trámite de Licencia de Edificación.</li>
                <li>Asesoría en los requisitos de Habilitación Urbana.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Inversión Protegida:</b> Asegura la legalidad desde el inicio de la obra.</li>
                <li><b>Aceleración:</b> Reducción de los tiempos de espera burocrática.</li>
            </ul>`
        },
        {
            id: 7,
            slug: "saneamiento-fisico-legal-de-predios",
            titulo: "SANEAMIENTO FÍSICO LEGAL DE PREDIOS",
            subtitulo: "Saneamiento físico legal de predios",
            descripcion: "Regularización de la situación física y legal de sus propiedades ante registros públicos y municipalidades para blindar su patrimonio.",
            imagen: [foto1],
            descripcion_larga: "Resolvemos discrepancias registrales, de linderos, áreas y titularidades. Un predio saneado físicamente y legalmente es indispensable para la obtención de créditos, licitaciones y la protección de su inversión. Nuestro equipo legal y técnico garantiza la correcta inscripción de su propiedad.",
            normativa: "Ley N° 27157 (Regularización de Edificaciones), Ley de Catastro Urbano, SUNARP.",
            ofrecemos: `<ul>
                <li>Levantamiento topográfico y planos georreferenciados.</li>
                <li>Rectificación de áreas y linderos.</li>
                <li>Trámite de inscripción ante SUNARP.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Seguridad Patrimonial:</b> Respaldo legal total de la propiedad de sus activos.</li>
                <li><b>Acceso a Inversión:</b> Predios aptos para hipotecas y licitaciones.</li>
            </ul>`
        },
        {
            id: 8,
            slug: "regularizacion-de-obras-y-declaratorias-de-fabrica",
            titulo: "REGULARIZACIÓN DE OBRAS Y DECLARATORIAS DE FÁBRICA",
            subtitulo: "Regularización de obras y declaratorias de fábrica",
            descripcion: "Gestión integral de la regularización de obras civiles y la inscripción de la Declaratoria de Fábrica ante registros públicos.",
            imagen: [foto1],
            descripcion_larga: "Nos encargamos de todos los trámites para formalizar edificaciones existentes que carecen de licencia o de la inscripción de la Declaratoria de Fábrica. Esto asegura que el valor legal y registral de su infraestructura sea reconocido oficialmente.",
            normativa: "Ley N° 27157 (Regularización de Edificaciones), Ley de Catastro.",
            ofrecemos: `<ul>
                <li>Elaboración de planos de levantamiento.</li>
                <li>Trámite ante la Municipalidad.</li>
                <li>Inscripción de la Declaratoria de Fábrica en SUNARP.</li>
            </ul>`,
            beneficios: `<ul>
            <li><b>Valor Legal Aumentado:</b> Incremento del valor de la propiedad al estar registrada.</li>
            <li><b>Seguridad Jurídica:</b> Patrimonio libre de contingencias.</li>
        </ul>`
        },
        {
            id: 9,
            slug: "certificados-de-zonificacion-y-compatibilidad-de-uso",
            titulo: "CERTIFICADOS DE ZONIFICACIÓN Y COMPATIBILIDAD DE USO",
            subtitulo: "Certificados de zonificación y compatibilidad de uso",
            descripcion: "Tramitamos su Certificado de Compatibilidad de Uso confirmando que su actividad corporativa sea legalmente viable en la ubicación elegida.",
            imagen: [foto1],
            descripcion_larga: "Este certificado es crucial para la obtención de la Licencia de Funcionamiento y la planificación de inversión. Verificamos que los planes municipales permitan el desarrollo de su rubro industrial o comercial en la zona, mitigando el riesgo de rechazo de proyectos.",
            normativa: "Ley Orgánica de Municipalidades, Planes de Acondicionamiento Territorial (PAT) y Desarrollo Urbano (PDU).",
            ofrecemos: `<ul>
                <li>Recopilación de requisitos técnicos.</li>
                <li>Elaboración de la solicitud formal.</li>
                <li>Seguimiento y obtención del certificado municipal.</li>
            </ul>`,
            beneficios: `<ul>
            <li><b>Inversión Segura:</b> Confirma la viabilidad legal antes de invertir en una ubicación.</li>
            <li><b>Proceso Rápido:</b> Documento esencial para la Licencia de Funcionamiento.</li>
        </ul>`
        },
        {
            id: 10,
            slug: "certificados-de-uso-de-suelo-zonificacion-y-vias",
            titulo: "CERTIFICADOS DE USO DE SUELO, ZONIFICACIÓN Y VÍAS",
            subtitulo: "Certificados de uso de suelo, zonificación y vías",
            descripcion: "Gestionamos los certificados que definen el uso específico del suelo y las vías circundantes a su propiedad, claves para cualquier proyecto.",
            imagen: [foto1],
            descripcion_larga: "Proporcionamos la documentación oficial sobre la calificación de su terreno y el impacto vial. Esta información es requerida por entidades financieras, para trámites de licencia de obra y para la presentación en grandes licitaciones.",
            normativa: "Planes de Acondicionamiento Territorial (PAT) y Desarrollo Urbano (PDU), Ley Orgánica de Municipalidades.",
            ofrecemos: `<ul>
                <li>Trámite de Certificado de Parámetros Urbanísticos.</li>
                <li>Obtención del Certificado de Nomenclatura de Vías.</li>
            </ul>`,
            beneficios: `<ul>
            <li><b>Transparencia Legal:</b> Documentos oficiales que blindan sus decisiones de ubicación.</li>
            <li><b>Acceso a Licitaciones:</b> Cumplimiento de requisitos documentarios para concursos.</li>
        </ul>`
        }

    ],
    mantenimiento: [
        {
            id: 1,
            slug: "implementacion-de-equipos-de-seguridad-post-obra",
            titulo: "IMPLEMENTACIÓN DE EQUIPOS DE SEGURIDAD POST OBRA",
            subtitulo: "Implementación de equipos de seguridad post obra",
            descripcion: "Suministro e instalación final de equipos de seguridad y señalización esenciales para la puesta en marcha de su nueva infraestructura.",
            imagen: [foto1],
            descripcion_larga: "Cerramos el ciclo de su proyecto constructivo con la implementación de todos los elementos de seguridad pasiva y activa obligatorios, incluyendo señalización, equipos DACI y luces de emergencia. Garantizamos que la entrega de su obra cumpla con los estándares requeridos para su certificación final.",
            normativa: "RNE (Reglamento Nacional de Edificaciones), Norma G.050.",
            ofrecemos: `<ul>
                <li>Suministro de equipos con certificación.</li>
                <li>Instalación estratégica de señalización.</li>
                <li>Asesoría en la ubicación reglamentaria de elementos.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Cumplimiento Inmediato:</b> Su obra lista para la Inspección ITSE.</li>
                <li><b>Protección de Activos:</b> Elementos básicos de respuesta y evacuación.</li>
            </ul>`
        },
        {
            id: 2,
            slug: "instalacion-de-sistemas-de-alarma-y-deteccion-de-incendios",
            titulo: "INSTALACIÓN DE SISTEMAS DE ALARMA Y DETECCIÓN DE INCENDIOS",
            subtitulo: "Instalación de sistemas de alarma y detección de incendios",
            descripcion: "Diseño e instalación de sistemas que garantizan la detección temprana y la protección eficaz de su infraestructura y personal.",
            imagen: [foto1],
            descripcion_larga: "Implementamos sistemas de detección y alarma direccionables y convencionales, configurados a la medida de su operación. Nuestro enfoque en ingeniería garantiza la respuesta automática y la rápida evacuación, minimizando pérdidas.",
            normativa: "NFPA 72 (National Fire Protection Association), RNE (Norma A.130).",
            ofrecemos: `<ul>
                <li>Diseño del sistema (mapa de detectores y cobertura).</li>
                <li>Instalación de paneles, detectores y dispositivos.</li>
                <li>Pruebas de funcionamiento y puesta en marcha.</li>
                <li>Certificaciones y mantenimientos periódicos del sistema.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Respuesta Crítica:</b> Alerta temprana para evitar la propagación.</li>
                <li><b>Máxima Confiabilidad:</b> Sistemas instalados con estándares de calidad global.</li>
            </ul>`
        },
        {
            id: 3,
            slug: "venta-e-instalacion-de-equipos-extintores",
            titulo: "VENTA E INSTALACIÓN DE EQUIPOS EXTINTORES",
            subtitulo: "venta e instalación de equipos extintores",
            descripcion: "Suministro, venta e instalación estratégica de extintores certificados para el control inicial de incendios.",
            imagen: [foto1],
            descripcion_larga: "Aseguramos que su empresa cuente con la clase y capacidad de extintores adecuados, ubicados reglamentariamente y listos para ser usados. Incluimos la certificación, etiquetado y capacitación básica.",
            normativa: "NTP 350.043-1 (Extintores Portátiles), DS N° 002-2018-PCM.",
            ofrecemos: `<ul>
                <li>Venta de extintores ABC, CO2, PQS, etc.</li>
                <li>Ubicación e instalación según plano de seguridad.</li>
                <li>Etiquetado y registro.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Conformidad ITSE:</b> Cumplimiento de la dotación requerida.</li>
                <li><b>Seguridad Básica:</b> Personal capacitado para la primera respuesta.</li>
            </ul>`
        },
        {
            id: 4,
            slug: "mantenimiento-y-certificacion-de-sistemas-de-agua-contra-incendios",
            titulo: "MANTENIMIENTO Y CERTIFICACIÓN DE SISTEMAS DE AGUA CONTRA INCENDIOS",
            subtitulo: "Mantenimiento y certificación de sistemas de agua contra incendios",
            descripcion: "Mantenimiento preventivo y correctivo con certificación periódica para garantizar la operatividad al 100% de su Sistema ACI.",
            imagen: [foto1],
            descripcion_larga: "Realizamos pruebas funcionales, mantenimiento y calibración de bombas, redes de rociadores automáticos (sprinklers) y gabinetes. La certificación periódica es fundamental para su documentación de seguridad y asegura que su sistema esté siempre listo para actuar.",
            normativa: "NFPA 25 y 72 (Inspección, Pruebas y Mantenimiento de Sistemas de Protección contra Incendios a Base de Agua).",
            ofrecemos: `<ul>
                <li>Pruebas hidrostáticas y de flujo de la red.</li>
                <li>Mantenimiento y pruebas de bombas contra incendios.</li>
                <li>Certificación de operatividad del sistema.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Continuidad Operativa:</b> El sistema siempre listo para proteger su infraestructura.</li>
                <li><b>Cumplimiento Regulatorio:</b> Obtención de la certificación requerida por Defensa Civil.</li>
            </ul>`
        },
        {
            id: 5,
            slug: "mantenimiento-y-certificacion-periodica-de-sistemas-de-puesta-a-tierra",
            titulo: "MANTENIMIENTO Y CERTIFICACIÓN PERIÓDICA DE SISTEMAS DE PUESTA A TIERRA",
            subtitulo: "Mantenimiento y certificación periódica de sistemas de puesta a tierra",
            descripcion: "Inspección, mantenimiento y certificación anual de sus pozos de puesta a tierra, protegiendo equipos y personal de sobretensiones.",
            imagen: [foto1],
            descripcion_larga: "Verificamos la resistencia de sus pozos a tierra, realizamos el tratamiento químico de mejoramiento y emitimos el protocolo de medición y certificación requerido por ley. Es clave para la seguridad eléctrica de su personal y la vida útil de su maquinaria.",
            normativa: "Código Nacional de Electricidad (Utilización), R.M. N° 180-2008-MEM.",
            ofrecemos: `<ul>
                <li>Medición de resistencia con telurómetro.</li>
                <li>Tratamiento de mejoramiento químico.</li>
                <li>Emisión de protocolo de medición anual certificado.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Seguridad Eléctrica:</b> Protección contra descargas y fallas de tensión.</li>
                <li><b>Cumplimiento Legal:</b> Certificado esencial para ITSE y auditorías.</li>
            </ul>`
        },
        {
            id: 6,
            slug: "mantenimiento-y-reingenieria-de-instalaciones-electricas",
            titulo: "MANTENIMIENTO Y REINGENIERÍA DE INSTALACIONES ELÉCTRICAS",
            subtitulo: "Mantenimiento y reingeniería de instalaciones eléctricas",
            descripcion: "Servicio integral de diagnóstico, mantenimiento predictivo/preventivo y optimización de sus sistemas eléctricos de baja y media tensión.",
            imagen: [foto1],
            descripcion_larga: "Minimizamos el riesgo de fallas operativas, cortocircuitos e incendios. Realizamos reingeniería de sistemas de distribución, tableros y subestaciones para asegurar la adecuación a normativas y la máxima eficiencia energética.",
            normativa: "Código Nacional de Electricidad (Utilización y Suministro).",
            ofrecemos: `<ul>
                <li>Mantenimiento de tableros y subestaciones.</li>
                <li>Adecuación y reingeniería de instalaciones.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Prevención de Fallas:</b> Reduce el riesgo de interrupciones y daños costosos.</li>
                <li><b>Ahorro:</b> Optimización de la eficiencia energética.</li>
            </ul>`
        }

    ],
    consultoria: [
        {
            id: 1,
            slug: "obtencion-de-licencia-de-funcionamiento",
            titulo: "OBTENCIÓN DE LICENCIA DE FUNCIONAMIENTO",
            subtitulo: "Gestión de Licencia Municipal de Funcionamiento",
            descripcion: "Garantice la legalidad y operatividad inmediata de su empresa en el norte peruano con la gestión acelerada de su Licencia Municipal.",
            imagen: [foto1],
            descripcion_larga: "Servicio de consultoría y gestión integral para la obtención de la Licencia de Funcionamiento Municipal. Nos encargamos de la revisión de planos, la adecuación de la documentación y la presentación ante las autoridades locales. Agilizamos el proceso para que su sede inicie operaciones rápidamente, minimizando el riesgo de paralizaciones o multas por incumplimiento.",
            normativa: "Ley N° 28976 (Ley Marco de Licencia de Funcionamiento) y normas municipales específicas de la jurisdicción.",
            ofrecemos: `<ul>
                <li>Revisión y diagnóstico de requisitos.</li>
                <li>Elaboración y visado de planos de distribución y seguridad.</li>
                <li>Gestión directa del expediente ante la Municipalidad.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Continuidad Garantizada:</b> Evite costosos cierres, multas y sanciones administrativas.</li>
                <li><b>Apertura Rápida:</b> Reducción drástica en los tiempos de tramitación.</li>
            </ul>`
        },
        {
            id: 2,
            slug: "obtencion-de-certificado-itse",
            titulo: "OBTENCIÓN DE CERTIFICADO ITSE",
            subtitulo: "Certificación ITSE y cumplimiento de Defensa Civil",
            descripcion: "Asesoría integral para obtener su Certificado de Defensa Civil de forma rápida y eficiente, asegurando la seguridad y el cumplimiento legal.",
            imagen: [foto1],
            descripcion_larga: "Brindamos consultoría multidisciplinaria para que sus instalaciones pasen la Inspección Técnica de Seguridad en Edificaciones (ITSE), requisito indispensable para la operatividad de su local. Trabajamos en la preparación documental, la adecuación de sus espacios, sistemas y la representación durante la inspección, garantizando la conformidad.",
            normativa: "DS N° 002-2018-PCM (Reglamento de ITSE), Ley N° 28976 y normativa sectorial.",
            ofrecemos: `<ul>
                <li>Elaboración del Plan de Seguridad y Evacuación.</li>
                <li>Revisión de protocolos de seguridad y aforos.</li>
                <li>Acompañamiento técnico durante la inspección.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Certificación Obligatoria:</b> Cumplimiento total para evitar revocatoria de licencias.</li>
                <li><b>Seguridad Total:</b> Protección certificada para empleados y visitantes.</li>
            </ul>`
        },
        {
            id: 3,
            slug: "levantamiento-integral-de-observaciones-itse",
            titulo: "LEVANTAMIENTO INTEGRAL DE OBSERVACIONES ITSE",
            subtitulo: "Subsanación y aprobación final de inspecciones ITSE",
            descripcion: "Resuelva el 100% de las observaciones de su inspección ITSE y obtenga el certificado sin demoras.",
            imagen: [foto1],
            descripcion_larga: "Servicio multidisciplinario diseñado para empresas con procesos ITSE pendientes. Valorizamos y ejecutamos las subsanaciones requeridas (obra civil, estructuras, instalaciones eléctricas, etc.) con un único proveedor. Nuestro objetivo es garantizar la aprobación final de la Inspección.",
            normativa: "DS N° 002-2018-PCM, NFPA, NTP, RNE y Código Nacional Eléctrico.",
            ofrecemos: `<ul>
                <li>Valorización y presupuestado de las correcciones.</li>
                <li>Ejecución de modificaciones de albañilería, eléctricas o de seguridad.</li>
                <li>Presentación del cargo de subsanación.</li>
            </ul>`,
            beneficios: `<ul>
                <li><b>Aprobación Garantizada:</b> Expertise técnica para asegurar el visto bueno final.</li>
                <li><b>Ahorro de Tiempo:</b> Un solo equipo ejecuta todos los rubros.</li>
            </ul>`
        }

    ]
}