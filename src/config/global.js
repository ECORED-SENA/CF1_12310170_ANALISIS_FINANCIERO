export default {
  global: {
    Name: 'Elaboración e interpretación de estados financieros',
    Description:
      'Orienta la elaboración e interpretación de estados financieros básicos a partir de información contable organizada, confiable y verificable. Se aplica en el análisis de la situación financiera de una empresa, permitiendo identificar la composición de sus activos, pasivos, patrimonio, ingresos, costos y gastos. Además, facilita el uso de análisis vertical, análisis horizontal e indicadores financieros para emitir diagnósticos, reconocer riesgos y proponer decisiones operativas de mejora.',
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
          {
            numero: '5.4',
            titulo: 'Indicadores de endeudamiento',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Indicadores de rentabilidad',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Diagnóstico financiero para la toma de decisiones',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Informe financiero con conclusiones y recomendaciones',
            hash: 't_5_7',
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
      termino: 'Activo',
      significado:
        'Recursos y derechos controlados por la empresa que generan beneficios económicos.',
    },
    {
      termino: 'Análisis financiero',
      significado:
        'Estudio de la información financiera para interpretar la situación de la empresa.',
    },
    {
      termino: 'Análisis horizontal',
      significado:
        'Comparación de cuentas entre periodos para identificar aumentos o disminuciones.',
    },
    {
      termino: 'Análisis vertical',
      significado:
        'Cálculo de la participación de cada cuenta dentro de un total.',
    },
    {
      termino: 'Capital de trabajo',
      significado: 'Diferencia entre activo corriente y pasivo corriente.',
    },
    {
      termino: 'Diagnóstico financiero',
      significado:
        'Conclusión sobre la situación financiera a partir del análisis realizado.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'Informe que presenta ingresos, costos, gastos y utilidad o pérdida.',
    },
    {
      termino: 'Estado de situación financiera',
      significado:
        'Informe que presenta activos, pasivos y patrimonio en una fecha determinada.',
    },
    {
      termino: 'Indicador financiero',
      significado:
        'Relación entre cifras financieras para evaluar liquidez, actividad, endeudamiento o rentabilidad.',
    },
    {
      termino: 'Liquidez',
      significado:
        'Capacidad de la empresa para cumplir obligaciones de corto plazo.',
    },
    {
      termino: 'Pasivo',
      significado: 'Obligaciones presentes de la empresa con terceros.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Participación de los propietarios después de descontar los pasivos.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'Capacidad de la empresa para generar utilidad con sus recursos.',
    },
    {
      termino: 'Rotación',
      significado:
        'Medida que indica qué tan rápido se convierte un recurso en operación.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'Elección de acciones basada en información financiera analizada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (13 de Julio de 2009). Ley 1314. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36833',
    },
    {
      referencia:
        'Coral Delgado, L. d. (2014). Contabilidad universitaria (7.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Díaz Moreno, H. (2006). Contabilidad general: enfoque práctico con aplicaciones informáticas (2.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'IFRS Foundation. (2018). Conceptual Framework for Financial Reporting.',
      link: 'https://www.ifrs.org/',
    },
    {
      referencia:
        'García Serna, O. L. (2009). Administración financiera: fundamentos y aplicaciones (4.ª ed.). Prensa Moderna Impresores.',
      link: '',
    },
    {
      referencia:
        'Microsoft Learn. (junio de 2026). Documentación de creación de informes y paneles de Power BI.',
      link: 'https://learn.microsoft.com/es-es/power-bi/create-reports/?utm_source',
    },
    {
      referencia: 'Microsoft Support. (s.f.). Calcular porcentajes.',
      link: 'https://support.microsoft.com/es-es/office/calcular-porcentajes-6b5506e9-125a-4aba-a638-d6b40e603981?utm',
    },
    {
      referencia: 'Mincit. (s.f.). Normatividad vigente.',
      link: 'https://www.mincit.gov.co/temas-interes/convergencias-niifs-y-nias/normatividad-vigente',
    },
    {
      referencia:
        'Ortiz Anaya, H. (2011). Análisis financiero aplicado y principios de administración financiera (14.ª ed.). Universidad Externado de Colombia.',
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
          nombre: 'Jorge David Barbosa Losada',
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
