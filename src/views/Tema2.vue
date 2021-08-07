<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1  Revisión de los objetivos generales y específicos del SG SST

    p.mb-5 En el Artículo 2.2.4.6.18., del Decreto número 1072 de 2015, están definidos los objetivos del sistema de gestión de la seguridad y salud en el trabajo. Estos objetivos deben estar formulados de acuerdo con la política expresada en la empresa, el resultado de la evaluación inicial y, las auditorías que se hayan realizado deben tener en cuenta entre otros aspectos, los siguientes:

    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img01.svg') 
      .col-lg-8
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Ser claros, medibles, cuantificables y tener metas definidas para su cumplimiento.
          li 
            .lista-ol--cuadro__vineta
              span 2 
            | Ser adecuados para las características, el tamaño y la actividad económica de la empresa.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Tener metas coherentes con el de plan de trabajo anual en seguridad y salud en el trabajo, de acuerdo con las prioridades identificadas.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Ser compatibles con el cumplimiento de la normatividad vigente aplicable en materia de riesgos laborales.
          li 
            .lista-ol--cuadro__vineta
              span 5            
            | Estar documentados y ser comunicados a todos los trabajadores.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Ser compatibles con el cumplimiento de la normatividad vigente.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Ser revisados, evaluados y actualizados mínimo una vez al año de ser necesario.
          li 
            .lista-ol--cuadro__vineta
              span 8
            | Estar en documento firmado por el empleador.
            
    p.mb-5.text-center <b>Otros aspectos a tener en cuenta al momento de plantear los objetivos del SG-SST son:</b>

    .row.justify-content-center
      .col-lg-10
        .row.mb-4.t2-div1
          .col-lg-9.p-4
            p.mb-0 Las prioridades en seguridad y salud en el trabajo definidas en la evaluación inicial, por ejemplo, si una empresa realizó la autoevaluación de la Resolución 0312 de 2019 y obtuvo un puntaje inferior al 60%, los objetivos del Sistema de Gestión estarán orientados hacia un plan de mejoramiento exhaustivo para mejorar los puntajes y por ende el cumplimiento.
          .col-lg-3.py-4
            figure
              img(src='@/assets/curso/tema2/img02.svg') 

        .row.mb-4.t2-div2
          .col-lg-9.p-4
            p.mb-0 Estar de acuerdo con el estado de gestión del sistema, es decir, no es lo mismo cuando una empresa ya tiene implementado su sistema de gestión y cada año propende por la mejora continua para mantener óptimas condiciones de seguridad y salud, que cuando la empresa está en la tarea de terminar de implementarlo.
          .col-lg-3.py-4
            figure
              img(src='@/assets/curso/tema2/img03.svg') 

        .row.mb-4.t2-div3
          .col-lg-9.p-4
            p.mb-0 Deben ser revisados anualmente, al final del año se hará una nueva revisión del estado del SG-SST y se deben establecer unos objetivos acordes con la normatividad vigente, de acuerdo con los resultados obtenidos en los indicadores del sistema y con los resultados de las auditorías y visitas de la ARL.
          .col-lg-3.py-4
            figure
              img(src='@/assets/curso/tema2/img04.svg') 

</template>

<script>
export default {
  name: 'Tema2',
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
