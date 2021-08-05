<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      img(src='@/assets/curso/introduccion/img01.png') 

    p.mb-5 El Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) está basado en la normativa vigente, para el desarrollo de este componente formativo se tendrá en cuenta el Decreto único del sector trabajo o Decreto 1072 del 2015 y la Resolución 0312 del 2019, por el cual se definen los estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo como se describe a continuación:

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario
          .row
            .col-lg-9.p-5
              p.mb-0 Según la Ley 1562 del 2012 “El Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST) es un proceso lógico y por etapas, basado en la mejora continua (ciclo PHVA) y que incluye la política, la organización, la planificación, la aplicación, la evaluación, la auditoría y las acciones de mejora, con el objetivo de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y la salud en el trabajo”.
            .col-lg-3
              figure
                img(src='@/assets/curso/introduccion/img02.png') 

    p Ahora bien, en el Decreto 1072 del 2015, en el Artículo 2.2.4.6 se establecen la directrices de obligatorio cumplimiento para implementar el Sistema de Gestión de Seguridad y Salud en el Trabajo, estas deben ser aplicadas por todos  los empleadores públicos y privados, los contratantes de personal bajo modalidad de contrato civil, comercial o administrativo, las organizaciones de economía solidaria y del sector cooperativo, las empresas de servicios temporales y, debe tener cobertura sobre todos los trabajadores dependientes, contratistas, trabajadores cooperados y los trabajadores en misión. La implementación del sistema es responsabilidad del empleador, con la participación de los trabajadores y/o contratistas. Tiene como objetivo garantizar la aplicación de las medidas de seguridad y salud, propender por el mejoramiento de los comportamientos y la gestión eficaz para la prevención de los peligros. 
          

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
