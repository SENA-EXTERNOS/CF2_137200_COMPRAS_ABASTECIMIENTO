<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ciclo de abastecimiento

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-7
        p Si uno de los principales objetivos de las organizaciones es generar valor en la industria donde se encuentren, es claro que el tema de los ciclos de abastecimiento, equivalen a todas las actividades que realizan las empresas frente a la consecución, compras, recepción, gestión de insumos, almacenamiento y aprovisionamiento de los bienes necesarios para lograr optimizar los procesos productivos que cubran las exigencias crecientes de los mercados a atender.  

        p Para lograr cumplir al cliente con sus necesidades, es necesario tener la claridad de las 4 fases generales del proceso PHVA a realizar para el debido control de inventarios:

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Texto que describa la imagen') 

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-2.col-xs-1
      .col-lg-8.col-xs-10
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen')
      .col-lg-2.col-xs-1

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-9
        TabsA.color-primario.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="La primera fase")
            h4 La primera fase
            p La generación de la necesidad que proviene del área de mercadeo, ventas, innovación, dirección general, todas canalizadas desde el área de producción y esta se transfiere al departamento de compras para que este departamento reaccione y justifique la necesidad.

          .tarjeta.clr-paleYellow.p-4(titulo="La segunda fase")
            h4 La segunda fase
            p Corresponde al departamento de compras donde inicia con la evaluación y selección de posibles proveedores teniendo en cuenta unos aspectos técnicos (precio, calidad, garantía, tiempos de entrega, etc.) que se deben tener en cuenta para cada necesidad y termina en la recepción de esa orden de compra previa comprobación de los aspectos mencionados anteriormente.

          .tarjeta.clr-paleYellow.p-4(titulo="La tercera fase")
            h4 La tercera fase
            p Inicia con un ingreso de compras u orden de compras que contiene unos plazos de entrega además de los aspectos requeridos por el cliente para dar cumplimiento al aspecto contractual y de paso legal, para así evitar controversias comerciales y la correcta logística de entrega, fase que termina una vez reciba el cliente, en el lugar indicado y en las condiciones acordadas.
    
          .tarjeta.clr-paleYellow.p-4(titulo="La cuarta fase")
            h4 La cuarta fase
            p Tiene que ver con las operaciones logísticas que realiza el cliente en su centro de distribución, desde la recepción y descargue correcto para el almacenamiento en sus instalaciones como fase final del ciclo de abastecimiento.
    
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')
        

    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5
      h2 2.1  Niveles de #[i stock]

    .row.justify-content-around.align-items-center.mt-5.mb-5

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen') 

      .col-lg-8
        p Para hablar de niveles de #[i stock] primero hay que entender de una manera sencilla el concepto de #[i stock]: ¿stock como concepto significa provisión, pero para que proveer? El objetivo de tener o contar con #[i stock] es: disponer de la manera más económica, oportuna, necesaria y precisa de un bien para poder transformarlo, comercializarlo o distribuirlo. Esto generará una ventaja competitiva en el concepto de just in time (justo a tiempo).

        figure
          img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen')
    
    .row
      p Por lo general se utilizan tres tipos de #[b #[i stocks:]]

      .col-lg-2.col-xs-1
      .col-lg-8.col-xs-10
        figure
          img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen') 
      .col-lg-2.col-xs-1

    .row.mt-5

      p A continuación, se describen los niveles de #[i Stocks]:

      ul.lista-ul--color
        li 
          i.fas.fa-angle-right
          | #[b #[i Stocks] según su función]

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img7.png' alt='AvatarTop')
        h2.text-center #[i Stock] de ciclo
        p.text-center Son usados para hacer frente a una demanda constante de un bien en una sociedad, para ello se crea un #[i stock] que se va agotando en el transcurso del tiempo.

      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img8.png' alt='AvatarTop')
        h2.text-center #[i Stock] de seguridad
        p.text-center Son los que nos permiten protegernos frente a una situación anómala que pueda generar escasez de una materia prima o insumo vital en un proceso productivo.
      
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img9.png' alt='AvatarTop')
        h2.text-center #[i Stock] por anticipación
        p.text-center Se trata de aprovisionamiento de unas existencias con anterioridad a una época reconocida por grandes ventas de ese bien que se almacena, o a una promoción favorable para la organización.

      .tarjeta.color-acento-botocontenidones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img19.png' alt='AvatarTop')
        h2.text-center #[i Stock] estacional
        p.text-center Se da para hacer frente a un aumento esperado de las ventas en una temporada.

      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img20.png' alt='AvatarTop')
        h2.text-center #[i Stock] de transito
        p.text-center Este #[i stock] se origina por la necesidad de auto proveerse de cierta materia prima o insumo como respuesta a la demora de los proveedores para despachar materias o materias primas necesarias para su producción o comercialización.
      
    .row.mt-5
      ul.lista-ul--color
        li 
          i.fas.fa-angle-right
          | #[b #[i Stocks] según su utilización en el proceso productivo:]

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img10.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 #[i Stock] de materias primas
            p.mb-0 Son las cantidades necesarias para la producción de un bien en un determinado tiempo: días, meses, años y es indispensable establecer para no generar cuellos de botella en procesos productivos y avances en logística.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img11.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 #[i Stock] de productos semi terminados o en proceso
            p.mb-0 Son los inventarios que corresponden a productos que aún no han sido culminados en su proceso productivo por distintos motivos y que se tienen que controlar por motivos de producción, logísticos y contables.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img12.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 #[i Stocks] de productos terminados
            p.mb-0 Son todos aquellos productos que ya han culminado su proceso productivo y que están disponibles para ser comercializados, almacenados o distribuidos a clientes finales.

    .row.mt-5
      ul.lista-ul--color
        li 
          i.fas.fa-angle-right
          | #[b #[i Stocks] según el criterio operativo:]

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-9
        TabsA.color-primario.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Stock Optimo")
            h4 #[i Stock] Optimo
            p Este #[i Stock] obedece al estudio de las cantidades optimas de producto que debe ser almacenado sin que su almacenaje se convierta en una carga financiera para la organización partiendo de la base de los histogramas de ventas de producto en el tiempo.

          .tarjeta.clr-paleYellow.p-4(titulo="Stock cero")
            h4 #[i Stock] cero
            p Este concepto de #[i Stock] corresponde precisamente a no tener #[i Stock] disponible obedeciendo a características de la organización u estrategia de producción en la cual solo se trabaja sobre pedidos específicos u ordenes de trabajo.

          .tarjeta.clr-paleYellow.p-4(titulo="Stock físico")
            h4 #[i Stock] físico
            p Es la cantidad disponible materialmente en un momento determinada en un almacén, el cual siempre debe ser positivo numéricamente hablando.

          .tarjeta.clr-paleYellow.p-4(titulo="Stock neto")
            h4 #[i Stock] neto
            p Este corresponde a la diferencia entre el #[i Stock] físico y la demanda insatisfecha de un producto, este se puede dar en términos numéricos negativos lo cual nos confirma demandas insatisfechas.

          .tarjeta.clr-paleYellow.p-4(titulo="Stock disponible")
            h4 #[i Stock] disponible
            p Corresponde al #[i Stock] físico, más los pedidos hechos a proveedores de ese producto menos la demanda insatisfecha de dicho producto.


      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img13.png', alt='Texto que describa la imagen')

    separador

    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5
      h2 2.2  Rotura de #[i stock]

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img14.png', alt='Texto que describa la imagen')
      .col-lg-8
        p El concepto claro de la rotura del #[i stock] en procesos de almacenamiento y producción, corresponde a momentos no deseados dentro de una actividad productiva y a aquellos momentos en que una organización no tiene #[i stock] para poder responder a la demanda de sus clientes en el mercado que se ve traducido en costos innecesarios de no venta total o parcial de dicho bien.  Escenario indeseado ya que se abre la posibilidad a que la competencia tome esta desventaja como oportunidad y fidelice el cliente que ya había sido de alguna manera capitalizado por la empresa, esta situación puede generar gastos no planeados al tratar de reponer de forma urgente un producto en estas condiciones.

        .cajonIntro.bgr-tarjeta-intro.p-4
            p Llevando el concepto al análisis de la situación, esta se puede dar por motivos externos y fortuitos que se pueden salir del análisis de abastecimiento, estas pueden ser fallas en el transporte o condiciones climatológicas u otras más extremas, como conflictos bélicos y cuellos de botellas en procesos de importación de materias primas o insumos, lo que no se puede tolerar es que la falla sea interna por falta de gestión en almacenes o en procesos logísticos internos que se suponen deben funcionar tal cual reloj suizo.


    .row.justify-content-center.mb-5

      p #[b Existen dos casos de rotura de #[i stock]]

      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Diferida")
            .col-lg-12.col-md-6.mb-4.mb-md-0
              p Se da cuando se realizan pedidos y no tenemos posibilidad de cumplir por tener stock insuficiente y no se puede entregar el pedido completo, aquí se generan costos difícilmente medibles y cuantificables generando consecuencias negativas, como entregas a destiempo, la insatisfacción de los clientes quienes confiaron en la organización, además de generar perdida en la imagen de la empresa.

          .row(titulo="Perdida")
            .col-lg-12.col-md-6.mb-4.mb-md-0
              p Ocurre cuando definitivamente no se puede cumplir con un pedido generado por un cliente por falta de stock u stock negativo, ahí precisamente se genera el coste de rotura que se da por la mencionada incapacidad de cumplir con un pedido.

      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img15.png", alt="alt")
      

    separador
    
    #t_2_3

    .titulo-segundo.color-acento-contenido.mt-5
      h2 2.3  Cantidad económica a pedir

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-8
        p En la gestión de inventarios, no todos los esfuerzos van concentrados en las salidas de productos terminados. Las entradas por concepto de reaprovisionamiento son fundamentales para el funcionamiento óptimo de toda gestión logística y de inventarios, para ello también existen unas metodologías que deben ser tenidas en cuenta para controlar el proceso de inventarios en niveles deseados para la operatividad del proceso productivo.

        .cajonIntro.bgr-tarjeta-intro.p-4
            p Para ser más eficiente el proceso, se generan unas reglas para la gestión de los inventarios que permiten generar distintas alarmas que nos indique cuando el inventario se debería reaprovisionar (nivel de disparo: consiste en identificar los niveles mínimos en los cuales se deben reaprovisionar una mercancía, materia prima o insumo) y crear nuevas órdenes de compra que den respuesta a los niveles mínimos y máximos de inventarios que se requieren para evitar rotura de stock y quizá una desafortunada parada de producción o incumplimientos de entrega con los clientes.
            
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img16.png', alt='Texto que describa la imagen')

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-3
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img17.png', alt='Texto que describa la imagen')
      .col-3

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video 


    .tarjeta.color-primario.p-3.mb-5.mt-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/img18.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Ejemplo del Modelo Wilson
              p.text-small Si desea ver un ejemplo de cómo se aplica el modelo Wilson, #[b haga clic en descargar para ver el Anexo.] 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_Ejemplo_Modelo_Wilson.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    

    

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

<style lang="sass"></style>
