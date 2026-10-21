// Datos institucionales confirmados por UNGE
export const INSTITUCIONAL = {
  razonSocial: "Asociación Civil UNGE",
  cuit: "30-71937170-8",
  personeria: "Matrícula N.º 2031206",
};

export const NAV = [
  { label: "CIENCIA", href: "#ciencia" },
  { label: "PRODUCTOS", href: "#productos" },
  { label: "INNOVACIÓN", href: "#invernaderos" },
  { label: "NOSOTROS", href: "#nosotros" },
];

// Footer groups the anchors more finely than the top nav, which only carries
// the four primary entries.
export const FOOTER_LINKS = [
  {
    title: "Ecosistema",
    items: [
      { label: "Un ecosistema 360", href: "#ecosistema" },
      { label: "Tres entornos de cultivo", href: "#produccion" },
      { label: "Invernaderos inteligentes", href: "#invernaderos" },
      { label: "Catálogo de productos", href: "#productos" },
    ],
  },
  {
    title: "Ciencia",
    items: [
      { label: "Nuestra ciencia", href: "#ciencia" },
      { label: "Del laboratorio a la vida real", href: "#innovacion" },
      { label: "Investigación que se aplica", href: "#investigacion" },
    ],
  },
  {
    title: "Proyecto",
    items: [
      { label: "Sede social y salud", href: "#sede" },
      { label: "Una red que genera valor", href: "#red" },
      { label: "Crecer también es incluir", href: "#impacto" },
      { label: "Nosotros", href: "#nosotros" },
    ],
  },
];

export const HERO = {
  index: "01",
  white: ["CANNABIS", "MEDICINAL,"],
  accent: ["CIENCIA,", "SALUD E", "INNOVACIÓN"],
  cta: "CONOCER UNGE",
};

export const CIENCIA = {
  index: "02",
  white: ["NUESTRA"],
  accent: ["CIENCIA"],
  text: ["Investigación aplicada para", "generar evidencia y soluciones", "que mejoren la vida de las personas"],
};

export const LAB = {
  index: "03",
  white: ["DEL LABORATORIO"],
  accent: ["A LA VIDA REAL"],
  text: ["Desarrollamos conocimiento y", "productos que conectan la ciencia", "con el bienestar de las personas"],
  items: [
    { n: "01", title: "INVESTIGACIÓN", text: ["Generamos evidencia", "a través de la ciencia."] },
    { n: "02", title: "TRAZABILIDAD", text: ["Proceso transparentes", "y controlados."] },
    { n: "03", title: "IMPACTO REAL", text: ["Soluciones que mejoran", "la vida de las personas."] },
  ],
};

export const ECOSISTEMA = {
  index: "04",
  white: ["UN ECOSISTEMA"],
  accent: ["360"],
  subtitle: "Cultivo, investigación, empresas e impacto social conectados por un mismo propósito.",
  text: ["UNGE articula capacidades productivas, conocimiento científico, desarrollo tecnológico y", "participación de empresas e instituciones para impulsar un modelo integral alrededor del", "cannabis medicinal."],
  items: [
    { n: "01", title: "CULTIVO", text: ["Diferentes entornos productivos que permiten trabajar", "a distintas escalas y con objetivos específicos."] },
    { n: "02", title: "CIENCIA E INNOVACIÓN", text: ["Investigación aplicada, control de variables,", "generación de datos y mejora continua de procesos."] },
    { n: "03", title: "CADENA DE VALOR", text: ["Conexión con proveedores, laboratorios,", "especialistas y compañías que aportan servicios y tecnología."] },
    { n: "04", title: "IMPACTO", text: ["Una visión que integra desarrollo económico,", "sostenibilidad e inclusión laboral."] },
  ],
  cierre: "Cuando cada parte se conecta, el desarrollo deja de ser aislado y se transforma en un ecosistema.",
  buttons: [
    { label: "EXPLORAR EL MODELO PRODUCTIVO", href: "#produccion" },
    { label: "CONOCER EL IMPACTO", href: "#impacto" },
  ],
};

