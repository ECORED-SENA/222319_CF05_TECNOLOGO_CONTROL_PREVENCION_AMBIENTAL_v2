<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 5
      h1 Estándares e Interpretación de resultados en olores y ruido


    .row.fondo-tema5.align-items-center.pt-5.mb-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-7.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema5/img.png' alt='Imagen decorativa')
          .col-lg-5.mb-4(data-aos="fade-left")
            p Los resultados obtenidos, en las medidas de la emisión de ruido, son utilizados para la verificación de sus niveles de emisión por parte de las fuentes. Las mediciones de la emisión de ruido se efectúan en un intervalo unitario de tiempo de medida, de acuerdo con lo establecido en el artículo 5 y con el procedimiento descrito en el Capítulo I del Anexo 3 de la Resolución 627 de 2006.

          p.mb-4(data-aos="fade") La emisión o aporte de ruido de cualquier fuente se obtiene al restar logarítmicamente, el ruido residual corregido, del valor del nivel de presión sonora corregido continuo equivalente ponderado A, - LRAeq,T -, como se expresa a continuación:

          .col-lg-6.mb-4
            img(src='@/assets/curso/temas/tema5/form.svg', alt='Fórmula')

          h5.mb-4.text-center(data-aos="fade") Donde:

          .row.mb-4(data-aos="fade-down")
            .col-md-4.mb-4
              .tarjeta.bg-green6.p-4.text-center.h-100
                img.mb-4.mb-md-5.m-auto(src='@/assets/curso/temas/tema5/ico.svg' alt='Icono decorativo' style="width:60px;")
                h5 Leq emisión: 
                p Nivel de emisión de presión sonora, o aporte de la(s) fuente(s) sonora(s), ponderado A.
            .col-md-4.mb-4
              .tarjeta.bg-green6.p-4.text-center.h-100
                img.mb-4.mb-md-5.m-auto(src='@/assets/curso/temas/tema5/ico.svg' alt='Icono decorativo' style="width:60px;")
                h5 LRAeq,1 h: 
                p Nivel corregido de presión sonora continúo equivalente ponderado A, medido en una hora.
            .col-md-4.mb-4
              .tarjeta.bg-green6.p-4.text-center.h-100
                img.mb-4.mb-md-5.m-auto(src='@/assets/curso/temas/tema5/ico.svg' alt='Icono decorativo' style="width:60px;")
                h5 LRAeq,1 h, Residual: 
                p Nivel corregido de presión sonora continuo equivalente ponderado A, Residual, medido en una hora.

    
    .mb-4.bg-yellow2.p-2.px-md-3
      p.mb-0(data-aos="fade") 
        b Tener en cuenta: 
        | en caso de no poderse evaluar el ruido residual, se toma el nivel percentil L90 corregido y se utiliza a cambio del valor del ruido residual corregido.

    .row.justify-content-center
      .col-lg-10
        .bg-primario.tarjeta.mb-4(data-aos="fade-down")
          .row.align-items-center.p-4.p-md-0
            .col-md-2.col-4
              img.pt-lg-3.px-lg-3.ps-md-3(src='@/assets/curso/temas/tema5/icono.svg' alt='Icono decorativo')
            .col-md-9.py-3.text-white.pe-md-4
              h5 Mediciones de emisión
              p.mb-0 Se sugiere ver el material audiovisual «Control a Niveles de Ruido y Contaminación Auditiva» que ilustra cómo se realizan las mediciones de emisión de ruido y cómo se comparan los resultados con la normatividad ambiental vigente en ruido.

    p.mb-4(data-aos="fade") La Resolución 627 de 2006 establece los estándares máximos permisibles de niveles de emisión de ruido expresados en decibeles ponderados A (dB(A)).

    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Tabla 5.] Estándares máximos permisibles de niveles de emisión de ruido
        .tabla-a.tema5.color-secundario
          table
            caption 
              p.mb-0 Tomado de Resolución 627 de 2006, p.5.
            thead
              tr.bg-secundario
                th.colum-25(rowspan="2") Sector
                th(rowspan="2") Subsector
                th.colum-30(colspan="2") Estándares máximos permisibles de niveles de emisión de ruido en dB(A)
              tr.bg-secundario
                th Día
                th Noche
            tbody
              tr
                td Sector A. Tranquilidad y silencio
                td Hospitales bibliotecas, guarderías, sanatorios, hogares geriátricos.
                td.text-center 55
                td.text-center 50
              tr
                td(rowspan="3") Sector B. Tranquilidad y ruido moderado
                td Zonas residenciales o exclusivamente destinadas para desarrollo habitacional, hotelería y hospedajes.
                td.text-center(rowspan="3") 65
                td.text-center(rowspan="3") 55
              tr
                td Universidades, colegios, escuelas, centros de estudio e investigación.
              tr
                td Parques en zonas urbanas diferentes a los parques mecánicos al aire libre.
              tr
                td(rowspan="5") Sector C. Ruído intermedio restringido
                td Zonas con usos permitidos industriales, como industrias en general, zonas portuarias, parques industriales, zonas francas.
                td.text-center 75
                td.text-center 75
              tr 
                td Zonas con usos permitidos comerciales, como centros comerciales, almacenes, locales o instalaciones de tipo comercial, talleres de mecánica automotriz e industrial, centros deportivos y recreativos, gimnasios, restaurantes, bares, tabernas, discotecas, bingos, casinos.
                td.text-center 70
                td.text-center 60
              tr 
                td Zonas con usos permitidos de oficinas.
                td.text-center(rowspan="2") 65
                td.text-center(rowspan="2") 55
              tr 
                td Zonas con usos institucionales.
              tr 
                td Zonas con otros usos relacionados, como parques mecánicos al aire libre, áreas destinadas a espec-táculos públicos al aire libre.
                td.text-center 80
                td.text-center 75
              tr
                td(rowspan="3") Sector D. Zona suburbana o rural de tranquilidad y ruido moderado
                td Residencial suburbana.
                td.text-center(rowspan="3") 55
                td.text-center(rowspan="3") 50
              tr
                td Rural habitada destinada a explotació agropecuaria
              tr
                td Zonas de Recreación y descanso, como parquesnaturales y reservasnaturales.


    p.mb-4(data-aos="fade") Frente a esto se deben tener en cuenta los siguientes aspectos de la misma (Resolución 627 de 2006 parágrafos del primero al cuarto):

    .row(data-aos="fade-down")
      .col-lg-3.col-md-6.mb-4
        .bg-blue3.p-4.h-100
          .row.mb-4
            .col-md-5.col-4
              img(src='@/assets/curso/temas/tema5/ico1.svg' alt='Icono decorativo')
          p.mb-0 Cuando la emisión de ruido en un sector o subsector trascienda a sectores o subsectores vecinos o inmersos en él, los estándares máximos permisibles de emisión de ruido son aquellos que corresponden al sector o subsector más restrictivo. 
      .col-lg-3.col-md-6.mb-4  
        .bg-blue4.p-4.h-100
          .row.mb-4
            .col-md-5.col-4
              img(src='@/assets/curso/temas/tema5/ico2.svg' alt='Icono decorativo')
          p.mb-0 Las vías troncales, autopistas, vías arterias, vías principales, en general las vías, son objeto de medición de ruido ambiental, más no de emisión de ruido por fuentes móviles. 
      .col-lg-3.col-md-6.mb-4
        .bg-blue3.p-4.h-100
          .row.mb-4
            .col-md-5.col-4
              img(src='@/assets/curso/temas/tema5/ico3.svg' alt='Icono decorativo')
          p.mb-0 Las vías troncales, autopistas, vías arterias y vías principales, en áreas urbanas o cercanas a poblados o asentamientos humanos, no se consideran como subsectores inmersos en otras zonas subsectores. 
      .col-lg-3.col-md-6.mb-4  
        .bg-blue4.p-4.h-100
          .row.mb-4
            .col-md-5.col-4
              img(src='@/assets/curso/temas/tema5/ico4.svg' alt='Icono decorativo')
          p.mb-0 En los sectores y/o subsectores en que los estándares máximos permisibles de emisión de ruido de la Tabla, son superados a causa de fuentes de emisión naturales, sin que exista intervención del hombre, estos valores son considerados como los estándares máximos permisibles, como es el caso de cascadas, sonidos de animales en zonas o parques naturales.


    p.mb-4(data-aos="fade") Los resultados obtenidos en las mediciones de ruido ambiental deben ser utilizados para realizar el diagnóstico de los niveles de presión sonora en el ambiente. Los resultados podrán ser llevados a mapas de ruido con el fin de identificar zonas críticas y posibles fuentes de emisión de ruido, entre otros. Las mediciones de ruido ambiental deben hacerse de forma que los resultados obtenidos permitan su incorporación a mapas de ruido.

    .row.justify-content-center
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema5/img2.png' alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p La autoridad ambiental correspondiente debe especificar claramente los objetivos que motivan la realización del estudio a ejecutar. Los objetivos deben definirse de una forma concisa y clara, asimismo deben ser congruentes con las posibilidades técnicas y la realidad económica de la entidad, ciudad, zona o área de estudio.
        p Ahora bien, frente al cálculo de las emisiones de olores, una vez se ha tomado la muestra, transportada y preservada se procede al análisis y la interpretación de los resultados, para ello se tiene en cuenta que la muestra tiene que ser valorada por panelistas para la posterior comparación con la norma.

    p.text-center.mb-4(data-aos="fade") En este grafico resume el proceso que se lleva a cabo en la interpretación final del resultado.
    
    .row.justify-content-center.mb-4
      .col-lg-5(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Figura 15.] Proceso
        img(src='@/assets/curso/temas/tema5/infog.svg' alt='Toma de muestras')

    p.mb-4(data-aos="fade") Para el análisis de todas las muestras tomadas se analizan mediante olfatometría dinámica dentro de 
      b las primeras 30 horas luego del muestreo
      | , de acuerdo con lo establecido en la NTC 5880. Se encarga de presentar las muestras en una serie de dilución a un grupo de panelistas seleccionados, uno a la vez, mediante el método 
      b SI / NO.

    .row.fondo2-tema5.align-items-center.py-5.pt-3.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-6.mb-4(data-aos="fade-right")
            p Cuando la muestra ya está diluida, se le presenta a un grupo de panelistas que por medio de una prueba define la intensidad de olor. La norma UNE-EN-13725 define la unidad de concentración de olor como uoE/m3 (unidad de olor europea por metro cúbico) como aquella sustancia o mezcla de sustancias que diluida en 1 m3 de gas neutro en condiciones normales, es distinguida de aire exento de olor por el 50% de los panelistas.
            p Básicamente, el umbral de olor es aquella concentración a partir de la cual el olfato humano empieza a percibirla.
          .col-md-6.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema5/img3.png' alt='Imagen decorativa')    

          .col-md-4.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema5/img4.png' alt='Imagen decorativa')
          .col-md-8.mb-4(data-aos="fade-left")
            .bloque-texto-b.bg-green9.box-shadow.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p La concentración de olor de una muestra gaseosa de sustancias olorosas viene determinada por el número de diluciones que se ha tenido que hacer a la muestra con aire puro inodoro, para que los panelistas la perciban. Se presenta un ejemplo de este procedimiento.
                br
                br
                h5.mb-0 - tomado de Sánchez J. I., Peña A.A., & Martínez, J.V. (2008, p.11)
                i.fas.fa-quote-right     
              

          h5.text-center.mb-4(data-aos="fade") Ejemplo de un proceso de olfatometría

          .col-md-3.mb-4.px-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema5/img5.svg' alt='Imagen decorativa')
          .col-md-7.mb-4.px-md-0(data-aos="fade-left")
            SlyderE.bg-white.box-shadow.p-4(indicadores="derecha")
              .row  
                p.mb-0 Una muestra que diluida 500 veces empieza a ser distinguida por los panelistas. Se dice que tiene una concentración de olor de 500 uoE/m3 Estas diluciones a las que se hace referencia son necesarias para cuantificar las muestras y se llevan a cabo en un equipo denominado olfatómetro.
              .row 
                p.mb-0 El olfatómetro mezcla aire puro con la muestra de aire contaminado por malos olores en diferentes proporciones y lo ofrece a los panelistas a través de unas boquillas. El panelista debe distinguir por cuál de ellas sale el aire contaminado y las respuestas de cada uno de ellos son recogidas y procesadas por un sistema informático el cual calcula la concentración de olor de la muestra.
              .row  
                p.mb-0 La secuencia de ofrecimientos comienza por diluciones muy elevadas y por tanto inodoras a los panelistas hasta diluciones menores hasta que el panelista empieza a distinguir el olor. Para evitar que los panelistas den resultados al azar, el olfatómetro ofrece junto con las muestras, muestras de aire puro inodoro. La norma exige que los panelistas identifiquen más del 80% de las muestras de aire puro.
              .row  
                p.mb-0 Todo este procedimiento de medición (olfatometría dinámica) está continuamente sometido a una calibración de manera que los resultados de cualquier estudio sean comparables y confiables.

    
    p.mb-4(data-aos="fade") Para asegurar la calidad de la medición de olor se deberán calibrar los dos elementos que intervienen en la medición:

    .row.justify-content-center.mb-2
      .col-md-4.col-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema5/img6.png' alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        ul.lista-ul--color.color-secundario.ps-3.ps-md-4.fa-ul
          li.mb-0
            i.fas.fa-check
            | Las diluciones que realiza el olfatómetro.
          li
            i.fas.fa-check
            | La sensibilidad olfativa de los panelistas.
        p La calibración del olfatómetro o equipo de dilución, este equipo debe realizar regularmente (al menos una vez al año) la calibración se realiza empleando un material trazador adecuado como por ejemplo monóxido de carbono y una incertidumbre expandida inferior al 3%.    
        p Por tanto, una de las más importantes sería entonces, la calibración o estado olfativo de los panelistas, para ello se toma como referencia la NTC 4503 o en su defecto la norma UNE-EN-13725, que define todas las condiciones, calibraciones y, en definitiva, el protocolo analítico para la determinación de la concentración de olor.
        p Como es evidente el umbral de olor es muy diferente entre los distintos individuos. Esta selección de individuos se realiza utilizando un gas de referencia, el n-butanol en nitrógeno (con una incertidumbre expandida inferior al 5%), para seleccionar candidatos con umbrales de percepción para el n-butanol entre 20 a 80 ppb y con una baja desviación estándar entre sus percepciones.
        p De acuerdo a la norma se determinarán, al menos, 10 estimaciones del umbral individual de cada panelista para el gas de referencia recogidos en, al menos, 3 sesiones en días no consecutivos de esta manera se aseguran los criterios de sensibilidad y repetibilidad del detector: 
          b.t-green2 el olfato humano.
        p La uoE/m3 será aquella mezcla que provoca una respuesta en el umbral de olor de estos individuos calibrados, denominados panelistas.

    p.mb-4(data-aos="fade") Los estándares de Inmisión o niveles permisibles de inmisión de sustancias o mezclas de sustancias de olores ofensivos están contenidos en el Capítulo III de la Resolución 1541 de 2013. A continuación, se presentan los estándares de inmisión para la respectiva comparación de los resultados obtenidos por la metodología olfatometria dinámica.

    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Tabla 6.] Niveles permisibles de inmisión
        h5.text-center.text-uppercase capitulo iii niveles permisibles de calidad del aire o inmisión de sustancias y mezclas de sustancias de olores ofensivos 
        .tabla-a.tema5.color-secundario
          table
            caption 
              p.mb-0 Tomado de Resolución 1543 de 2013, p.4 
            thead
              tr.bg-secundario
                th Actividad
                th.colum-30 Nivel permisible*
            tbody
              tr
                td Procesamiento y conservación de carne, pescado, crustáceos y moluscos
                td.text-center(rowspan="9") 3 OU<sub>E</sub>/m<sup>3</sup>
              tr
                td Fabrucación de productos de la refinación del petróleo
              tr
                td Fabricación de pulpas (pastas) celulósicas; papel y cartón
              tr
                td Curtido y recurtido de cueros; recurtido y teñido de pieles
              tr
                td Tratamiento y disposición de desechos no peligrosos y estaciones de transferencia
              tr
                td Planta de tratamiento de aguas residuales
              tr
                td Actividades que capten agua de cuerpos de agua receptores de vertimientos
              tr
                td Fabricación de sustancia y productos químicos básicos
              tr
                td Tratamiento térmico de subproductos de animales
              tr
                td Unidad de producción pecuaria
                td.text-center(rowspan="2") 5 OU<sub>E</sub>/m<sup>3</sup>
              tr
                td Elaboración de aceites y grasas de origen vegetal
              tr
                td Descafeinado, tostión y grasas de origen vegetal
                td.text-center(rowspan="2") 7 OU<sub>E</sub>/m<sup>3</sup>
              tr
                td Otras actividades


    .row.align-items-center.mb-4
      .col-lg-7.mb-4(data-aos="fade-right")
        p El análisis se proyecta en un modelo de dispersión para luego hacer la comparación de los resultados directamente con los estándares de concentración presentes en la tabla anterior, teniendo en cuenta el sector o proceso en el cual se hizo la medición de los olores ofensivos; en este caso la unidad de concentración está definida como 
          b OU<sub>E</sub>/m<sup>3</sup> 
          | (Unidad de Olor Europea).
        p La modelación de la información es importante, ya que los datos de entrada se convierten en insumo para hallar las concentraciones para finalmente comparar los valores umbrales con la normatividad. Por otro lado, si las muestras son obtenidas por otras técnicas cómo las analíticas, o muestreadores pasivos para medir sustancias de olores ofensivos, los resultados son comparados con los estándares de la siguiente tabla.
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema5/img7.png' alt='Imagen decorativa')


    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Tabla 7.] Niveles permisibles de calidad de aire
        h5.text-center.text-uppercase capitulo iii niveles permisibles de calidad del aire o inmisión de sustancias y mezclas de sustancias de olores ofensivos 
        .tabla-a.tema5.color-secundario
          table
            thead
              tr.bg-secundario
                th(rowspan="2") Susancia
                th(colspan="2") Nivel máximo permisible
              tr.bg-secundario
                th ug /m<sup>3</sup>
                th Tiempo de exposición*
            tbody.bg-green7
              tr
                td(rowspan="2") Sulfuro de hidrógeno (H2S) 
                td.text-center 7
                td.text-center 24 horas
              tr
                td.text-center 30
                td.text-center 1 hora
              tr
                td(rowspan="2") Azufre Total Reducido (TRS) 
                td.text-center 7
                td.text-center 24 horas
              tr
                td.text-center 40
                td.text-center 1 hora
              tr
                td(rowspan="2") Amoniaco (NHs)
                td.text-center 91
                td.text-center 24 horas
              tr
                td.text-center 1400
                td.text-center 1 hora
        p.mb-0.p-2 * Cuando se utilicen muestreadores pasivos para la medición de las sustancias de la Tabla, el tiempo de exposición podrá estar entre 2 y 4 semanas.
        figcaption.mt-2 
          p.mb-0 Tomado de Resolución 1543 de 2013, p.4 


    p.mb-4(data-aos="fade") El procedimiento para la comparación de los valores de concentración con la norma está contenido en el protocolo de olores ofensivos numeral 2.5.1 Los niveles permisibles o de inmisión para sustancias generadoras de olores ofensivos se establecen a condiciones de referencia (25ºC y 760 mmHg), por lo tanto, es necesario expresar las concentraciones obtenidas en tales condiciones.
    
    .row.justify-content-center
      .col-lg-10
        .bg-primario.tarjeta.mb-4(data-aos="fade-down")
          .row.align-items-center.p-4.p-md-0
            .col-md-2.col-4
              img.pt-lg-3.px-lg-3.ps-md-3(src='@/assets/curso/temas/tema5/icono2.svg' alt='Icono decorativo')
            .col-md-9.py-3.text-white.pe-md-4
              h5 Manejo de olores 
              p.mb-0 Finalmente, se sugiere ver el material audiovisual «Control y manejo de olores en empresas» para reforzar los conocimientos adquiridos.








</template>

<script>
export default {
  name: 'Tema5',
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
