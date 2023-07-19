<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 2
      h1 Medición de presión sonora y olores


    .row.fondo-tema2.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          
          p.mb-4(data-aos="fade") Antes de profundizar en los equipos de medición se hace necesario definir algunos conceptos básicos y relevantes que se emplean en las toma de muestras de ruido.
          
          .col-md-3.mb-4.px-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img.png' alt='')
          .col-md-7.mb-4.px-md-0(data-aos="fade-left")
            SlyderE.bg-white.box-shadow.p-4.px-md-5(indicadores="derecha")
              .row
                h5 Sonido   
                p Es un fenómeno físico que consiste en la alteración mecánica de las partículas de un medio elástico, producida por un elemento en vibración, que es capaz de provocar una sensación auditiva. (sicaweb.cedex.es, s.f.)
              .row
                h5 Ruido   
                p Se define como aquel sonido no deseado. Es aquella emisión de energía originada por un fenómeno vibratorio al igual que el sonido, que es detectado por el oído pero que en diferencia con este, el ruido provoca una sensación de molestia. (sicaweb.cedex.es, s.f.). Existen tres tipos de ruido: 
                p.mb-0 #[b Continuo:] se presenta cuando el nivel de presión sonora es prácticamente constante durante el periodo de observación. 
                p.mb-0 #[b Intermitente:] producen caídas bruscas hasta el nivel ambiental de forma intermitente, volviéndose a alcanzar el nivel superior.
                p.mb-0 #[b Impacto:] se caracteriza por una elevación brusca de ruido en un tiempo inferior a 35 milisegundos y una duración total de menos de 500 milisegundos.
              .row
                h5 Presión sonora    
                p Una fuente sonora produce una cierta cantidad de energía por unidad de tiempo, esto es una cierta potencia sonora.
              .row
                h5 Decibelio (dB)   
                p Unidad logarítmica de medida utilizada en diferentes disciplinas de la ciencia usada para comparar una cantidad con otra llamada de referencia. Adicionalmente este concepto que en ocasiones se puede tomar un valor medio aproximado. En Acústica la mayoría de las veces el decibelio se utiliza para comparar la presión sonora, en el aire, con una presión de referencia. (Construmatica, 2010)
              .row
                h5 Pascal (Pa)   
                p La presión atmosférica es la presión del aire ambiental en ausencia de sonido y este se mide en una unidad denominada Pascal. 1 Pascal es igual a una fuerza de 1 newton actuando sobre una superficie de 1 metro cuadrado, y se abrevia 1 (Pa).
                p.fw-bold.mb-0 Factor de Conversión Pa a dB.
                p.mb-0 #[b 1(Pa)] = 93.979 (dB)
                p #[b 1(dB)] = 0.00002244037 (Pa) = 2.244X100<sup>-5</sup> (Pa)
              .row
                h5 Logaritmo    
                p Un logaritmo expresa potenciación, es decir, indica el exponente por el cual se debe elevar la base para obtener la potencia indicada, matemáticamente se puede expresar de la siguiente manera: 
                p El logaritmo en base  
                  b b 
                  | de un número 
                  b a&gt;
                  | 0 se representa por 
                  b log<sub>b</sub>(a) 
                  | y es el número c que cumple 
                  b b<sup>c</sup>=a 
                p.fw-bold log<sub>b</sub>(a) = c <=&gt; b<sup>c</sup> = a
              .row
                h5 Suma de logaritmos    
                p El logaritmo del producto de dos números positivos es igual a la suma de los logaritmos de dichos números. Esto es:
                p.fw-bold log(a . b) = log(a) + log (b)
              .row
                h5 Resta de logaritmos    
                p El logaritmo del cociente de dos números positivos es igual al logaritmo del numerador menos el logaritmo del denominador. Esto es:
                p.fw-bold log ( a / b ) = log(a) - log (b)
              .row
                h5 Estadística    
                p Ciencia que se encarga de la recolección, ordenamiento, análisis e interpretación de datos recopilados en una investigación sobre hechos, individuos o grupos, para deducir de ello conclusiones precisas o estimaciones futuras.
              .row
                h5 Población y muestra    
                p Es un conjunto de individuos al que se desea describir o queremos estudiar. La muestra es un conjunto de elementos seleccionados de una población de acuerdo con un plan de acción previamente establecido (muestreo) para obtener conclusiones.
              .row
                h5 Censo   
                p Es el estudio de todos y cada uno de los elementos de una población. Esta condición hace que este tipo de estudios no sean muy frecuentes. 
              .row
                h5 Media aritmética    
                p Es el valor que resulta de dividir la suma de todos los valores observados entre el número de datos considerados.
                .row.justify-content-center 
                  .col-md-6
                    img(src='@/assets/curso/temas/tema2/form1.svg', alt='Fórmula Media aritmética')
              .row
                h5 Mediana   
                p Es el punto medio del total de observaciones, luego de que han sido ordenados y que deja al mismo número de observaciones por debajo de su valor, así como por arriba de él.
                .row.justify-content-center 
                  .col-md-6
                    img(src='@/assets/curso/temas/tema2/form2.png', alt='Fórmula Mediana')
                p En el caso de que el total de datos sea par, la mediana va a ser dos (2) valores en vez de uno (1), el paso a seguir es sacar el promedio de esos dos datos y ese será los resultados de la mediana. 
              .row
                h5 Moda   
                p Es el valor de la observación o elemento que tiene la mayor frecuencia.
                .row.justify-content-center 
                  .col-md-4
                    img(src='@/assets/curso/temas/tema2/form3.png', alt='Fórmula Moda')

    

    p.mb-4(data-aos="fade") Teniendo en cuenta los temas de estadística, considere la resolución del siguiente ejercicio autónomo.

    .tarjeta.bg-yellow.border-yellow.p-4.mb-5(data-aos="fade-down") 
      .row.justify-content-evenly.align-items-center
        .col-md-4.mb-4.col-8
          img(src='@/assets/curso/temas/tema2/img2.svg' alt='') 
        .col-md-6
          p En un grupo de estudio se evaluaron a 11 aprendices de los cuales 5 eran mujeres y 6 eran hombres, los resultados de sus notas finales fueron los siguientes (60,85,70,60,75,85,90,60,85,70,85) 
          p ¿Cuál es el resultado de las notas #[b promedio, mediana y la moda], del grupo de estudio?
          p.mb-0 #[b A.] Promedio70, Mediana 85, Moda 60 
          p.mb-0 #[b B.] Promedio75, Mediana 85, Moda 85 
          p.mb-0 #[b C.] Promedio75, Mediana 75, Moda 85 
          p #[b D.] Promedio80, Mediana 75, Moda 85 
          a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
            span Respuesta
            .indicador--click(v-if="mostrarIndicador")
    
    ModalA.tema2(:abrir-modal.sync="modal1")
      .row.align-items-center.justify-content-center
        h4.text-center.mb-0 (C) Promedio75, Mediana 75, Moda 85.

    
    p.mb-4(data-aos="fade") Sumado a lo anterior, existen otros términos meteorológicos de igual importancia que son necesarios contemplar:

    TabsA.tema5.color-acento-botones(data-aos="fade-down") 
      .tarjeta.bg-green.p-4.p-md-5(titulo="Meteorología")
        h5 Meteorología
        .row
          .col-md-8
            p.mb-0 Es el estudio de la atmósfera y sus fenómenos – especialmente las condiciones del tiempo y del clima – y las aplicaciones prácticas de este estudio. Además de la física, la química y la dinámica de la atmósfera, la meteorología abarca muchos de los efectos directos de la atmósfera en la superficie de la Tierra, los océanos y vida en general. (Organización Meteorológica Mundial, 2001)
          .col-md-4
            img(src='@/assets/curso/temas/tema2/Meteorologia.png' alt='Meteorología') 
      .tarjeta.bg-green.p-4.p-md-5(titulo="Atmosféra")
        h5 Atmosféra
        p.mb-0 Envoltura gaseosa que rodea la Tierra. Capa gaseosa que rodea nuestro planeta. Además de contener el aire, incluye partículas sólidas y líquidas en suspensión o aerosoles y nubes.
      .tarjeta.bg-green.p-4.p-md-5(titulo="Presión atmosférica")
        h5 Presión atmosférica
        p Presión (fuerza por unidad de área) ejercida por la atmósfera sobre cualquier superficie en virtud de su peso. Equivale al peso de una columna de aire de sección transversal unitaria que se extiende desde un nivel dado hasta el límite superior de la atmósfera.
        .row.justify-content-center
          .col-md-3.mb-4
            .caja.p-3
              h5.text-center.mb-0 Atmósfera 
            .caja.p-3
              h5.text-center.mb-0 1 atmósfera  
          .col-md-4.mb-4
            .caja.p-3
              h5.text-center.mb-0 Milemetros de mercurio 
            .caja.p-3
              h5.text-center.mb-0 760 mm de Hg
          .col-md-4.mb-4
            .caja.p-3
              h5.text-center.mb-0 Milbares / Hetopascales 
            .caja.p-3
              h5.text-center.mb-0 1013,25 mb /hpa

        p.mb-4 La unidad de medida de la Presión atmosférica se establece en diferentes unidades dependiendo el sistema unidades empleado, algunas de las equivalencias más utilizadas se encuentran:
        
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Tabla 2.] Equivalencias entre unidades de presión
        .tabla-a.tema5.color-secundario.mb-4
          table
            caption Tomado de mendezfrank (s.f.)
            thead
              tr.bg-secundario
                th(colspan="7") Equivalencias entre unidades de presión
              tr
                th.fw-bold Unidad
                th atm
                th bar
                th kg/cm<sup>2</sup>
                th mca 
                th PSI 
                th kPa (SI)
            tbody.bg-white
              tr
                td 1 atmósfera
                td.text-center.bg-gray 1
                td.text-center 1,013
                td.text-center 1,033 
                td.text-center 10,333 
                td.text-center 14,696 
                td.text-center 101,325   
              tr
                td 1 bar
                td.text-center 0,987
                td.text-center.bg-gray 1
                td.text-center 1,020
                td.text-center 10,197
                td.text-center 14,504
                td.text-center 100  
              tr
                td 1 kg/cm<sup>2</sup>
                td.text-center 0,968
                td.text-center 0,981
                td.text-center.bg-gray 1
                td.text-center 10
                td.text-center 14,223
                td.text-center 98,067
              tr
                td 1 metro columna de agua
                td.text-center 0,097
                td.text-center 0,098
                td.text-center 0,100
                td.text-center.bg-gray 1
                td.text-center 1,422
                td.text-center 9,806
              tr
                td 1 Libra por pulgada cuadrada
                td.text-center 0,068
                td.text-center 0,069
                td.text-center 0,070
                td.text-center 0,703
                td.text-center.bg-gray 1
                td.text-center 6,985
              tr
                td 1 Kilopascal (SI)
                td.text-center 0,010
                td.text-center 0,010
                td.text-center 0,010
                td.text-center 0,102
                td.text-center 0,145
                td.text-center.bg-gray 1
              tr
                td(colspan="7").py-4 Dado que la diferencia entre algunas unidades es tan pequeña, a efectos prácticos, en fontanería doméstica se mantiene que:
                  p.mb-0.fw-bold.t-green2.text-center 1 atm = 1bar = 1Kg/cm<sup>2</sup> = 10mca = 100KPa


        p.mb-0 #[b Equivalencias ]
        p.mb-0 1 atm ≈ 101325 Pa2 
        p.mb-0 1 atm = 1,01325 bar 
        p.mb-0 1 atm = 760 mmHg = 760 Torr 
        p.mb-0 1 atm = 14,696 PSI

      .tarjeta.bg-green.p-4.p-md-5(titulo="Temperatura")
        h5 Temperatura
        p Magnitud física que caracteriza el movimiento aleatorio media de las moléculas en un cuerpo físico. Entonces se puede decir que entre más movimiento de las moléculas mayor es la temperatura que se genera en el elemento, sustancia o cuerpo. 
        p La unidad con la que se determina la temperatura se establece en diferentes unidades dependiendo el sistema unidades empleado, algunas de las equivalencias más utilizadas son las que aparecen en la imagen.
        .row.justify-content-center
          .col-md-8
            img(src='@/assets/curso/temas/tema2/temperatura.svg' alt='Temperatura')
      .tarjeta.bg-green.p-4.p-md-5(titulo="Velocidad del viento")
        h5 Velocidad del viento
        p Relación entre la distancia recorrida por el aire y el tiempo que tarda en recorrerla. La “velocidad instantánea” o, con mayor brevedad, la “velocidad”, corresponde al caso de un intervalo de tiempo infinitamente pequeño. La “velocidad media” corresponde al caso en que el intervalo de tiempo es finito.
        p La velocidad del viento mide la componente horizontal del desplazamiento del aire en un punto y en un instante determinados. La unidad de medida es habitualmente metros por segundo (m/s).
        .row.justify-content-center
          .col-md-9
            img(src='@/assets/curso/temas/tema2/vel-viento.png' alt='Velocidad del viento') 
      .tarjeta.bg-green.p-4.p-md-5(titulo="Dirección del viento")
        h5 Dirección del viento
        p.mb-0 Dirección desde la que sopla el viento. Uno de los elementos que referencia la dirección del viento es una rosa de los vientos este grafico un símbolo en forma de círculo que tiene marcado alrededor los rumbos en que se divide la circunferencia del horizonte, y que serían sur, este, norte y oeste.
      .tarjeta.bg-green.p-4.p-md-5(titulo="Precipitación")
        h5 Precipitación
        p La precipitación es la caída de partículas de agua líquida o sólida que se originan en una nube, atraviesan la atmósfera y llegan al suelo. La cantidad de precipitación es el volumen de agua lluvia que pasa a través de una superficie en un tiempo determinado. 
        p.mb-0 Se mide en milímetros de agua, o litros caídos por unidad de superficie (m²), es decir, la altura de la lámina de agua recogida en una superficie plana es medida en mm o L/m².


    .row.fondo2-tema2.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-10.mb-5(data-aos="fade-down")
            .tarjeta.bg-degrade-green.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img.px-md-4(src="@/assets/curso/temas/tema2/pdf.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.text-white
                      h3.mb-1 Conceptos de Cartografía 
                      p.mb-0 También, adicional a esto se debe tener en cuenta la cartografía como ciencia que se encarga del estudio y de la elaboración de mapas para representar grandes extensiones del territorio. Este concepto es igual de necesario en el momento de la ubicación y aplicación de mediciones. Descargar el pdf para ampliar sobre esta temática.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Conceptos_Cartografia.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

          p.mb-4(data-aos="fade") Ahora bien, el cálculo de la escala de un mapa se realiza mediante este procedimiento.

          .col-md-3.mb-4.mb-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img3.png' alt='')
          .col-md-9(data-aos="fade-left")
            ol.lista-ol.fa-ul
              li 
                span.text-bold.t-green2 a. 
                | Seleccionar dos puntos prominentes en el mapa y mida la distancia.
            ol.lista-ol.fa-ul
              li 
                span.text-bold.t-green2 b. 
                | Determinar la escala del mapa o plano sabiendo que: Escala= a la distancia en el terreno (m) entre distancia en el mapa (mm).
            p.ps-3.ps-md-5 Ej: 
              b.t-green2 Escala 
              | = 1 / 1000.000 y por lo tanto la escala del mapa es 1:1000 000.
            ol.lista-ol.fa-ul
              li 
                span.text-bold.t-green2  c. 
                | Por medio de un simple proceso matemático (Regla de 3) podremos saber la distancia real.
              p.ps-3.ps-md-5.mb-0 1 unidad de medición 
                b.t-green2 ——————— &gt; 
                | 1.000.000
              p.ps-3.ps-md-5.mb-0 Distancia medición 
                b.t-green2 ——————— &gt; 
                | X
              p.ps-3.ps-md-5.text-small (Con misma unidad de medida) 
            ol.lista-ol.fa-ul
              li 
                span.text-bold.t-green2 d. 
                | Establecer la (Regla de 3) Despejamos la incógnita (X)
              .row.ps-md-5
                .col-md-5
                  img(src='@/assets/curso/temas/tema2/form-new.svg' alt='')

    p.mb-4(data-aos="fade") Con base en lo anterior, se sugiere realizar un ejercicio.

    .row.mb-5
      .col-md-9.mb-4.mb-md-0(data-aos="fade-right")
        p Si se tiene un mapa de Bogotá con escala de 
          b 1/1000.000 
          | y se desea saber la distancia real entre dos puntos geográficos A (norte) y B (Sur), al medir esta distancia en el plano corresponde a (5cm) , el proceso para calcular dicha distancia sería el siguiente:
        p 
          b.t-green2 a. 
          | Plantear la regla de 3:
          p.ps-3.mb-0 1 cm 
            b.t-green2 ——————— &gt; 
            | 1.000.000
          p.ps-3.mb-0 5 cm 
            b.t-green2 ——————— &gt; 
            | X
        p 
          b.t-green2 b.  
          | Despejar la incógnita es decir la distancia real y sustituir los datos:
        .row.ps-3.align-items-center.mb-3
          .col-2.pe-0
            p.mb-0 x =
          .col-8.col-md-3.text-center.ps-0
            .row 
              p.mb-0.sobre-linea 5 cm * 1.000.000
              p.mb-0 1 cm  
        p.ps-3 x =  5.000.000
        p 
          b.t-green2 c. 
          | Para finalizar pasamos los #[b cm] a #[b km], entonces si se sabe que un 1km equivale a 100.000cm entonces:
        .row.justify-content-center.align-items-center.mb-4
          .col-4.col-md-2.pe-0
            p.mb-0 5.000.000 <del>cm</del> *
          .col-5.col-md-2.text-center.ps-0
            .row 
              p.mb-0.sobre-linea 1 km 
              p.mb-0 100.000 <del>cm</del>
          .col-3.col-md-1.text-center.ps-0   
            p.mb-0 = 50 km
        .bg-green7.p-4 
          p.mb-0 Entonces gracias a la distancia medida sobre el mapa y la escala en el plano se logra hallar la distancia real, la cual sería de 50 Kilómetros para poder desplazarse entre el punto A y el Punto B en Bogotá.
      .col-md-3.mb-4.mb-md-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img4.png' alt='')

    .bg-primario.tarjeta(data-aos="fade-down")
      .row.align-items-center.p-4.p-md-0
        .col-md-2.col-5.px-md-4
          img.px-md-4.pt-md-3(src='@/assets/curso/temas/tema2/icono.svg' alt='')
        .col-md-10.py-4.text-white.pe-md-5
          h5 Planos y cálculos
          p.mb-0 La interpretación de los planos y el cálculo de las escalas en la cartografía es un conocimiento que nos ayuda de diversas maneras. El video «El mundo no es como lo pintan» permite reforzar el proceso de aprendizaje en este tema junto con el video «Mapas y escalas (ejercicios resueltos)». Estos recursos se encuentran en el material de apoyo.



    Separador 

    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.1 Etapas y plan de muestreo

    p.mb-4(data-aos="fade") Las etapas que se realizan en la toma de muestras, que se hacen en campo, garantizan la trazabilidad y custodia de la muestra en este proceso. Estas son:

    figure.mb-4.d-none.d-md-block
      img(src='@/assets/curso/temas/tema2/figura.svg' alt='La imagen presenta las cinco etapas para la realización de una toma de muestras ya sea de ruido u olor. Estas son: 1. Identificación del sitio de muestreo. 2. Alistamiento de los equipos, materiales e insumos para la toma. 3. Realizarción de un plan de muestreo. 4. Toma de la muestra. 5. Preservación y almacenamiento temporal. 6. Transporte. Desde la etapa tres se enfocan los esfuerzos tanto en la toma de muestra como en su cadena de custodia')

    .row.justify-content-center.mb-5
      .col-md-4
        a.anexo(:href="obtenerLink('/downloads/Etapas_plan_de_muestreo.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Etapas y plan de muestreo

    p.mb-4(data-aos="fade") Cuando se va a realizar cualquier tipo de muestreo, para la medición de olores o ruido previamente se debe elaborar un plan que contenga la información y programación relacionada con los objetivos del muestreo. A continuación, se establecen las condiciones necesarias para la elaboración del plan de muestreo.
    
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-green6" data-aos="fade-down")
      .row(titulo="Consideraciones del Plan de Muestreo - Ruido")
        h5 Datos generales
        ul.lista-ul--color.color-secundario.fa-ul
          li.mb-0
            i.fas.fa-check
            | Objetivo del muestreo: Definir de manera precisa las metas que se desean cumplir.
          li.mb-0
            i.fas.fa-check
            | Sitio de la Medición: Explicitar el acceso geo-referenciado al sitio de interés.
          li.mb-0
            i.fas.fa-check
            | Información del proyecto: Identificar información relevante de acciones previas realizadas en el sitio de estudio.
          li
            i.fas.fa-check
            | Localización geográfica del sitio: Para su respectivo mapeo.
        h5 Planeación y procedimiento del muestreo.
        ul.lista-ul--color.color-secundario.fa-ul
          li.mb-0
            i.fas.fa-check
            | Tipo de muestreo (Emisión de Ruido / Ruido Ambiental).
          li.mb-0
            i.fas.fa-check
            | Localización en el área de medición, distribución y número de puntos de muestreo.
          li.mb-0
            i.fas.fa-check
            | Determinación de tiempo por puntos a monitorear.
          li.mb-0
            i.fas.fa-check
            | Estimación del Número total de monitoreo.
          li.mb-0
            i.fas.fa-check
            | Parámetros para medir en campo.
          li.mb-0
            i.fas.fa-check
            | Equipo de Monitoreo de Ruido (sonómetro).
          li.mb-0
            i.fas.fa-check
            | Medidas para asegurar la calidad del muestreo.
          li.mb-0
            i.fas.fa-check
            | Preservación de los registros tomas en campo (Ruido y Viento).
          li.mb-0
            i.fas.fa-check
            | Plan de salud y seguridad del operario.
          li
            i.fas.fa-check
            | Cadena de custodia (si aplica).
        h5 Anexos 
        ul.lista-ul--color.color-secundario.fa-ul
          li.mb-0
            i.fas.fa-check
            | Lista de Verificación de alistamiento de equipos. 
          li.mb-0
            i.fas.fa-check
            |  Planos de ubicación o aérea o satelital del sitio.
          li.mb-0
            i.fas.fa-check
            |  Plano vial de carreteras, caminos o calles para llegar al sitio y edificaciones Plano de la zona de estudio e identificación de los puntos de muestreo geo-referenciado en coordenadas UTM. 
          li.mb-0
            i.fas.fa-check
            |  Copia de la acreditación y de la aprobación del laboratorio vigente, y certificación de calibración de instrumentos de medición
      .row(titulo="Consideraciones del Plan de Muestreo - Olores")
        p Para la realización de un estudio olfatométrico para la medición de olores ofensivos.
        p En esta fase supone el conocimiento previo al detalle de todos aquellos aspectos que pueden verse inmersos en la generación de olores de una actividad o instalación. Este conocimiento previo es fundamental para poder establecer un programa de muestreo que responda a los objetivos planteados en el estudio de impacto ambiental por olores. 
        p Esta información se puede obtener por medio de: 
        ul.lista-ul--color.color-secundario.fa-ul
          li.mb-0
            i.fas.fa-check
            | Mediante la realización de una visita de auditoria previa a la instalación objeto de estudio. 
          li
            i.fas.fa-check
            | Mediante la revisión de la documentación (planos, esquema de procesos, etc.).

    p.mb-4(data-aos="fade") La información de recopilación general consiste en caracterizar la geografía, la población y el desarrollo urbano. Se debe hacer una revisión del POT o su equivalente estudiando detalladamente aspectos relacionados con la calidad del aire. Se debe tener presente la siguiente información: Proximidad y el tipo de fuentes de emisiones de fondo o las concentraciones naturales; Método de seguimiento utilizado; Meteorología; Garantía de calidad; Reacciones atmosféricas; Topografía. En particular, se deberá incluir una descripción de los siguientes puntos:

    .row.fondo2-tema2-1.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          
          .row.justify-content-center(data-aos="fade-down")
            .col-md-9.col-lg-4.mb-4
              .tarjeta.bg-primario.p-4.p-md-5.h-100.text-white
                .row.mb-4
                  .col-md-3.col-4
                    img(src='@/assets/curso/temas/tema2/ico1.svg' alt='')
                h5 Geografía y clima: 
                ul.lista-ul--color.color-secundario.fa-ul
                  li.mb-1
                    i.fas.fa-check
                    | Límites geográficos de la fuente de emisión. 
                  li.mb-1
                    i.fas.fa-check
                    | Condiciones topográficas. 
                  li
                    i.fas.fa-check
                    | Uso de suelos.
            .col-md-9.col-lg-4.mb-4  
              .tarjeta.bg-primario.p-4.p-md-5.h-100.text-white
                .row.mb-4
                  .col-md-3.col-4
                    img(src='@/assets/curso/temas/tema2/ico2.svg' alt='')
                h5 Estructura y tendencias del crecimiento demográfico  
                ul.lista-ul--color.color-secundario.fa-ul
                  li.mb-1
                    i.fas.fa-check
                    | Desarrollo urbano y sus actividades socioeconómicas. 
                  li.mb-1
                    i.fas.fa-check
                    |  Distribución demográfica y geográfica de los empleos. 
                  li
                    i.fas.fa-check
                    | Ubicación de los servicios de saneamiento básico, como, por ejemplo, rellenos sanitarios y plantas de tratamiento de aguas residuales.
            .col-md-9.col-lg-4.mb-4
              .tarjeta.bg-primario.p-4.p-md-5.h-100.text-white
                .row.mb-4
                  .col-md-3.col-4
                    img(src='@/assets/curso/temas/tema2/ico3.svg' alt='')
                h5 Otra información de importancia:     
                ul.lista-ul--color.color-secundario.fa-ul
                  li.mb-1
                    i.fas.fa-check
                    | Cartografía de la zona de estudio
                  li
                    i.fas.fa-check
                    | Base de datos de industrias locales.

          p.mb-4(data-aos="fade") Ahora bien, frente a las características de un plan de muestreo se encuentran:

          .col-md-4.mb-4.mb-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img5.png' alt='')
          .col-md-8.mb-4.mb-md-0(data-aos="fade-left")
            AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-white" data-aos="fade-down")
              .row(titulo="Revisión del esquema de procesos de la instalación objeto de estudio")
                p La manera más apropiada para la identificación de los focos emisores a muestrear es mediante un esquema básico de procesos de la instalación en el que estén representados, a ser posible, las unidades de proceso a escala. Este esquema de procesos se debe revisar conjuntamente entre el especialista en olfatometría y el técnico o técnicos de la empresa objeto de estudio ya sea durante la visita a las instalaciones o por conversación telefónica, e-mail, etc.
              .row(titulo="Identificación de los potenciales focos emisores")
                p Sobre el esquema de procesos se identificarán todos los potenciales focos emisores diferenciando las emisiones de focos puntuales, las emisiones de fuentes difusas y las emisiones fugitivas. 
                p En el caso de fuentes puntuales, se recabará información de caudales aproximados de emisión. Para las fuentes de emisión de tipo difuso se solicitará el dato de las superficies implicadas. 
              .row(titulo="Procesos con emisiones discontinuas o no homogéneas")
                p Es importante definir la selección de las siguientes variables
                ul.lista-ul--color.color-secundario.fa-ul
                  li.mb-0
                    i.fas.fa-check
                    | Dia. 
                  li.mb-0
                    i.fas.fa-check
                    | Hora.
                  li.mb-0
                    i.fas.fa-check
                    | Tiempo de Muestro.
                  li
                    i.fas.fa-check
                    | # de Muestras por foco.
                p El objetivo último de un estudio olfatométrico es evaluar si las emisiones de una determinada instalación pueden ser responsables o no de quejas en la población vecina. A esta conclusión se llega con la interpretación de los valores de concentración de inmisión, habitualmente denominados mapas de olores.
    
    
    p.mb-4(data-aos="fade") Es importante tener en cuenta tener identificados los potenciales focos emisores, y establecer la manera en la que se produce la emisión. Algunos consejos para la identificación de las fuentes de emisión de olor son:

    .row.justify-content-center.align-items-center
      .col-md-11
        SlyderF.text-center.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down")
          .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
            h5 Instalaciones
            p Conocer si el proceso productivo es constante a lo largo del año o si por el contrario existen situaciones de mayor producción en las que generalmente estarán implicadas mayores emisiones.
          .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
            h5 La fuente
            p Es necesario tener en cuenta si se trata de emisiones puntuales N/A en periodos determinados o si se trata de emisiones continuas, pero con concentraciones o caudales de emisión variables. En estas situaciones habrá que considerar las situaciones más desfavorables.  
          .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
            h5 Fuentes superficiales
            p Cuando la superficie emisora no es homogénea hay que considerar la realización de distintas tomas en cada una de las zonas identificadas o la realización de muestreos integrados.
          .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
            h5 Temperatura
            p El aumento de temperatura provoca un incremento de la presión de vapor de los compuestos volátiles responsables del olor. Esto es muy habitual en las emisiones en láminas de agua. Por este motivo los muestreos en balsas de lixiviados en vertederos o en una PTAR deberían realizarse en fechas de mayores temperaturas ambientales como primavera o verano.
          .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
            h5 Número de muestras 
            p Esta cuestión tiene particular interés en aquellos focos de la instalación en los que se espere los valores de emisión más altos. Por tanto, a nivel práctico se deben proponer para el plan de muestreo réplicas en aquellas fuentes puntuales con altos caudales y/o altas concentraciones de olor.


    
    Separador 

    #t_2_2
    .titulo-segundo.color-acento-contenido.mb-0(data-aos="fade")
      h2 2.2 Toma de muestra de ruido y olores

    .row.fondo-tema2-2.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          p.mb-4(data-aos="fade") La toma de muestras se convierte en una de las actividades más importantes cuando de caracterizar un contaminante se trata. Por lo tanto, se hace fundamental el conocer cómo son los procedimientos para la toma de muestras de olores y de ruido teniendo en cuenta que cada uno estos parámetros tienen características y componentes diferentes haciendo de cada metodología una característica totalmente independiente y propia de cada sector a muestrear.

          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") Ruido

          .col-md-8.mb-4(data-aos="fade-right")
            .bloque-texto-b.bg-green9.box-shadow.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p El ruido es considerado un contaminante de tipo criterio, en otras palabras, en un factor que afecta la salud de las personas a las que se ven expuestas, cuando los decibeles están por encima de los valores límites permisibles por la normatividad. La percepción del sonido depende del espectro normalizado del ruido a evaluar. En el caso de un adulto joven, en condiciones de salud normales, su rango de audición va desde los 20 gigahercios hasta los 20000 gigahercios; esos valores de presión son ponderados y analizados en frecuencia bajo curva de ponderación con el fin de tener un análisis para la mayoría de las personas.
                br
                h5.mb-0 - (CORPOCALDAS, 2015)
                i.fas.fa-quote-right
          .col-md-4.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema2/img6.png' alt='')

    
    p.text-center.mb-4(data-aos="fade") Se profundiza más en la percepción al conocer cómo funciona el oído humano.

    .row.justify-content-center.mb-5
      .col-md-9.tarjeta.bg-gray
        ImagenInfografica.color-acento-botones.p-3.p-md-5(data-aos="fade-down")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-infog.png', alt='Niveles de la atmósfera')

          .tarjeta.bg-yellow.p-3(x="83%" y="21%" numero="+")
            .h4.mb-2 Oído interno 
            p Es una compleja estructura interna del oído que comunica directamente con el nervio acústico. Transmite las vibraciones sonoras desde el oído medio a través del líquido de los conductos semicirculares (órgano del equilibrio), que se unen al vestíbulo, conectado con la cóclea (órgano de la audición). Consta de dos partes: el laberinto óseo y el laberinto
          .tarjeta.bg-yellow.p-3(x="65%" y="75%" numero="+")
            .h4.mb-2 Oído medio
            p Está formado por la Cavidad timpánica y por el yunque, martillo y estribo, se articulan entre sí y con la membrana timpánica. Las ondas sonoras se transmiten a través de ellos cuando vibra el tímpano.
          .tarjeta.bg-yellow.p-3(x="22%" y="55%" numero="+")
            .h4.mb-2 Oído externo
            p Es la estructura externa constituida por la oreja y el conducto auditivo externo. Las ondas sonoras son conducidas a través del oído externo hasta el oído medio.


    p.mb-4(data-aos="fade") Tal es la importancia que el Ruido tiene en la actualidad, que en Colombia la Resolución No. 627/06 implementada por el Ministerio de Ambiente y Desarrollo Sostenible en la cual adopta la norma nacional de emisión de ruido y ruido ambiental en la que establece:

    .row.justify-content-center.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img7.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        ul.lista-ul--color.color-secundario.ps-3.ps-md-4.fa-ul
          li.mb-0
            i.fas.fa-check
            | Los parámetros permisibles.
          li.mb-0
            i.fas.fa-check
            | Procedimientos técnicos para la medición de ruido.
          li
            i.fas.fa-check
            | Presentación de informes y otras disposiciones.
        .bloque-texto-b.bg-green9.box-shadow.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5 Según European acústica (2017) los efectos del ruido refieren que:
            br
            br
            p El ruido generado en los grandes centros urbanos se convierte en un factor que impacta directamente en la comunidad Influye en gran importancia el tráfico, la actividad industrial, comercial, entre otros quienes aportan grandes cantidades de decibeles en un sector determinado. 
            br
            br
            p La medición de los decibeles se convierte en un factor fundamental para determinar las estrategias que se deben implementar en la reducción del mismo, es importante conocer cuáles son las fuentes generadoras de este ruido debido que las actividades industriales y comerciales establecen una serie de aportes en decibeles que afectan directamente a la salud de las personas en la comunidad.
            i.fas.fa-quote-right

          

    p.mb-4(data-aos="fade") Algunas fuentes generadoras se podrían clasificar de la siguiente manera:

    .row.justify-content-center.mb-4.px-md-3(data-aos="fade-down")
      .col-md-8.col-lg-6.mb-md-2.mb-lg-0.mb-4.px-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/tema2/tarj-hover.jpg", alt="Fuentes de ruido externas")
            .text.p-md-2.px-md-4.p-3
              .row.px-1.pt-1.mt-xs-3.mt-md-3.pt-md-0.mt-lg-2.mt-xl-3
                h5.mt-1.mt-lg-3.mb-3 Fuentes de ruido externas
                p El ruido debido al tráfico rodado, al paso de trenes, al tráfico aéreo, al tráfico marítimo, a las obras públicas, a las actividades industriales, a las actividades urbanas comunitarias y a los agentes atmosféricos.
      .col-md-8.col-lg-6.mb-md-2.mb-lg-0.mb-4.px-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            figure
              img(src="@/assets/curso/temas/tema2/tarj-hover2.jpg", alt="Fuentes de ruido internas")
            .text.p-md-2.px-md-4.p-3
              .row.px-1.pt-1.mt-xs-3.mt-md-3.pt-md-0.mt-lg-2.mt-xl-3
                h5.mt-1.mt-lg-3.mb-3 Fuentes de ruido internas
                p El ruido debido a las personas, a los impactos, a los aparatos de radio y televisión, a los aparatos electrodomésticos, a las instalaciones de fontanería y calefacción, a los ascensores, a las instalaciones de ventilación y climatización, a las instalaciones eléctricas y a otras fuentes (como animales).

    p.mb-4(data-aos="fade") Los efectos del ruido en la salud dependen específicamente de la exposición prolongada al ruido ya sea en el día a día o en el puesto de trabajo este puede causar algunos problemas como la hipertensión, enfermedades cardiacas también puede afectar, aunque no lo creamos, la lectura, la atención y la memoria.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-8.mb-4(data-aos="fade-right")
        .bloque-texto-b.bg-green9.box-shadow.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-1.mt-3 Según CORPOCALDAS (2015)
            br
            br
            p Los fallos en el desempeño de la actividad laboral pueden producir accidentes el ruido con decibeles por encima de los 80 db y aumentar el comportamiento agresivo y establecer ciertos problemas mentales debido a la demanda de tranquilizantes y somníferos por la ansiedad y angustia que este puede provocar (p.10).
            i.fas.fa-quote-right
            
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img8.png' alt='')


    .row.justify-content-center.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img9.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        p El ruido puede causar otros muchos problemas, pero la principal consecuencia social es el deterioro de la audición, que produce incapacidad de entender una conversación en condiciones normales y que está considerado una desventaja social severa. Los efectos más significativos están los siguientes:
        ul.lista-ul--color.color-secundario.ps-3.ps-md-4.fa-ul
          li.mb-0
            i.fas.fa-check
            | Dificultad para la comunicación oral.
          li.mb-0
            i.fas.fa-check
            | Disminución de la capacidad auditiva.
          li.mb-0
            i.fas.fa-check
            | Perturbación del sueño y descanso.
          li.mb-0
            i.fas.fa-check
            | Estrés.
          li.mb-0
            i.fas.fa-check
            | Fatiga, neurosis, depresión.
          li.mb-0
            i.fas.fa-check
            | Zumbidos y tinnitus, en forma continua intermitente.
          li.mb-0
            i.fas.fa-check
            | Efectos sobre el rendimiento.
          li.mb-0
            i.fas.fa-check
            | Alteración del sistema circulatorio.
          li.mb-0
            i.fas.fa-check
            | Alteración del sistema digestivo.
          li.mb-0
            i.fas.fa-check
            | Aumento de secreciones hormonales (tiroides y suprarrenales).
          li.mb-0
            i.fas.fa-check
            | Trastornos en el sistema neurosensorial.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-8.mb-4(data-aos="fade-right")
        .bg-green7.p-4.mb-4
          p.mb-0 El ruido tiene un componente subjetivo, puesto que cualquier sonido puede ser considerado molesto para algunas personas y para otras de pronto no, esto Incide directamente en el receptor del ruido en donde también influye el horario en el que se produce, el tiempo exposición y los antecedentes socioculturales del sector con respecto a una determinada actividad que produzca el ruido.
        p Es importante diferenciar que la medición del ruido que se va a realizar debe establecer un alcance, puesto que el Ruido Ambiental se mide teniendo en cuenta un área determinada por su impacto (Parques, Zonas Residenciales, Hospitales, entre otros), en cambio la medición por Emisión de Ruido se mide siempre y cuando está relacionada con la generación de ruido que puede generar una empresa o proyecto.
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img10.png' alt='')

    p.mb-4(data-aos="fade") Para este caso la medición por emisión de ruido se aplica directamente a las fuentes industriales dicha medición se debe establecer una distancia de 1.5 metros a partir de la fachada o perímetro específico del área a medir en este caso vamos a ver como es el procedimiento para hacer la medición por emisión de ruido, tal como lo presenta el gráfico.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-9
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Figura 1] Medición del ruido 
      .col-md-6.px-md-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/fig1.svg' alt='Medición del ruido')
      .col-md-3.px-md-0.mb-4
        .bg-green7.p-4.p-md-5.h-100
          p.mb-0 La medición de la emisión de ruido se realiza a 1.5 m de la fachada de una edificación y a 1.20 m a partir del nivel mínimo donde se encuentre instalada la fuente de emisión de ruido.
    
    .fondo2-tema2-2.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
    
          .col-md-10.mb-5(data-aos="fade-down")
            .tarjeta.bg-degrade-green.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img.px-md-4(src="@/assets/curso/temas/tema2/pdf.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.text-white
                      h3.mb-1 Consideraciones previas al muestreo
                      p.mb-0 Se debe tener en cuenta que antes del muestreo se deben realizar algunas actividades previas con el fin de verificar el equipo de medición (Sonómetro) y revisar tanto el plan de muestreo como las actividades a realizar. Se presentan algunas consideraciones.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Consideraciones_previas_muestreo.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download
    
          .row.justify-content-center
            .col-md-4.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/img11.png' alt='')
            .col-md-8.mb-4(data-aos="fade-left")
              p Ahora bien, luego de las condiciones peviamete descritas, se procede a realizar las mediciones. El equipo debe estar colocado fijamente sobre un trípode a una altura de 1.2 mts a partir del nivel mínimo donde se encuentre la fuente instalada a una distancia de 1.5 mts de la fachada o cerramiento perimetral de la empresa, proyecto o fuente emisora de ruido.
              p Con el fin de prevenir posibles errores durante la medición el sonómetro debe estar orientado con la pantalla anti-viento hacia la dirección de la fuente específica, según sea el caso únicamente debe estar el técnico que realiza las mediciones, entre más personas que estén presentes en el sitio de medición y más aún cerca al sonómetro, se podría presentar fenómenos como el apantallamiento, que influye negativamente en la recepción de la información por parte del sonómetro.

          p.mb-4(data-aos="fade") La separación que debe haber entre el técnico (y las demás personas, si las hubiera en el momento de la medición) y el sonómetro, debe ser de por lo menos 0.5 m. (Universidad de Medellín, 2011), tal como se presenta en el siguiente gráfico.
          
          .col-md-5
            .titulo-sexto.color-acento-contenido.mb-2
              p.mb-0 #[b Figura 2] Medición en campo 
            figure
              img(src='@/assets/curso/temas/tema2/fig2.svg' alt='Medición en campo')

    
    p.mb-4(data-aos="fade") Es importante cuando se realice la medición en el día o en la noche tener presente que las condiciones en donde el proyecto o la empresa esté funcionando con la mayor intensidad de ruido con el fin de medir en las condiciones reales de operación de la fuente.

    .row.justify-content-center.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img12.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        p También, se deben realizar por punto, dos procesos de medición de una hora de captura de información o a intervalos de 15 minutos (Una medición con la fuente de emisión operando en su máximo nivel de producción o de emisión de ruido y una Medición (con la fuente de emisión en condiciones neutras de operación o mejor dicho sin la emisión de ruido generado). Todo esto, con el fin de determinar el ruido residual.
        .bg-degrade-green.tarjeta.p-4
          h3.text-white Glosario – Parámetros de medición de ruido 
          p.text-white En caso de presentarse ruidos que no pertenezca a la operación directa de la fuente, como pitos, altavoces, sirenas, perifoneos, etc., estos no deberán ser tenidos en cuenta y la información debe ser relacionada en el informe técnico. A continuación se describen los principales parámetros empleados para la medición de la emisión de ruido, de acuerdo con la Resolución 627 de 2006.
          .row 
            .col-md-7
              a.anexo.mb-3(:href="obtenerLink('/downloads/Parametros_medicion_ruido.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[b Anexo.] Parámetros de medición de ruido

    .row.justify-content-center.align-items-center
      .col-md-8.mb-4(data-aos="fade-right")
        p Teniendo en cuenta la información anterior, se puede indicar que los principales parámetros para la medición de la emisión de ruido son:
        ul.lista-ul--color.color-secundario.ps-3.ps-md-4.fa-ul
          li.mb-0
            i.fas.fa-check
            | Nivel de presión sonora continuo equivalente con filtro de ponderación A, LAeq,T y respuesta lenta (S).
          li.mb-0
            i.fas.fa-check
            | Ruido residual, medido como nivel de presión sonora continuo equivalente con filtro de ponderación A, LAeq,T, Residual y respuesta lenta (S).
          li.mb-0
            i.fas.fa-check
            | Nivel percentil L90.
        .bloque-texto-b.bg-green9.box-shadow.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p Si por alguna razón no es posible medir el ruido residual, se toma como valor indicativo (o representativo) de éste el correspondiente al nivel percentil L90. Esto se debe hacer constar en el informe técnico, en el que a su vez se deben especificar las razones por las cuales no fue posible medir el ruido residual. 
            br
            br
            h5.mb-0 - (Universidad de Medellín, 2011) 
            i.fas.fa-quote-right

         
        p Cuando se va a realizar la medición se debe establecer unos tiempos o intervalos que permitan tomar muestras características representativas de acuerdo con lo establecido en la Resolución 627de 2006 el tiempo máximo es de una (1) hora de captura información con 15 minutos como mínimo con el fin de evitar incurrir en mediciones cortas que generarían baja representatividad. Si las condiciones para medir en esos tiempos no se dan la duración de cada intervalo de tiempo de medición no podrá ser inferior a 5 minutos.     
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img13.png' alt='')


    p.mb-4(data-aos="fade") Es tiempo de profundizar en los cálculos.
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-green6" data-aos="fade-down")
      .row(titulo="Nivel promedio")
        p Hay que obtener un solo valor con las mediciones de cada intervalo de tiempo, si es que las mediciones se hicieron por intervalos, para el LAeq,1h, LAeq,1h, Residual (o nivel percentil 90) para las mediciones con ponderación temporal lenta (S), de acuerdo con la siguiente ecuación:
        p En la cual: 
        .row.justify-content-center.mb-4
          .col-md-3
            img(src='@/assets/curso/temas/tema2/acord-form1.png', alt='Fórmula')
        p.mb-0 #[b LAeq,1h] = Nivel de presión sonora continuo equivalente promedio, dB(A). 
        p.mb-0 #[b LAeq,Ti] = Nivel de presión sonora continuo equivalente de cada evento, dB(A). 
        p #[b Ti]= Intervalo de tiempo del evento individual, min. 
        p Ahora, si los intervalos de tiempo fueron iguales, la ecuación anterior se puede simplificar de la siguiente manera: 
        .row.justify-content-center.mb-4
          .col-md-3
            img(src='@/assets/curso/temas/tema2/acord-form2.png', alt='Fórmula')
        p.mb-0 En la cual: 
        p #[b N ] = Número de mediciones.
      .row(titulo="Cálculo emisión o Aporte de ruido")
        p Al obtener los registros de los decibeles producto de la medición de ruido durante el monitoreo, el cálculo de la emisión o aporte de ruido de la fuente se obtiene al restar logarítmicamente el nivel corregido de presión sonora continuo equivalente total con filtro de ponderación (A) del nivel corregido de presión sonora continuo equivalente residual con filtro de ponderación A, del cómo se expresa a continuación.
        .row.justify-content-center.mb-4
          .col-md-5
            img(src='@/assets/curso/temas/tema2/acord-form3.png', alt='Fórmula')
        p Donde: 
        p.mb-0 #[b Leq emisión] = Nivel de emisión de ruido o aporte de la(s) fuente(s) de emisión de ruido con filtro de ponderación A, dB(A). 
        p.mb-0 #[b LRAeq,1h] = Nivel corregido de presión sonora continuo equivalente total con filtro de ponderación A, dB(A). 
        p #[b LRAeq,1h, Residual] = Nivel de ruido residual corregido con filtro de ponderación A (medido como nivel de presión sonora continuo equivalente o como nivel percentil 90), dB(A).
        p El nivel de emisión de ruido, o aporte de la(s) fuente(s) de emisión de ruido, con filtro de ponderación A (Leq emisión) es el que se compara con la tabla 1 del artículo 9 (Estándares máximos permisibles de emisión de ruido) de la Resolución 627 del 7 de abril de 2006 del Ministerio de Ambiente, o aquella que la sustituya, modifique o complemente. 
        p Es importante tener presente que el punto donde se realizó la medición debe ser localizado, para posteriormente reconocerlo e identificarlo y así generar las respectivas observaciones que se deriven de los análisis que se concluyan posterior a la medición.

    .row.justify-content-center.mb-4
      .col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img14.png' alt='')
      .col-md-9.mb-4(data-aos="fade-left")
        .bg-primario.tarjeta.mb-4(data-aos="fade-down")
          .row.p-4.pt-0.p-md-0
            .col-md-2.col-5
              img.ps-md-4.pt-0(src='@/assets/curso/temas/tema2/importante.png' alt='')
            .col-md-10.py-4.text-white.pe-md-5
              h5 ¡Para tener en cuenta!
              p Si la diferencia aritmética entre LRaeq,1h y LRaeq,1h, Residual es igual o inferior a 3 dB(A), se deberá indicar que el nivel de emisión de ruido es del orden igual o inferior al ruido residual (LRaeq,1h, Residual). En este caso se considera que el nivel de ruido residual es demasiado alto para establecer claramente cuál es la contribución de la fuente. 
              p.mb-0 Esto no implica que la fuente de emisión de ruido objeto de estudio esté exenta del cumplimento de la norma, sino que se debe realizar un estudio exhaustivo de la fuente y su entorno, debido a la incertidumbre tan alta de la medición, para poder determinar apropiadamente la emisión de ruido.
        p Cuando se finaliza el muestreo y una vez recogido los datos por punto, teniendo en cuenta que deben cuantificar una hora por punto medición, se debe realizar una calibración final empleando el pistófono; esto permite verificar que la medición cumpla con las condiciones de fiabilidad presentes durante la medición.
        p Los datos recolectados se deben registrar en las hojas de campo y adicional bajar los datos con el software integrado en el sonómetro a una hoja de cálculo, dando así la confirmación de los datos tanto en físico como en digital para posteriormente realizar los respectivos informes de campo.
        p También es importante que durante la medición se debe generar registro fotográfico por cada punto de medición y registrar los datos de la medición del viento en el muestreo que se llevó al lugar.


    p.mb-4(data-aos="fade") Finalmente, se cierra esta temática de medición de ruido presentando una ruta de medición tomada del «Protocolo para la medición de emisión de ruido, ruido ambiental y realización de mapas de ruido» de la Universidad de Medellín (2011, p.33-35):

    .row.justify-content-center.align-items-center.mb-4
      .col-md-8.mb-4(data-aos="fade-right")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Condiciones meteorológicas") Antes de emprender una medición para determinar la emisión de ruido, es necesario verificar las condiciones meteorológicas. (verificar la velocidad del viento no debe ser mayor a 3m/s).
          p(numero="2" titulo="Ubicación del sonómetro") El sonómetro se ubica con el micrófono ubicado haca la fuente a 1.5 de la fachada y a 1.20 de altura, separado del operador del equipo a 50 cm para evitar el apantallamiento del sonido. 
          p(numero="3" titulo="Calibración") Realizar calibración acústica del sonómetro con el pistófono antes de iniciar la medición.
          p(numero="4" titulo="Condiciones de medición") Las mediciones se realizan con respuesta lenta (S) y con filtros de ponderación frecuencial A y Z (antes lineal) y con respuesta por impulso (I) y con filtro de ponderación frecuencial A. La medición deberá realizarse en el día, horario y condiciones de funcionamiento donde la intensidad de la emisión de ruido sea mayor. 
          p(numero="5" titulo="Proceso de medición") Se deben realizar dos (2) procesos de medición de por lo menos quince (15) minutos de captura de información cada uno; uno con la(s) fuente(s) de emisión de ruido funcionando durante el período de tiempo de mayor emisión o incidencia para determinar el nivel de presión sonora continua (LAeq,1h) y otro sin la(s) fuente(s) funcionando, para determinar el ruido residual, (LRaeq,1h,Residual) 
          p(numero="6" titulo="Ruido residual") El ruido residual (nivel de presión sonora continuo equivalente con filtro de ponderación A, LRaeq,1h, Residual) se mide con la(s) fuente(s) específica(s) ap.ada(s) y en el mismo sitio de la medición anterior, manteniendo invariables los condicionantes del entorno y durante el tiempo y forma.
          p(numero="7" titulo="Número de mediciones") El número mínimo de mediciones a ejecutar es uno (1), el cual consta de dos (2) procesos de medición de por lo menos quince (15) minutos de captura de información cada uno, uno con la(s) fuente(s) de emisión de ruido funcionando y otro con la(s) fuente(s) específica(s) ap.ada(s), en intervalos de tiempo distribuidos uniformemente en una hora, en el horario diurno o nocturno requerido. 
          p(numero="8" titulo="Interrupciones") Si durante las mediciones se presentan ruidos ocasionales que no pertenecen a la fuente objeto de evaluación, como por ejemplo sirenas, altavoces, etc., éstos no se deben tener en cuenta. 
          p(numero="9" titulo="Subsector restrictivo") Cuando la emisión de ruido en un sector o subsector trascienda a sectores o subsectores vecinos o inmersos en los estándares máximos permisibles de emisión de ruido son aquellos que corresponden al sector o subsector más restrictivo. 
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img15.png' alt='')

    .row.fondo3-tema2-2.align-items-center.py-5.pb-4.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center      

          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") Olores
            p Los olores ofensivos se convierten en un problema medioambiental dependiendo el origen y el tipo de fuente que la generan, de esta manera da origen de numerosas quejas que con fundamento produce molestias a la población en determinada área de influencia. 
            p.mb-4(data-aos="fade") Aún en el caso de que las sustancias olorosas emitidas no posean ningún efecto perjudicial para la salud, las molestias causadas por olores pueden constituir un serio problema que necesita ser evaluado, investigado en sus causas y solucionado para responder a las quejas de la sociedad.
          
          .col-md-4.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img16.png' alt='')
          .col-md-8.mb-4(data-aos="fade-left")
            p En esta sección se desarrollarán los conceptos generales de los olores ofensivos medición del contaminante y la normatividad asociada para la vigilancia y control de este parámetro contaminante de acuerdo con lo establecido en la Resolución 1541 de 2013 en Colombia
            .bg-blue3.p-4
              p.mb-0 El olfato es uno de los sentidos más importantes que tiene el ser humano y es el encargado de detectar y procesar los olores que están presentes en el aire. Todos estos olores penetran por la nariz, específicamente acceden por sus fosas nasales y llegan a la cavidad nasal, donde las células receptoras al detectar este olor los transmite al bulbo olfatorio como impulsos, los cuales, a su vez, se encargan de enviar señales al cerebro para que interprete esta sensación en un olor.

    
    p.mb-4(data-aos="fade") Para entender cómo funciona el sentido del olfato se expone su estructura y las partes principales, según el portal web Partesdel.com (2017).

    .row.justify-content-center.mb-5
      .col-md-9.tarjeta.bg-gray
        ImagenInfografica.color-acento-botones.p-3.p-md-5(data-aos="fade-down")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-infog2.png', alt='Niveles de la atmósfera')

          .tarjeta.bg-yellow.p-3(x="38.5%" y="13%" numero="+")
            .h4.mb-2 Bulbo olfativo 
            p Parte del cerebro donde todas señales sensoriales son interpretadas. Refiere a la parte interior de la nariz, la cual está cubierta por una pared compuesta de mucosa, encargada de producir el moco. Esta se encarga de mantener la humedad en la cavidad nasal para así poder impedir la entrada de suciedad, polvo y de ciertas partículas que pueden causar daño si acceden a los pulmones.
          .tarjeta.bg-yellow.p-3(x="22%" y="24%" numero="+")
            .h4.mb-2 Nervio olfativo 
            p Localizados en el interior de la cavidad craneana donde cada nervio al ensancharse crea un bulbo olfatorio. Este nervio es totalmente sensitivo, es precisamente quien se encarga de transmitir los impulsos olfatorios desde la nariz hasta el sistema nervioso central.
          .tarjeta.bg-yellow.p-3(x="21%" y="46%" numero="+")
            .h4.mb-2 Pituitaria 
            p Se encarga de calentar todo el aire que se respira. En esta zona donde están las células olfativas, donde las sustancias odoríferas las impresionan. Esta presenta un tono amarillento y se halla en el cornete superior, o sea, en el espacio donde las ramas del nervio olfatorio se distribuyen.
          .tarjeta.bg-yellow.p-3(x="59%" y="87%" numero="+")
            .h4.mb-2 Cilios olfatorios 
            p Se trata de células nerviosas que contienen pelos muy pequeños y visibles solo con un microscopio, las cuales tienen la función de acumular todos los olores para que así los envíe el receptor hacia el encéfalo, lo cual lo realiza en forma de impulso nervioso.
          .tarjeta.bg-yellow.p-3(x="82%" y="73%" numero="+")
            .h4.mb-2 Narinas 
            p Se trata de dos cavidades que se mantienen separadas a través de un tabique. Se ubican en la cabeza, justo sobre la boca.
          .tarjeta.bg-yellow.p-3(x="92%" y="49%" numero="+")
            .h4.mb-2 Fosas nasales 
            p Se trata de las dos cavidades que se encuentran sobre la boca.
          .tarjeta.bg-yellow.p-3(x="82%" y="37%" numero="+")
            .h4.mb-2 Nariz 
            p Posee dos compartimientos que se encuentran divididos por el tabique nasal, donde se muestran dos orificios de salida que se le conoce como narinas. En su otro lado este órgano finaliza en unas aberturas que tienen conexión directa con la faringe. Cada fosa nasal posee en sus paredes laterales unos huesos esponjosos que se le conoce como cornetes. Bajo estos existe un espacio que mantiene la conexión de la nariz y los senos paranasales, lo cual se conoce como meatos.
          .tarjeta.bg-yellow.p-3(x="87%" y="24%" numero="+")
            .h4.mb-2 Receptores olfativos 
            p Estos se hallan en la parte superior de las fosas nasales. Aquí es donde el cornete superior es cubierto por la pituitaria amarilla y se crea la conexión con el bulbo olfatorio, estos tienen como función detectar los olores.

    .row.justify-content-center.mb-4
      .col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img17.png' alt='')
      .col-md-9.mb-4(data-aos="fade-left")
        .tarjeta.bg-degrade-green.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.px-md-3(src="@/assets/curso/temas/tema2/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Glosario - Conceptos de medición de olores 
                  p.mb-0 Todos los olores son potencialmente ofensivos y que dependen específicamente de: frecuencia, intensidad, duración, ofensividad y localización. Ahora se amplían los conceptos y metodologías que se van a profundizar, por tanto se hace necesario incorporar las siguientes definiciones.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Conceptos_medicion_olores.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        p Tal es la importancia que el control y seguimiento tiene en la actualidad los olores ofensivos, que en Colombia se implementó la Resolución No. 1541/2013 por el Ministerio de Ambiente y Desarrollo Sostenible, por la cual se establecen los límites permisibles de calidad del aire o de inmisión como el procedimiento para la evaluación de actividades que generan olores ofensivos y se dictan otras disposiciones.
        p En esta norma encontraremos:
        ul.lista-ul--color.color-secundario.fa-ul
          li.mb-0
            i.fas.fa-check
            | La reglamentación para la recepción de quejas.
          li.mb-0
            i.fas.fa-check
            | Niveles permisibles de inmisión de olores ofensivo.
          li.mb-0
            i.fas.fa-check
            | Presentación del PRIO plan para la reducción del impacto por olores ofensivos.

    p.mb-4(data-aos="fade") La percepción de los olores y las molestias que ellos generan dependen del sitio y la ubicación de las diversas fuentes que pueden ser considerados generadores olores, como criaderos de animales, plantas de tratamiento de aguas residuales, rellenos sanitarios entre otras. Con respecto al origen de los olores, en los diversos procesos, se podrían clasificar en dos tipos:
    
    ul.lista-ul--color.color-secundario.ps-3.ps-md-4.fa-ul
      li.mb-0
        i.fas.fa-check
        span #[b Fuentes puntuales:] las chimeneas, conductos, salidas de ventilación.
      li.mb-0
        i.fas.fa-check
        span #[b Fuentes difusas:] generalmente son superficies solidas o liquidas, tales como pozos de secado de lodos, plantas de compostaje, vertederos, piscinas, biofiltros, entre otros. 

    .row.justify-content-center.mb-4
      .col-md-9.mb-4(data-aos="fade-right")
        .bg-primario.tarjeta.mb-4
          .row.p-4.pt-0.p-md-0
            .col-md-2.col-5
              img.ps-md-4.pt-0(src='@/assets/curso/temas/tema2/olores.svg' alt='')
            .col-md-10.py-4.text-white.pe-md-5
              h5 Olores ofensivos
              p Es importante no solamente conocer las actividades de generan los olores sino también, identificar cuáles son las sustancias que lo producen, estas sustancias se pueden encontrar en la corriente de aire en forma gaseosa o líquida, también en los recursos hídricos y en el suelo. Se sugiere revisar la tabla de sustancias de olores ofensivos por actividad que se encuentra en la Resolución 1541 de 2013; recurso que se encuentra en el material de apoyo. 
              p.mb-0 A nivel internacional se han clasificado actividades como las principales generadoras de olores ofensivos y por esta razón se explica particularmente su incidencia en la generación de olores ofensivos, que se visualizan en la tabla de aspectos ambientales de las sustancias asociadas a olores ofensivos en el Lineamiento de Vigilancia Ambiental, 2012, p.24; recurso que se encuentra en el material de apoyo. 
      .col-md-3.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img18.png' alt='')
        

    p.mb-4(data-aos="fade") Se muestran a continuación algunas fuentes generadoras de olores.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-green6" data-aos="fade-down")
      .row.px-md-2(titulo="Plantas de tratamiento de agua residual")
        .col-md-7
          p Las plantas de tratamiento de agua residual (PTAR) que tenga fallas en su diseño u operación, sea de tipo físico, químico o biológico, puede generar malos olores. El medio anaerobio es el más susceptible a esta situación, debido al metabolismo de las bacterias sulfato-reductoras, especialmente si en el agua residual existen altas concentraciones de sulfatos y sulfuros. (Ministerio de Salud, 2012 p. 24)
        .col-md-5
          img(src='@/assets/curso/temas/tema2/acord-img1.png' alt='')
      .row.px-md-2(titulo="Rellenos sanitarios")
        .col-md-7
          p Desde la aparición de las ciudades han existido problemas de salud pública por la generación de residuos, Los olores ofensivos provenientes de los rellenos sanitarios generalmente ocurren por un mal funcionamiento de los biofiltros o prácticas inadecuadas, como reutilización de áreas previamente utilizadas o por descargas incontroladas de residuos. Esta percepción de los malos olores no es permanente, sino que su presencia está asociada a las condiciones del clima y a la dirección de los vientos, siendo las horas nocturnas y los días cálidos que siguen a las lluvias, cuando los olores son más intensos. (Ministerio de Salud, 2012 p.28)
        .col-md-5
          img(src='@/assets/curso/temas/tema2/acord-img2.png' alt='')
      .row.px-md-2(titulo="Curtido de cuero")
        .col-md-7
          p Las industrias de curtido y acabado de cueros, tradicionalmente han aparecido ante el mundo como algunas de las más sucias y contaminantes debido al proceso para que este producto tenga el terminado que conocemos comercialmente. Como consecuencia, el agua residual de la industria de curtido tiene altas concentraciones de materia orgánica, compuestos de nitrógeno, sulfuros, sólidos suspendidos, compuestos de cromo y pH elevado. 
          p La alta carga de materia orgánica provoca la creación de condiciones anaerobias en cuerpos o cursos de agua, debido al elevado consumo de oxígeno disuelto. Estas condiciones, además de afectar la vida acuática, favorecen la producción de algunos gases nocivos como ácido sulfhídrico y metano, indicadores cualitativos para la generacion de olores ofensivos de muy mal carácter. (Ministerio de Salud, 2012 p. 30)
          p Generalmente los malos olores provienen de un inadecuado control en las diferentes actividades, las mas significativas son: el pelambre, descarne, la limpieza de equipos y recipientes y el vertimiento de efluentes líquidos y sólidos a los cursos de agua.
        .col-md-5
          img(src='@/assets/curso/temas/tema2/acord-img3.png' alt='')
      .row.px-md-2(titulo="Industria petroquímica")
        .col-md-7
          p En la industria petrolera, los yacimientos de crudo contienen contaminantes entre los cuales se encuentra el azufre, el cual al combinarse con moléculas de hidrogeno forma el ácido sulfhídrico, que es liberado de los hidrocarburos en forma de gas al suministrarles calor. Existen microorganismos anaerobios capaces de utilizar compuestos de azufre, tales como las bacterias sulfato reductoras (BSR) y las bacterias tiosulfato reductoras (BSTR), las cuales utilizan el azufre como aceptores finales de electrones en la oxidación de la materia orgánica, produciendo principalmente ácido sulfhídrico y mercaptanos. (Ministerio de Salud, 2012 p.30).
          p Otro aspecto importante que tiene que ver con la industria petrolera y la contaminación por olores ofensivos son los derrames de petróleo debido a la ocurrencia de accidentes o atentados a la infraestructura petrolera en nuestro pais influyendo en la salud de las poblaciones afectadas.
        .col-md-5
          img(src='@/assets/curso/temas/tema2/acord-img4.png' alt='')


    p.mb-4(data-aos="fade") Un olor que en principio es agradable cuando es percibido con tanta intensidad puede convertirse en molesto, es por eso que el concepto de olor ofensivo también se vuelve muy subjetivo, debido a que los olores dependen específicamente de la intensidad o fuerza y de la concentración en aire del compuesto(s) que lo origina.
    
    .row.justify-content-center.mb-2
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img19.png' alt='')
      .col-md-7.mb-4(data-aos="fade-left")
        .bg-blue3.p-4.mb-4
          p Así como el ruido, las vibraciones y la luz, el olor es considerado un estresor ambiental. Según la Organización Mundial de la Salud (OMS) “La salud es un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades”. Así la molestia por olor afecta la calidad de vida de las personas.
          p.mb-0 Algunos estudios señalan que los olores pueden afectar al estado psíquico de las personas, influyendo negativamente sobre su estado anímico y pudiendo provocar situaciones de estrés, por esta razón, el olor es considerado un contaminante. (Ministerio del Medio Ambiente de Chile, s.f.)
        p Algunos síntomas negativos provocados por la molestia de olor son: mareos, náuseas, vómitos, dolor de cabeza, problemas de concentración, otros. Algunos de estos efectos dependen de la dosis y pueden aumentar con el tiempo.
        p La OMS señala que algunas sustancias tienen propiedades malolientes en concentraciones muy por debajo de aquellas en las que ocurren efectos tóxicos. Así para la evaluación de efectos sensoriales se han identificado tres umbrales: 
          b detección, reconocimiento y molestia.

    p.mb-4(data-aos="fade") Para la medición de olores ofensivos la resolución 627 del año 2006 establece como referencia el protocolo para la medición de olores ofensivos en el cual establecen los procedimientos y caracterización de olores, en esta sección veremos las condiciones generales de la medición en campo en olores ofensivos. Para caracterizar los olores ofensivos se pueden aplicar dos técnicas: las sensoriales y las analíticas.

    .row.mb-5
      .col-md-6.bg-green.tarj-btn.p-md-5.p-4.mb-4.mb-md-0
        .h-100
          img.mb-md-5.mb-4(src='@/assets/curso/temas/tema2/ico4.svg' alt='' style="width: 65px;")
          h5 Las técnicas sensoriales 
          p Se basan en la percepción de los olores por el olfato humano. También incluyen la determinación del carácter de un olor (mapeo) y el nivel de agrado o desagrado de un olor (tono hedónico).
      .col-md-6.bg-green10.tarj-btn.p-md-5.p-4.mb-4.mb-md-0
        .h-100
          img.mb-md-5.mb-4(src='@/assets/curso/temas/tema2/ico5.svg' alt='' style="width: 65px;")
          h5 Las técnicas analíticas 
          p Para caracterización de olores son relativamente fáciles de aplicar e identifican cuantitativamente las especies químicas presentes en un olor. La desventaja de la técnica es que no provee información alguna referente a la molestia que puede generar un olor. Por esta razón, las técnicas analíticas son usadas para definir criterios de diseño de métodos de control de olores.
    
    
    p.mb-4(data-aos="fade") Las siguientes técnicas son las más empleadas en las mediciones de olores ofensivos, de acuerdo con el Ministerio del MinSalud, 2012, pp. 33-35).

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-7
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-ifog3.svg', alt='Olfatometría dinámica')

          .tarjeta.bg-yellow.p-3(x="51%" y="6%" numero="+")
            .h5.mb-2 Olfatometría dinámica
            p.mb-0 En esta técnica se emplea el olfato humano como medio de captura y sensor de olor de esta manera se establece una metodología para la determinación del olor de una muestra gaseosa usando un panel panelistas como sensores para posteriormente determinar la emisión. El objetivo primordial de un estudio olfatométrico es evaluar si las emisiones de una determinada instalación pueden ser responsables o no de quejas en la población vecina. A esta conclusión se llega con la interpretación de los valores de concentración de inmisión, habitualmente denominados mapas de olores.
          .tarjeta.bg-yellow.p-3(x="33%" y="57%" numero="+")
            .h5.mb-2 Nomogramas
            p.mb-0 Los nomogramas son instrumentos gráficos bidimensionales que permiten el cálculo aproximado de una función. Los más sencillos contienen dos ejes. En el eje horizontal se coloca la distancia a la que se estima que existe una determinada concentración o a la que se esperaría que haya molestias por olores y en el eje vertical se introduce el valor de emisión del olor (calculado partiendo de datos reales o estimados).
          .tarjeta.bg-yellow.p-3(x="42%" y="75%" numero="+")
            .h5.mb-2 Mediciones de campo
            p.mb-0 Esta metodología se basa en la observación y detección del olor en campo, mediante observadores que se sitúan en diferentes puntos de la zona en la que se quiere realizar la evaluación de la molestia por olores. (La norma alemana VDI 3940 es la base de esta evaluación y permite obtener la frecuencia de detección del olor)
          .tarjeta.bg-yellow.p-3(x="33%" y="94%" numero="+")
            .h5.mb-2 Tablas FIDO
            p.mb-0 Esta herramienta se basa en el estudio de cuatro parámetros: la frecuencia, la duración de la detección, la intensidad y el carácter agradable o desagradable del olor. Sirve para determinar si un olor se puede considerar molestia o no, esta metodología se emplea en los EE. UU.
          .tarjeta.bg-yellow.p-3(x="89%" y="57%" numero="+")
            .h5.mb-2 Narices electrónicas
            p.mb-0 Son una serie de sensores de distintos materiales metálicos que reaccionan de forma distinta a un mismo componente químico. Cuando una muestra olorosa entra en contacto con estos, se produce una respuesta química que se evalúa de forma conjunta para la totalidad de los sensores. La respuesta se relaciona con la intensidad o concentración del olor a partir de los valores obtenidos por panelistas humanos que trasladan los resultados a una base de datos que queda registrada.
          .tarjeta.bg-yellow.p-3(x="96%" y="75%" numero="+")
            .h5.mb-2 Espectrómetros infrarrojos
            p.mb-0 En esta técnica se emplean los Espectrómetros, en décadas anteriores se han desarrollado mejores tecnologías para análisis de compuestos químicos, como el espectrómetro Transformador Infrarrojo de Paso Abierto de Fourier (Open-Path Fourier transforminfrared / OP-FTIR), el cual ofrece monitoreo remoto, análisis multicompuestos rápidos y mediciones promedio. Esta técnica ha sido aplicada exitosamente en la identificación de fuentes de emisión.
          .tarjeta.bg-yellow.p-3(x="81%" y="94%" numero="+")
            .h5.mb-2 Modelización
            p.mb-0 Es el método más empleado para valorar la contaminación por olores generada por una fuente. Se basa en el uso de modelos matemáticos de dispersión de contaminantes. La modelización permite evaluar el impacto odorífero que una instalación, existente o futura, tiene o tendrá sobre su entorno próximo. A partir de los datos meteorológicos de la zona se puede efectuar la modelización. El resultado del modelo es la obtención de la concentración de olor en inmisión. Esta concentración puede representarse mediante líneas con un mismo valor de concentración de olor: las isodoras.



    .row.justify-content-center.mb-2
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img20.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        .bg-primario.tarjeta.mb-4
          .row.align-items-center.p-4.p-md-0
            .col-md-3.col-5
              img.pt-md-3.px-md-4(src='@/assets/curso/temas/tema2/icono2.svg' alt='')
            .col-md-9.py-4.text-white.pe-md-5
              h5 Formación y emisión de olores
              p.mb-0 Se sugiere revisar el documento audiovisual «Formación y emisión de olores: caracterización y evaluación de impacto» que se encuentra en el material de apoyo, para fortalecer lo hasta ahora aprendido.
        p La evaluación de olores ofensivos a través de métodos sensoriales se basa en la determinación de la concentración del olor por olfatometría dinámica, metodología desarrollada en la NTC 5880 Calidad del Aire. Determinación de la concentración del olor por olfatometría dinámica correspondiente con la Norma Europea EN 13725 estandarizada por el Comité Europeo de Normalización. (MinAmbiente, 2014, p.31)
        p La norma establece un método para la determinación objetiva de la concentración de olor de una muestra gaseosa usando olfatometría dinámica con evaluadores humanos y la velocidad de emisión de olores que emanan de fuentes puntuales y/o fuentes superficiales. La unidad de medida es la unidad de olor europea por metro cúbico: OU<sub>E</sub> /m<sup>3</sup>. La concentración de olor se expresa en términos de múltiplos del umbral de detección. En cuanto al campo de aplicación la norma europea, citado en MinAmbiente (2014, p. 31), incluye:
        ul.lista-ul--color.color-secundario.ps-3.ps-md-4.fa-ul
          li.mb-1
            i.fas.fa-check
            span La medida de la concentración másica del umbral de detección de las sustancias olorosas puras en #[b g/m<sup>3</sup>]
          li.mb-1
            i.fas.fa-check
            span La medida de la concentración de olor de mezclas de sustancias olorosas en <b>OU<sub>E</sub> /m<sup>3</sup></b>
          li.mb-1
            i.fas.fa-check
            span La medida de la velocidad de emisión de emisiones olorosas de fuentes puntuales y fuentes superficiales (con y sin un flujo hacia el exterior), incluyendo pre-dilución durante el muestreo.
          li.mb-0
            i.fas.fa-check
            span El muestreo de sustancias olorosas de emisiones de alta humedad y temperatura (hasta 200°C).

    p.mb-4(data-aos="fade") Para resumir los métodos aplicables para la medición de mezclas de olores ofensivos, el protocolo de olores ofensivos del MADS (MinAmbiente, 2014), se sintetizan en la siguiente tabla:

    .row.justify-content-center.mb-5
      .col-md-9(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Tabla 1] Métodos para la medición de mezclas de sustancias, según el tipo de fuente
        .tabla-a.tema5.color-secundario
          table
            caption 
              p.mb-0 Adaptado de MinAmbiente, (2014, p.33)
            thead
              tr.bg-secundario
                th Tipo de fuente
                th Toma de muestra
                th Análisis de laboratorio
            tbody
              tr
                td Puntual
                td.text-center NTC 5880
                td(rowspan="3").text-center NTC 5880
              tr.bg-green7
                td Difusa
                td.text-center NTC 5880
              tr
                td Fugitiva 
                td.text-center NTC 6012


    p.mb-4(data-aos="fade") Ahora bien, la primera actividad a realizar que es considerada de mayor importancia para abordar cualquier problema de malos olores, es la identificación de las posibles fuentes de olor y las características de las emisiones de los olores ofensivos. Cuando se realizan la toma de muestras para el análisis por olfatometría dinámica, dependiendo de la fuente se realizan los siguientes tipos de muestreos.

    .row.justify-content-center.mb-2
      .col-md-6.mb-4(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-green6")
          .row(titulo="Muestreo de fuentes puntuales")
            p Se utiliza el método de la sonda. Este método consiste en la “aspiración” mediante una sonda de una fracción alícuota del gas emitido por la fuente (Ductos o Chimeneas). (Sánchez, J.I., Peña, A.A. & Martínez, J.V., 2008)
          .row(titulo="Muestreo de fuentes difusas aireadas")
            p Para este tipo de fuentes (reactor biológico de una depuradora o un biofiltro - superficiales activas) se utiliza el método de la Campana. En estas situaciones se coloca una campana de base cuadrada (1m2) sobre la superficie a muestrear, de manera que, a la salida de esta, la muestra es succionada mediante una sonda. (Sánchez, J.I., Peña, A.A. & Martínez, J.V., 2008)
          .row(titulo="Muestreo de fuentes difusas no aireadas")
            p Para este tipo de fuentes (decantador de una depuradora o una parva o pila de compost – superficiales pasivas) se utiliza el método del túnel del viento o “cámara de flujo” (conocida también como Caja Lindvall). Para ello, mediante un soplante, se insufla un caudal conocido de aire previamente filtrado, a través de la cámara de flujo, tomando la muestra mediante una sonda a la salida de esta.
      .col-md-6.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img21.png' alt='')

    p.mb-4(data-aos="fade") En el caso de que, en cualquiera de las técnicas de muestreo, se requiera llevar a cabo una dilución en campo, el equipo debe cumplir con los mismos requisitos de exactitud y precisión, que se aplican al olfatómetro.

    .row.justify-content-center.mb-2
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img22.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        p Por otro lado, durante el muestreo es necesario la medida de una serie de parámetros (temperatura, presión atmosférica, caudal, humedad, etc.) que se utilizarán posteriormente para el cálculo de la emisión de olor de cada foco. Para asegurar la calidad y fiabilidad de las medidas, los instrumentos de medida también deben pasar unas calibraciones periódicas y cumplir los correspondientes criterios de calidad.
        .bg-primario.tarjeta.mb-4
          .row.align-items-center.p-4.p-md-0
            .col-md-2.col-5
              img.pt-md-3.ps-md-3(src='@/assets/curso/temas/tema2/icono3.svg' alt='')
            .col-md-10.py-4.text-white.pe-md-5
              h5 Formación y emisión de olores 
              p.mb-0 Para profundizar en el tema se sugiere consultar en el material de apoyo el libro «Contaminación Ambiental por Olores. Fundamentos Básicos». 
        .bloque-texto-b.bg-green9.box-shadow.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p Por definición cuando se hace referencia a olores ofensivos, necesariamente se están describiendo dos condiciones: la presencia de una o más sustancias olorosas en el aire y un receptor sensible. En este contexto, es el receptor sensible quien actúa como indicador de una situación dada por olores ofensivos en el ambiente. La materialización de dicha situación se da en cuanto dicho receptor involucra a las Autoridades Ambientales a través de una queja. 
            br
            br
            h5.mb-0 - (MinAmbiente, 2014, p.8)
            i.fas.fa-quote-right
          

    p(data-aos="fade") Las quejas son el medio por el cual, la comunidad puede manifestar su inconformidad por las molestias que generan los olores, sin embargo, para calificar una queja como válida es necesario que se verifiquen algunos aspectos que le permitan a la autoridad ambiental determinar de manera objetiva la existencia real de una afectación por olores ofensivos.
    p.mb-4.mb-md-5(data-aos="fade") Así, con el propósito de establecer una herramienta que permita minimizar los posibles sesgos en las quejas, se aplica una encuesta estandarizada que corresponde con la NTC 6012-1. A continuación se resume el contenido de la misma y los aspectos a tener en cuenta para su aplicación.

    .row.justify-content-center.mb-5
      .col-md-5(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Figura 3] Esquema de vigilancia basada en quejas y reclamos.
        figure
          img(src='@/assets/curso/temas/tema2/infog.svg' alt='ATENCIÓN A QUEJAS POR EXPOSICION A OLORES OFENSIVOS. ENCUESTA DE PERCEPCIÓN')
        figcaption.mt-3
          p.mb-0 Tomado de Ministerio de Salud (2012, p.98)

    .row.justify-content-center.mb-2
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img23.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        .bloque-texto-b.bg-green9.box-shadow.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p La Evaluación sicométrica de las molestias por olores describe métodos de investigación para establecer los niveles de molestia existente, para lo cual incluye una población control, determina herramientas para estimar áreas de población afectadas y comparar resultados de modelos de dispersión con la realidad descrita por la población. El alcance de la NTC 6012-1 permite obtener un panorama objetivo de una presunta problemática por olores, así como la evaluación de la eficacia de las medidas tomadas para la prevención y/o control de las emisiones.
            br
            br
            h5.mb-0 - (MinAmbiente, 2014, p.9)
            i.fas.fa-quote-right

         

    .row.align-items-center
      .col-md-8.mb-4(data-aos="fade-right")
        p La planificación de la encuesta se debe realizar con base en al menos una vista de campo en la que se verifique la existencia de una o más potenciales actividades generadoras de olores ofensivos y el área afectada identificando de manera aproximada el tamaño de la población en dicha área. Se debe contar con los siguientes aspectos:
        ul.lista-ul--color.color-secundario.ps-3.ps-md-4.fa-ul
          li.mb-1
            i.fas.fa-check
            | Respecto a la selección de la zona control (sin afectación por olores ofensivos), entendiendo que se trata de una población de características similares a la de la población afectada (edad, estrato socio económico, cobertura de servicios de saneamiento básico, tiempo de residencia y permanencia en las viviendas entre otros)
          li.mb-1
            i.fas.fa-check
            | Se debe definir el programa de aplicación de las encuestas de tal modo que se cubra el área definida.
          li.mb-1
            i.fas.fa-check
            | Se deben identificar los procesos que se realizan en dichas fuentes de emisión de olores ofensivos.
          li.mb-0
            i.fas.fa-check
            | De la aplicación de la encuesta se debe obtener información de los grados de molestia, las zonas afectadas, población expuesta.
          li
            i.fas.fa-check
            | El personal encargado de la aplicación de las encuestas debe tener experiencia interactuando con comunidades.
        p Para establecer el procedimiento por atención de quejas se establece el siguiente el siguiente procedimiento:
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img24.png' alt='')

    .row.justify-content-center.mb-2
      .col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img25.png' alt='')
      .col-md-9.mb-4(data-aos="fade-left")
        TabsA.tema5.color-acento-botones.mb-4(data-aos="fade-down") 
          .tarjeta.bg-green.p-4.p-md-5(titulo="Medición de la molestia")
            h5 Medición de la molestia
            p.mb-0 La NTC 6012-1 describe el modelo de cuestionario explicando el objetivo de cada una de las preguntas para la medición de la molestia e información para el análisis de los resultados de su aplicación.
          .tarjeta.bg-green.p-4.p-md-5(titulo="Selección del área")
            h5 Selección del área
            p La NTC 6012-1 define los parámetros básicos para la selección del área o zona de afectación en la que se aplicará la encuesta. Entre los que se cuenta el flujo volumétrico de la fuente o actividad generadora.
            p.mb-0 Esta información puede ser obtenida de referencias bibliográficas considerando que se utiliza para hacer una estimación preliminar de la zona. Algunas de las consideraciones más relevantes a tener en cuenta para seleccionar la zona para la aplicación de la encuesta son la velocidad y dirección del viento, la topografía y la nubosidad.
          .tarjeta.bg-green.p-4.p-md-5(titulo="Muestreo y calidad del procedimiento de recolección de los datos")
            h5 Muestreo y calidad del procedimiento de recolección de los datos
            p.mb-0 La NTC 6012-1 define criterios que se deben tener en cuenta respecto a las características sociodemográficas de la muestra a evaluar.
          .tarjeta.bg-green.p-4.p-md-5(titulo="Evaluación del cuestionario")
            h5 Evaluación del cuestionario
            p.mb-0 La NTC 6012-1 describe en este numeral, para la escala de termómetro, la relación matemática entre los grados de molestia que se obtienen de las encuestas y las concentraciones de olor en los casos en los que la exposición evaluada es uniforme en la zona de estudio.
          .tarjeta.bg-green.p-4.p-md-5(titulo="Anexos")
            h5 Anexos
            p.mb-0 Los anexos de la NTC6012-1 incluyen modelos para establecer contacto con los encuestados, ejemplos prácticos para la evaluación de los datos obtenidos de la encuesta y el modelo de encuesta.
        
        p Finalmente, el PRIO se constituye entonces en la herramienta a través de la cual, las actividades generadoras de olores ofensivos logran la prevención y/o mitigación de sus emisiones incorporando buenas prácticas o mejores técnicas disponibles, las primeras entendidas como métodos o técnicas que han demostrado consistentemente resultados superiores a los obtenidos con otros medios y que se utilizan como punto de referencia y las segundas como la fase más eficaz y avanzada de desarrollo de las actividades y de sus modalidades de explotación, que demuestren la capacidad práctica de determinadas técnicas para alcanzar el cumplimiento de los objetivos planteados en este caso para mitigar la generación de olores ofensivos. (Ministerio de Ambiente, 2014, p.43).






</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    modal1: false,
    mostrarIndicador: true,
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