export const ENTORNOS = {
  index: "05",
  white: ["TRES ENTORNOS"],
  accent: ["DE CULTIVO"],
  subtitle: "Distintas escalas de producción. Un mismo criterio de desarrollo y aprendizaje.",
  items: [
    { n: "01", title: "CULTIVO EXTERIOR - MALAGUEÑO (PRÓXIMAMENTE)", text: ["Nodo orientado a trabajar a mayor escala", "en un entorno de cultivo exterior."] },
    { n: "02", title: "PRODUCCIÓN INDOOR", text: ["Entorno con control de variables de producción,", "pensado para trabajar con lotes estandarizados", "y procesos comparables."] },
    { n: "03", title: "CULTIVO BOUTIQUE", text: ["Espacio destinado a micro-lotes, selección", "de fenotipos y desarrollo de genéticas."] },
  ],
  text: ["Los tres nodos forman parte de una estructura concebida para responder a necesidades", "diferentes de producción, observación y mejora de procesos."],
  buttons: [
    { label: "VER CÓMO APLICAMOS LA INNOVACIÓN", href: "#invernaderos" },
    { label: "CONSULTAR POR VINCULACIONES", href: "#contacto" },
  ],
};

export const INVERNADEROS = {
  index: "06",
  white: ["INVERNADEROS"],
  accent: ["INTELIGENTES"],
  subtitle: "Tecnología aplicada al cultivo para medir, aprender y optimizar.",
  text: ["El modelo de invernaderos inteligentes de UNGE está pensado como una plataforma de", "producción, investigación y desarrollo."],
  items: [
    { n: "01", title: "MONITOREO", text: ["Seguimiento de variables ambientales relevantes", "para interpretar las condiciones del cultivo."] },
    { n: "02", title: "AUTOMATIZACIÓN", text: ["Herramientas para intervenir sobre procesos", "y administrar recursos con mayor precisión."] },
    { n: "03", title: "INTEGRACIÓN DE INGENIERÍAS", text: ["Participación de capacidades de ingeniería química,", "electrónica, eléctrica, mecánica, en sistemas e industrial,", "según las necesidades del proyecto."] },
    { n: "04", title: "DATOS APLICADOS", text: ["Información que permita evaluar resultados", "y mejorar protocolos de trabajo."] },
  ],
  cierre: "La innovación no es solo incorporar tecnología: es convertir información en mejores decisiones.",
  buttons: [
    { label: "CONOCER NUESTRA CIENCIA", href: "#ciencia" },
    { label: "PROPONER UNA COLABORACIÓN", href: "#contacto" },
  ],
};

export const PRODUCTOS = {
  index: "07",
  white: ["CATÁLOGO DE PRODUCTOS"],
  accent: ["Y FORMULACIONES"],
  subtitle: "Línea desarrollada bajo estrictos estándares de trazabilidad y caracterización química.",
  items: [
    {
      n: "01",
      title: "ACEITES MEDICINALES / TINTURAS ESTANDARIZADAS",
      nota: "Con perfil cromatográfico verificado.",
      lista: [
        "Quimiotipo I: dominancia de THC.",
        "Quimiotipo II: balanceado / ratio equitativo (CBD:THC ~ 1:1).",
        "Quimiotipo III: dominancia de CBD (espectro completo / full spectrum).",
      ],
    },
    {
      n: "02",
      title: "FITOCOSMÉTICA Y TÓPICOS",
      lista: ["Ungüentos y bálsamos de formulación magistral/estandarizada."],
    },
    {
      n: "03",
      title: "BIOMASA FLORAL",
      lista: [
        "Inflorescencias secas y curadas, obtenidas de semillas inscriptas y certificadas ante el INASE (Instituto Nacional de Semillas).",
      ],
    },
  ],
};

