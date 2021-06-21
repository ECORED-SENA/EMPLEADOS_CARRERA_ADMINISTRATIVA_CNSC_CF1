export default {
  global: {
    componenteFormativo: 'Marco normativo del sistema de evaluación de la CNSC',
    descripcionCurso:
      'Mediante el Acuerdo 6176 de 2018 y su Anexo Técnico se establece el sistema tipo de evaluación de la CNSC para los empleados públicos de carrera administrativa y en período de prueba, el cual está soportado en la Constitución Política, en la que se determina que en los órganos y entidades del Estado los empleos son de carrera administrativa.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-play-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Marco normativo del sistema de evaluación de la CNSC',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'fas fa-file-alt',
            numero: '1.1',
            titulo: 'Constitución Política de Colombia - Función pública',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Ley 909 de 2004 - Evaluación del desempeño',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Decreto Ley 760 de 2005 - Procedimiento para la notificación de la calificación de los empleados de carrera y establecimiento de impedimento y recusaciones',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Decreto 1083 de 2015 - Evaluación del desempeño y calificación de servicios',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Decreto 815 de 2018 – Competencias laborales para los empleos públicos',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Fanny Restrepo Morales',
        cargo: 'Instructora experta temática',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Risaralda',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: ['Carlos Julián Ramírez Benítez'],
        cargo: 'Diseño web',
      },
      {
        nombre: [
          'Zuleidy Maria Ruiz Torres',
          'Wilson Andrés Arenales Caceres',
          'Gilberto Junior Rodriguez Rodriguez',
          'Maria Carolina Tamayo',
          'Laura Murcia Pardo',
        ],
        cargo: 'Producción Audiovisual',
      },
      {
        nombre: ['Luis Jesús Pérez Madariaga'],
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: 'Yenny Patricia Ulloa villamizar',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acuerdo 6176 de 2018 [Comisión Nacional del Servicio Civil]. Por el cual se establece el Sistema Tipo de Evaluación del Desempeño Laboral de los Empleados Públicos de Carrera Administrativa y en Período de Prueba. Octubre 10 de 2018.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90685',
    },
    {
      referencia:
        'Anexo Técnico del Sistema Tipo de Evaluación del Desempeño Laboral de los Empleados Públicos de Carrera Administrativa y en Período de Prueba [Comisión Nacional del Servicio Civil]. Octubre 10 de 2018.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90685',
    },
    {
      referencia:
        'Constitución Política de Colombia [CPC]. Capítulo 2: De la función pública art. 122, 123, 125, 130 (Colombia).',
      link: 'https://www.constitucioncolombia.com/titulo-5/capitulo-2',
    },
    {
      referencia:
        'Decreto 1227 de 2005. [Presidencia de la República de Colombia]. Por el cual se reglamenta parcialmente la Ley 909 de 2004 y el Decreto-ley 1567 de 1998. Capítulo IV (2005, 25 de abril). Abril 21 de 2005.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=16313',
    },
    {
      referencia:
        'Decreto Ley 760 de 2005. [Presidencia de la República de Colombia]. Por el cual se establece el procedimiento que debe surtirse ante y por la Comisión Nacional del Servicio Civil para el cumplimiento de sus funciones. (Título VII Procedimiento para la notificación de la calificación de los empleados de carrera (art. 33 al 40).  Marzo 17 de 2005.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=16124',
    },
    {
      referencia:
        'Decreto 1083 de 2015 Sector de Función Pública. [Presidencia de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector de Función Pública.  (Título 8 Evaluación del Desempeño y calificación de servicios. Capítulo 1: Evaluación del desempeño laboral. Capítulo 2: Evaluación y calificación del período de prueba). Mayo 26 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=62866',
    },
    {
      referencia:
        'Decreto 815 de 2018. [Presidencia de la República de Colombia]. Por el cual se modifica el Decreto 1083 de 2015, Único Reglamentario del Sector de Función Pública, en lo relacionado con las competencias laborales generales para los empleos públicos de los distintos niveles jerárquicos. Mayo 8 de 2018.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=86304',
    },
    {
      referencia:
        'Ley 909 de 2004. Por la cual se expiden normas que regulan el empleo público, la carrera administrativa, gerencia pública y se dictan otras disposiciones. Septiembre 23 de 2004. DO. No. 45.680.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0909_2004.html',
    },
    {
      referencia:
        'Restrepo, F. (2020). Curso para evaluadores del desempeño laboral con el sistema tipo de la Comisión Nacional del Servicio Civil. Material de formación. SENA.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Calificación',
      significado:
        'Corresponde a la asignación del porcentaje alcanzado por el evaluado, conforme a las evidencias que dan cuenta de su desempeño y comportamiento. ',
    },
    {
      termino: 'Carrera administrativa',
      significado:
        'Sistema que regula el ingreso, permanencia, ascenso y retiro del personal, regulado por la función pública y la Comisión Nacional del Servicio Civil.',
    },
    {
      termino: 'Competencias',
      significado:
        'Es la capacidad de una persona para desempeñar en diferentes contextos y con base en los requerimientos de calidad y resultados esperados en el sector público las funciones inherentes a un empleo; capacidad que está determinada por los conocimientos, destrezas, habilidades, valores, actitudes y aptitudes que debe poseer y demostrar el empleado (ESAP-DAFP – Guía para la formulación del PIC).',
    },
    {
      termino: 'Comportamental',
      significado:
        'Hace referencia a la actitud o conducta natural que muestra una persona en diferentes situaciones y lugares.',
    },
    {
      termino: 'Compromisos laborales',
      significado:
        'Son aquellos que evidencian las competencias funcionales del empleo y las competencias comportamentales que debe acreditar todo servidor público en el ejercicio del empleo.',
    },
    {
      termino: 'Desempeño',
      significado:
        'Conductas laborales del empleado en el cumplimiento de sus funciones. El desempeño se considera también como el desarrollo de los compromisos en relación a las metas deseadas por la entidad. ',
    },
    {
      termino: 'Empleo público',
      significado:
        'Es el conjunto de funciones, tareas y responsabilidades que se asignan a una persona y las competencias requeridas para llevarlas a cabo, con el propósito de satisfacer el cumplimiento de los planes de desarrollo y los fines del Estado (Artículo 19 Ley 909 de 2004).',
    },
    {
      termino: 'Evaluación',
      significado:
        'La evaluación consiste en estimar de forma permanente los conocimientos, destrezas, actitudes, habilidades, aptitudes y rendimiento de los evaluados durante el período respectivo.',
    },
    {
      termino: 'Evaluado',
      significado:
        'Empleado de carrera o en período de prueba que presta sus servicios en una entidad cuyo sistema de carrera administrativa se encuentre administrado y vigilado por la CNSC.',
    },
    {
      termino: 'Evaluador',
      significado:
        'Es el jefe inmediato del servidor de carrera o en período de prueba, responsable de evaluar su desempeño, quien deberá ostentar un grado igual o superior al evaluado.',
    },
    {
      termino: 'Evidencias',
      significado:
        'Son los elementos que permiten establecer de manera objetiva, equitativa y transparente el avance, cumplimiento o incumplimiento de los compromisos que se han generado durante el período de evaluación.',
    },
    {
      termino: 'Función pública',
      significado:
        'Aquella que está al servicio de los intereses generales y prestación de servicios a cargo del Estado a través de sus servidores, y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad (Artículo 209 Constitución Política de Colombia y 2° Ley 909 de 2004).',
    },
    {
      termino: 'Metas institucionales',
      significado:
        'Para los fines de la evaluación del desempeño, las metas institucionales son las establecidas por la alta dirección de la entidad, de conformidad con los planes, programas, proyectos o planes operativos anuales por área o dependencia, encaminadas al cumplimiento de los objetivos y propósitos de la entidad.',
    },
    {
      termino: 'Período de prueba en empleo de carrera',
      significado:
        'Se encuentra establecido en el Artículo 31 de la Ley 909 de 2004 de la siguiente forma: <br><br> (…) Período de prueba. La persona no inscrita en carrera administrativa que haya sido seleccionada por concurso será nombrada en período de prueba, por el término de seis meses, al final de los cuales le será evaluado el desempeño, de acuerdo con lo previsto en el reglamento. <br><br> El Artículo 76 del Código Sustantivo del Trabajo indica: el período de prueba es la etapa inicial del contrato laboral durante la cual el empleador busca validar y apreciar las aptitudes del trabajador. <br><br> Del mismo modo, por parte del trabajador, se busca verificar si el trabajo para el que fue contratado cumple con sus expectativas y si las condiciones son de su conveniencia.',
    },
  ],
  complementario: [
    {
      texto:
        'Acuerdo 6176 de 2018 [Comisión Nacional del Servicio Civil]. Por el cual se establece el Sistema Tipo de Evaluación del Desempeño Laboral de los Empleados Públicos de Carrera Administrativa y en Período de Prueba. Octubre 10 de 2018.',
      tipo: 'Acuerdo',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90685',
    },
    {
      texto:
        'Anexo Técnico del Sistema Tipo de Evaluación del Desempeño Laboral de los Empleados Públicos de Carrera Administrativa y en Período de Prueba [Comisión Nacional del Servicio Civil]. Octubre 10 de 2018.',
      tipo: 'Anexo del Acuerdo 6176/18',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90685',
    },
  ],
}
