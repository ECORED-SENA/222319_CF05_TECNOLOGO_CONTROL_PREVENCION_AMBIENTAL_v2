<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Parámetros #[em in situ] olores y ruido


    .row.align-items-center
      .col-md-5.mb-4(data-aos="fade-right")
        p Cuando se realizan las mediciones de ruido en campo se debe tener presente las condiciones meteorológicas, especialmente la velocidad y dirección del viento, este parámetro medido in situ es fundamental para tener presentes posibles variaciones en la medición el viento influye sustancialmente en las mediciones del ruido, por esta razón el protocolo de medición de ruido establece como condición la medición de este parámetro siempre y cuando la velocidad del viento no supere los 3m/s.
        p Ahora bien, antes de entrar en materia, se debe conocer qué es el viento. Desde la antigüedad, los marineros utilizaron velas para aprovechar la fuerza del viento y alcanzar la mayor velocidad en sus travesías; y aunque el viento es importante para impulsar las embarcaciones, está relacionado con otros fenómenos atmosféricos siendo el principal generador del oleaje. 
      .col-md-7.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img.png' alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img2.png' alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        .bg-green6.p-4.mb-4
          p.mb-0 Uno de los parámetros que se mide In situ, es la velocidad con la que el viento circula, por eso es importante cuantificar este parámetro. Antes de ejecutar cualquier tipo de medición de ruido, también se debe tener presente las condiciones meteorológicas relacionadas con la lluvia, lloviznas, truenos, y en algunos casos específicos la caída de granizo, pues estas condiciones afectan sustancialmente las mediciones del ruido.
        p La medición del parámetro meteorológico (viento), se debe realizar con un 
          b.t-green2 anemómetro 
          | o en su defecto con una estación meteorológica que mida lo mida, ¡el parámetro no debe ser superior a 3 metros sobre segundo con el fin tener mediciones óptimas …tenga cuidado! Si durante el desarrollo de la medición esta variable supera la condición anteriormente definida, el muestreo debe ser detenido o reprogramado según el caso.
        p Este instrumento mide la velocidad con la que el viento circula. Exprés a la velocidad en metros por segundo o en nudos (millas náuticas sobre h). El anemómetro es un instrumento que consiste en 3 o 4 cazoletas montada sobre un eje vertical girando a la velocidad que sopla el viento. Este instrumento detecta la revoluciones a las que gira y de esa manera marca la velocidad.  


    .row.fondo-tema3.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-7.mb-4(data-aos="fade-right")
            p Ya teniendo en cuenta lo que establece el protocolo para la medición de ruido la lluvia también es considerado un factor climático que influye en la medición debido a que la lloviznas, lluvias torrenciales, entre otras, incrementan los decibeles en las mediciones dependiendo del caso, debido a que los pavimentos deben estar secos la superficie donde se realizan y la interferencia de la lluvia con respecto a estas estructuras aumentan considerablemente los decibeles, influyendo directamente en una medición errónea; por esta razón cuando se presenten lluvias es importante detener las mediciones o reprogramarlas según el caso.
            .bg-green8.p-4
              p.mb-0 La medición con el anemómetro consiste en unas 3 o 4 copas colocadas sobre un palo vertical, estas copas hacen girar el palo, y cada vez que el anemómetro rota completamente se calcula la velocidad del viento en función de las RPM, es decir las vueltas o revoluciones por minuto. Se van almacenando estas mediciones y se calcula un promedio.
          .col-md-5.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema3/img3.png' alt='Imagen decorativa')

          p.mb-4(data-aos="fade") Hay varios tipos de anemómetros disponibles en el mercado, algunos son digitales mientras que otros son mecánicos, pero hay también anemómetros de interferómetro del láser y modelos ultrasónicos. Estos son algunos ejemplos.

          .col-md-3.mb-4.px-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img4.svg' alt='Imagen decorativa')
          .col-md-7.mb-4.px-md-0(data-aos="fade-left")
            SlyderE.bg-white.box-shadow.p-4(indicadores="derecha")
              .row
                h5 Anemómetros láser Doppler   
                p.mb-0 Son los más precisos de todos, y es por eso que se utilizan comúnmente en los laboratorios.
              .row
                h5 Anemómetros de las estaciones meteorológicas   
                p.mb-0 Están equipados con sensores que les permiten más parámetros, desde la temperatura, ya sea interior o exterior, hasta el índice de calor, el tiempo, la fase lunar, la humedad, la sensación térmica, la dirección del viento y la velocidad de la ráfaga de viento.
              .row
                h5 Anemómetros de rotación   
                p.mb-0 Está formado por varias cazoletas o hélices unidas a un disco cuyo giro es proporcional a la velocidad del viento, El disco alterna tres zonas blancas y tres negras, uniformemente distribuidas sobre su superficie. A escasa distancia de este, un opto acoplador diferenciará dichas zonas produciendo tres pulsos eléctricos o ciclos por cada vuelta o giro del disco.
              .row
                h5 La veleta   
                p.mb-0 Es un dispositivo giratorio que consta de una placa que gira libremente, esta gira en un rango de 360 º y un señalador que indica la dirección del viento. El funcionamiento de este instrumento meteorológico es bastante sencillo. Posee un eje pivotante y un señalador de la dirección del viento. Este señalador está colocado sobre el eje y distribuye su peso de forma equilibrada. El diseño, sea cual sea, debe tener un puntero o indicador en la parte que menor resistencia al viento ofrece para que sirva como indicador de la dirección del viento Por lo general, la dirección del viento es la misma a la que la veleta esté apuntando.

          .col-md-10.mb-5(data-aos="fade-down")
            .tarjeta.bg-degrade-green.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img.px-md-4(src="@/assets/curso/temas/tema2/pdf.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.text-white
                      h3.mb-1 Intensidad del viento
                      p.mb-0 La escala Beaufort mide la intensidad del viento basándose principalmente en la fuerza del viento, esta escala está dividida en 12 grados o niveles de velocidad. En la siguiente Tabla se muestra las diferentes clasificaciones del viento según su velocidad, efectos en el mar y en la tierra
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Escala_beaufort.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download




</template>

<script>
export default {
  name: 'Tema3',
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
