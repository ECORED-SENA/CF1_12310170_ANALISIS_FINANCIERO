<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El análisis financiero hace parte de la vida cotidiana de las empresas y también de muchas decisiones personales: controlar ingresos y gastos, revisar deudas, proyectar pagos, comparar resultados y decidir si es posible comprar, invertir, ahorrar o financiarse. En el contexto empresarial, esta información permite comprender si el negocio cuenta con recursos suficientes para operar, si sus ventas generan utilidad, si los costos y gastos están controlados y si las obligaciones pueden cumplirse oportunamente.
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/intro/img2.png' style="width: 500px").m-auto
        .col-12.col-lg-7.order-2.order-lg-2.p-4(data-aos="fade-right")
          p Elaborar e interpretar estados financieros básicos es una capacidad esencial para transformar los datos contables en información útil. El estado de situación financiera permite reconocer qué posee la empresa, cuánto debe y cuál es su patrimonio; mientras que el estado de resultados refleja si la operación genera ganancias o pérdidas. A partir de esta información se pueden identificar variaciones, tendencias, fortalezas y riesgos que afectan la liquidez, el endeudamiento, la rentabilidad, la cartera, los inventarios y la gestión de costos.
          p.bg-color-2.p-4 La importancia de este proceso está en que facilita decisiones más objetivas y menos intuitivas. Al aplicar análisis vertical, análisis horizontal e indicadores financieros, es posible diagnosticar la situación de la empresa, sustentar conclusiones y proponer recomendaciones de mejora. De esta manera, la información financiera deja de ser solo un requisito contable y se convierte en una herramienta práctica para orientar la operación, prevenir problemas y fortalecer la sostenibilidad del negocio.




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
