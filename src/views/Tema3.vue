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
        p.mb-0 Si se cuenta con herramientas que facilitan el control y seguimiento de los inventarios en los ciclos de abastecimiento en una empresa, se pueden reducir costos en la operación, y todo al final se convierte en información, que se traduce en datos claves que deben ser valorados cuantitativamente, por lo tanto, los indicadores de gestión de inventarios, evalúan la disponibilidad del #[i Stock] real, teniendo a la mano datos como el promedio de materias primas que se almacena en bodega, el nivel de inventario más óptimo que se requiere para el cumplimiento de metas de venta, saber el promedio de pérdidas de #[i Stock] que se tiene cada periodo de tiempo, entre tantas necesidades de información que cada tipo de empresa requiera, se podrán medir a través de indicadores de gestión de inventarios.

        

    #t_3_1

    .titulo-segundo.color-acento-contenido.mt-5
      h2 3.1  Tipos de indicadores de gestión de inventarios

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
          img(src='@/assets/curso/temas/tema3/img3.png', alt='Texto que describa la imagen') 
      .col-lg-3.col-xs-1

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-2.col-xs-1
      .col-lg-8.col-xs-10
        .cajonIntro.bgr-tarjeta-intro.p-4
          .row.justify-content-around.align-items-center.mt-5.mb-5
            .col-lg-3.col-xs-4
              figure
                img(src='@/assets/curso/temas/tema3/img4.png', alt='Texto que describa la imagen') 
            .col-lg-9.col-xs-4
              p #[b Los indicadores más utilizados en la industria son:]
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
      .col-lg-2.col-xs-1

    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/img18.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Cálculo de índices de gestión de inventarios
              p.text-small A continuación, podrá encontrar un anexo acerca del cálculo de índices de gestión de inventarios.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_4_Calculo_indices_gestion_inventarios.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    

    separador

    #t_3_2

    .titulo-segundo.color-acento-contenido.mt-5
      h2 3.2  Rotación de inventarios

    .row
      p Según (Díaz, 2017). En la cadena de abastecimiento de una empresa, los inventarios siempre deben estar renovándose, esta frecuencia es importante porque mide la calidad de la gestión de los abastecimientos, de sus inventarios y de las prácticas de compra en una empresa en un periodo de tiempo.  

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-8
        p Esta información es generalizada por sectores económicos, por ejemplo la tendencia de las empresas fabricantes, es que suelan tener índices de rotación de sus productos entre 4 y 5 veces al año, los hipermercados pueden llegar a tener 25 y los grandes almacenes llegan a tener hasta 8 rotaciones al año (Mendelson, 2015), convirtiéndose en un factor sumamente importante para la empresa y es el que más envergadura de información recoge porque mide a la empresa en el sector en el cual se desempeñó, además dice qué tan rentable es el ejercicio de vender sus inventarios de allí nacen también conceptos de empresas comercializadoras a bajo costo que prefieren mantener bajos costos y bajas utilidades y obtienen sus ganancias de la rotación de inventarios, (comprar, vender barato, comprar nuevamente y así sucesivamente). 
        .cajonIntro.bgr-tarjeta-intro.p-4
            p Un ejemplo de empresas que basan sus utilidades en la rotación de inventarios son las empresas de bajo costo que prefieren ganar centavos de dólar en cada unidad vendida y vender múltiples veces en el mes un ítem frente a otras empresas que mantiene un margen de utilidad tradicional que solo rota la mercancía pocas veces en el mes.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img5.png', alt='Texto que describa la imagen') 

    .row
      .col-lg-2.col-xs-1
      .col-lg-8.col-xs-10
        figure
          img(src='@/assets/curso/temas/tema3/img6.png', alt='Texto que describa la imagen') 
      .col-lg-2.col-xs-1
      

    separador
    
    #t_3_3

    .titulo-segundo.color-acento-contenido.mt-5
      h2 3.3  Elaboración de informes de gestión

    .row
      p Los informes de gestión deben ser un insumo resultado de la gestión de los inventarios durante un periodo de tiempo y deben reflejar fidedignamente el estado real del inventario de una organización con el único fin de informar y ser entrada para la toma de decisiones en este aspecto tan importante de la organización.   

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img7.png', alt='Texto que describa la imagen') 
      .col-lg-8
        p En la actualidad se usan los tableros de indicadores, llamados KPI, estas son siglas de #[i Key Performance Indicators], que se traduce al español, como: #[b “Indicadores Clave de Desempeño”]. Donde en una sola visual se recopilan todos los indicadores y se clasifican en informativos de colores como en verde, el amarillo, el naranja y el rojo, siendo el amarillo y el rojo los indicadores más importantes porque suelen indicar averías o situaciones importantes y hasta graves en la empresa.

        p En un solo tablero se podrá visualizar rendimiento operativo para evaluar mejor lo que hemos avanzado y lo que nos queda por hacer para alcanzar nuestros objetivos como herramienta de informes de gestión de indicadores de gestión de inventarios.

        .cajonIntro.bgr-tarjeta-intro.p-4
            p #[span.text-bold2 ●] Los KPI son similares a los tableros de mando balance #[i score card], se usan para el análisis de los indicadores que son susceptibles de medir en la organización, como ya han sido mencionados son los indicadores más relevantes porque hay muchos en la gestión de inventarios.
      
    .row
      .col-lg-2.col-sm-4
        figure
          img(src='@/assets/curso/temas/tema3/img8.png', alt='Texto que describa la imagen') 
      .col-lg-10.col-sm-8
        p #[b Aprendiz,] ha culminado el estudio de las temáticas correspondientes al componente Seguimiento de inventario y ciclos de abastecimiento, lo invitamos a que visualice la síntesis para que recuerde cada uno temas vistos y a realizar la actividad didáctica para que retroalimente todo lo aprendido.  
    
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
