<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Herramientas operativas del control de inventarios

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img2(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.svg')})`}"
      )
      .bloque-texto-g__texto2.p-4
        p.mb-0 Para la gestión de los inventarios, las organizaciones deben tener claro que la oportunidad de un negocio está en tener los volúmenes óptimos de mercancía que se pueda mercadear y cuando se habla de los volúmenes óptimos, hay que pensar que existen mercancías que se pueden arruinar por sobre inventariar, acto que lastima las finanzas de la organización, ya que se invierten recursos que muchas veces quedan almacenados en estanterías, quizás perdiendo vida útil, depreciándose o llegando a su fecha de vencimiento. En otras ocasiones se presenta que las organizaciones no establecen #[i stocks] mínimos de mercancía que les permita tener una capacidad de reacción frente a su competencia en la materialización de una posible oportunidad de negocio o potenciar la venta que mueva la caja registradora y refresque el ciclo de inventario.

    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.1  Usos

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-4.mb-5.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img2.svg', alt='Texto que describa la imagen')
            
      .col-lg-8.mb-5.mb-lg-0
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            p Las herramientas para el control de inventarios precisamente permiten planear, aplicar y ejecutar de una manera sistémica, las existencias de: productos, materiales, materias primas o insumos, lo que ayuda a reducir costos, acelerar los procesos logísticos, evitar fraudes y realizar informes sobre el estado financiero del negocio. ¿Y por qué controlarlo todo es una pregunta muy válida? La respuesta es tan sencilla como la pregunta, esto se da por los recursos invertidos, estos pueden ser el mismo dinero al importar, adquirir o trasformar materias primas en productos terminados, además de almacenar y conservar para que no pierdan valor durante el tiempo de almacenamiento, no se pierdan, no se deterioren y estén disponibles como moneda de cambio en la sociedad económica, ya que el buen uso de los inventarios en las organizaciones puedan hacer parte de la diferenciación, entre una empresa dinámica que genere riqueza, a otra que lo haga por accidente o necesidad.

    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.2  Tipos

    .row.justify-content-around.align-items-center
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen')  
      .col-lg-10
        p Dentro de los muchos usos de las herramientas podemos mencionar que todas son usables sin hacer distinción del tipo de organización, solo depende de su músculo financiero, ya que existen herramientas manuales y automáticas, dentro de estas se pueden mencionar rápidamente: códigos de barra, códigos QR y tecnología RFID, recuento cíclico (uso de Kardex, Análisis ABC, productos terminados, en proceso y materias primas o insumos / Alta, media y baja rotación), #[i software] de gestión de inventario, lotes de producción y su trazabilidad.

    .tarjeta.tarjeta--azul.p-4.mt-5.bg5
      SlyderA(tipo="b").bg5
        .row
          .col-md-6.mb-4.mb-md-0
            p #[b Códigos de barra]

            p Esta herramienta de tipo tecnológico, requiere de un soporte de tecnologías duras, #[i hardware] y tecnologías blandas, #[i software] compuestos por diversos programas ofimáticos que interactúan con el #[i hardware], los cuales están compuestos por: pistolas o lectores de códigos que se adhieren a los diferentes tipos de empaques (primarios, secundarios y terciarios) permitiendo realizar descuentos de inventarios que se encuentra instalados en los computadores que contienen el #[i software] de inventario y el #[i software] del lector de códigos de barra, esta tecnología aunque aún se encuentra vigente, proviene de los años 80 y ha demostrado no ser tan fácil de sustituir por la facilidad y la versatilidad en todo tipo de inventarios de cualquier sector económico.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', alt='Texto que describa la imagen')
              

        .row
          .col-md-6.mb-4.mb-md-0
            p #[b Códigos de barra]

            p Este código de barras contiene dependiendo del código EAN #[i (European Article Number] o Número de Articulo Europeo; EAN 13 para artículos unitarios o EAN 14 cajas o embalajes) los datos de identificación del país (3 primeros números), el nombre de la empresa que fabrica el producto (del cuarto al séptimo), el número de identificación del producto (del octavo al doceavo) y un código de verificación (último dígito), mirando la secuencia de los números impresos en el código de barras, de izquierda a derecha.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p #[b Códigos QR]

            p Este sistema de código se le denomina QR #[i (Quick response code)] y se considera la evolución del código de barras ya que permite una lectura mucho más rápida en cámara de teléfonos inteligente y puede almacenar más información, usando enlaces a la web a la que se conecta a sistemas de internet o intranet para dar o recibir información útil para las organizaciones, lo cual permite que su uso sea más dinámico.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')
        
        .row
          .col-md-6.mb-4.mb-md-0
            p #[b Tecnología RFid]

            p Este es un sistema mucho más avanzado que se compone de un #[i hardware] más robusto: etiqueta RFID (RF-tag), antenas de radiofrecuencia o arcos de lectura RFID y #[i software] que se conectan al #[i hardware], estos funcionan cuando se pega una etiqueta a un producto o a un conjunto de productos, como por ejemplo, una estiba y esta a su vez, se conecta con antenas que detectan su movimiento por almacenes o bodegas y la información va en tiempo real al #[i software] de inventario, o ERP de las organizaciones y estos #[i software] se actualizan de manera automática y precisa, reduciendo los errores humanos y mejorando la trazabilidad de los productos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p #[b Recuento cíclico (uso de Kardex)]

            p El recuento cíclico es el más antiguo de todos y es en el que una persona tiene que realizar un conteo físico de sus inventarios de manera planeada o constante dependiente de sus necesidades, este aunque parezca anticuado y pasado de moda, muchos almacenes pequeños que no tienen presupuesto para invertir en #[i software] y #[i hardware] prefieren seguir usando las viejísimas pero efectivas tarjetas Kardex, donde se lleva el registro de cada unidad que ingresa y sale del almacén, pudiendo conocer el saldo exacto y el valor de venta.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p #[b Análisis por costos ABC (productos terminados, en proceso y materias primas o insumos / alta rotación, media rotación y baja rotación):]

            p El análisis por ABC corresponde a una práctica en la cual se pondera de una manera sistémica la cantidad de productos de alta rotación, de mediana rotación y de baja rotación y que también se tienen en cuenta para el almacenamiento de las materias primas, insumos y el avance de producción en cuanto a producto terminado y producto en proceso de fabricación. Este tema va muy de la mano con el procedimiento de costos del área contable, porque se utiliza como herramienta útil para mejorar los resultados económicos para toma de decisiones financieras en las empresas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen')


        .row
          .col-md-6.mb-4.mb-md-0
            p #[b #[i Software] de gestión de inventario]

            p Este se apalanca principalmente de la tecnología en cuanto a programas ofimáticos hablamos, la mayoría están interconectados con #[i softwares] contables dado que se articulan y hacen más fácil el análisis de costos y análisis financieros que son de innegable utilidad en todas las organizaciones, por otro lado, estos también son cada vez más flexibles y articulables con tecnologías como: códigos de barras, códigos QR, tecnología RFID.

            p Los #[i softwares] como programas de control más avanzados en el siglo XXI son los #[b ERP] #[i (Enterprise Resource Planning)] por sus siglas en inglés, como sistemas de planificación de recursos empresariales que integran varios módulos que corresponden a varias áreas de las empresas y los comunica entre ellas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')
              
        .row
          .col-md-6.mb-4.mb-md-0
            p #[b Lotes de producción y su trazabilidad]

            p Es una herramienta de control en la producción que parte de la clasificación de la materia prima, para permitir dar visibilidad de cada etapa de elaboración del producto, permitiendo a organizaciones que por sus características ya sean de producción en cuanto a su naturaleza o por sus grandes cantidades de rotación de inventarios o también por requisitos legales para el caso de medicamentos y alimentos, un sistema comúnmente utilizado es el de los lotes de producción que consta en realizar una numeración en lotes a unas cantidades de productos limitados y que mantengan una información de vital importancia como pueden ser fecha y hora de producción, planta de producción, turno de producción, número de unidades en el lote, además de mucha más información que resultaría útil para realizar trazabilidad del producto, para la logística de entrega al cliente final y llevar a cabo logística inversa en las organizaciones, si así se amerita el caso.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')
              
        


    separador
    
    #t_1_3

    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.3  Características

    .row
      p Después de conocer las herramientas más utilizadas en el sector real, ahora es importante resaltar las características más relevantes del uso adecuado de estas, según la necesidad de cada industria:

    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img11.png", alt="alt")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="El control inmediato de los inventarios")
            .col-lg-12.col-md-6.mb-4.mb-md-0
              p Las herramientas operativas intervienen en las organizaciones con el fin de facilitar la gestión de los inventarios de una manera práctica, ágil, segura, económica, con fines de contribuir a la planeación estratégica de las organizaciones, porque son instrumentos de información que ayudan a la toma de decisiones de la empresa en lo que respecta a la búsqueda continua de ventajas competitivas en el mercado donde se encuentren sus clientes.

          .row(titulo="El poder de la información")
            .col-lg-12.col-md-6.mb-4.mb-md-0
              p Las herramientas deben ofrecer información necesaria para realizar análisis de la situación actual de la bodega de inventarios, lo cual nos permitirá tomar decisiones expeditas para lograr el balance de los niveles óptimos de mercancías o materias primas o insumos necesarios para una posible respuesta ante requerimientos del mercado o de un cliente específico.

          .row(titulo="Estandarización")
            .col-lg-12.col-md-6.mb-4.mb-md-0
              p Los procesos de estandarización se pueden lograr de una manera más sencilla cuando se cuentan con herramientas para la gestión de inventarios, ya que nos permiten diseñar procesos eficientes y fáciles para los involucrados y así evitar errores en despachos y subprocesos logísticos. Otra ventaja de la estandarización es el uso eficiente de los recursos, disminución de costos y el uso de nuevas tecnologías que aumentan la productividad en las organizaciones.

          .row(titulo="Reducción de reprocesos")
            .col-lg-12.col-md-6.mb-4.mb-md-0
              p Es otra característica que nos ofrece las herramientas de seguimiento de inventarios ya que facilitan el control y permiten optimizar los procesos al interior de las organizaciones, esto se da cuando se accede a información de las posibles causas de errores, para así tomar acciones de mejoras que reduzcan la perdida de recursos, por mal manejo de inventarios y malos manejos logísticos. Todo con el fin de optimizar el tiempo de horas hombre, dar respuesta de envíos o despachos no conformes a los clientes y la toma de decisiones estratégicas que sumen a la ventaja competitiva de cada empresa para seguir innovando en el mercado.

          
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
