<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1  Revisión de la tabla de valores y clasificación de los estándares mínimos

    p.mb-4 Teniendo en cuenta la variedad de contextos de las diferentes organizaciones se identificó la necesidad de realizar ajustes a la Resolución 1111 del 2017, por lo que se emitió la Resolución 0312 del 2019, de estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo.
    p.mb-5 Los estándares mínimos establecidos en la Resolución 0312 verifican por medio de una lista de chequeo y siguiendo el ciclo PHVA el cumplimiento de la implementación del sistema. Esta autoevaluación es una herramienta de valoración objetiva del cumplimiento y desarrollo del SG SST, permite tener claridad con respecto a lo que se cumplió y de lo que falta por hacer, de tal manera que lo que no se implementó se realice con un plan de mejora, con el fin de realizar el respectivo ajuste.

    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/img01.svg') 
      .col-lg-7
        .bloque-texto-f.color-acento-botones.div1.pt-4.px-5.mb-5
          .bloque-texto-f__comillas.div1
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-regular.bloque-texto-f__texto Ahora bien, el Decreto 1072 del 2015, en el Artículo 2.2.4.6.16., señala que todos los empleadores tienen la obligación de realizar una evaluación inicial del SG SST, cuyo objetivo es reconocer las necesidades en seguridad y salud en el trabajo y, además deben realizar un análisis de las estadísticas sobre la enfermedad y accidentes laborales ocurridos en los últimos dos años, y de acuerdo con estos resultados establecer o actualizar el plan de trabajo anual.

    .row.justify-content-center.mb-5
      .col-lg-10
        p.mb-5 Por tal razón, es muy importante que el aprendiz maneje el Decreto 1072 del 2015, el Artículo 2.2.4.6.16. que dice lo siguiente: “la evaluación inicial debe incluir, entre otros, los siguientes aspectos: 

        ol.lista-ol--cuadro.lista-ol--separador
          li            
          li 
            .lista-ol--cuadro__vineta
              span 1
            | La identificación de la normatividad vigente en materia de riesgos laborales, incluyendo los estándares mínimos del Sistema de Garantía de Calidad del Sistema General de Riesgos Laborales para empleadores, que se reglamenten y le sean aplicables.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | La verificación de la identificación de los peligros, evaluación y valoración de los riesgos, la cual debe ser anual. La identificación de peligros deberá contemplar los cambios de procesos, instalaciones, equipos, maquinarias, entre otros. 
          li 
            .lista-ol--cuadro__vineta
              span 3
            | La identificación de las amenazas y evaluación de la vulnerabilidad de la empresa; la cual debe ser anual.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | La evaluación de la efectividad de las medidas implementadas para controlar los peligros, riesgos y amenazas, que incluya los reportes de los trabajadores; la cual debe ser anual.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | El cumplimiento del programa de capacitación anual, establecido por la empresa, incluyendo la inducción y reinducción para los trabajadores dependientes, cooperados, en misión y contratistas.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | La evaluación de los puestos de trabajo en el marco de los programas de vigilancia epidemiológica de la salud de los trabajadores.
          li 
            .lista-ol--cuadro__vineta
              span 7 
            | La descripción sociodemográfica de los trabajadores y la caracterización de sus condiciones de salud, así como la evaluación y análisis de las estadísticas sobre la enfermedad y la accidentalidad.
          li 
            .lista-ol--cuadro__vineta
              span 8
            | Registro y seguimiento a los resultados de los indicadores definidos en el SGSST de la empresa del año inmediatamente anterior.”
          li    
           
    p.mb-4.text-center Es importante adicionalmente la revisión de algunos artículos de la Resolución 0312 del 2019, esto es:           

    .tarjeta.tarjeta--gris.p-4.mb-5(style="background-color: #FEF6E1 !important")    
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="Artículo 1")
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img02.png')
          .col-md-7
            b Artículo 1 
            p “Estándares mínimos corresponden al conjunto de normas, requisitos y procedimientos de obligatorio cumplimiento de los empleadores y contratantes, mediante los cuales se establecen, verifican y controlan las condiciones básicas de capacidad técnico-administrativa y de suficiencia patrimonial y financiera, indispensables para el funcionamiento, ejercicio y desarrollo de actividades en el Sistema de Gestión de SST.”
     
        .row.justify-content-center(titulo="Artículo 21")
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img03.png')
          .col-md-7
            b Artículo 21 
            p Especifica la responsabilidad que tienen los empleadores en el cumplimiento y la aplicación de los estándares mínimos, como también de formular, ejecutar y hacer seguimiento al plan de trabajo anual, integrarlo a los demás sistemas de la empresa, además de establecer la respectiva auditoría interna a la que se refiere el Decreto 1072 del 2015, con el fin de identificar falencias y oportunidades del SG-SST. 

        .row.justify-content-center(titulo="Artículo 25")
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img04.png')
          .col-md-7
            b Artículo 25 
            p establece las fases para la implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo de acuerdo con los estándares mínimos.

        .row.justify-content-center(titulo="Artículo 26")
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img05.png')
          .col-md-7
            b Artículo 26
            p.mb-4 A partir de enero de 2020 debe hacerse la implementación definitiva del Sistema de Gestión de Seguridad y Salud en el Trabajo y,  para el mes de diciembre todas las organizaciones deben: 
            ol.lista-ol.ms-3
              li 
                span.text-bold.t3-li 1. 
                | Aplicar la autoevaluación conforme a la tabla de valores y calificación de los estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo.
              li 
                span.text-bold.t3-li 2. 
                | Elaborar el plan de mejora conforme al resultado de la autoevaluación de estándares mínimos. Este plan de mejora debe quedar aprobado por la empresa en el plan anual del SG-SST.
              li 
                span.text-bold.t3-li 3. 
                | Formular el plan anual SG-SST, el cual debe empezar a ser ejecutado a partir del 1º de enero del año siguiente.

        .row.justify-content-center(titulo="Artículo 28")
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img06.png')
          .col-md-7
            b Artículo 28
            p Establece los planes de mejoramiento que deben ejecutar las organizaciones de acuerdo con los puntajes obtenidos en la autoevaluación, los cuales deben presentar a la Administradora de Riesgos Laborales.

        .row.justify-content-center(titulo="Artículo 30")
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img07.png')
          .col-md-7
            b Artículo 30
            p Establece los indicadores mínimos de Seguridad y Salud en el Trabajo, los cuales son aplicables a todas las empresas y de los que a partir del año 2019 se va a verificar el registro.

        .row.justify-content-center(titulo="Artículo 32")
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img08.png')
          .col-md-7
            b Artículo 32
            p Establece que todo empleador y contratante que se encuentre obligado a implementar un (PESV), deberá articularlo con el SG SST.

        .row.justify-content-center(titulo="Artículo 33")
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img09.png')
          .col-md-7
            b Artículo 33
            p Se refiere a la prevención de accidentes en industrias mayores, aplica para las empresas fabricantes, importadoras, distribuidoras, comercializadoras y usuarios de productos químicos peligrosos.
  
    .row.mb-5
      .col-lg-8
        p.mb-4 La tabla de valores y clasificación de los estándares mínimos de los que se habla anteriormente se encuentran establecidos en el Artículo 27 de la Resolución 0312 del 2019, esta resolución se encuentra planteada de la siguiente manera:  

        ul.lista-ul--color.t3.ms-3        
          li 
            i.lista-ul__vineta
            | Está diseñada de acuerdo con el ciclo PHVA.
          li 
            i.lista-ul__vineta
            | Contiene siete estándares a evaluar, cada uno con su respectivo porcentaje.
          li 
            i.lista-ul__vineta
            | Un numeral.
          li 
            i.lista-ul__vineta
            | El ítem del estándar.
          li 
            i.lista-ul__vineta
            | El valor del ítem.
          li 
            i.lista-ul__vineta
            | El peso porcentual.
          li 
            i.lista-ul__vineta
            | Tiene tres sistemas de calificación: cumple, no cumple o no le aplica.

      .col-lg-4
        figure.mt-5
          img(src='@/assets/curso/tema3/img10.svg')

    p.mb-5 Se debe tener en cuenta que en cada uno de los ítems se deben calificar con los porcentajes máximos o mínimos, de acuerdo con lo establecido en la tabla de valores y con el cumplimiento del ítem del estándar que tiene la empresa.

    .row.mb-5.justify-content-center
      .col-lg-8
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Estimado aprendiz para mejorar la comprensión de las tablas de los estándares mínimos de la Resolución 0312 del 2019, que verifican el cumplimiento de la implementación del SG SST, puede descargar la cartilla Nuevos estándares mínimos en seguridad y salud en el trabajo.

    p.mb-4 En las empresas de menos de cincuenta trabajadores clasificados con riesgo I, II o III, de acuerdo con lo establecido en la Resolución 0312 del 2019, en los ítems que no les corresponda cumplir se califica con el porcentaje máximo de calificación en la columna “No aplica” frente al ítem correspondiente.
    p.mb-5 Cabe resaltar al terminar la autoevaluación tener en cuenta que debe ser firmada por el empleador o contratante y el responsable de la ejecución del sistema.   
                        
    .row.mb-5.justify-content-center
      .col-lg-8
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p <b>Anexo.</b> Anexo. Con el fin de ampliar la información sobre la autoevaluación, descargue el siguiente documento en Excel, denominado Lista de chequeo/autoevaluación revisión tabla de valores y su clasificación.
                   
    p Si la evaluación inicial del SG-SST determina un <b>estado aceptable</b> es porque se cuenta con un Sistema de Gestión de Seguridad y Salud en el Trabajo enfocado en la mejora continua, los objetivos estarán orientados en mantener el indicador de cumplimiento de acuerdo con esta normativa, además a continuar con los controles para los peligros identificados y mantener una mejora continua del SG-SST, mediante acciones preventivas, correctivas y de mejora con base en los resultados de la evaluación.
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

<style lang="sass" scoped></style>
