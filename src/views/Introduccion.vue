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
        p Estimado aprendiz, bienvenido a este componente formativo, el cual servirá como instrumento de información relacionado con el tema de #[b Seguimiento de inventario y ciclos de abastecimiento], este contribuirá a la planeación estratégica de las organizaciones, ya que cuenta con el análisis de la situación actual del control de inventarios para dar respuesta a la demanda del mercado.
    
    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-7
        p Para la elaboración de este componente, se abordaron varios autores conocidos en seguimiento de inventarios y ciclos de abastecimiento, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta temática. El conocimiento es social, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos aprendices y lectores en general que estén interesados en aprender asuntos básicos de control de inventario y ciclos de abastecimiento.

        .cajonIntro.bgr-tarjeta-intro.p-4
            p Lo invitamos a que visualice el video introductorio que se encuentra a continuación, donde podrá conocer de manera general todos los temas que serán desarrollados en este componente. #[b ¡Muchos éxitos!]

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/introduccion/img2.svg', alt='Texto que describa la imagen') 
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
