export default {
  global: {
    componenteFormativo: 'Seguimiento de inventario y ciclos de abastecimiento',
    descripcionCurso:
      'Una correcta gestión de los ciclos de abastecimiento dentro de una empresa genera como resultado inventarios equilibrados, evitando niveles de excesos y agotados. Actualmente, existen sistemas empresariales integrales que cuentan con módulos específicos para el control de inventarios, facilitando la trazabilidad del inventario y una gestión centralizada de la información que permite mejorar la toma de decisiones de forma oportuna.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Herramientas operativas del control de inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Usos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ciclo de abastecimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Niveles de stock',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Rotura de stock',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Cantidad económica a pedir',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Indicadores de gestión de inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Niveles de stock',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Rotura de stock',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Cantidad económica a pedir',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: 'Sistema de control de inventario',
      referencia:
        'Aristizábal, A. González, L. Serna, J. (2014). Sistemas de control de inventario. Tesis de grado, Universidad Autónoma de Occidente.',
      tipo: 'PDF',
      link:
        'https://drive.google.com/drive/u/0/folders/1SG-BhjUXTIMk7pdp4kY-1MUrEn65x7PP ',
    },
  ],
  glosario: [
    {
      termino: 'Cadena de suministro',
      significado:
        ' Es el conjunto de actividades, instalaciones y medios de distribución necesarios para llevar a cabo el proceso de venta de un producto en su totalidad. Esto es, desde la búsqueda de materias primas, su posterior transformación y hasta la fabricación, transporte y entrega al consumidor final. (Westreicher, Economipedia, 2020).',
    },
    {
      termino: 'Canales de distribución',
      significado:
        'Están definidos por las diferentes fases o etapas por las que un producto pasa, de modo que su propiedad va pasando de unas manos a otras. Desde el fabricante al consumidor o usuario final. (Galán, 2021).',
    },
    {
      termino: 'EOQ (cantidad económica del pedido)',
      significado:
        'Por las siglas de su nombre en inglés (<em>Economic Order Quantity</em>) es un modelo matemático que sirve para calcular el tamaño óptimo de cada pedido de materia prima. Esto, buscando la mayor eficiencia. (Westreicher, Economipedia, 2020).',
    },
    {
      termino: 'Gestión de inventarios',
      significado:
        'Es la administración respecto al ingreso y salida de insumos, productos terminados o semiterminados, bienes auxiliares y herramientas que posee una empresa. (Westreicher, Economipedia, 2020).',
    },
    {
      termino: 'Inventario final',
      significado:
        'Es aquel que se registra al terminar un ejercicio contable, previo control de entradas y salidas de existencias. (Llamas, Economipedia, 2020).',
    },
    {
      termino: 'Inventario inicial',
      significado:
        'Es aquel que se registra al comienzo de un ejercicio contable, previo cálculo de variaciones de este al final del ejercicio anterior. (Llamas, Economipedia, 2020).',
    },
    {
      termino: '<em>Just in time</em>',
      significado:
        'Es la filosofía de dar lo que el cliente pide, la cantidad que pide, a la fecha acordada en el sitio acordado, método Toyota.',
    },
    {
      termino: 'Lote',
      significado:
        'Es una forma de agrupación de activos o instrumentos financieros y valores equivalentes en la mayoría de los casos a cien unidades de estos. A menudo la misma permite su posibilidad de traspaso en los mercados. (Javier Sánchez Galán, Economipedia, 2020).',
    },
    {
      termino: 'Materia prima',
      significado:
        'También conocido como bien intermedio, es todo bien que es transformado durante un proceso de producción hasta convertirse en un bien de consumo. (Caballero, Economipedia, 2015).',
    },
    {
      termino: 'Mercancía',
      significado:
        'Es cualquier objeto factible de ser comercializado o intercambiado en el mercado. Se caracteriza por poder satisfacer alguna necesidad del consumidor. (Westreicher, Economipedia, 2020).',
    },
    {
      termino: 'Orden de compra',
      significado:
        'También llamada orden de pedido o nota de pedido, es un documento mediante el cual el comprador solicita mercancías al vendedor. (Rus, Economipedia.com,2020).',
    },
    {
      termino: 'Rotación de inventario',
      significado:
        'Es una práctica de <em>marketing</em> y la dirección estratégica que consiste en el control de los productos desde el punto logístico, por medio de las veces por periodo de tiempo que se renuevan las existencias. (Javier Sánchez Galán, Economipedia, 2020).',
    },
    {
      termino: 'Sistema de inventario',
      significado:
        'Es el grupo de reglas y procesos que implementa una empresa para planificar y supervisar las mercancías y los materiales de los que dispone. (Westreicher, Economipedia, 2020).',
    },
    {
      termino: 'Valoración de inventario',
      significado:
        'Son técnicas aplicadas para valorar las unidades en almacén en términos monetarios. Esta valoración es especialmente útil cuando las unidades se van adquiriendo a distintos precios. (Marco, Economipedia, 2020).',
    },
  ],
  referencias: [
    {
      referencia:
        'Cartilla: Arenal Laza, C. (2020). <em>Gestión de inventarios</em>. Logroño: Tutor de Formación.',
      link: '',
    },
    {
      referencia:
        'Libro: Cruz Fernández, A. (2017). <em>Gestión de Inventarios</em>. IC Editorial.',
      link: '',
    },
    {
      referencia:
        'Libro: Guerrero Salas, H. (2009). <em>Inventarios, manejo y control</em>. Bogotá: Ecoes Ediciones.',
      link: '',
    },
    {
      referencia:
        'Libro: Mora García, L. A. (2008). <em>Indicadores de la gestión logística</em>. Bogotá: Ecoe ediciones.',
      link: '',
    },
    {
      referencia:
        'Libro: Mora García, L. A. (2011). <em>Gestión logística en centros de distribución, bodegas y almacenes</em>. Bogotá: Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Libro: Rubio Ferrer, J. (2011). <em>Gestión y pedido de stock</em>. Madrid: Ministerio de educación y formación profesional de España.',
      link: '',
    },
    {
      referencia:
        'Libro: Silvera Escudero, R. e. (2022). <em>Ciclos Logísticos: planeación y estrategias de cadenas de suministro</em>. Bogotá: ECOE EDICIONES.',
      link: '',
    },
    {
      referencia:
        'Libro: Vidal Holguín, C. J. (2020). <em>Fundamentos de control y gestión de inventarios</em>. Cali: Programa editorial universidad del valle.',
      link: '',
    },
    {
      referencia:
        'Libro: Yuseff M., N. D.-A.-C. (2020). <em>Gestión de inventarios, gestión del conocimiento, gestión de mantenimiento</em>. Bogotá: Editorial Universidad Icesi.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
