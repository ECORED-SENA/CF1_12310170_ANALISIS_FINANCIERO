<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Procesamiento y visualización de información financiera
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las herramientas digitales facilitan la organización, cálculo, validación y presentación de información financiera. Las hojas electrónicas permiten estructurar datos y aplicar fórmulas, mientras que Power BI ayuda a crear informes visuales y tableros para analizar tendencias, variaciones y resultados de forma comprensible. (Microsoft Learn, 2026)
      
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Organización de datos financieros en hoja electrónica	
      p(data-aos="fade-left") La información financiera debe organizarse en tablas claras, comparables y uniformes, separando los datos originales de los cálculos. Esta estructura facilita revisar fórmulas, evitar errores y preparar análisis vertical, horizontal e indicadores financieros. La siguiente tabla presenta una forma de organizar la información:
      .row.bg-fondo-2.mt-5(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 9.
                  span  Estructura básica para organizar datos financieros
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Cuenta
                        th(style="width: 20%") Grupo financiero
                        th(style="width: 15%") Año 1
                        th(style="width: 15%") Año 2
                        th(style="width: 30%") Observación
                    tbody
                      tr
                        td Caja y bancos
                        td Activo corriente
                        td $ 12.000.000
                        td $ 15.000.000
                        td Aumento de efectivo
                      tr
                        td Cuentas por cobrar
                        td Activo corriente
                        td $ 20.000.000
                        td $ 28.000.000
                        td Revisar cartera
                      tr
                        td Inventarios
                        td Activo corriente
                        td $ 35.000.000
                        td $ 40.000.000
                        td Mayor inversión en mercancía
                      tr
                        td Proveedores
                        td Pasivo corriente
                        td $ 18.000.000
                        td $ 24.000.000
                        td Aumento de obligaciones
                      tr
                        td Ventas
                        td Ingresos
                        td $ 90.000.000
                        td $ 110.000.000
                        td Crecimiento de ingresos
                      tr
                        td Costo de ventas
                        td Costo
                        td $ 54.000.000
                        td $ 70.000.000
                        td Revisar margen
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Fórmulas básicas para cálculos financieros
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-13.d-flex.align-items-center.p-4
          p.mb-0 Las fórmulas permiten realizar cálculos automáticos para sumar cuentas, calcular diferencias y determinar porcentajes en el análisis financiero. Su aplicación es clave en el análisis vertical y horizontal, siempre que se identifique correctamente la base de comparación. Estas, se resumen a continuación:
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img2.png', alt='', style="object-fit: cover;")      
      .row.bg-fondo-2.mt-5(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 10.
                  span  Fórmulas básicas para cálculos financieros
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Cálculo
                        th(style="width: 40%") Fórmula financiera
                        th(style="width: 40%") Aplicación
                    tbody
                      tr
                        td Total, de cuentas
                        td Suma de valores
                        td Total, activo, total pasivo, total ingresos o gastos
                      tr
                        td Participación porcentual
                        td Cuenta / Total × 100
                        td Análisis vertical
                      tr
                        td Variación absoluta
                        td Valor periodo actual - Valor periodo anterior
                        td Cambio en pesos entre dos periodos
                      tr
                        td Variación relativa
                        td Variación absoluta / Valor periodo anterior × 100
                        td Análisis horizontal
                      tr
                        td Resultado del periodo
                        td Ingresos - Costos - Gastos
                        td Utilidad o pérdida
                      tr
                        td Diferencia de control
                        td Total, activo - Pasivo - Patrimonio
                        td Verificación de la ecuación contable
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Tablas comparativas, gráficos y tableros	
      p(data-aos="fade-left") Las tablas comparativas, gráficos y tableros facilitan el análisis financiero al presentar variaciones, tendencias e indicadores de forma clara. Estas herramientas apoyan la interpretación de resultados, permiten observar comportamientos relevantes y contribuyen a la toma de decisiones empresariales. La tabla siguiente, indica cómo organizar información para calcular variaciones entre dos periodos.
      .row.bg-fondo-2.mt-5(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 11.
                  span  Tabla comparativa para preparar análisis financiero
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Cuenta
                        th(style="width: 20%") Año 1
                        th(style="width: 15%") Año 2
                        th(style="width: 15%") Variación absoluta
                        th(style="width: 30%") Variación relativa
                    tbody
                      tr
                        td Ventas
                        td $ 90.000.000
                        td $ 110.000.000
                        td $ 20.000.000
                        td 22,2 %
                      tr
                        td Costo de ventas
                        td $ 54.000.000
                        td $ 70.000.000
                        td $ 16.000.000
                        td 29,6 %
                      tr
                        td Gastos operacionales
                        td $ 20.000.000
                        td $ 24.000.000
                        td $ 4.000.000
                        td 20,0 %
                      tr
                        td Utilidad neta
                        td $ 16.000.000
                        td $ 16.000.000
                        td $ 0
                        td 0,0 %

      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Revisión de fórmulas y consistencia de datos	
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 Antes de interpretar resultados, se deben validar fórmulas, datos, totales, periodos y clasificaciones. Esta revisión reduce errores, evita interpretar cifras equivocadas y garantiza información confiable para avanzar al análisis financiero. La tabla siguiente contiene la lista de revisión para hojas electrónicas financieras.
      .row.bg-fondo-2.mt-5(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 12.
                  span  Lista de revisión para hojas electrónicas financieras
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Aspecto por revisar
                        th(style="width: 60%") Pregunta de control
                        th(style="width: 20%") Cumple
                    tbody
                      tr
                        td Periodos
                        td ¿Las cifras corresponden a los periodos que se van a comparar?
                        td Sí / No
                      tr
                        td Cuentas
                        td ¿Las cuentas están clasificadas en el grupo financiero correcto?
                        td Sí / No
                      tr
                        td Fórmulas
                        td ¿Las fórmulas toman el rango completo de datos?
                        td Sí / No
                      tr
                        td Totales
                        td ¿Los subtotales coinciden con los totales del estado financiero?
                        td Sí / No
                      tr
                        td Porcentajes
                        td ¿Los porcentajes fueron calculados sobre la base correcta?
                        td Sí / No
                      tr
                        td Duplicidades
                        td ¿No existen cuentas repetidas en el cálculo?
                        td Sí / No
                      tr
                        td Formato
                        td ¿Las cifras están expresadas en la misma moneda y unidad?
                        td Sí / No
                      tr
                        td Observaciones
                        td ¿Las variaciones relevantes tienen explicación inicial?
                        td Sí / No
      .row.mb-5.justify-content-center.align-items-center.bg-color-4.p-4
        .row
          .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t3/img3.png' style="width: 500px").m-auto
          .col-12.col-lg-7.order-2.order-lg-1.p-4(data-aos="fade-right")
            p A manera de aplicación práctica, se presenta el siguiente ejemplo:
            .row.bg-color-11.p-4
              p.fw-bold Ejemplo:
              p Una empresa comercial organiza en hoja electrónica su estado de resultados de dos años para identificar cambios en ventas, costos, gastos y utilidad. 
              p La siguiente tabla refleja el cálculo de variaciones absolutas y relativas a partir de cifras comparativas.
        .row.justify-content-center.mb-5
          .col-md-auto.col-lg-10
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 13.
              span  Ejemplo de procesamiento de información financiera
            .tabla-a
              table
                thead
                  tr
                    th(style="width: 20%") Concepto
                    th(style="width: 10%") Año 1
                    th(style="width: 10%") Año 2
                    th(style="width: 20%") Variación absoluta
                    th(style="width: 20%") Variación relativa
                tbody
                  tr
                    td Ventas
                    td $ 90.000.000
                    td $ 110.000.000
                    td $ 20.000.000
                    td 22,2 %
                  tr
                    td Costo de ventas
                    td $ 54.000.000
                    td $ 70.000.000
                    td $ 16.000.000
                    td 29,6 %
                  tr
                    td Utilidad bruta
                    td $ 36.000.000
                    td $ 40.000.000
                    td $ 4.000.000
                    td 11,1 %
                  tr
                    td Gastos operacionales
                    td $ 20.000.000
                    td $ 24.000.000
                    td $ 4.000.000
                    td 20,0 %
                  tr
                    td Utilidad neta
                    td $ 16.000.000
                    td $ 16.000.000
                    td $ 0
                    td 0,0 %
      .row.mb-10
        .col-lg-5.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t3/img4.png", data-aos="zoom-in" style="width: 500px")
        .col-lg-7
          .row.align-items-start.mb-3(data-aos="fade-left")
            .col-lg
              p.mb-0.bg-color-4.p-4 Aunque las ventas aumentaron 22,2 %, el costo de ventas creció 29,6 %. Esto indica que el crecimiento de los ingresos no se reflejó en una mayor utilidad neta, porque los costos aumentaron en mayor proporción. Esta lectura inicial servirá como base para el análisis financiero del siguiente capítulo.
          .row.align-items-center.mb-10(data-aos="fade-left")
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/temas/bg/lineas.svg", style="width: 90px").mx-auto
            .col-lg
              p(data-aos="fade-left") Las hojas electrónicas y herramientas de visualización apoyan el análisis financiero, siempre que los datos sean confiables, las cuentas estén bien clasificadas y las fórmulas hayan sido revisadas.
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
