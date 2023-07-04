export default {
  global: {
    componenteFormativo:
      'Medición de ruidos y concentración de olor según normatividad',
    descripcionCurso:
      'En este componente formativo se caracterizará el estado ambiental de una zona de estudio en sus factores ambientales agua, suelo, olores y ruido, como insumo para realizar un diagnóstico ambiental adecuado. De ahí la importancia de una correcta toma de muestras que permita la información requerida de las condiciones de calidad de un medio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Seguridad, Salud y Medio ambiente en el sitio de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto técnico de peligro',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Concepto técnico de riesgo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Medio ambiente, seguridad y salud en el trabajo',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Medición de presión sonora y olores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Etapas y plan de muestreo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Toma de muestra de ruido y olores',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Parámetros in situ olores y ruido',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Recolección, transporte y recepción de muestras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estándares e Interpretación de resultados en olores y ruido',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/222319_CF05_DU.zip',
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
  complementario: [
    {
      tema: 'Introducción',
      referencia:
        'Cubadebate (2018). Crean en alemania una "nariz" electrónica para advertir sobre situaciones de peligro. ',
      tipo: 'Artículo',
      link:
        'http://www.cubadebate.cu/noticias/2018/04/28/crean-en-alemania-una-nariz-electronica-para-advertir-sobre-situaciones-de-peligro/#.XvJ682hKjIU',
    },
    {
      tema: 'Seguridad, Salud y Medio ambiente en el sitio de trabajo',
      referencia:
        'CASAFE Cámara (2018, noviembre 9). Riesgo vs. Peligro. [Archivo de video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OL6BRmN4UH0',
    },
    {
      tema: 'Concepto técnico de peligro',
      referencia:
        'ABAKCALCULADORAS (2010, noviembre 12). Medición de caudal con calculadora y molinete UTS. [Archivo de video]. Youtube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=77sTYR3sX5E',
    },
    {
      tema: 'Medición de presión sonora y olores',
      referencia:
        'Video 1: CuriosaMente (2017, junio 25) ¡El mundo no es como lo pintan! - CuriosaMente 77. [Archivo de video]. Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NLaV_O3dLpk',
    },
    {
      tema: 'Medición de presión sonora y olores',
      referencia:
        'Video 2: Oakademia - Academia online y clases particulares (2017, julio 31) Mapas y escalas (ejercicios resueltos) ser un genio en 5 minutos. PROFESOR OAK. [Archivo de video]. Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-mQtkt33xig',
    },
    {
      tema: 'Olores',
      referencia:
        'Resolución 1541 de 2013. [Ministerio de Ambiente y Desarrollo Sostenible]. Por el cual se establecen los niveles de calidad del aire o de inmisión.  Noviembre 12 de 2013',
      tipo: 'Documento legal',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/08/resolucion-1541-de-2013.pdf',
    },
    {
      tema: 'Olores',
      referencia:
        'MinSalud (2012). Lineamiento de Vigilancia Ambiental sanitaria y ambiental del impacto de los olores ofensivos en la salud y calidad de vida de las comunidades expuestas en areas urbanas,  p.24.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/bibliotecadigital/RIDE/VS/PP/SA/impacto-olores-ofensivos-salud.pdf',
    },
    {
      tema: 'Olores',
      referencia:
        'Olores.org (2014, julio 7) Formación y emisión de olores: caracterización y evaluación de impacto. E. P.ans, Odournet. [Archivo de video]. Youtube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?time_continue=1144&v=piy2eZBpVj8&feature=emb_logo',
    },
    {
      tema: 'Estándares e Interpretación de resultados en olores y ruido.',
      referencia:
        'CORANTIOQUIAOFICIAL (2014, junio18) Control a Niveles de Ruido y Contaminación Auditiva. [Archivo de video]. Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PbtgG02UXWs',
    },
    {
      tema: 'Estándares e Interpretación de resultados en olores y ruido.',
      referencia:
        'CORANTIOQUIAOFICIAL (2015, mayo 21) Control y Manejo de Olores en Empresas. [Archivo de video]. Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1Hi-bCZgZ_Q',
    },
  ],
  glosario: [
    {
      termino: 'Mapas de ruido',
      significado:
        'se entiende por mapa de ruido, la representación de los datos sobre una situación acústica existente o pronosticada en función de un indicador de ruido, en la que se indica la superación de un valor límite, el número de personas afectadas en una zona dada y el número de viviendas, centros educativos y hospitales expuestos a determinados valores de ese indicador en dicha zona. (Resolución 627 de 2006)',
    },
    {
      termino: 'Nivel percentil 90',
      significado:
        'es el nivel sonoro que se sobrepasa durante el 90 % del tiempo de observación. Se suele utilizar para indicar lo que se conoce como ruido de fondo, que es el nivel de presión sonora mínimo o de base, que está presente casi todo el tiempo. Se denota por L90. (Resolución 627 de 2006)',
    },
    {
      termino: 'Olfatometría',
      significado:
        'técnica sensorial de medición de olores que se usa para determinar el grado de molestia que pueden ocasionar ciertos olores a la población. (Resolución 1541 de 2013)',
    },
    {
      termino: 'Olor ofensivo',
      significado:
        'es el olor generado por sustancias o actividades industriales, comerciales o de servicio, que produce fastidio, aunque no cause daño a la salud humana. (Resolución 627 de 2006)',
    },
    {
      termino: 'Peligro',
      significado:
        'fuente, situación o acto con potencial de daño en términos de enfermedad o lesión a las personas, o una combinación de estos (ICONTEC GTC45, 2012)',
    },
    {
      termino: 'Pistófono',
      significado:
        'es una pequeña cavidad provista de un pistón con movimiento de vaivén y desplazamiento medible, que permite establecer una presión conocida en el interior de la cavidad. Generalmente utilizado para efectuar calibraciones de sonómetros (Resolución 627 de 2006)',
    },
    {
      termino: 'Presión sonora',
      significado:
        'es la diferencia entre la presión total instantánea en un punto cuando existe una onda sonora y la presión estática en dicho punto.',
    },
    {
      termino: 'Riesgo',
      significado:
        'combinación de la probabilidad de que ocurra un(os) evento(s) o exposición(es) peligroso(s), y la severidad de lesión o enfermedad, que puede ser causado por el (los) evento(s) o la(s) exposición(es) (ICONTEC GTC45, 2012)',
    },
    {
      termino: 'Ruido de fondo',
      significado:
        'ruido total de todas las fuentes de interferencia en un sistema utilizado para producción, medida o registro de una señal, independiente de la presencia de la señal, incluye ruido eléctrico de los equipos de medida. El ruido de fondo se utiliza algunas veces para expresar el nivel medido cuando la fuente específica no es audible y, a veces, es el valor de un determinado parámetro de ruido, tal como el L90 (nivel excedido durante el 90% del tiempo de medición). (Resolución 627 de 2006)',
    },
    {
      termino: 'Ruido residual',
      significado:
        'ruido total cuando los ruidos específicos en consideración son suspendidos. El ruido residual es el ruido ambiental sin ruido específico. No debe confundirse con el ruido de fondo. Resolución 627 de 2006)',
    },
    {
      termino: 'Sonómetro',
      significado:
        'es un instrumento de medición de presión sonora, compuesto de micrófono, amplificador, filtros de ponderación e indicador de medida, destinado a la medida de niveles sonoros, siguiendo unas determinadas especificaciones. (Resolución 627 de 2006)',
    },
    {
      termino: 'Sustancia de olor ofensivo',
      significado:
        'es aquella que, por sus propiedades organolépticas, composición y tiempo de exposición puede causar olores desagradables. (Resolución 627 de 2006)',
    },
    {
      termino: 'Tono hedónico',
      significado:
        'factor subjetivo que permite definir si un olor es agradable, desagradable, nauseabundo. (Resolucion 1541 de 2013)',
    },
  ],
  referencias: [
    {
      referencia:
        'Consejería de medioambiente servicio de calidad ambiental. (2007). <em>Nivel Acústico De Evaluación (NAE)</em>.',
      link:
        'https://rodin.uca.es/bitstream/handle/10498/18211/10%20NAE.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'CORPOCALDAS. (2015). Mediciones de ruido ambiental y elaboración del plan de descontaminación por ruido en Villamaría, Caldas. ',
      link:
        'https://historico.corpocaldas.gov.co/publicaciones/543/Informe%20Plan%20de%20descontaminaci%C3%B3n%20Vmaria.pdf',
    },
    {
      referencia:
        'Decreto 948 de1995. [Ministerio del Medio ambiente]. Por el cual se reglamentan, parcialmente, la Ley 23 de 1973, los artículos 33, 73, 74, 75 y 76 del Decreto - Ley 2811 de 1974; los artículos 41, 42, 43, 44, 45, 48 y 49 de la Ley 9 de 1979; y la Ley 99 de 1993, en relación con la prevención y control de la contaminación atmosférica y la protección de la calidad del aire. Junio 5 de 1995',
    },
    {
      referencia:
        'ICONTEC GTC45. (2012). <em>Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional. </em>',
      link:
        'https://repository.udistrital.edu.co/bitstream/handle/11349/6034/ParraCuestaDianaMarcelaVasquezVeraErikaVanessa2016-AnexoA.pdf;jsessionid=BEE718D718155795C84987947FF4B2D6?sequence=2',
    },
    {
      referencia:
        'ICONTEC G100. (2004). Calidad de Agua. Guía para los procedimientos de cadena de custodias de muestras.',
      link:
        'https://www.emcali.com.co/documents/148832/171808/08.GTC+100+de+2004.pdf/6fe392c5-8bed-2704-843b-54bd9ede7952?t=1532524188754&download=true#:~:text=cadena%20de%20custodia%20de%20muestra,toma%20hasta%20que%20se%20desecha.',
    },
    {
      referencia:
        'ICONTEC NTC 6012-1 (2013) Efectos y evaluación de los olores, evaluación sicométrica de las molesticas por olores cuestionarios.',
    },
    {
      referencia: 'IGN. (s.f.). <em>Conceptos cartográficos.</em> ',
      link:
        'https://www.ign.es/web/resources/cartografiaEnsenanza/conceptosCarto/descargas/Conceptos_Cartograficos_def.pdf',
    },
    {
      referencia:
        'INS. (2011). Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio. ',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf',
    },
    {
      referencia: 'Mendezfrank. (s.f.). Contenidos. ',
      link: 'https://mendezfrank.wordpress.com/primer-corte/contenidos/',
    },
    {
      referencia:
        'Ministerio del medio ambiente de Chile (s.f.). <em>Efectos en la salud.</em> ',
      link: 'https://olores.mma.gob.cl/efectos-en-salud/',
    },
    {
      referencia:
        'MinAmbiente. (2014). <em>Protocolo para el monitoreo, control y vigilancia de olores ofensivos. </em>',
      link:
        'https://www.catorce6.com/images/legal/Protocolo_Monitoreo_Control_y_Vigilancia_de_Olores_Ofensivos.pdf',
    },
    {
      referencia:
        'MinSalud (2012). Lineamiento de Vigilancia Ambiental sanitaria y ambiental del impacto de los olores ofensivos en la salud y calidad de vida de las comunidades expuestas en áreas urbanas,  p.24.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/bibliotecadigital/RIDE/VS/PP/SA/impacto-olores-ofensivos-salud.pdf',
    },
    {
      referencia:
        'Minsalud (2021) Gestión integral de los elementos de protección personal (epp)',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf',
    },
    {
      referencia:
        'ODOUR OBSERVAITORY. (2023). Cromatografía de gases – Olfatometría. ',
      link:
        'https://odourobservatory.org/es/measuring-odour/gas-chromatography-olfactometry/',
    },
    {
      referencia: 'Olfasese. (s.f.). Evaluación del impacto por olores. ',
      link:
        'https://www.olfasense.com/es/gestion-ambiental-de-olores/competencias-claves/',
    },
    {
      referencia:
        'ORGANIZACIÓN METEOROLÓGICA MUNDIAL. (2001). <em>Directivas de orientación la enseñanza y formaciónprofesional del personal en meteorología e hidrología operativa.</em> (p.137). ',
      link:
        'http://www.ideam.gov.co/documents/290086/75945771/Documento+OMM+258+Vol+I/9449f806-2438-4602-bcd0-940e2334621f',
    },
    {
      referencia: 'Partesdel.com. (2017).  Partes de la nariz. ',
      link: 'https://www.partesdel.com/nariz.html',
    },
    {
      referencia:
        'Resolución 0627 de 2006. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se establece la norma nacional de emisión de ruido y ruido ambiental. Abril 07 de 2006.',
    },
    {
      referencia:
        'Resolución 1541 de 2013. [Ministerio de Ambiente y Desarrollo Sostenible]. Por el cual se establecen los niveles de calidad del aire o de inmisión. Noviembre 12 de 2013',
    },
    {
      referencia:
        'Sánchez, J.I., Peña, A.A. & Martínez, J.V. (2008). <em>Valor I. Contaminación Ambiental por Olores. Fundamentos Básicos.</em> Murcia: Calidad Ambiental',
    },
    {
      referencia:
        'Santos Muñoz, D. (2017). ¿Cómo poner medida a Eolo?. El País. ',
      link:
        'https://elpais.com/politica/2017/08/18/tiempo_al_tiempo/1503042135_701153.html',
    },
    {
      referencia: 'Sicaweb. (s.f.) Conceptos básicos del ruido ambiental.',
      link:
        'https://sicaweb.cedex.es/docs/documentacion/Conceptos-Basicos-del-ruido-ambiental.pdf ',
    },
    {
      referencia:
        'Universidad de Medellín. (2011). Protocolo para medir la emisión de ruido generado por fuentes fijas. Revista Ingenierías Universidad de Medellín, 10(18), pp.51-60. ',
      link: 'http://www.scielo.org.co/pdf/rium/v10n18/v10n18a06.pdf',
    },
    {
      referencia: 'Virtual.lat.(s,f) Conversión de unidades de velocidad.',
      link: 'https://vitual.lat/conversion-de-unidades-de-velocidad/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Gloria Esperanza Ortiz Russi',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro para La Industria de la Comunicación Gráfica',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
