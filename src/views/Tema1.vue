<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1  Revisión de la política del SG SST
    
    .row.mb-5
      .col-lg-8    
        p.mb-4 La política del SG-SST de una empresa como parte de las políticas de gestión de la misma es un compromiso gerencial, cuya finalidad es implementar el Sistema de Gestión de Seguridad y Salud en el Trabajo, expresado por escrito, debe ser comunicado al Comité paritario o al vigía de seguridad y salud en el trabajo, con alcance a todos los centros de trabajo y a todos los trabajadores independientes de la forma de contratación o vinculación, incluyendo los contratistas y subcontratistas. El presidente, gerente general o representante legal tiene la responsabilidad de elaborar, documentar, firmar, divulgar y garantizar el cumplimiento de la política del SG-SST.
        p.mb-5 <b>El Artículo 2.2.4.6.6 del Decreto 1072 del 2015 establece para la política del SG SST los siguientes requisitos:</b>
        
        ul.lista-ul--color.t1.ms-5
            li
              i.fas.fa-check-double
              | Establecer el compromiso de la empresa hacia la implementación del SST y de los riesgos laborales.
            li 
              i.fas.fa-check-double
              | Ser específica para la empresa y apropiada para la naturaleza de sus peligros y el tamaño de la organización.
            li 
              i.fas.fa-check-double
              | Ser concisa, redactada con claridad, estar fechada y firmada por el representante legal de la empresa.
            li 
              i.fas.fa-check-double
              | Debe ser difundida a todos los niveles de la organización y estar accesible a todos los trabajadores y demás partes interesadas.
            li 
              i.fas.fa-check-double
              | Ser revisada como mínimo una vez al año y de requerirse, actualizarse acorde con los cambios tanto en materia de Seguridad y Salud en el Trabajo (SST) como los cambios en la empresa.

      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img01.png') 

    p.mb-5 <b>Es muy importante tener presente lo que se menciona en el Artículo 2.2.4.6.7 del Decreto 1072 de 2015, que define los objetivos mínimos que debe incluir la política de seguridad y salud en el trabajo (SST), sobre los cuales la organización expresa su compromiso, que son los siguientes:</b> 

    .row
      .col-lg-4.t1.div1.d-flex
        div          
          figure.mb-5
            img(src='@/assets/curso/tema1/img02.svg') 
          p.px-5 <b>1.</b> Identificar los peligros, evaluar y valorar los riesgos y, establecer los respectivos controles.
      .col-lg-4.t1.div2.d-flex
        div
          figure.mb-5
            img(src='@/assets/curso/tema1/img03.svg')
          p.px-5 <b>2.</b> Proteger la seguridad y salud de todos los trabajadores mediante la mejora continua del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST) en la empresa.          
      .col-lg-4.t1.div3.d-flex
        div
          figure.mb-5
            img(src='@/assets/curso/tema1/img04.svg')
          p.px-5 <b>3.</b> Cumplir la normatividad nacional vigente aplicable en materia de riesgos laborales.
</template>

<script>
export default {
  name: 'Tema1',
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
