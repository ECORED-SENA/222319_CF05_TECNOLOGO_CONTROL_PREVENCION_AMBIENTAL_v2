<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 1
      h1 Seguridad, Salud y Medio ambiente en el sitio de trabajo
      
    .row.fondo-tema1.align-items-center.pt-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-5.mb-4(data-aos="fade-right")
            p Cuando se realizan los diferentes trabajos de campo, para la toma de muestras, es importante que aquellas personas que van a realizar esta labor, logren identificar los peligros y valorar los riesgos presentes en un ambiente que ponen en entredicho la seguridad y su salud. Es importante contextualizar estos peligros para establecer los respectivos controles que deben realizarse, ya que este trabajo expone de manera directa a los trabajadores que ejecutan estas actividades y los expone en situaciones complejas que demandan bastantes cuidados, más aún cuando no se conocen los conceptos básicos de peligro y riesgo.
          .col-lg-7.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema1/img.png' alt='')

          p.mb-4(data-aos="fade") El conocimiento de los principales peligros y cómo valorar los riesgos a nivel ambiental, en actividades de campo, deben estar basados en la guía técnica colombiana GTC-45 2012: Guía para la identificación de peligros y valoración de riesgos. A continuación se expone algunos conceptos base, según ICONTEC (2012, p.1 - 4) como contexto de esta área.

          .col-md-10
            SlyderF.text-center(columnas="col-lg-6 col-xl-6" data-aos="fade-down")
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/ico1.svg' alt='' style="width:85px;")
                h5 Peligro 
                p Fuente, situación o acto con potencial de daño en términos de enfermedad o lesión a las personas, o una combinación de estos.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/ico2.svg' alt='' style="width:85px;")
                h5 Identificación del peligro 
                p Proceso para reconocer si existe un peligro y definir sus características.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/ico3.svg' alt='' style="width:85px;")
                h5 Riesgo 
                p Combinación de la probabilidad de que ocurra un(os) evento(s) o exposición(es) peligroso(s), y la severidad de lesión o enfermedad, que puede ser causado por el (los) evento(s) o la(s) exposición(es).
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/ico5.svg' alt='' style="width:85px;")
                h5 Valoración de los riesgos 
                p Proceso de evaluar el(los) riesgo(s) que surge(n) de un(os) peligro(s), teniendo en cuenta la suficiencia de los controles existentes, y de decidir si el(los) riesgo(s) es (son) aceptable(s) o no.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/ico6.svg' alt='' style="width:85px;")
                h5 Accidente de trabajo 
                p Suceso repentino que sobreviene por causa o con ocasión del trabajo, y que produce en el trabajador una lesión orgánica, una perturbación funcional, una invalidez o la muerte. Es también accidente de trabajo aquel que se produce durante la ejecución de órdenes del empleador, o durante la ejecución de una labor bajo su autoridad, incluso fuera del lugar y horas de trabajo.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/ico7.svg' alt='' style="width:85px;")
                h5 Consecuencia 
                p Resultado, en términos de lesión o enfermedad, de la materialización de un riesgo, expresado cualitativa o cuantitativamente.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/ico8.svg' alt='' style="width:85px;")
                h5 Elemento de Protección Personal (EPP) 
                p Dispositivo que sirve como barrera entre un peligro y alguna parte del cuerpo de una persona.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                img.mb-3.mx-auto(src='@/assets/curso/temas/tema1/ico4.svg' alt='' style="width:85px;")
                h5 Equipo de protección personal 
                p Dispositivo que sirve como medio de protección ante un peligro y que para su funcionamiento requiere de la interacción con otros elementos. Ejemplo, sistema de detección contra caídas.
      

    p.mb-4(data-aos="fade") Es importante identificar los peligros y sobre todo valorar los riesgos, según ICONTEC la GCT 45 en Seguridad y salud Ocupacional (S y SO). También el hecho de entender los peligros que se pueden generar en el desarrollo de las actividades, con el fin de que la organización pueda establecer los controles necesarios, al punto de asegurar que cualquier riesgo sea aceptable.(ICONTEC, 2012, p. 4). De ahí que la valoración de los riesgos se debe convertir en una actividad importante en el desarrollo de cualquier trabajo, por sencillo que este parezca, tal y como se describe en el recurso.

    .row.justify-content-center.mb-4
      .col-md-3.col-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img2.png' alt='')
      .col-md-9.mb-4(data-aos="fade-left")
        TabsA.tema5.color-acento-botones.mb-4(data-aos="fade-down") 
          .tarjeta.bg-green.p-4(titulo="Notificación")
            h5 Notificación
            p.mb-0 Para la GTC45 todos los empleados deberían identificar y comunicar a su empleador los peligros asociados a su actividad laboral. Los empleadores tienen el deber legal de evaluar los riesgos derivados de estas actividades laborales.
          .tarjeta.bg-green.p-4(titulo="Aplicación")
            h5 Aplicación
            p El procedimiento de la valoración de riesgos debe ser empleado en:
            ul.lista-ul--color.color-secundario.mb-0.fa-ul
              li
                i.fas.fa-check
                | Situaciones en que los peligros puedan afectar la seguridad o la salud y no haya certeza de que los controles existentes o planificados sean adecuados, en principio o en la práctica.
              li
                i.fas.fa-check
                | Organizaciones que buscan la mejora continua del Sistema de Gestión del S y SO y el cumplimiento de los requisitos legales. 
              li.mb-0
                i.fas.fa-check
                | Situaciones previas a la implementación de cambios en sus procesos e instalaciones.
          .tarjeta.bg-green.p-4(titulo="Estructuración")
            h5 Estructuración
            p La estructura para la valoración de riesgos por la GTC45 se describe así:
            ul.lista-ul--color.color-secundario.mb-0.fa-ul
              li.mb-0
                i.fas.fa-check
                | Identificar los peligros asociados a las actividades en el lugar de trabajo y valorar los riesgos derivados de estos peligros, para poder determinar las medidas de control.
              li.mb-0
                i.fas.fa-check
                | Tomar decisiones en cuanto a la selección de maquinaria, materiales, herramientas, métodos, procedimientos, equipo y organización del trabajo con base en la información recolectada en la valoración de los riesgos.
              li.mb-0
                i.fas.fa-check
                | Comprobar si las medidas de control existentes en el lugar de trabajo son efectivas para reducir los riesgos.
              li.mb-0
                i.fas.fa-check
                | Priorizar la ejecución de acciones de mejora resultantes del proceso de valoración de los riesgos.
              li.mb-0
                i.fas.fa-check
                | Demostrar a las partes interesadas que se han identificado todos los peligros asociados al trabajo y que se han dado los criterios para la implementación de las medidas de control necesarias para proteger la seguridad y la salud de los trabajadores.

    .row.justify-content-center
      .col-lg-10
        .bg-primario.tarjeta.mb-4(data-aos="fade-down")
          .row.align-items-center.p-4.p-md-0
            .col-md-2.col-4
              img.pt-md-3.ps-md-4(src='@/assets/curso/temas/tema1/advertencia.svg' alt='')
            .col-md-9.py-3.text-white.pe-md-4
              h5 Riesgo vs. Peligro
              p.mb-0 Es importante tener en cuenta las variables, para la estructuración de la valoración de un riesgo. Observa el video donde se ilustra la diferencia entre peligro y riesgo, el cual se encuentra en el material de apoyo.

    
    Separador 

    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1 Concepto técnico de peligro

    p.mb-4(data-aos="fade") De acuerdo con ICONTEC (2012, p.3), en la GTC 45, el peligro se define como la fuente, situación o acto con potencial de daño en términos de enfermedad o lesión a las personas, o una combinación de estos, tal como lo representa la siguiente infografía.

    .row.fondo-tema1-1.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

            .col-lg-3.col-6.col-md-4.mb-4.mb-lg-0(data-aos="fade-right") 
              img(src='@/assets/curso/temas/tema1/img3.svg' alt='')
            .col-lg-9(data-aos="fade-left")
              .row
                .col-lg-4.col-md-6.mb-4
                  .border-green.tarjeta.h-100.p-4
                    img.mb-3(src='@/assets/curso/temas/tema1/ico9.svg' alt='' style="width:55px;")
                    p.mb-0 #[b La fuente:] se establece como el factor determinante de origen que genera el peligro. 
                .col-lg-4.col-md-6.mb-4
                  .border-green.tarjeta.h-100.p-4
                    img.mb-3(src='@/assets/curso/temas/tema1/ico10.svg' alt='' style="width:55px;")
                    p.mb-0 #[b La situación:] se relaciona con la actividad, el proceso o la condición. 
                .col-lg-4.col-md-6.mb-4
                  .border-green.tarjeta.h-100.p-4
                    img.mb-3(src='@/assets/curso/temas/tema1/ico11.svg' alt='' style="width:55px;")
                    p.mb-0 #[b El acto potencial:] se convierte en ese comportamiento inseguro del operador o trabajador en la actividad.
              .bg-white.tarjeta.p-4.mb-4
                p.mb-0 La Guía Técnica Colombiana GTC 45 se basa en principios fundamentales de la norma NTC-OHSAS 18001, hoy (ISO 45001) y en el proceso de gestión del riesgo desarrollado en la norma BS 8800 (British Standard)
              .row.justify-content-center
                .col-lg-5.col-md-6
                  p Teniendo en cuenta la Guía Técnica Colombiana GTC 45 2012 para identificar los peligros, se recomienda plantear una serie de preguntas como las siguientes:
                .col-lg-5.col-md-6
                  ul.lista-ul--color.color-secundario.fa-ul
                    li.mb-0.t-green
                      i.fas.fa-check
                      b.t-green ¿Existe una situación que pueda generar daño?
                    li.mb-0
                      i.fas.fa-check
                      b.t-green ¿Quién (o qué) puede sufrir daño? 
                    li.mb-0
                      i.fas.fa-check
                      b.t-green ¿Cómo puede ocurrir el daño?
                    li.mb-0
                      i.fas.fa-check
                      b.t-green ¿Cuándo puede ocurrir el daño?
              .bg-blue4.tarjeta.p-4
                p.mb-0 Si se relacionan estas preguntas para identificar los peligros en el sitio de trabajo, resultará mucho más fácil controlar la derivación de sus riesgos asociados a la actividad que se realice.

    
    p.mb-4(data-aos="fade") La clasificación de los peligros se establece en tres categorías:

    .row.justify-content-center.text-center(data-aos="fade-down")
      .col-lg-3.col-md-4.mb-4
        .border-green2.bg-green7.tarjeta.h-100.p-4
          p.mb-0 #[b Condición de seguridad:] mecánico, eléctrico, físico-químico, locativo, alturas.
      .col-lg-3.col-md-4.mb-4
        .border-green2.bg-green7.tarjeta.h-100.p-4
          p.mb-0 #[b Condición psicosocial y ergonómica:] psicolaboral, biomecánico.
      .col-lg-3.col-md-4.mb-4
        .border-green2.bg-green7.tarjeta.h-100.p-4
          p.mb-0 #[b Condición de higiene:] físico, químico y biológico.

    p.mb-4(data-aos="fade") Teniendo en cuenta la información anterior podríamos definir que 
      b.t-green2 los peligros originan un accidente laboral y otros dan origen a lo que se conoce como una enfermedad laboral.

    .row.justify-content-center
      .col-lg-9(data-aos="fade-right")
        .bg-primario.tarjeta.mb-4
          .row.align-items-center.p-4.p-md-0
            .col-md-2.col-4
              img.pt-md-4.ps-md-4(src='@/assets/curso/temas/tema1/peligro.svg' alt='')
            .col-md-9.py-3.pt-4.text-white.pe-md-4
              h5 Peligro en campo 
              p.mb-0 Para profundizar cómo se relaciona el peligro con el trabajo de campo, se ejemplifica el caso de un aforo de caudal en un rio, video que puede consultar en el material de apoyo. También se sugiere estudiar la tabla correspondiente al anexo A de la GTC 45 que resume los diferentes peligros dependiendo de su categorización.
      .col-lg-3.col-8(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img4.png' alt='')


    Separador 

    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Concepto técnico de riesgo

    p.mb-4(data-aos="fade") De acuerdo con ICONTEC (2012, p.3), en la GTC 45, el riesgo se define como la combinación de la probabilidad de que ocurra un(os) evento(s) o exposición(es) peligroso(s), y la severidad de lesión o enfermedad, que puede ser causado por el (los) evento(s) o la(s) exposición(es). La valoración del riesgo incluye:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-8.col-xxl-7.bg-gray.borde-radius-top.px-md-0
        .h-100
          ul.lista-ul--color.color-secundario.p-md-4.p-xxl-4.px-md-4.px-xxl-5.mb-0.mb-xxl-1.fa-ul
            li.mb-xxl-2.mb-md-0
              i.fas.fa-check
              span La evaluación de los riesgos teniendo en cuenta 
                b.t-green2 la suficiencia de los controles existentes.
            li.mb-xxl-2.mb-md-0
              i.fas.fa-check
              span La definición de los 
                b.t-green2 criterios de aceptabilidad 
                | del riesgo.
            li.mb-xxl-2.mb-md-0
              i.fas.fa-check
              span La 
                b.t-green2 decisión de si son aceptables o no, 
                | con base en los criterios definidos.
          .bg-acento-contenido.borde-radius-top.borde-radius-bottom.p-4.mb-0
            p.mb-0 Por esa razón la evaluación de los riesgos corresponde al proceso de determinar la probabilidad de que ocurran eventos específicos y la magnitud de sus consecuencias, mediante el uso sistemático de la información disponible (ICONTECT, 2012 p.12).      
      .col-md-3.px-md-0
        .h-100
          img(src='@/assets/curso/temas/tema1/img5.svg' alt='')

    p.mb-4(data-aos="fade") Para evaluar el nivel de riesgo se tiene en cuenta la probabilidad y la consecuencia. Así mismo conceptualmente en la GTC 45 el NR (nivel de riesgo) se determina de la siguiente manera:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9.bg-green7.tarjeta.p-4
        .row
          .col-md-7
            .row
              .col-md-3.mb-4
                .tarjeta.bg-green12.p-lg-3.h-100.d-flex.align-items-center 
                  h5.text-center.mb-0 Evaluar el riesgo
              .col-md-9.mb-4
                p.mb-0 #[b NR = NP x NC]
                p.mb-0 #[b NP] = Nivel de probabilidad 
                p #[b NC] = Nivel de consecuencia
                p.mb-0 En otras palabras, esto se resume en:
            .row.justify-content-center.mb-4
              .col-md-9
                img(src='@/assets/curso/temas/tema1/formula.svg' alt='Riesgo = probabilidad x consecuencia')
            p A su vez, para determinar el NP se requiere:
            p.mb-0.ps-md-4 #[b NP= ND x NE]
            p.mb-0.ps-md-4 #[b ND] = Nivel de deficiencia 
            p.ps-md-4 #[b NE] = Nivel de exposición
          .col-md-5
            .bg-green6.h-100.p-4.d-flex.align-items-center 
              p.mb-0 Es importante resaltar, entonces, que el peligro siempre va a existir en el ámbito laboral, mientras que el riesgo que se deriva del peligro es un factor que se puede controlar y se puede valorar.

    p.mb-4(data-aos="fade") Determinación del nivel de deficiencia. Para determinar el ND se puede utilizar la Tabla establecida en la GTC 45.

    .row.justify-content-center
      .col-lg-10.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Tabla 1.] Determinación del nivel de deficiencia
        .tabla-a.tema5.color-secundario
          table
            caption 
              p.mb-0 Tomado de ICONTEC. (2012). GTC 45. Anexo A, Tabla de peligros. p 19.
            thead
              tr.bg-secundario
                th.colum-15 Nivel de Valor de Significado
                th.colum-10 Valor de ND
                th Significado
            tbody
              tr
                td.text-center Muy Alto (MA)
                td.text-center 10
                td Se ha(n) detectado peligro(s) que determina(n) como posible la generación de incidentes o consecuencias muy significativas, o la eficacia del conjunto de medidas preventivas existentes respecto al riesgo es nula o no existe, o ambos.
              tr.bg-green7
                td.text-center Alto (A) 
                td.text-center 6
                td Se ha(n) detectado algún(os) peligro(s) que pueden dar lugar a consecuencias significativa(s), o la eficacia del conjunto de medidas preventivas existentes es baja, o ambos.
              tr
                td.text-center Medio (M)
                td.text-center 2
                td Se han detectado peligros que pueden dar lugar a incidentes poco significativos o de menor importancia, o la eficacia del conjunto de medidas preventivas existentes es moderada, o ambos.  
              tr.bg-green7
                td.text-center Bajo (B)  
                td.text-center No se Asigna Valor
                td 
                  p No se ha detectado peligro o la eficacia del conjunto de medidas preventivas existentes es alta, o ambos. El riesgo está controlado
                  p.mb-0 Estos peligros se clasifican directamente en el nivel de riesgo y de intervención cuatro (IV)
      

    Separador 

    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3 Medio ambiente, seguridad y salud en el trabajo

    .row.justify-content-center.mb-4.mb-md-2
      .col-lg-5.col-8.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img6.png' alt='')
      .col-lg-7.mb-4(data-aos="fade-left")
        p La capacitación tiene como propósito el desarrollo de habilidades y capacidades de todo el personal con el fin de formar un talento humano más competente y hábil. Además, de buscar promocionar la salud, el autocuidado y prevenir la enfermedad y los riesgos.
        p Sin embargo, más allá de esto, se busca estimular el interés de todos sobre los beneficios de aplicar el sistema de gestión, incentivar la participación en las diferentes actividades sobre autocuidado, factores de riesgo y condiciones inseguras, mejorar el clima laboral, la productividad, la salud física y mental, y mejorar la capacidad de los empleados para identificar y reportar factores de riesgos presentes en su labor.
        .bg-green7.p-4
          p.mb-0 Uno de los ejes estratégicos para realizar un proceso de toma y tratamiento de muestras acorde a la normatividad es el recurso humano que realizará esa función, el cual debe contar con las habilidades y competencias necesarias, estas mismas son definidas dentro de un instrumento de planeación denominado plan de capacitación.
    
    p.mb-4(data-aos="fade") La capacitación del personal de toma de muestras olores y ruido también requiere de capacitación en el tema de muestreo, aunque no existe todavía norma de competencia laboral que obligue la normativa. Sin embargo, para el personal que realice labor de campo en olores, ya sea para toma de muestra o elaboración de encuestas, la Resolución 1541 de 2013 establece:

    TabsC.color-acento-botones.mb-4
      .row.p-4.p-md-5.bg-green9(titulo="Olores ofensivos")
        h4 Olores ofensivos
        .col-lg-7.mb-4.mb-md-0
          p 
            b Personal con experiencia en comunidades 
            | La NTC 6012-1 establece que el aseguramiento de la calidad de los datos se logra aplicando los criterios y requisitos establecidos previamente, en tal sentido, la planificación y ejecución de la encuesta debe realizarse por 
            b personal que tenga experiencia interactuando con comunidades 
            | y que tenga claridad en los objetivos de la evaluación que se realizará a través de la encuesta quienes no necesariamente deben ser profesionales del área de las ciencias sociales (Ministerio del medio Ambiente, 2014, p.12) 
          p 
            b Identificación del personal responsable 
            | Es muy útil identificar las personas encargadas de desarrollar las acciones del plan de olores molestos, sus tareas específicas y el momento en que ellas son terminadas. (Ministerio del medio Ambiente, 2014, p.52)
        .col-lg-5
          img(src='@/assets/curso/temas/tema1/tab-img1.png' alt='')
      .row.p-4.p-md-5.bg-green9(titulo="Ruidos")  
        h4 Ruidos
        .col-lg-7.mb-4.mb-md-0
          p La Resolución 627 de 2006 y su protocolo no define literalmente el tipo de experiencia que necesita el personal que hace este tipo de trabajo. Sin embargo, es importante aclarar que los laboratorios acreditados en ese sector deben cumplir la NTC 17025 y por ende, la cualificación del personal en esta norma de calidad exige que su capacitación interna esté ligada a los protocolos que ellos establezcan y la norma que actualmente está en vigencia.
        .col-lg-5
          img(src='@/assets/curso/temas/tema1/tab-img2.png' alt='')
      .row.p-4.p-md-5.bg-green9(titulo="Consideración general")  
        h4 Consideración general
        .col-lg-7.mb-4.mb-md-0
          p Para cualquiera de los toma de muestra sea en olores y/o ruido es importante que toda organización defina un plan de capacitación de su personal en temas como:
          ul.lista-ul--color.color-secundario.ps-3.ps-md-4.fa-ul
            li.mb-1
              i.fas.fa-check
              | Elementos personales de protección para la toma y procesamiento de muestras.
            li.mb-1
              i.fas.fa-check
              | Equipos e instrumentos de laboratorio.
            li.mb-1
              i.fas.fa-check
              | Riesgos y amenazas en campo y en laboratorio.
            li.mb-1
              i.fas.fa-check
              | Tipos, técnicas y métodos de muestreo.
            li
              i.fas.fa-check
              | Normatividad aplicable, entre otros.
          p Lo anterior no solamente va a significar una mejora en su calidad y expectativas laborales, sino que se van a minimizar los errores involucrados en el proceso de toma, preservación y transporte de muestras.
        .col-lg-5
          img(src='@/assets/curso/temas/tema1/tab-img3.png' alt='')


    p.mb-4(data-aos="fade") En la realización del trabajo de campo ambiental para las mediciones tanto de ruido como de olores ofensivos, es importante que el personal, que vaya a ejecutar las diferentes labores en la toma de muestras, tenga presente los equipos de protección personal que debe emplear para así reducir los riesgos a los que está expuesto en el campo de trabajo.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img7.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        .bloque-texto-c.bg-green9.box-shadow.p-4
          i.fas.fa-quote-right
          p Los EPP se definen como “todo equipo, aparato o dispositivo especialmente proyectado y fabricado para preservar el cuerpo humano, en todo o en parte, de riesgos específicos de accidentes del trabajo o enfermedades profesionales”.
          h5.mb-0 -  (Minsalud, 2021)

    p.mb-4(data-aos="fade") A continuación se ilustran los principales EPP que se emplean en la labor para la toma de muestras de olores y ruido.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9.tarjeta.fondo-imginfog.p-4.px-md-5
        .title-imginfog.mb-2 Principales EPP
        ImagenInfograficaB.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-infog.svg', alt='Principales EPP')

          .row.justify-content-center(x="4%" y="11%" tooltip="Casco" numero="+")
            h5 Casco
            .col-md-8
              p Elemento de protección personal que se utiliza en la cabeza con el propósito de evitar golpes en esta parte del cuerpo, por consecuencia de la probabilidad de caída de objetos y riesgo de contacto con líneas energizadas. El casco debe ser dieléctrico, para trabajos en alturas debe llevar barbiquejo para evitarla caída del casco. 
              p También debe tener la suspensión compuesta por la araña, el tafilete de seis apoyos, la banda frontal anti-sudor y la corona debe proporcionar alto nivel de comodidad, para ello debe ser ajustable en altura de uso y contorno mediante sistema Ratchet, poseer cordón anti contusión, el cual siempre debe encontrarse tensionado para la amortiguación de los impactos (p.17) 
              p La vida útil de un casco debe ser aproximadamente de 10 años dentro del almacén y dos años de uso a partir de la fecha de entrega, por ellos debe registrarse la fecha de entrada al trabajador o puede grabarse en el casco. El diseño en general debe cumplir normas nacionales colombiana NTC1523 e internacional de Calidad Certificada ANSI Z89.1.
            .col-md-4
              img(src='@/assets/curso/temas/tema1/imginfog-1.svg' alt='')
          .row.justify-content-center(x="4%" y="26%" tooltip="Gafas de seguridad" numero="+")
            h5 Gafas de seguridad
            .col-md-8
              p Gafas en policarbonato, con antiempañante y protección para luz ultravioleta. Evita la proyección de partículas sólidas o líquidas a los ojos, tales como, manejo de sustancias corrosivas. 
              p Se utiliza en la parte visual de la cara, utilizando estos lentes de seguridad en áreas de riesgos de impacto moderado, tales como rebabas y otras pequeñas partículas. Deben ser limpiadas con un paño húmedo antes de comenzar la jornada. Limpie y revise sus lentes de seguridad con frecuencia; las micas con rayones reducen la visibilidad, pero no afectan la resistencia al impacto; cuando la visión se vea afectada, se deben reemplazar los lentes por otros lentes de seguridad nuevos.” (p.6)
            .col-md-4
              img(src='@/assets/curso/temas/tema1/imginfog-2.svg' alt='')
          .row.justify-content-center(x="4%" y="42%" tooltip="Respirador con filtros para vapores orgánicos" numero="+")
            h5 Respirador con filtros para vapores orgánicos
            .col-md-8
              p Es utilizado para tareas donde se realicen labores en presencia de vapores orgánicos. El EPP debe estar compuesto por: una mascarilla en silicona, ajustable, con cabezal de arnés y con correas de ajuste frontal. 
              p Los respiradores con filtros para vapores orgánicos sólo son efectivos si son utilizados con el cartucho o filtro correcto (con frecuencia estos términos son intercambiables) para una determinada sustancia biológica o química. La protección que ofrecen los respiradores dependerá del buen ajuste de la mascarilla en la cara (p.7) 
            .col-md-4
              img(src='@/assets/curso/temas/tema1/imginfog-3.svg' alt='')
          .row.justify-content-center(x="4%" y="57%" tooltip="Botas con puntera de acero" numero="+")
            h5 Botas con puntera de acero
            .col-md-8
              p Ofrecen protección a la parte anterior del pie del trabajador en caso de golpes o caídas de objetos sobre dicha zona. Esta clase de calzado es indispensable para quienes, dentro de sus labores, tengan que manipular o movilizar materiales. 
              p En el área de trabajo los pies y todo el cuerpo entero puede o no estar expuesto a riesgos de diversas causas; algunas de estas pueden ser por causas ajenas al individuo como son caídas de objetos, alto voltaje, agua y/o humedad por causas propias del individuo como son: una mala higiene o causas desencadenadas por la utilización de un EPP en mal estado o mal recetado”. 
              p Debe realizarse una revisión periódicamente de la suela, si esta presenta en cualquiera de sus partes grabados de menos de 0.03m deben desecharse ya que su capacidad antideslizante se encuentra disminuida. Además, se debe observar si presentan rotos, agujeros, dilataciones o signos de desgaste y disminución de su capacidad protectora. En caso de deterioro no las repare; solicite unas nuevas. (p.8)
            .col-md-4
              img(src='@/assets/curso/temas/tema1/imginfog-4.svg' alt='')
          .row.justify-content-center(x="4%" y="73%" tooltip="Protección de manos y brazos" numero="+")
            h5 Protección de manos y brazos
            .col-md-8
              p En el lugar de trabajo, las manos del trabajador, y su cuerpo puede hallarse expuesto a riesgos de naturaleza diversa, los cuales pueden clasificarse en tres grupos, según su forma de actuación: lesiones en las manos debidas a acciones externas, riesgos para las personas por acciones sobre las manos y riesgos para la salud o molestias vinculados al uso de guantes de protección. 
              p Se debe comprobar periódicamente si los guantes presentan rotos, agujeros o dilataciones. Si ello ocurre y no se pueden reparar, hay que sustituirlos dado que su acción protectora se habrá reducido. Los guantes de cuero, algodón o similares deberán conservarse limpios y secos por el lado que está en Contacto con la piel. En cualquier caso, los guantes de protección deberán limpiarse siguiendo las instrucciones de los guantes que se encuentran rotos, rasgados o impregnados con materiales químicos no deben ser utilizados. (p.8)
            .col-md-4
              img(src='@/assets/curso/temas/tema1/imginfog-5.svg' alt='')
          .row.justify-content-center(x="4%" y="89%" tooltip="Protección auditiva" numero="+")
            h5 Protección auditiva
            .col-md-8
              p Los protectores auditivos son utilizados para reducir el nivel de presión sonora que percibe una persona expuesta a un ambiente ruidoso. Es indispensable emplearlos cuando se está sometido a niveles que superen las intensidades y tiempos de exposición. (p19).
            .col-md-4
              img(src='@/assets/curso/temas/tema1/imginfog-6.svg' alt='')

          .row.justify-content-center(x="95.5%" y="11%" tooltip="Tapones" numero="+")
            h5 Tapones
            .col-md-8
              p #[b Tapones de inserción de espuma auto expandible:] Son diseñados para ajustarse en el conducto aural sin ninguna fijación externa. Fabricado en espuma moldeable de poliuretano que ofrece una buena atenuación. Como problema tienen que se salen del conducto por la conversación o movimientos de la mandíbula si no quedan muy bien puestos. 
              p #[b Tapones de copa (orejeras):] Son hechos en material ligero en general de plástico y forrados por dentro con un material absorbente del sonido. Para asegurar un confortable ajuste alrededor del oído, están cubiertos de material elástico. Este recubrimiento actúa como obturador y ayuda a amortiguar las vibraciones.
            .col-md-4
              img(src='@/assets/curso/temas/tema1/imginfog-7.svg' alt='')
          .row.justify-content-center(x="95.5%" y="26%" tooltip="Poncho Impermeable" numero="+")
            h5 Poncho Impermeable
            .col-md-8
              p Capa de tela en poliéster recubierta en PVC, flexible y confortable, creando un ambiente seco previendo irritaciones cutáneas Ruedos termosellados para mayor resistencia a la ruptura y capucha integrada. (p.32)
            .col-md-4
              img(src='@/assets/curso/temas/tema1/imginfog-8.svg' alt='')
          .row.justify-content-center(x="95.5%" y="42%" tooltip="Abrigo Impermeable" numero="+")
            h5 Abrigo Impermeable
            .col-md-8
              p Con capa de tela poliéster recubierto en PVC, flexible y confortable, creando un ambiente seco, previendo irritaciones cutáneas.(p.32)
            .col-md-4
              img(src='@/assets/curso/temas/tema1/imginfog-8.svg' alt='')
          .row.justify-content-center(x="95.5%" y="57%" tooltip="Overol impermeable" numero="+")
            h5 Overol impermeable
            .col-md-8
              p Capa de tela poliéster recubierta en PVC flexible y confortable, creando un ambiente seco previendo irritaciones cutáneas. Con malla tipo americano que evita excesiva sudoración.(p.32)
            .col-md-4
              img(src='@/assets/curso/temas/tema1/imginfog-9.svg' alt='')
          .row.justify-content-center(x="95.5%" y="73%" tooltip="Overol en Tyvek" numero="+")
            h5 Overol en Tyvek
            .col-md-8
              p Material de olefinas derivado del petróleo, en forma de hilado sin tejer. Unido mediante rodillos, por millones de diminutas fibras de polietileno. Bajo peso. Resistencia a la tensión y a la ruptura en cualquier dirección, ya sea seco o mojado. Permanece flexible a temperaturas hasta de - 100°F. Resistencia contra la penetración de partículas secas y líquidos no peligrosos. (p33)
            .col-md-4
              img(src='@/assets/curso/temas/tema1/imginfog-10.svg' alt='')
          .row.justify-content-center(x="95.5%" y="89%" tooltip="Overol en drill" numero="+")
            h5 Overol en drill
            .col-md-8
              p Overol manga larga en dril 100 algodón (o gabardinas, según necesidad). Modelo básico con 2 bolsillos pectorales, 2 adelante en el pantalón y dos atrás, cierre de cremallera. (p.42)
            .col-md-4
              img(src='@/assets/curso/temas/tema1/imginfog-9.svg' alt='')

        .row 
          .col-md-6
            .row.mb-3.align-items-center
              .col-lg-1.col-md-2
                .cuadro.bg-green11
              .col-lg-11.col-md-10
                p.text-small.mb-0 Elementos de protección personal básicos 
          .col-md-6
            .row.mb-3.align-items-center
              .col-lg-1.col-md-2
                .cuadro.bg-blue5
              .col-lg-11.col-md-10
                p.text-small.mb-0 Clases de protectores y mantenimiento especifico

    p.mb-4(data-aos="fade") Los elementos de Protección personal, de acuerdo con Minsalud (2021) se convierten en herramientas indispensables que complementan el trabajo en campo por seguridad de los operadores es importante qué reconozcamos la importancia de cada 1 de estos elementos y la función que cumplen a la hora de realizar el trabajo en campo evitando así riesgos asociados a los diferentes peligros a los que se están expuestos en el campo laboral.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
