<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-5
        .col-12.ps-3(style="border-left: 10px solid #39A900;") 
          h3.mb-1 Análisis financiero
          p.mb-0 
            | Síntesis:           
            | elaboración e interpretación de estados financieros.
      p.mt-5 A continuación, se presenta una síntesis de la temática estudiada por el componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El diagrama presenta la estructura temática del componente Elaboración e interpretación de estados financieros, organizada en cinco ejes principales. Inicia con los fundamentos financieros y normativos, continúa con la estructura contable y la elaboración de estados financieros básicos, incorpora el procesamiento digital de la información financiera, desarrolla los métodos de análisis vertical y horizontal, y finaliza con indicadores financieros, diagnóstico e informe. En conjunto, muestra una ruta progresiva que va desde la comprensión de los conceptos contables hasta la interpretación de resultados para apoyar la toma de decisiones empresariales.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