export const SEDE = {
  index: "08",
  white: ["SEDE SOCIAL Y"],
  accent: ["ÁREA DE SALUD"],
  subtitle: "Comunidad y abordaje terapéutico.",

  social: {
    title: "ESPACIO SOCIAL Y COMUNITARIO",
    text: "La sede social se consolida como un punto de encuentro interdisciplinario destinado al intercambio, la divulgación y la vinculación comunitaria. Las instalaciones albergan una agenda continua de:",
    items: [
      { n: "01", title: "CAPACITACIONES Y FORMACIÓN TÉCNICA", text: "Charlas, jornadas informativas y cursos sobre cultivo, uso terapéutico y marco normativo." },
      { n: "02", title: "ACTIVIDADES CULTURALES Y RECREATIVAS", text: "Encuentros orientados a fortalecer el tejido comunitario y el bienestar de los asociados." },
      { n: "03", title: "TALLERES PRÁCTICOS", text: "Espacios de aprendizaje participativo y desarrollo de habilidades." },
    ],
  },

  salud: {
    title: "ÁREA DE SALUD Y DISPENSARIO",
    subtitle: "Abordaje terapéutico integral.",
    text: "El dispensario cuenta con un área sociosanitaria orientada al acompañamiento clínico y terapéutico de los usuarios, con especial foco en personas con discapacidad y adultos mayores.",
    equipo: "El servicio es coordinado de manera interdisciplinaria por el Dr. Guillermo Schuegers, médico institucional especialista en fitofármacos y cannabis medicinal, junto a Ana Gabas, Directora del Área, profesional con amplia trayectoria en el campo de la discapacidad y la inclusión.",
    ejesTitle: "Ejes del modelo de atención",
    ejes: [
      { n: "01", title: "ABORDAJE INTERDISCIPLINARIO Y CENTRADO EN LA PERSONA", text: "Integración de la perspectiva médica con un enfoque biopsicosocial adaptado a las singularidades de cada usuario." },
      { n: "02", title: "PLAN TERAPÉUTICO INDIVIDUALIZADO", text: "Evaluación inicial para el diseño de esquemas terapéuticos a medida, optimizando perfiles de cannabinoides, dosificaciones y vías de administración." },
      { n: "03", title: "SEGUIMIENTO PERIÓDICO Y MONITOREO CLÍNICO", text: "Controles continuos para evaluar la eficacia, adherencia al tratamiento y evolución del bienestar integral y la calidad de vida de cada persona." },
    ],
  },
};

export const INVESTIGACION = {
  index: "09",
  white: ["INVESTIGACIÓN"],
  accent: ["QUE SE APLICA"],
  subtitle: "De los datos al control de calidad y la mejora de procesos.",
  text: ["UNGE busca conectar la producción con herramientas de investigación aplicada para", "fortalecer la trazabilidad, la caracterización y el análisis de los procesos agrícolas."],
  items: [
    { n: "01", title: "TRAZABILIDAD", text: ["Registro y seguimiento de información", "relevante de los lotes y sus procesos."] },
    { n: "02", title: "CARACTERIZACIÓN", text: ["Trabajo técnico orientado al análisis de", "cannabinoides y terpenos, de acuerdo con", "capacidades y protocolos disponibles."] },
    { n: "03", title: "CALIDAD Y PROTOCOLOS", text: ["Criterios de control, documentación y", "estandarización que permitan comparar resultados", "y fortalecer la consistencia del trabajo."] },
  ],
  cierre: "El modelo contempla el apoyo técnico de CILUM para avanzar en estos ejes, sujeto a la descripción institucional final aprobada.",
  buttons: [
    { label: "EXPLORAR LA INNOVACIÓN", href: "#invernaderos" },
    { label: "CONTACTAR AL EQUIPO", href: "#contacto" },
  ],
};

