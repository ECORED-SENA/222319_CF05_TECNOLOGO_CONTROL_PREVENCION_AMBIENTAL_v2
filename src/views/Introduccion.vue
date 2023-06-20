<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.fondo-intro.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-6.mb-4(data-aos="fade-right")
            p El muestreo de un sitio potencialmente alterado por sustancias inorgánicas y/o orgánicas tiene como objetivo la obtención de información sobre la concentración de tales sustancias en el medio alterado sea agua, suelo o aire, de manera que pueda establecerse una comparación con los niveles de referencia propuestos para la protección de la salud humana y los ecosistemas. El siguiente video presenta la importancia de este procedimiento.
          .col-md-6.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/intro/img.png', alt='Imagen decorativa')

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/v816MWeUquk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Proceso de muestreo para ruidos y olores

    p.mb-4(data-aos="fade") El objetivo del muestreo es obtener una parte representativa del material bajo estudio (olores y ruido) para la cual se analizarán las variables fisicoquímicas y acústicas de interés. Esto requiere identificar la importancia de elaborar el plan y protocolos de muestreo específicos según el factor ambiental evaluado.

    .row
      .col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/intro/img2.png', alt='Imagen decorativa')
      .col-md-9.mb-4(data-aos="fade-left")
        p En algunos casos, el objetivo del muestreo es demostrar que se cumplen las normas especificadas por la legislación ambiental como actividades de prevención y control ambiental y otros casos como medida de corrección y vigilancia, cuando se ha ocasionado un impacto ambiental significativo como la contaminación ambiental en un ecosistema o espacio social de interés.
        .bg-green6.p-4
          p.mb-0.fw-bold Nuevas tecnologías 
          p.mb-0 Conozca cuáles son las nuevas tecnologías en detección de olores y toma de muestras con la lectura del artículo «Crean en Alemania “Nariz” electrónica para advertir sobre situaciones de peligro», recurso que se encuentra en el material de apoyo.

        

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
