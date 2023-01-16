<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Indicadores de gestión de inventarios

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img2(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto2.p-4
        p.mb-0 Es fundamental, contar con herramientas que faciliten el control y el seguimiento de los inventarios, durante los ciclos de abastecimiento en una empresa, porque su aprovechamiento puede ayudar a reducir los costos de la operación. Finalmente, todo se convierte en información que se traduce en datos claves que deben ser valorados cuantitativamente.

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-lg-8
        .cajonIntro.bgr-tarjeta-intro.p-4
          p Los indicadores de gestión de inventarios, permiten evaluar la disponibilidad de un stock real, teniendo a la mano, información como:
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | El promedio de materias primas que se almacena en la bodega.
            li 
              i.fas.fa-check
              | El nivel óptimo de inventario que se requiere para el cumplimiento de las metas en las ventas.

            li 
              i.fas.fa-check
              | Conocimiento del promedio de las pérdidas de stock que se presenta cada cierto periodo de tiempo.

        
    .row.mt-3
      .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/li.svg', alt='')
          .list__txt
            h3.mb-0.tv Tipos de indicadores de gestión de inventarios

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img2.png', alt='Texto que describa la imagen') 

      .col-lg-10
        p La administración de inventarios repercute en la operación que se realiza en el negocio y sobre todo a negocios que se dedican a comercializar muchos productos y a muchos clientes, como son las empresas de #[i retail], que deben trabajar con indicadores de gestión de inventarios que estén alineados con el cumplimiento de las metas empresariales, alguna de las más frecuentes son las siguientes:
      
    
    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-3.col-xs-1
      .col-lg-6.col-xs-10
        figure
          img(src='@/assets/curso/temas/tema3/img2.svg', alt='Texto que describa la imagen') 
      .col-lg-3.col-xs-1

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-lg-8
        .cajonIntro.bgr-tarjeta-intro.p-4
          .row.justify-content-around.align-items-center.mt-5.mb-5
            .col-lg-3.col-xs-4
              figure
                img(src='@/assets/curso/temas/tema3/img4.png', alt='Texto que describa la imagen') 
            .col-lg-9.col-xs-4
              p Los indicadores más utilizados para medir la gestión logística del almacén, son:
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Índice de rotación
                li 
                  i.fas.fa-check
                  | Índice de cobertura
                li 
                  i.fas.fa-check
                  | Índice de exactitud del inventario
                li 
                  i.fas.fa-check
                  | Índice de regularización

    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/img18.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Cálculo de índices de gestión de inventarios
              p.text-small Para ampliar sus conocimientos sobre los cálculos de índices en la gestión de los inventarios, profundice en el anexo 2. Cálculo de índices de gestión de inventarios.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    

    .row.mt-3
      .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/li.svg', alt='')
          .list__txt
            h3.mb-0.tv Rotación de inventarios

    .row.justify-content-center
      .col-lg-10
        p En la cadena de abastecimiento de una empresa, los inventarios deben renovarse permanentemente; esta frecuencia es importante porque mide la calidad de la gestión de los suministros, de sus inventarios y de las prácticas de compra, en una empresa, por un periodo de tiempo.
        p.text-end #[b Díaz, 2017]

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-8
        p Usualmente, esta información es generalizada por sectores económicos; la tendencia de las empresas productoras es que se acostumbre manejar índices de rotación (IR) de sus productos entre 4 y 5 veces al año; los hipermercados pueden llegar a tener 25 y los grandes almacenes, llegan a tener hasta 8 reabastecimientos al año. Cuanto más alta es la cantidad de rotación, es mejor para la empresa, porque esto indica un flujo constante de entradas y salidas de las mercancías. Esto se convierte en un factor sumamente importante para la empresa y es el que más amplitud de información alcanza, porque mide a la empresa en el sector en el cual se desempeña.

        .cajonIntro.bgr-tarjeta-intro.p-4
            p Algunas empresas comercializadoras, saben lo rentable que es vender sus inventarios; de este acto nacen también conceptos de empresas comercializadoras a bajo costo, que prefieren mantener bajos costos y bajas utilidades y obtienen sus ganancias de la rotación de los inventarios (comprar, vender barato, comprar nuevamente y así sucesivamente). 

        p Un ejemplo de empresas que basan sus utilidades en la rotación de inventarios son las empresas de bajo costo que prefieren ganar centavos de dólar en cada unidad vendida y vender múltiples veces en el mes un ítem, frente a otras empresas que mantiene un margen de utilidad tradicional que solo rota la mercancía pocas veces en el mes.
      
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img5.png', alt='Texto que describa la imagen') 

    .row.justify-content-center
      p #[b A continuación, un sencillo bosquejo de las rotaciones de inventario:]
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema3/img6.svg', alt='Texto que describa la imagen') 

      

    .row.mt-3
      .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema1/li.svg', alt='')
          .list__txt
            h3.mb-0.tv Elaboración de informes de gestión

    .row
      p Los informes de gestión se conocen como un insumo que resulta de la gestión de los inventarios, durante un periodo de tiempo, y deben reflejar fidedignamente el estado real del inventario de una organización, con el único fin de informar y aportar datos para la toma de decisiones.

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img7.png', alt='Texto que describa la imagen') 
      .col-lg-8
        p En la actualidad, existen diferentes dispositivos que ayudan en la gestión de los inventarios; entre ellos están los tableros de indicadores, llamados #[i Key Performance Indicators], Indicadores Clave de Desempeño (KPI), donde en una sola visual se recopilan todos los indicadores y se clasifican en informativos de colores (verde, amarillo, naranja y rojo), siendo el amarillo y el rojo los indicadores más importantes, porque suelen indicar averías o situaciones especiales y hasta graves en la empresa.

        p En un solo tablero se podrá visualizar el rendimiento operativo, para evaluar mejor lo que se ha avanzado y lo que queda por hacer y para alcanzar los objetivos.

        .cajonIntro.bgr-tarjeta-intro.p-4
            p Los KPI son similares a los tableros de mando balance score card. Se usan para el análisis de los indicadores que son susceptibles de medir, en la organización.

    .row
      .col-lg-2.col-sm-4
        figure
          img(src='@/assets/curso/temas/tema3/img8.png', alt='Texto que describa la imagen') 
      .col-lg-10.col-sm-8
        p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
        
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

<style lang="sass"></style>
