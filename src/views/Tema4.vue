<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Recolección, transporte y recepción de muestras


    p.mb-4(data-aos="fade") En la recolección de las muestras el rotulado y posterior envasado se convierte en una actividad de vital importancia en la caracterización de los monitoreos; para este caso, se presenta cómo es que se rotula y se envasa las muestras de olores y de ruido.

    .row.mb-4
      .col-lg-6.mb-4(data-aos="fade-right")
        .tarjeta.bg-secundario.p-4.h-100
          img.mb-4.m-auto(src='@/assets/curso/temas/tema4/ico1.svg' alt='' style="width:110px;")
          h3.text-center Tratamiento de las muestras de ruido
          p En monitoreo de ruido a diferencia de otros parámetros, las muestras tomadas en campo leche no se deben caracterizar o generar algún tratamiento especial hablando físico químicamente por esa razón #[b no existe concepto] de rotulado ni envasado debido a que la información se establece de manera digital y se retiene en medios magnéticos o memorias internas del equipo en cuestión.
          p Sin embargo, los formatos de campo y material fotográfico registrado se deben cuidar teniendo en cuenta la cadena de custodia de material información requerida en el muestreo y posterior análisis en el laboratorio.
      .col-lg-6.mb-4(data-aos="fade-left")
        .tarjeta.bg-primario.p-4.text-white.h-100
          img.mb-4.m-auto(src='@/assets/curso/temas/tema4/ico2.svg' alt='' style="width:110px;")
          h3.text-center Tratamiento de las muestras de olores
          p Las muestras son contenidas en bolsas de Nalophan, la cuales deben ir rotuladas con la información: día y hora del muestreo, debe tenerse en cuenta que estas muestras deben mantenerse a menos de 25ºC. La temperatura, sin embargo, debe mantenerse por encima del punto de rocío de las muestras para evitar condensación. Las muestras no deben estar expuestas a la luz solar directa, para minimizar las reacciones (foto)químicas y la difusión. (Sánchez, J.I., Peña, A.A., Martínez, J.V., 2008, p.11).
          p Las bolsas para toma de muestras de gas están fabricadas de Nalophan®. Se diseñan específicamente para responder a las exigencias de calidad de la norma EN 13725, especialmente para minimizar el riesgo de contaminación de muestras. Su tamaño puede variar entre 8, 10, 40, o 60 Lts.

    p.mb-4(data-aos="fade") En cuanto al transporte y el manejo de los datos cuando se realizan las mediciones de ruido, la información se tratará teniendo en cuenta los registros diligenciados en campo y adicionalmente se debe ser muy cuidadosos con los datos de la grabación en el equipo de medición.

    .row.justify-content-center.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/img.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        .bloque-texto-b.bg-green9.box-shadow.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p “Si el sonómetro dispone de memoria, almacene los resultados para una comprobación posterior. Anote el número de memoria o registro y el lugar de medida. Es importante que siempre conserve todos los datos y una ficha de campo bien documentada. Si las medidas fueron almacenadas en el sonómetro, imprima los resultados directamente o almacene los datos en su ordenador personal mediante programas informáticos que aseguren que los datos no puedan ser manipulados de forma accidental o voluntaria.” 
            br
            br
            h5 (Consejería de medioambiente, 2007, p.15)
            i.fas.fa-quote-right
        
    p.mb-4(data-aos="fade") Cuando se realizan los estudios o mediciones de ruido el personal técnico encargado de efectuar las mediciones deberá recabar del cliente toda la información que le sea necesaria la cual es significativa antes, durante y después de la medición. Se puede decir que la entrega de documentación de muestreo se basa en la siguiente información:

    .row.align-items-center
      .col-md-8.mb-4(data-aos="fade-right")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-green7" data-aos="fade-down")
          .row(titulo="Protocolo de mediciones")
            p En este debe venir recogida toda la información acerca del ensayo acústico que se quiere realizar. Por ejemplo: Tipo de estudio que se requiere realizar, objetivos del ensayo, métodos utilizados, número de medidas, periodo de medición... etc.
          .row(titulo="Plano de situación de los puntos de medida")
            p Todos los puntos en los que se vayan a efectuar mediciones de ruidos deben quedar perfectamente señalados en el protocolo de mediciones y en el plano de situación. En aquellos casos, en los que, por requerimiento del cliente, se efectuarán mediciones fuera de los lugares inicialmente señalados, éstas se anotarán como incidencia en la ficha de campo y así constará en el informe.
          .row(titulo="Niveles máximos de presión aplicables")
            p Estos niveles los encontraremos en la legislación. Siempre se debe aplicar aquellos niveles que se adecuen a la normativa que regula la actividad estudiada.
          .row(titulo="Condición de actividad de la zona a estudio")
            p El técnico debe asegurar que las condiciones de operatividad se mantienen durante el tiempo que transcurre en la realización del ensayo en las condiciones apropiadas. Si dichas condiciones variaran, se interrumpirá el ensayo hasta tener la garantía de que las condiciones son las que indica el protocolo. En cualquier caso, todas estas incidencias deben quedar reflejadas en la ficha de campo.
            p Además, el técnico deberá recabar del cliente información adicional, como el tipo de actividad que se quiere estudiar y el horario de esta o el tipo de zonificación en la que se encuentra la actividad.
          .row(titulo="El laboratorio debe ser el garante")
            p Tanto el protocolo de medida, como las medidas incorporadas con posterioridad, se deben adecuar a la norma. Además, se ha de velar porque el conjunto y la localización de las medidas realizadas sea la correcta.
      .col-md-4.col-9.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/img2.png' alt='')
    
    p.mb-4(data-aos="fade") Luego de la recolección, las muestras deberían analizarse tan pronto como sea posible después del muestreo. El intervalo entre el muestreo y la medida no debe exceder de 30 horas. Además, «durante el transporte y almacenamiento, las muestras deben mantenerse a menos de 25ºC. La temperatura, sin embargo, debe mantenerse por encima del punto de rocío de las muestras para evitar condensación. Las muestras no deben estar expuestas a la luz solar directa, para minimizar las reacciones (foto)químicas y la difusión. Para cumplir con este criterio, lo más adecuado es el transporte de las bolsas de muestreo en contenedores isotermos, rígidos y ligeros.

    .row.justify-content-center
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/img3.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        .bg-primario.tarjeta.mb-4(data-aos="fade-down")
          .row.align-items-center.p-4.p-md-0
            .col-md-3.col-4
              img.pt-lg-2.px-lg-3.ps-md-2(src='@/assets/curso/temas/tema4/icono.svg' alt='')
            .col-md-9.py-3.text-white.pe-md-4
              p.mb-0 #[b ¿Sabías qué?] 
              p.mb-0 Las bolsas en donde se capturan las muestras de olores son fabricados en un material de base polímero de Nalophan®. Las bolsas están diseñadas específicamente para responder a las exigencias de calidad de la norma EN 13725, especialmente para minimizar el riesgo de contaminación de muestras. Su tamaño puede variar 8, 10, 40, o 60 Lt
        p En la última fase de la recolección de muestras, se requiere supervisión y control constante. Su importancia radica en organizar las actividades de transporte, preservación, almacenamiento y recepción de las muestras de tal forma que estas no sean alteradas, modificadas o que generen un riesgo que se materialice en resultados no verídicos al procesar las muestras.
        p De acuerdo con el Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC, 2004) en la guía técnica colombiana [GTC] 100 define a la cadena de custodia como el procedimiento que se da cuando una muestra está bajo custodia (posesión o control físico) de alguien, de modo que se debe evitar la manipulación indebida o alteración de sus características desde la toma de la muestra hasta que se desecha (p.3).
    
    
    p.mb-4(data-aos="fade") Como se puede evidenciar en el esquema, la cadena de custodia es un proceso de control y seguimiento que se inicia antes de la toma de la muestra, ya que debe ser la base para la programación de esta desde el plan de muestreo.
    
    figure.mb-5
      img(src='@/assets/curso/temas/tema4/infog.svg' alt='Etapas que se realizan en la toma de muestras')
    
    p.mb-4(data-aos="fade") Luego la importancia de la cadena de custodia es garantizar el soporte de los datos y conclusiones a los que se llegue con el estudio o ensayo de muestreo de forma adecuada en una situación legal o reglamentaria, busca mantener registros que certifiquen que los procedimientos fueron desarrollados según condiciones técnicas y que los resultados son verídicos y fiables (ICONTEC, 2004, p.3). Un ejemplo de registro de cadena de custodia se presenta a continuación.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Tabla 4.] Ejemplo de registro de cadena de custodia
        figure
          img(src='@/assets/curso/temas/tema4/tabla.png' alt='Ejemplo de registro de cadena de custodia')
        figcaption.mt-2
          p.mb-0 Tomado de ICONTEC (2004, p.15)

    p.mb-4(data-aos="fade") Para el monitoreo de ruido, como tal no existe muestra, por tanto no existe rotulación y traslado de la misma a laboratorio, se realiza el muestreo #[em in situ] y se toma como tal los datos , los cuales requiere ser custodiados y protegidos, ya que esta es la información del muestreo. La custodia, entonces, radica en los registros realizados en campo y sus medios de soporte sean digitales o medios escritos como libretas de campo, etc. Se requiere custodiar los archivos contra robo, cambio de datos, o que se refundan con otros datos o extravíen.





</template>

<script>
export default {
  name: 'Tema4',
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
