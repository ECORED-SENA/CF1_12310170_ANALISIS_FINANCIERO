export default {
  global: {
    Name: 'Manejo integral de la alimentación bovina bajo Buenas Prácticas Ganaderas (BPG) y sostenibilidad productiva',
    Description:
      'Este componente formativo permitió comprender la importancia de una adecuada alimentación bovina mediante el manejo eficiente de alimentos y agua, la aplicación de Buenas Prácticas Ganaderas, medidas de bioseguridad y estrategias de bienestar animal. Asimismo, destacó la relevancia de los registros, los planes de contingencia y la mejora continua para fortalecer la productividad, sostenibilidad y competitividad de los sistemas bovinos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Fundamentos financieros y marco normativo de la información contable	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Empresa, sectores económicos y contexto financiero actual	',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Función financiera en la organización	',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Objetivo básico financiero',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Usuarios de la información financiera	',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Marco normativo de la información contable y financiera',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Principios y cualidades de la información financiera',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Sistemas y fuentes de información contable y financiera',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Estructura contable y elaboración de estados financieros básicos	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ecuación contable: activo, pasivo y patrimonio	',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ingresos, costos, gastos y resultado del periodo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Codificación y estructura de cuentas	',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Clasificación de cuentas corrientes y no corrientes',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Organización de la información contable	',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Estado de situación financiera o balance general	',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Estado de resultados',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Estado de cambios en el patrimonio',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Estado de flujos de efectivo',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Notas básicas a los estados financieros	',
            hash: 't_2_10',
          },
          {
            numero: '2.11',
            titulo:
              'Errores frecuentes en la presentación de estados financieros',
            hash: 't_2_11',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procesamiento y visualización de información financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Organización de datos financieros en hoja electrónica	',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Fórmulas básicas para cálculos financieros',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tablas comparativas, gráficos y tableros	',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Revisión de fórmulas y consistencia de datos	',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Métodos básicos de análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de análisis y diagnóstico financiero',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Análisis vertical	',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Análisis horizontal',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Interpretación de participaciones, tendencias y cambios relevantes',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Limitaciones del análisis financiero	',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Indicadores financieros, diagnóstico e informe	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Indicadores financieros y parámetros de comparación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Indicadores de liquidez',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Indicadores de actividad o rotación',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alimentación bovina',
      significado:
        'Conjunto de prácticas destinadas a suministrar nutrientes y agua a los bovinos según sus necesidades.',
    },
    {
      termino: 'Forraje',
      significado:
        'Material vegetal utilizado como base de la dieta de los bovinos.',
    },
    {
      termino: 'Ensilaje',
      significado:
        'Método de conservación de forrajes mediante fermentación anaerobia.',
    },
    {
      termino: 'Banco de proteína',
      significado:
        'Área cultivada con especies forrajeras de alto contenido proteico para complementar la alimentación.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Medidas preventivas orientadas a reducir el riesgo de ingreso y propagación de enfermedades.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'Condiciones que garantizan la salud física y mental de los animales, evitando sufrimiento y estrés.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Condición que asegura que los alimentos y el agua no representen riesgos para la salud.',
    },
    {
      termino: 'Ración',
      significado:
        'Cantidad de alimento suministrada a un animal durante un periodo determinado.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de registrar y hacer seguimiento a las actividades e insumos utilizados en el sistema productivo.',
    },
    {
      termino: 'Sistemas silvopastoriles',
      significado:
        'Sistemas de producción que integran árboles, pasturas y animales para mejorar la sostenibilidad y el bienestar animal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Food and Agriculture Organization of the United Nations. (2021). Buenas prácticas ganaderas para la producción bovina de carne y leche. FAO.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2020). Resolución 067449 de 2020. Requisitos para obtener la certificación en Buenas Prácticas Ganaderas (BPG) en la producción primaria de bovinos y bufalinos. ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2020). Resolución 068167 de 2020. Requisitos sanitarios y de inocuidad para explotaciones bovinas y bufalinas. ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023). Manual de Buenas Prácticas Ganaderas para bovinos. ICA.',
      link: '',
    },
    {
      referencia:
        'National Research Council. (2016). Nutrient requirements of beef cattle (8th rev. ed.). The National Academies Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
