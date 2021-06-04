<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-4 La normatividad determina los criterios y directrices en el proceso de evaluación del desempeño laboral (EDL) y las empresas del Estado que no cuenten con un sistema de evaluación propio deben adoptar el sistema tipo de la Comisión Nacional del Servicio Civil (CNSC), definido mediante el Acuerdo 6176 de 2018 y su Anexo Técnico, en el que se definen los medios o instrumentos para llevar a cabo el proceso de evaluación del desempeño laboral. El Acuerdo rige para todas las entidades a partir del 1° de febrero de 2019.
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