export const RED = {
  index: "10",
  white: ["UNA RED QUE"],
  accent: ["GENERA VALOR"],
  subtitle: "El desarrollo del sector también requiere empresas, especialistas e instituciones.",
  text: ["UNGE trabaja sobre un modelo de articulación que vincula asociaciones civiles con", "prestadores privados y actores técnicos para impulsar una cadena de valor alrededor del", "proyecto."],
  items: [
    { n: "01", title: "EMPRESAS Y PROVEEDORES", text: ["Insumos, equipamiento, tecnología, automatización,", "nutrición vegetal y servicios especializados."] },
    { n: "02", title: "PROFESIONALES Y LABORATORIOS", text: ["Asistencia técnica, análisis, asesoramiento", "y capacidades de desarrollo e investigación."] },
    { n: "03", title: "INSTITUCIONES", text: ["Búsqueda de vínculos con ámbitos públicos,", "científicos y sanitarios, de acuerdo con", "las posibilidades y requisitos aplicables."] },
  ],
  cierre: "Cada vínculo puede contribuir a generar actividad económica, empleo especializado y nuevas capacidades dentro del ecosistema.",
  buttons: [
    { label: "QUIERO VINCULAR MI ORGANIZACIÓN", href: "#contacto" },
    { label: "CONOCER EL IMPACTO SOCIAL", href: "#impacto" },
  ],
};

export const NOSOTROS = {
  index: "12",
  white: ["UNGE: ARTICULAR"],
  accent: ["PARA TRANSFORMAR"],
  subtitle: "Un proyecto que conecta producción, ciencia, innovación y comunidad.",
  text: [
    "UNGE es una asociación civil de Córdoba que impulsa un ecosistema vinculado al cannabis",
    "medicinal. Su enfoque integra capacidades productivas, desarrollo tecnológico, colaboración",
    "con empresas e instituciones y una perspectiva de impacto social y ambiental.",
    "",
    "Más que pensar el cultivo como una actividad aislada, UNGE propone una red de",
    "conocimiento, trabajo y oportunidades que pueda crecer de forma articulada y responsable.",
  ],
  cierre: "Cultivar conocimiento. Conectar capacidades. Generar impacto.",
  buttons: [
    { label: "CONECTAR CON UNGE", href: "#contacto" },
    { label: "VOLVER AL INICIO", href: "#inicio" },
  ],
};

export const CONTACTO = {
  index: "13",
  white: ["HABLEMOS DE LO QUE"],
  accent: ["PODEMOS CONSTRUIR"],
  subtitle: "Investigación, tecnología, alianzas y nuevos proyectos empiezan con una conversación.",
  motivos: ["Investigación", "Alianza o vinculación", "Tecnología y proveedores", "Impacto social", "Prensa", "Otro"],
  confirmation: "Gracias por escribirnos. Recibimos tu mensaje y el equipo de UNGE se pondrá en contacto cuando corresponda.",
  email: "direccion@unge.ar",
  whatsapp: "https://wa.me/5493512164006",
};

export const CRECER = {
  index: "11",
  white: ["CRECER TAMBIÉN"],
  accent: ["ES INCLUIR"],
  subtitle: "El impacto social forma parte del modelo, no es una iniciativa separada.",
  text: ["UNGE trabaja junto a Fundación Enlaces en una propuesta de inclusión laboral para personas", "con discapacidad, vinculada a necesidades y funciones reales del ecosistema."],
  items: [
    { n: "01", title: "IDENTIFICAR OPORTUNIDADES", text: ["Reconocer tareas posibles dentro de la asociación,", "en eventos y en organizaciones vinculadas."] },
    { n: "02", title: "FORMAR Y ACOMPAÑAR", text: ["Promover instancias de capacitación y seguimiento", "según las características de cada incorporación."] },
    { n: "03", title: "AMPLIAR EL ALCANCE", text: ["A medida que crecen las iniciativas y las vinculaciones,", "explorar más oportunidades de participación y empleo."] },
  ],
  ambiental: {
    title: "UNA MIRADA AMBIENTAL",
    text: ["El proyecto también apunta a medir consumo de agua, energía e insumos y avanzar hacia", "estándares de calidad y gestión ambiental."],
    nota: "No se comunican sellos ISO como obtenidos.",
  },
  cierre: "El crecimiento cobra más sentido cuando abre oportunidades para otras personas.",
  buttons: [
    { label: "CONOCER UNGE", href: "#nosotros" },
    { label: "SUMAR UNA PROPUESTA", href: "#contacto" },
  ],
};
