<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='Texto que describa la imagen')  
      .col-lg-10
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán los aspectos generales y claves de la planeación estratégica de las organizaciones; en concreto, acciones de análisis y control de inventarios para dar respuesta a la demanda del mercado.

        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8rU8mZMe5dw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
