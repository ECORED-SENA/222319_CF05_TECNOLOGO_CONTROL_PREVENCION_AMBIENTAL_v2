(function(e){function a(a){for(var o,i,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"791333a3","chunk-0206bfa0":"bdfa0da0","chunk-0c047e41":"474edd9a","chunk-13a6037e":"7ea7543c","chunk-18f95272":"ee032482","chunk-25b302c8":"e427670a","chunk-26fc7596":"720ef9f6","chunk-2c06842c":"b9b456f8","chunk-2d0c5615":"c543438f","chunk-2d0e96ec":"eed16829","chunk-2d208d90":"5ddc8300","chunk-2d21d0e2":"e7a7ad5b","chunk-2d22c123":"ca3f9538","chunk-2d2747e2":"a7741052","chunk-2e80bb9a":"35b29020","chunk-319206de":"3116e31a","chunk-32334cb6":"6b65de30","chunk-36769079":"38ad62db","chunk-3c57cd7b":"0db60a85","chunk-4cdd78c0":"9f8c50b3","chunk-4f2d402a":"60e0792c","chunk-515a8379":"d85d498e","chunk-53ccb27e":"3ccc2a28","chunk-55d286b8":"0643df9e","chunk-59974754":"e3f22076","chunk-60cbc06b":"f9ca922d","chunk-659152b8":"55d991fc","chunk-6e1e538a":"10759ab3","chunk-766a929b":"78773ed6","chunk-c796899c":"43246c04","chunk-e8a7823a":"5faeabdd","chunk-f2df7d2c":"6a36155c","chunk-fde47172":"39362287",comple:"f4aeefe8",creditos:"d31fec14",glosario:"ca39eaee",intro:"de55bb10",referencias:"2a2970ed",sintesis:"d576c521",tema1:"f4827c6d",tema2:"c467444c",tema3:"5afd4a11"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"be25a6af","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"c94ee44d","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"87fd8c0c","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"3d214811",creditos:"ef20f2bf",glosario:"51c308df",intro:"31d6cfe0",referencias:"e5878bf9",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),d=Object(s["a"])(c,i,r,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema3").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema3").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,v=n("1c2c"),g=(n("a3a0"),{global:{componenteFormativo:"Medición de ruidos y concentración de olor según normatividad",descripcionCurso:"En este componente formativo se caracterizará el estado ambiental de una zona de estudio en sus factores ambientales agua, suelo, olores y ruido, como insumo para realizar un diagnóstico ambiental adecuado. De ahí la importancia de una correcta toma de muestras que permita la información requerida de las condiciones de calidad de un medio.",imagenBannerPrincipal:n("65fa"),fondoBannerPrincipal:n("ce7c")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Seguridad, Salud y Medio ambiente en el sitio de trabajo",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Concepto técnico de peligro",hash:"t_1_1"},{numero:"1.2",titulo:"Concepto técnico de riesgo",hash:"t_1_2"},{numero:"1.3",titulo:"Medio ambiente, seguridad y salud en el trabajo",hash:"t_1_3"}]},{nombreRuta:"tema2",numero:"2",titulo:"Medición de presión sonora y olores",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Etapas y plan de muestreo",hash:"t_2_1"},{numero:"2.2",titulo:"Toma de muestra de ruido y olores",hash:"t_2_2"}]},{nombreRuta:"tema3",numero:"3",titulo:"Parámetros <em>in situ</em> olores y ruido",desarrolloContenidos:!0},{nombreRuta:"tema4",numero:"4",titulo:"Recolección, transporte y recepción de muestras",desarrolloContenidos:!0},{nombreRuta:"tema5",numero:"5",titulo:"Estándares e Interpretación de resultados en olores y ruido",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/222319_CF05_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Introducción",referencia:'Cubadebate (2018). Crean en alemania una "nariz" electrónica para advertir sobre situaciones de peligro. ',tipo:"Artículo",link:"http://www.cubadebate.cu/noticias/2018/04/28/crean-en-alemania-una-nariz-electronica-para-advertir-sobre-situaciones-de-peligro/#.XvJ682hKjIU"},{tema:"Seguridad, Salud y Medio ambiente en el sitio de trabajo",referencia:"CASAFE Cámara (2018, noviembre 9). Riesgo vs. Peligro. [Archivo de video]. Youtube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=OL6BRmN4UH0"},{tema:"Concepto técnico de peligro",referencia:"ABAKCALCULADORAS (2010, noviembre 12). Medición de caudal con calculadora y molinete UTS. [Archivo de video]. Youtube",tipo:"Video",link:"https://www.youtube.com/watch?v=77sTYR3sX5E"},{tema:"Medición de presión sonora y olores",referencia:"Video 1: CuriosaMente (2017, junio 25) ¡El mundo no es como lo pintan! - CuriosaMente 77. [Archivo de video]. Youtube.  ",tipo:"Video",link:"https://www.youtube.com/watch?v=NLaV_O3dLpk"},{tema:"Medición de presión sonora y olores",referencia:"Video 2: Oakademia - Academia online y clases particulares (2017, julio 31) Mapas y escalas (ejercicios resueltos) ser un genio en 5 minutos. PROFESOR OAK. [Archivo de video]. Youtube.  ",tipo:"Video",link:"https://www.youtube.com/watch?v=-mQtkt33xig"},{tema:"Olores",referencia:"Resolución 1541 de 2013. [Ministerio de Ambiente y Desarrollo Sostenible]. Por el cual se establecen los niveles de calidad del aire o de inmisión.  Noviembre 12 de 2013",tipo:"Documento legal",link:"https://www.minambiente.gov.co/wp-content/uploads/2021/08/resolucion-1541-de-2013.pdf"},{tema:"Olores",referencia:"MinSalud (2012). Lineamiento de Vigilancia Ambiental sanitaria y ambiental del impacto de los olores ofensivos en la salud y calidad de vida de las comunidades expuestas en areas urbanas,  p.24.",tipo:"PDF",link:"https://www.minsalud.gov.co/sites/rid/Lists/bibliotecadigital/RIDE/VS/PP/SA/impacto-olores-ofensivos-salud.pdf"},{tema:"Olores",referencia:"Olores.org (2014, julio 7) Formación y emisión de olores: caracterización y evaluación de impacto. E. P.ans, Odournet. [Archivo de video]. Youtube.  ",tipo:"Video",link:"https://www.youtube.com/watch?time_continue=1144&v=piy2eZBpVj8&feature=emb_logo"},{tema:"Estándares e Interpretación de resultados en olores y ruido.",referencia:"CORANTIOQUIAOFICIAL (2014, junio18) Control a Niveles de Ruido y Contaminación Auditiva. [Archivo de video]. Youtube.   ",tipo:"Video",link:"https://www.youtube.com/watch?v=PbtgG02UXWs"},{tema:"Estándares e Interpretación de resultados en olores y ruido.",referencia:"CORANTIOQUIAOFICIAL (2015, mayo 21) Control y Manejo de Olores en Empresas. [Archivo de video]. Youtube.   ",tipo:"Video",link:"https://www.youtube.com/watch?v=1Hi-bCZgZ_Q"}],glosario:[{termino:"Mapas de ruido",significado:"se entiende por mapa de ruido, la representación de los datos sobre una situación acústica existente o pronosticada en función de un indicador de ruido, en la que se indica la superación de un valor límite, el número de personas afectadas en una zona dada y el número de viviendas, centros educativos y hospitales expuestos a determinados valores de ese indicador en dicha zona. (Resolución 627 de 2006)"},{termino:"Nivel percentil 90",significado:"es el nivel sonoro que se sobrepasa durante el 90 % del tiempo de observación. Se suele utilizar para indicar lo que se conoce como ruido de fondo, que es el nivel de presión sonora mínimo o de base, que está presente casi todo el tiempo. Se denota por L90. (Resolución 627 de 2006)"},{termino:"Olfatometría",significado:"técnica sensorial de medición de olores que se usa para determinar el grado de molestia que pueden ocasionar ciertos olores a la población. (Resolución 1541 de 2013)"},{termino:"Olor ofensivo",significado:"es el olor generado por sustancias o actividades industriales, comerciales o de servicio, que produce fastidio, aunque no cause daño a la salud humana. (Resolución 627 de 2006)"},{termino:"Peligro",significado:"fuente, situación o acto con potencial de daño en términos de enfermedad o lesión a las personas, o una combinación de estos (ICONTEC GTC45, 2012)"},{termino:"Pistófono",significado:"es una pequeña cavidad provista de un pistón con movimiento de vaivén y desplazamiento medible, que permite establecer una presión conocida en el interior de la cavidad. Generalmente utilizado para efectuar calibraciones de sonómetros (Resolución 627 de 2006)"},{termino:"Presión sonora",significado:"es la diferencia entre la presión total instantánea en un punto cuando existe una onda sonora y la presión estática en dicho punto."},{termino:"Riesgo",significado:"combinación de la probabilidad de que ocurra un(os) evento(s) o exposición(es) peligroso(s), y la severidad de lesión o enfermedad, que puede ser causado por el (los) evento(s) o la(s) exposición(es) (ICONTEC GTC45, 2012)"},{termino:"Ruido de fondo",significado:"ruido total de todas las fuentes de interferencia en un sistema utilizado para producción, medida o registro de una señal, independiente de la presencia de la señal, incluye ruido eléctrico de los equipos de medida. El ruido de fondo se utiliza algunas veces para expresar el nivel medido cuando la fuente específica no es audible y, a veces, es el valor de un determinado parámetro de ruido, tal como el L90 (nivel excedido durante el 90% del tiempo de medición). (Resolución 627 de 2006)"},{termino:"Ruido residual",significado:"ruido total cuando los ruidos específicos en consideración son suspendidos. El ruido residual es el ruido ambiental sin ruido específico. No debe confundirse con el ruido de fondo. Resolución 627 de 2006)"},{termino:"Sonómetro",significado:"es un instrumento de medición de presión sonora, compuesto de micrófono, amplificador, filtros de ponderación e indicador de medida, destinado a la medida de niveles sonoros, siguiendo unas determinadas especificaciones. (Resolución 627 de 2006)"},{termino:"Sustancia de olor ofensivo",significado:"es aquella que, por sus propiedades organolépticas, composición y tiempo de exposición puede causar olores desagradables. (Resolución 627 de 2006)"},{termino:"Tono hedónico",significado:"factor subjetivo que permite definir si un olor es agradable, desagradable, nauseabundo. (Resolucion 1541 de 2013)"}],referencias:[{referencia:"Consejería de medioambiente servicio de calidad ambiental. (2007). <em>Nivel Acústico De Evaluación (NAE)</em>.",link:"https://rodin.uca.es/bitstream/handle/10498/18211/10%20NAE.pdf?sequence=1&isAllowed=y"},{referencia:"CORPOCALDAS. (2015). Mediciones de ruido ambiental y elaboración del plan de descontaminación por ruido en Villamaría, Caldas. ",link:"https://historico.corpocaldas.gov.co/publicaciones/543/Informe%20Plan%20de%20descontaminaci%C3%B3n%20Vmaria.pdf"},{referencia:"Decreto 948 de1995. [Ministerio del Medio ambiente]. Por el cual se reglamentan, parcialmente, la Ley 23 de 1973, los artículos 33, 73, 74, 75 y 76 del Decreto - Ley 2811 de 1974; los artículos 41, 42, 43, 44, 45, 48 y 49 de la Ley 9 de 1979; y la Ley 99 de 1993, en relación con la prevención y control de la contaminación atmosférica y la protección de la calidad del aire. Junio 5 de 1995"},{referencia:"ICONTEC GTC45. (2012). <em>Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional. </em>",link:"https://repository.udistrital.edu.co/bitstream/handle/11349/6034/ParraCuestaDianaMarcelaVasquezVeraErikaVanessa2016-AnexoA.pdf;jsessionid=BEE718D718155795C84987947FF4B2D6?sequence=2"},{referencia:"ICONTEC G100. (2004). Calidad de Agua. Guía para los procedimientos de cadena de custodias de muestras.",link:"https://www.emcali.com.co/documents/148832/171808/08.GTC+100+de+2004.pdf/6fe392c5-8bed-2704-843b-54bd9ede7952?t=1532524188754&download=true#:~:text=cadena%20de%20custodia%20de%20muestra,toma%20hasta%20que%20se%20desecha."},{referencia:"ICONTEC NTC 6012-1 (2013) Efectos y evaluación de los olores, evaluación sicométrica de las molesticas por olores cuestionarios."},{referencia:"IGN. (s.f.). <em>Conceptos cartográficos.</em> ",link:"https://www.ign.es/web/resources/cartografiaEnsenanza/conceptosCarto/descargas/Conceptos_Cartograficos_def.pdf"},{referencia:"INS. (2011). Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio. ",link:"https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf"},{referencia:"Mendezfrank. (s.f.). Contenidos. ",link:"https://mendezfrank.wordpress.com/primer-corte/contenidos/"},{referencia:"Ministerio del medio ambiente de Chile (s.f.). <em>Efectos en la salud.</em> ",link:"https://olores.mma.gob.cl/efectos-en-salud/"},{referencia:"MinAmbiente. (2014). <em>Protocolo para el monitoreo, control y vigilancia de olores ofensivos. </em>",link:"https://www.catorce6.com/images/legal/Protocolo_Monitoreo_Control_y_Vigilancia_de_Olores_Ofensivos.pdf"},{referencia:"MinSalud (2012). Lineamiento de Vigilancia Ambiental sanitaria y ambiental del impacto de los olores ofensivos en la salud y calidad de vida de las comunidades expuestas en áreas urbanas,  p.24.",link:"https://www.minsalud.gov.co/sites/rid/Lists/bibliotecadigital/RIDE/VS/PP/SA/impacto-olores-ofensivos-salud.pdf"},{referencia:"Minsalud (2021) Gestión integral de los elementos de protección personal (epp)",link:"https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf"},{referencia:"ODOUR OBSERVAITORY. (2023). Cromatografía de gases – Olfatometría. ",link:"https://odourobservatory.org/es/measuring-odour/gas-chromatography-olfactometry/"},{referencia:"Olfasese. (s.f.). Evaluación del impacto por olores. ",link:"https://www.olfasense.com/es/gestion-ambiental-de-olores/competencias-claves/"},{referencia:"ORGANIZACIÓN METEOROLÓGICA MUNDIAL. (2001). <em>Directivas de orientación la enseñanza y formaciónprofesional del personal en meteorología e hidrología operativa.</em> (p.137). ",link:"http://www.ideam.gov.co/documents/290086/75945771/Documento+OMM+258+Vol+I/9449f806-2438-4602-bcd0-940e2334621f"},{referencia:"Partesdel.com. (2017).  Partes de la nariz. ",link:"https://www.partesdel.com/nariz.html"},{referencia:"Resolución 0627 de 2006. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se establece la norma nacional de emisión de ruido y ruido ambiental. Abril 07 de 2006."},{referencia:"Resolución 1541 de 2013. [Ministerio de Ambiente y Desarrollo Sostenible]. Por el cual se establecen los niveles de calidad del aire o de inmisión. Noviembre 12 de 2013"},{referencia:"Sánchez, J.I., Peña, A.A. & Martínez, J.V. (2008). <em>Valor I. Contaminación Ambiental por Olores. Fundamentos Básicos.</em> Murcia: Calidad Ambiental"},{referencia:"Santos Muñoz, D. (2017). ¿Cómo poner medida a Eolo?. El País. ",link:"https://elpais.com/politica/2017/08/18/tiempo_al_tiempo/1503042135_701153.html"},{referencia:"Sicaweb. (s.f.) Conceptos básicos del ruido ambiental.",link:"https://sicaweb.cedex.es/docs/documentacion/Conceptos-Basicos-del-ruido-ambiental.pdf "},{referencia:"Universidad de Medellín. (2011). Protocolo para medir la emisión de ruido generado por fuentes fijas. Revista Ingenierías Universidad de Medellín, 10(18), pp.51-60. ",link:"http://www.scielo.org.co/pdf/rium/v10n18/v10n18a06.pdf"},{referencia:"Virtual.lat.(s,f) Conversión de unidades de velocidad.",link:"https://vitual.lat/conversion-de-unidades-de-velocidad/"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Líder del equipo",centro:"Dirección General"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable de línea de producción",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Diana Carolina Triana Guarnizo",cargo:"Instructor",centro:"Centro de Gestión Industrial"},{nombre:"Juan Carlos Cárdenas Sánchez",cargo:"Instructor",centro:"Centro de Gestión Industrial"},{nombre:"Gloria Esperanza Ortiz Russi",cargo:"Diseñador Instruccional",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Natalia Andrea Bueno Pizarro",cargo:"Evaluador Instruccional",centro:"Centro para La Industria de la Comunicación Gráfica"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Carmen Alicia Martínez Torres",cargo:"Animador y Productor Multimedia",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Storyboard e ilustración",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Locución",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Blanca Flor Tinoco Torres",cargo:"Diseñador web",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrollador Fullstack",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Emilsen Alfonso Bautista",cargo:"Actividad didáctica",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Zuleidy María Ruiz Torres",cargo:"Validación y vinculación en plataforma LMS",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Luis Gabriel Urueta Alvarez",cargo:"Validación y vinculación en plataforma LMS",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Validación de contenidos accesibles",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=g;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:v["a"],render:function(e){return e(l)}}).$mount("#app")},"65fa":function(e,a,n){e.exports=n.p+"img/banner-principal.2c10a2e0.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.fa633092.png"}});
//# sourceMappingURL=app.258ad960.js.map